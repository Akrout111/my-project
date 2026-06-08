"use client";

import { ClerkProvider, useAuth as useClerkAuth } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { SafeAuthContext, SafeUserProvider } from "@/hooks/use-safe-auth";

/** Cookie name for custom auth token */
const AUTH_COOKIE_NAME = "auth_token";

/** Check if Clerk publishable key is properly configured */
function isClerkConfigured(): boolean {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return !!(key && key.startsWith("pk_") && !key.includes("placeholder"));
}

/** Set a cookie with the given name, value, and max-age (days) */
function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secure}`;
}

/** Delete a cookie by name */
function deleteCookie(name: string) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax${secure}`;
}

/**
 * ClerkAuthBridge — reads real Clerk auth state and provides it via SafeAuthContext.
 * Also fetches the user's role from the API.
 */
function ClerkAuthBridge({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn, userId } = useClerkAuth();
  const [fetchedRole, setFetchedRole] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<{ name: string | null; email: string | null; avatarUrl: string | null; phone: string | null }>({
    name: null, email: null, avatarUrl: null, phone: null,
  });

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !userId) return;

    let cancelled = false;

    fetch("/api/v1/users/me")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => {
        if (!cancelled && data?.data) {
          setFetchedRole(data.data.role);
          setUserInfo({
            name: data.data.name ?? null,
            email: data.data.email ?? null,
            avatarUrl: data.data.avatarUrl ?? null,
            phone: null,
          });
        }
      })
      .catch(() => {
        // Silently fail — fetchedRole stays null
      });

    return () => { cancelled = true; };
  }, [isLoaded, isSignedIn, userId]);

  const userRole = isSignedIn ? fetchedRole : null;

  return (
    <SafeAuthContext.Provider
      value={{
        isLoaded: isLoaded ?? false,
        isSignedIn: isSignedIn ?? false,
        userId: userId ?? null,
        userRole,
      }}
    >
      <SafeUserProvider value={userInfo}>
        {children}
      </SafeUserProvider>
    </SafeAuthContext.Provider>
  );
}

/**
 * CustomAuthBridge — handles JWT-based custom authentication.
 * Stores token in localStorage AND a cookie (for server-side access).
 * Provides auth state via SafeAuthContext.
 */
function CustomAuthBridge({ children }: { children: React.ReactNode }) {
  // Use ref to track if initial validation has been done
  const validatedRef = useRef(false);
  const [authState, setAuthState] = useState<{
    isLoaded: boolean;
    isSignedIn: boolean;
    userId: string | null;
    userRole: string | null;
  }>({
    isLoaded: false,
    isSignedIn: false,
    userId: null,
    userRole: null,
  });
  const [userInfo, setUserInfo] = useState<{ name: string | null; email: string | null; avatarUrl: string | null; phone: string | null }>({
    name: null, email: null, avatarUrl: null, phone: null,
  });

  // Validate stored token on mount
  useEffect(() => {
    if (validatedRef.current) return;
    validatedRef.current = true;

    let cancelled = false;
    let rafId: number | null = null;
    const abortController = new AbortController();

    const token = localStorage.getItem(AUTH_COOKIE_NAME);
    if (!token) {
      // No token — mark as loaded immediately
      rafId = requestAnimationFrame(() => {
        if (!cancelled) {
          setAuthState({ isLoaded: true, isSignedIn: false, userId: null, userRole: null });
        }
      });
      return () => {
        cancelled = true;
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    fetch("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
      signal: abortController.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Token invalid");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (data?.data) {
          setAuthState({
            isLoaded: true,
            isSignedIn: true,
            userId: data.data.id,
            userRole: data.data.role,
          });
          setUserInfo({
            name: data.data.name ?? null,
            email: data.data.email ?? null,
            avatarUrl: null,
            phone: null,
          });
          // Ensure cookie is set for server-side access
          setCookie(AUTH_COOKIE_NAME, token, 7);
        } else {
          localStorage.removeItem(AUTH_COOKIE_NAME);
          deleteCookie(AUTH_COOKIE_NAME);
          setAuthState({ isLoaded: true, isSignedIn: false, userId: null, userRole: null });
        }
      })
      .catch(() => {
        if (cancelled) return;
        localStorage.removeItem(AUTH_COOKIE_NAME);
        deleteCookie(AUTH_COOKIE_NAME);
        setAuthState({ isLoaded: true, isSignedIn: false, userId: null, userRole: null });
      });

    return () => {
      cancelled = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      abortController.abort();
    };
  }, []);

  /** Sign in with email/password */
  const signIn = useCallback(async (email: string, password: string) => {
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error?.message || "Sign in failed");
    }

    const { token, user } = data.data;
    // Store in both localStorage (client-side) and cookie (server-side)
    localStorage.setItem(AUTH_COOKIE_NAME, token);
    setCookie(AUTH_COOKIE_NAME, token, 7);
    setAuthState({
      isLoaded: true,
      isSignedIn: true,
      userId: user.id,
      userRole: user.role,
    });
    setUserInfo({
      name: user.name ?? null,
      email: user.email ?? null,
      avatarUrl: null,
      phone: null,
    });

    return user;
  }, []);

  /** Sign up with name/email/password */
  const signUp = useCallback(async (name: string, email: string, password: string, phone?: string) => {
    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, confirmPassword: password, phone: phone || "" }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error?.message || "Sign up failed");
    }

    const { token, user } = data.data;
    // Store in both localStorage (client-side) and cookie (server-side)
    localStorage.setItem(AUTH_COOKIE_NAME, token);
    setCookie(AUTH_COOKIE_NAME, token, 7);
    setAuthState({
      isLoaded: true,
      isSignedIn: true,
      userId: user.id,
      userRole: user.role,
    });
    setUserInfo({
      name: user.name ?? null,
      email: user.email ?? null,
      avatarUrl: null,
      phone: null,
    });

    return user;
  }, []);

  /** Sign out */
  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_COOKIE_NAME);
    deleteCookie(AUTH_COOKIE_NAME);
    setAuthState({
      isLoaded: true,
      isSignedIn: false,
      userId: null,
      userRole: null,
    });
    setUserInfo({ name: null, email: null, avatarUrl: null, phone: null });
  }, []);

  return (
    <SafeAuthContext.Provider
      value={{
        ...authState,
        signIn: isClerkConfigured() ? undefined : signIn,
        signUp: isClerkConfigured() ? undefined : signUp,
        signOut: isClerkConfigured() ? undefined : signOut,
      }}
    >
      <SafeUserProvider value={userInfo}>
        {children}
      </SafeUserProvider>
    </SafeAuthContext.Provider>
  );
}

/**
 * AuthProvider — wraps the app with the appropriate auth system.
 * Uses Clerk when keys are configured, otherwise falls back to custom JWT auth.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  if (isClerkConfigured()) {
    return (
      <ClerkProvider localization={arSA} afterSignOutUrl="/login">
        <ClerkAuthBridge>{children}</ClerkAuthBridge>
      </ClerkProvider>
    );
  }

  return <CustomAuthBridge>{children}</CustomAuthBridge>;
}

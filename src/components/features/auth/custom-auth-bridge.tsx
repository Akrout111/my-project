"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { SafeAuthContext, SafeUserProvider } from "@/hooks/use-safe-auth";
import { AUTH_COOKIE_NAME, isClerkConfigured, setCookie, deleteCookie } from "./auth-utils-client";

/**
 * CustomAuthBridge — handles JWT-based custom authentication.
 * Stores token in localStorage AND a cookie (for server-side access).
 * Provides auth state via SafeAuthContext.
 * Cookie max-age is 1 day to match JWT expiry.
 */
export function CustomAuthBridge({ children }: { children: React.ReactNode }) {
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
          // Ensure cookie is set for server-side access (1 day to match JWT expiry)
          setCookie(AUTH_COOKIE_NAME, token, 1);
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
    // Store in both localStorage (client-side) and cookie (server-side, 1 day to match JWT expiry)
    localStorage.setItem(AUTH_COOKIE_NAME, token);
    setCookie(AUTH_COOKIE_NAME, token, 1);
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
    // Store in both localStorage (client-side) and cookie (server-side, 1 day to match JWT expiry)
    localStorage.setItem(AUTH_COOKIE_NAME, token);
    setCookie(AUTH_COOKIE_NAME, token, 1);
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

"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
import React from "react";
import { ClerkAuthBridge } from "./clerk-auth-bridge";
import { CustomAuthBridge } from "./custom-auth-bridge";
import { isClerkConfigured } from "./auth-utils-client";

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

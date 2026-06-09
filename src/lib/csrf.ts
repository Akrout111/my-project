import Csrf from "csrf";

const csrf = new Csrf();

/**
 * Generate a CSRF token using the server-side JWT secret.
 */
export function generateCsrfToken(): string {
  const secret = process.env.JWT_SECRET!;
  return csrf.create(secret);
}

/**
 * Verify a CSRF token.
 */
export function verifyCsrfToken(token: string): boolean {
  try {
    const secret = process.env.JWT_SECRET!;
    return csrf.verify(secret, token);
  } catch {
    return false;
  }
}

# Task 1-critical-security: Fix Critical Security Issues

## Summary
Fixed 8 security issues across 8 files (C-01, C-02, C-03, C-04, H-11, H-12, M-11, M-19 + M-12).

## Changes Made

### C-01 + M-12: src/lib/auth.ts
- Removed insecure fallback: `process.env.JWT_SECRET || "kuwait-events-dev-secret-change-in-production"` → `process.env.JWT_SECRET!`
- Added `assertJWTSecret()` export that throws in production if JWT_SECRET is not set
- Changed JWT expiry from `"7d"` to `"1d"`

### C-02: src/proxy.ts
- Added `import { auth } from "@clerk/nextjs/server"`
- Changed `export default function proxy` → `export default async function proxy`
- Replaced empty protected route check with actual Clerk `auth()` call
- Unauthenticated API routes → 401 JSON response
- Unauthenticated page routes → redirect to `/login?redirect_url=...`

### C-03: src/app/api/v1/payments/callback/route.ts
- Changed conditional signature check (`if (body.signature)`) to unconditional in production
- In production: if `body.signature` is missing → 401 error
- In production: if signature is invalid → 401 error
- In development: signature check is skipped (same as before)

### C-04: src/app/api/v1/bookings/route.ts
- Replaced broken `updateMany` with `quantitySold: { lte: record.maxPerBooking }` check
- Now fetches the tier inside the transaction with `findUnique`
- Verifies `tier.quantitySold + record.quantity <= tier.quantityTotal`
- If not available, throws to rollback the transaction
- Then uses plain `update` (not `updateMany`) to increment `quantitySold`

### H-11: src/lib/knet.ts
- Added production guard at top of `initiateKNetPayment`: throws if KNET_MERCHANT_ID, KNET_API_KEY, or KNET_SECRET_KEY missing
- Added same production guard at top of `refundKNetPayment`

### H-12: src/lib/r2.ts
- Added production guard in `getPresignedUploadUrl`: throws if R2_ACCESS_KEY_ID is missing or equals "placeholder"

### M-19: src/lib/qr-utils.ts
- Added `import crypto from "crypto"`
- `generateTicketQRData`: now includes HMAC `sig` field computed with `crypto.createHmac("sha256", JWT_SECRET).update(JSON.stringify({tn, bid, v})).digest("hex")`
- Added `verifyTicketQRData` export that parses QR data, recomputes HMAC, and verifies with `crypto.timingSafeEqual`

### M-11: src/lib/slug.ts
- Added `MAX_TRIES = 100` constant
- Added `tries` counter in the while loop
- If max tries reached, returns `${baseSlug}-${Date.now().toString(36)}`

## Verification
- `bun run lint`: 0 errors, 133 pre-existing warnings (none from these changes)
- Dev server: compiles and serves pages successfully

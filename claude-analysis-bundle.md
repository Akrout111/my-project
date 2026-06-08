# Kuwait Events Platform — Critical Files Analysis Bundle
# Generated for Claude Sonnet 4.6 Deep Analysis
#
# ═══════════════════════════════════════════════════════════════
# PROJECT CONTEXT
# ═══════════════════════════════════════════════════════════════
#
# - Name: Kuwait Events Platform (منصة فعاليات الكويت)
# - Purpose: Event discovery & ticketing platform for Kuwait
# - Stack: Next.js 16 + TypeScript 5 + Prisma (SQLite dev / PostgreSQL prod) + Clerk + Tailwind CSS v4 + shadcn/ui + next-intl
# - Status: Sprint 11 completed, 31 bugs fixed in latest session
# - Known Issues: Some hardcoded Arabic strings remain in event-card.tsx, booking-detail-client.tsx, profile-form.tsx
# - User Complaints: UI/UX doesn't feel premium enough, 3D backgrounds lacked depth (now fixed with Three.js)
# - Languages: Arabic (RTL, primary) + English (LTR)
# - Currency: KWD (Kuwaiti Dinar), 3 decimal places, stored as String in SQLite
#
# ═══════════════════════════════════════════════════════════════
# 15 STRICT RULES — MUST FOLLOW
# ═══════════════════════════════════════════════════════════════
#
# 1.  `db` from `@/lib/db` — NEVER `prisma` from `@/lib/prisma`
# 2.  `useSafeAuth()` / `useSafeUser()` from `@/components/features/auth/auth-provider` — safe hooks
# 3.  Zod v4: `error.issues` NOT `error.errors`; `message` NOT `required_error`
# 4.  next-intl: `Link` from `@/i18n/routing` — NEVER `next/link`
# 5.  RTL-first: Logical CSS properties (ms-, me-, ps-, pe-, start-, end-) — NEVER ml-, mr-, pl-, pr-
# 6.  No Server Actions — API Routes ONLY
# 7.  `successResponse(data, message, meta)` — 3-arg helper from `@/lib/api-response`
# 8.  `unknown` type in catch blocks — NEVER `catch(error: any)`
# 9.  Next.js 16 uses `proxy.ts` NOT `middleware.ts`
# 10. Framer Motion installed and used throughout
# 11. Deterministic PRNG (mulberry32) seeded with 42 — NO `Math.random()` in render paths
# 12. Tailwind CSS v4 — Class specificity matters, @theme inline syntax
# 13. PascalCase for components, kebab-case for files, camelCase for functions
# 14. Role protection: ATTENDEE | ORGANIZER | ADMIN — check `useSafeAuth().role` before API calls
# 15. Decimal values (KWD prices) stored as String in SQLite — use `.toString()` before writing, parse with `parseFloat()`
#
# ═══════════════════════════════════════════════════════════════
# KEY DEPENDENCY VERSIONS (from package.json)
# ═══════════════════════════════════════════════════════════════
#
# next: ^16.1.1 | react: ^19.0.0 | typescript: ^5
# zod: ^4.0.2 | prisma: ^6.11.1 | @clerk/nextjs: ^7.4.2
# next-intl: ^4.3.4 | next-themes: ^0.4.6 | framer-motion: ^12.23.2
# three: ^0.184.0 | tailwindcss: ^4 | @tanstack/react-query: ^5.82.0
# react-hook-form: ^7.60.0 | recharts: ^2.15.4 | resend: ^6.12.4
# embla-carousel-react: ^8.6.0 | sonner: ^2.0.6 | zustand: ^5.0.6
#

═══════════════════════════════════════════
# SECTION 1: CONFIGURATION FILES
═══════════════════════════════════════════

---
## FILE: package.json
---
```
{
  "name": "nextjs_tailwind_shadcn_ts",
  "version": "0.2.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000 2>&1 | tee dev.log",
    "build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/",
    "start": "NODE_ENV=production bun .next/standalone/server.js 2>&1 | tee server.log",
    "lint": "eslint .",
    "db:push": "prisma db push",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:reset": "prisma migrate reset",
    "db:seed": "bunx tsx prisma/seed.ts"
  },
  "prisma": {
    "seed": "bunx tsx prisma/seed.ts"
  },
  "dependencies": {
    "@clerk/localizations": "^4.7.0",
    "@clerk/nextjs": "^7.4.2",
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@hookform/resolvers": "^5.1.1",
    "@mdxeditor/editor": "^3.39.1",
    "@prisma/client": "^6.11.1",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@reactuses/core": "^6.0.5",
    "@tanstack/react-query": "^5.82.0",
    "@tanstack/react-table": "^8.21.3",
    "@types/three": "^0.184.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.2",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.525.0",
    "next": "^16.1.1",
    "next-auth": "^4.24.11",
    "next-intl": "^4.3.4",
    "next-themes": "^0.4.6",
    "prisma": "^6.11.1",
    "qrcode.react": "^4.2.0",
    "react": "^19.0.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.60.0",
    "react-markdown": "^10.1.0",
    "react-resizable-panels": "^3.0.3",
    "react-syntax-highlighter": "^15.6.1",
    "recharts": "^2.15.4",
    "resend": "^6.12.4",
    "sharp": "^0.34.3",
    "sonner": "^2.0.6",
    "svix": "^1.95.1",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.184.0",
    "uuid": "^11.1.0",
    "vaul": "^1.1.2",
    "z-ai-web-dev-sdk": "^0.0.18",
    "zod": "^4.0.2",
    "zustand": "^5.0.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "bun-types": "^1.3.4",
    "eslint": "^9",
    "eslint-config-next": "^16.1.1",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.5",
    "typescript": "^5"
  }
}
```

---
## FILE: next.config.ts
---
```
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "cdn.kuwaitevents.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
```

---
## FILE: tsconfig.json
---
```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "noImplicitAny": false,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

---
## FILE: prisma/schema.prisma
---
```
// schema.prisma — منصة فعاليات الكويت
// Adapted for SQLite (Sprint 1)
// Note: SQLite doesn't support native enums or Decimal type.
// Enums are stored as String, validated at application level via Zod.
// Decimal values (KWD) are stored as String with 3 decimal places.

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

// ───────────────────────────────────────────────
// ENUMS (as String — validated in Zod)
// Role: ATTENDEE | ORGANIZER | ADMIN
// EventStatus: DRAFT | PUBLISHED | CANCELLED | SOLD_OUT | COMPLETED
// TicketType: STANDARD | VIP | EARLY_BIRD | GROUP
// BookingStatus: PENDING | CONFIRMED | CANCELLED | REFUNDED
// PaymentStatus: PENDING | SUCCESS | FAILED | REFUNDED
// PaymentMethod: KNET | CREDIT_CARD
// ───────────────────────────────────────────────

// ───────────────────────────────────────────────
// MODELS
// ───────────────────────────────────────────────

model User {
  id            String    @id @default(cuid())
  clerkId       String    @unique @map("clerk_id") // Synced from Clerk via webhook
  email         String    @unique
  name          String
  phone         String?
  avatarUrl     String?   @map("avatar_url")
  role          String    @default("ATTENDEE") // ATTENDEE | ORGANIZER | ADMIN
  isActive      Boolean   @default(true) @map("is_active") // Controlled by Clerk webhook

  // Soft Delete
  deletedAt     DateTime? @map("deleted_at")

  // Timestamps
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  // Relations
  events        Event[]        @relation("OrganizerEvents")
  bookings      Booking[]
  reviews       Review[]
  notifications Notification[]

  @@index([email])
  @@index([clerkId])
  @@index([role])
  @@index([isActive])
  @@index([deletedAt])
  @@map("users")
}

model Category {
  id          String   @id @default(cuid())
  nameAr      String   @map("name_ar")
  nameEn      String   @map("name_en")
  slug        String   @unique
  iconUrl     String?  @map("icon_url")
  description String?

  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  events      Event[]

  @@index([slug])
  @@map("categories")
}

model Venue {
  id          String   @id @default(cuid())
  nameAr      String   @map("name_ar")
  nameEn      String?  @map("name_en")
  slug        String   @unique
  address     String
  city        String   @default("الكويت")
  coordinates String?
  capacity    Int?
  description String?
  imageUrl    String?  @map("image_url")

  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  events      Event[]

  @@index([slug])
  @@index([city])
  @@map("venues")
}

model Event {
  id              String    @id @default(cuid())
  titleAr         String    @map("title_ar")
  titleEn         String?   @map("title_en")
  slug            String    @unique
  descriptionAr   String    @map("description_ar")
  descriptionEn   String?   @map("description_en")
  coverImageUrl   String    @map("cover_image_url")
  galleryUrls     String    @default("[]") @map("gallery_urls") // JSON array stored as string
  startDate       DateTime  @map("start_date")
  endDate         DateTime? @map("end_date")
  startTime       String    @map("start_time")
  endTime         String?   @map("end_time")
  status          String    @default("DRAFT") @map("status") // DRAFT | PUBLISHED | CANCELLED | SOLD_OUT | COMPLETED
  isFeatured      Boolean   @default(false) @map("is_featured")
  metadata        String    @default("{}") // JSON stored as string
  deletedAt       DateTime? @map("deleted_at")
  createdAt       DateTime  @default(now()) @map("created_at")
  updatedAt       DateTime  @updatedAt @map("updated_at")
  organizerId     String    @map("organizer_id")
  categoryId      String    @map("category_id")
  venueId         String?   @map("venue_id")

  organizer       User        @relation("OrganizerEvents", fields: [organizerId], references: [id])
  category        Category    @relation(fields: [categoryId], references: [id])
  venue           Venue?      @relation(fields: [venueId], references: [id])
  ticketTiers     TicketTier[]
  bookings        Booking[]
  reviews         Review[]

  @@index([organizerId])
  @@index([categoryId])
  @@index([venueId])
  @@index([status])
  @@index([startDate])
  @@index([isFeatured])
  @@index([deletedAt])
  @@index([slug])
  @@map("events")
}

model TicketTier {
  id              String    @id @default(cuid())
  nameAr          String    @map("name_ar")
  nameEn          String?   @map("name_en")
  type            String    @default("STANDARD") @map("type") // STANDARD | VIP | EARLY_BIRD | GROUP
  price           String    @default("0.000") // KWD with 3 decimal places (stored as string)
  quantityTotal   Int       @map("quantity_total")
  quantitySold    Int       @default(0) @map("quantity_sold")
  maxPerBooking   Int       @default(10) @map("max_per_booking")
  description     String?
  createdAt       DateTime  @default(now()) @map("created_at")
  updatedAt       DateTime  @updatedAt @map("updated_at")
  eventId         String    @map("event_id")

  event           Event     @relation(fields: [eventId], references: [id], onDelete: Cascade)
  tickets         Ticket[]

  @@index([eventId])
  @@index([type])
  @@map("ticket_tiers")
}

model Booking {
  id              String    @id @default(cuid())
  bookingNumber   String    @unique @map("booking_number")
  status          String    @default("PENDING") @map("status") // PENDING | CONFIRMED | CANCELLED | REFUNDED
  totalAmount     String    @default("0.000") @map("total_amount") // KWD as string
  quantity        Int
  attendeeName    String    @map("attendee_name")
  attendeePhone   String    @map("attendee_phone")
  attendeeEmail   String    @map("attendee_email")
  deletedAt       DateTime? @map("deleted_at")
  createdAt       DateTime  @default(now()) @map("created_at")
  updatedAt       DateTime  @updatedAt @map("updated_at")
  userId          String    @map("user_id")
  eventId         String    @map("event_id")

  user            User          @relation(fields: [userId], references: [id])
  event           Event         @relation(fields: [eventId], references: [id])
  tickets         Ticket[]
  payment         Payment?

  @@index([userId])
  @@index([eventId])
  @@index([status])
  @@index([bookingNumber])
  @@index([deletedAt])
  @@map("bookings")
}

model Ticket {
  id              String    @id @default(cuid())
  ticketNumber    String    @unique @map("ticket_number")
  qrCodeUrl       String?   @map("qr_code_url")
  isUsed          Boolean   @default(false) @map("is_used")
  usedAt          DateTime? @map("used_at")
  createdAt       DateTime  @default(now()) @map("created_at")
  updatedAt       DateTime  @updatedAt @map("updated_at")
  ticketTierId    String    @map("ticket_tier_id")
  bookingId       String    @map("booking_id")

  ticketTier      TicketTier @relation(fields: [ticketTierId], references: [id])
  booking         Booking    @relation(fields: [bookingId], references: [id], onDelete: Cascade)

  @@index([ticketTierId])
  @@index([bookingId])
  @@index([ticketNumber])
  @@map("tickets")
}

model Payment {
  id              String    @id @default(cuid())
  transactionId   String?   @unique @map("transaction_id")
  amount          String    @default("0.000") // KWD as string
  currency        String    @default("KWD")
  status          String    @default("PENDING") @map("status") // PENDING | SUCCESS | FAILED | REFUNDED
  method          String    @default("KNET") @map("method") // KNET | CREDIT_CARD
  knetPaymentId   String?   @map("knet_payment_id")
  knetResult      String?   @map("knet_result")
  refundedAt      DateTime? @map("refunded_at")
  refundReason    String?   @map("refund_reason")
  createdAt       DateTime  @default(now()) @map("created_at")
  updatedAt       DateTime  @updatedAt @map("updated_at")
  bookingId       String    @unique @map("booking_id")

  booking         Booking   @relation(fields: [bookingId], references: [id])

  @@index([status])
  @@index([transactionId])
  @@index([bookingId])
  @@map("payments")
}

model Review {
  id                String    @id @default(cuid())
  rating            Int
  comment           String?
  organizerReply    String?   @map("organizer_reply")
  organizerRepliedAt DateTime? @map("organizer_replied_at")
  createdAt         DateTime  @default(now()) @map("created_at")
  updatedAt         DateTime  @updatedAt @map("updated_at")
  userId            String    @map("user_id")
  eventId           String    @map("event_id")

  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  event             Event     @relation(fields: [eventId], references: [id], onDelete: Cascade)

  @@unique([userId, eventId])
  @@index([eventId])
  @@index([rating])
  @@map("reviews")
}

model Notification {
  id        String   @id @default(cuid())
  titleAr   String   @map("title_ar")
  titleEn   String   @map("title_en")
  bodyAr    String   @map("body_ar")
  bodyEn    String   @map("body_en")
  type      String   @default("INFO") // INFO | BOOKING | REMINDER | REVIEW | PAYMENT
  isRead    Boolean  @default(false) @map("is_read")
  link      String?
  userId    String   @map("user_id")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([isRead])
  @@index([type])
  @@index([createdAt])
  @@map("notifications")
}
```

═══════════════════════════════════════════
# SECTION 2: CSS & i18n
═══════════════════════════════════════════

---
## FILE: src/app/globals.css
---
```
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-noto-arabic), var(--font-geist-sans), sans-serif;
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

/* ──────────────────────────────────────────────
   PREMIUM DESIGN SYSTEM — Kuwait Events Platform
   Gold & Navy luxury palette
   ────────────────────────────────────────────── */

:root {
  --radius: 0.625rem;

  /* Core palette — light mode: warm whites + gold + navy text */
  --background: oklch(0.995 0.004 85);
  --foreground: oklch(0.15 0.03 260);

  --card: oklch(1 0.003 85);
  --card-foreground: oklch(0.15 0.03 260);

  --popover: oklch(1 0.003 85);
  --popover-foreground: oklch(0.15 0.03 260);

  --primary: oklch(0.76 0.13 85);
  --primary-foreground: oklch(0.15 0.03 260);

  --secondary: oklch(0.955 0.012 85);
  --secondary-foreground: oklch(0.2 0.03 260);

  --muted: oklch(0.955 0.012 85);
  --muted-foreground: oklch(0.5 0.02 260);

  --accent: oklch(0.93 0.05 85);
  --accent-foreground: oklch(0.2 0.03 260);

  --destructive: oklch(0.577 0.245 27.325);

  --border: oklch(0.92 0.01 85);
  --input: oklch(0.92 0.01 85);
  --ring: oklch(0.76 0.13 85);

  /* Chart palette — warm gold-to-navy spectrum */
  --chart-1: oklch(0.76 0.13 85);
  --chart-2: oklch(0.68 0.10 65);
  --chart-3: oklch(0.55 0.08 45);
  --chart-4: oklch(0.42 0.06 260);
  --chart-5: oklch(0.25 0.04 260);

  /* Sidebar — light mode */
  --sidebar: oklch(0.98 0.006 85);
  --sidebar-foreground: oklch(0.15 0.03 260);
  --sidebar-primary: oklch(0.76 0.13 85);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(0.93 0.05 85);
  --sidebar-accent-foreground: oklch(0.2 0.03 260);
  --sidebar-border: oklch(0.92 0.01 85);
  --sidebar-ring: oklch(0.76 0.13 85);
}

.dark {
  /* Core palette — dark mode: deep navy + gold accents */
  --background: oklch(0.15 0.03 260);
  --foreground: oklch(0.955 0.01 85);

  --card: oklch(0.19 0.035 260);
  --card-foreground: oklch(0.955 0.01 85);

  --popover: oklch(0.19 0.035 260);
  --popover-foreground: oklch(0.955 0.01 85);

  --primary: oklch(0.76 0.13 85);
  --primary-foreground: oklch(0.15 0.03 260);

  --secondary: oklch(0.25 0.035 260);
  --secondary-foreground: oklch(0.955 0.01 85);

  --muted: oklch(0.25 0.035 260);
  --muted-foreground: oklch(0.65 0.04 85);

  --accent: oklch(0.25 0.05 260);
  --accent-foreground: oklch(0.955 0.01 85);

  --destructive: oklch(0.704 0.191 22.216);

  --border: oklch(1 0.02 260 / 10%);
  --input: oklch(1 0.02 260 / 15%);
  --ring: oklch(0.76 0.13 85);

  /* Chart palette — gold-dominant dark theme */
  --chart-1: oklch(0.76 0.13 85);
  --chart-2: oklch(0.72 0.11 65);
  --chart-3: oklch(0.65 0.09 45);
  --chart-4: oklch(0.60 0.16 300);
  --chart-5: oklch(0.55 0.20 25);

  /* Sidebar — dark mode */
  --sidebar: oklch(0.17 0.035 260);
  --sidebar-foreground: oklch(0.955 0.01 85);
  --sidebar-primary: oklch(0.76 0.13 85);
  --sidebar-primary-foreground: oklch(0.15 0.03 260);
  --sidebar-accent: oklch(0.25 0.05 260);
  --sidebar-accent-foreground: oklch(0.955 0.01 85);
  --sidebar-border: oklch(1 0.02 260 / 10%);
  --sidebar-ring: oklch(0.76 0.13 85);
}

/* ──────────────────────────────────────────────
   Base layer — borders, body, font smoothing
   ────────────────────────────────────────────── */

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    @apply bg-background text-foreground;
  }

  /* Selection — gold highlight with navy text */
  ::selection {
    background-color: oklch(0.76 0.13 85 / 35%);
    color: oklch(0.15 0.03 260);
  }

  .dark ::selection {
    background-color: oklch(0.76 0.13 85 / 40%);
    color: oklch(0.99 0.004 85);
  }
}

/* ──────────────────────────────────────────────
   Custom scrollbar — thin, gold accent
   ────────────────────────────────────────────── */

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: oklch(0.76 0.13 85 / 30%);
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: oklch(0.76 0.13 85 / 55%);
}

.dark ::-webkit-scrollbar-thumb {
  background: oklch(0.76 0.13 85 / 25%);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.76 0.13 85 / 45%);
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: oklch(0.76 0.13 85 / 30%) transparent;
}

.dark * {
  scrollbar-color: oklch(0.76 0.13 85 / 25%) transparent;
}

/* ──────────────────────────────────────────────
   .gradient-text — Gold gradient text effect
   ────────────────────────────────────────────── */

.gradient-text {
  background: linear-gradient(
    135deg,
    oklch(0.82 0.14 90) 0%,
    oklch(0.76 0.13 85) 30%,
    oklch(0.70 0.11 75) 60%,
    oklch(0.76 0.13 85) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* ──────────────────────────────────────────────
   .glass-card — Glassmorphism card style
   ────────────────────────────────────────────── */

.glass-card {
  background: oklch(1 0.003 85 / 70%);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid oklch(0.76 0.13 85 / 15%);
  border-radius: var(--radius-lg);
  box-shadow:
    0 4px 24px oklch(0.15 0.03 260 / 6%),
    0 1px 2px oklch(0.15 0.03 260 / 4%);
}

.dark .glass-card {
  background: oklch(0.19 0.035 260 / 60%);
  border: 1px solid oklch(0.76 0.13 85 / 12%);
  box-shadow:
    0 4px 24px oklch(0 0 0 / 20%),
    0 1px 2px oklch(0.76 0.13 85 / 5%);
}

/* ──────────────────────────────────────────────
   .glow-gold — Subtle gold glow / shadow
   ────────────────────────────────────────────── */

.glow-gold {
  box-shadow:
    0 0 20px oklch(0.76 0.13 85 / 15%),
    0 0 40px oklch(0.76 0.13 85 / 8%),
    0 4px 16px oklch(0.15 0.03 260 / 8%);
}

.dark .glow-gold {
  box-shadow:
    0 0 20px oklch(0.76 0.13 85 / 20%),
    0 0 40px oklch(0.76 0.13 85 / 10%),
    0 4px 16px oklch(0 0 0 / 30%);
}

/* Intense variant for hero elements */
.glow-gold-lg {
  box-shadow:
    0 0 30px oklch(0.76 0.13 85 / 25%),
    0 0 60px oklch(0.76 0.13 85 / 12%),
    0 0 100px oklch(0.76 0.13 85 / 6%),
    0 8px 32px oklch(0.15 0.03 260 / 10%);
}

.dark .glow-gold-lg {
  box-shadow:
    0 0 30px oklch(0.76 0.13 85 / 30%),
    0 0 60px oklch(0.76 0.13 85 / 15%),
    0 0 100px oklch(0.76 0.13 85 / 8%),
    0 8px 32px oklch(0 0 0 / 40%);
}

/* ──────────────────────────────────────────────
   .shimmer — Shimmer / loading animation
   ────────────────────────────────────────────── */

.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    oklch(0.76 0.13 85 / 8%) 40%,
    oklch(0.76 0.13 85 / 18%) 50%,
    oklch(0.76 0.13 85 / 8%) 60%,
    transparent 100%
  );
  animation: shimmer-slide 2s ease-in-out infinite;
  pointer-events: none;
}

.dark .shimmer::after {
  background: linear-gradient(
    90deg,
    transparent 0%,
    oklch(0.76 0.13 85 / 5%) 40%,
    oklch(0.76 0.13 85 / 12%) 50%,
    oklch(0.76 0.13 85 / 5%) 60%,
    transparent 100%
  );
}

[dir="rtl"] .shimmer::after {
  animation-name: shimmer-slide-rtl;
}

@keyframes shimmer-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes shimmer-slide-rtl {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* ──────────────────────────────────────────────
   Utility — gold border accent
   ────────────────────────────────────────────── */

.border-gold {
  border-color: oklch(0.76 0.13 85 / 40%);
}

.dark .border-gold {
  border-color: oklch(0.76 0.13 85 / 30%);
}

/* ──────────────────────────────────────────────
   Utility — gold bottom line accent
   ────────────────────────────────────────────── */

.gold-underline {
  position: relative;
}

.gold-underline::after {
  content: "";
  position: absolute;
  bottom: -2px;
  inset-inline-start: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    oklch(0.76 0.13 85),
    oklch(0.82 0.14 90),
    oklch(0.76 0.13 85)
  );
  border-radius: 1px;
}

/* ──────────────────────────────────────────────
   Utility — gold gradient text (alias for contexts)
   ────────────────────────────────────────────── */

.text-gradient-gold {
  background: linear-gradient(
    135deg,
    oklch(0.82 0.14 90) 0%,
    oklch(0.76 0.13 85) 30%,
    oklch(0.70 0.11 75) 60%,
    oklch(0.76 0.13 85) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* ──────────────────────────────────────────────
   Premium Glass — darker glass variant
   ────────────────────────────────────────────── */

.premium-glass {
  background: oklch(0.19 0.035 260 / 50%);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid oklch(1 0.02 260 / 10%);
  border-radius: var(--radius-lg);
}

.dark .premium-glass {
  background: oklch(0.15 0.03 260 / 60%);
  border: 1px solid oklch(1 0.02 260 / 8%);
}

/* ──────────────────────────────────────────────
   Animations — mesh blob morph & mesh move
   ────────────────────────────────────────────── */

@keyframes morph-blob {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
  }
  75% {
    border-radius: 60% 30% 60% 40% / 70% 40% 50% 60%;
  }
}

@keyframes mesh-move {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(20px, 40px) scale(1.05);
  }
}

.animate-morph-blob {
  animation: morph-blob 8s ease-in-out infinite;
}

.animate-mesh-move {
  animation: mesh-move 20s ease-in-out infinite;
}
```

---
## FILE: src/messages/ar.json
---
```
{
  "common": {
    "appName": "منصة فعاليات الكويت",
    "loading": "جارٍ التحميل...",
    "save": "حفظ",
    "cancel": "إلغاء",
    "delete": "حذف",
    "edit": "تعديل",
    "create": "إنشاء",
    "search": "بحث",
    "noResults": "لا توجد نتائج",
    "error": "حدث خطأ",
    "retry": "إعادة المحاولة",
    "back": "رجوع",
    "home": "الرئيسية",
    "events": "الفعاليات",
    "categories": "التصنيفات",
    "login": "تسجيل الدخول",
    "register": "إنشاء حساب",
    "logout": "تسجيل الخروج",
    "profile": "الملف الشخصي",
    "loadMore": "تحميل المزيد",
    "tryAgain": "حاول مرة أخرى",
    "currency": "د.ك",
    "viewDetails": "عرض التفاصيل",
    "allEvents": "جميع الفعاليات",
    "featuredEvents": "فعاليات مميزة",
    "upcomingEvents": "فعاليات قادمة",
    "clearFilters": "مسح الفلاتر",
    "featured": "مميز",
    "free": "مجاني",
    "from": "من",
    "remaining": "متبقي"
  },
  "auth": {
    "signIn": "تسجيل الدخول",
    "signUp": "إنشاء حساب",
    "signOut": "تسجيل الخروج",
    "forgotPassword": "نسيت كلمة المرور؟",
    "orContinueWith": "أو المتابعة بواسطة",
    "noAccount": "ليس لديك حساب؟",
    "hasAccount": "لديك حساب بالفعل؟",
    "welcomeBack": "مرحباً بعودتك",
    "createAccount": "إنشاء حساب جديد"
  },
  "profile": {
    "title": "الملف الشخصي",
    "name": "الاسم",
    "email": "البريد الإلكتروني",
    "phone": "رقم الهاتف",
    "role": "الدور",
    "avatar": "الصورة الشخصية",
    "saveChanges": "حفظ التغييرات",
    "saving": "جارٍ الحفظ...",
    "updateSuccess": "تم تحديث الملف الشخصي",
    "updateError": "حدث خطأ في التحديث",
    "editClerkNote": "يُعدّل من إعدادات الحساب",
    "clerkSetupMessage": "لعرض وتعديل بياناتك الشخصية، يرجى تكوين مفاتيح Clerk أولاً",
    "clerkSetupHint": "أضف NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY و CLERK_SECRET_KEY في ملف .env.local"
  },
  "role": {
    "attendee": "حاضر",
    "organizer": "منظم",
    "admin": "مدير"
  },
  "nav": {
    "home": "الرئيسية",
    "events": "الفعاليات",
    "bookings": "حجوزاتي",
    "dashboard": "لوحة التحكم",
    "profile": "الملف الشخصي",
    "login": "تسجيل الدخول",
    "register": "إنشاء حساب"
  },
  "home": {
    "heroTitle": "اكتشف أفضل الفعاليات في الكويت",
    "heroSubtitle": "حجز تذاكر سريع وآمن لأروع الفعاليات",
    "browseEvents": "تصفح الفعاليات",
    "exploreCategories": "استكشف التصنيفات",
    "upcomingEventsCount": "فعاليات قادمة",
    "categoriesCount": "تصنيفات",
    "venuesCount": "أماكن",
    "discoverMore": "اكتشف المزيد",
    "newsletterTitle": "اشترك ليصلك كل جديد",
    "newsletterPlaceholder": "بريدك الإلكتروني",
    "newsletterButton": "اشتراك",
    "ctaTitle": "لماذا فعاليات الكويت؟",
    "ctaSubtitle": "منصتك الموثوقة لاكتشاف وحجز أفضل الفعاليات في الكويت",
    "ctaSecureTitle": "تذاكر آمنة مضمونة",
    "ctaSecureDesc": "حجزك مؤمن وبتذاكر رسمية مضمونة 100%",
    "ctaFastTitle": "حجز سهل وسريع",
    "ctaFastDesc": "احجز تذكرتك في أقل من دقيقة مع دفع آمن عبر كي نت",
    "ctaBestTitle": "أفضل الفعاليات",
    "ctaBestDesc": "نختار لك أجمل الفعاليات في الكويت",
    "ctaButton": "استكشف الفعاليات الآن",
    "noFeaturedTitle": "لا توجد فعاليات حالياً",
    "noFeaturedSubtitle": "ترقبوا فعاليات مميزة قريباً!",
    "featuredSubtitle": "اكتشف أبرز الفعاليات المختارة بعناية لكم",
    "viewAll": "عرض الكل",
    "categoriesSubtitle": "تصفح الفعاليات حسب الاهتمام",
    "eventSingular": "فعالية",
    "eventPlural": "فعاليات",
    "statsTitle": "الكويت بالأرقام",
    "statsSubtitle": "منصة فعاليات الكويت بالأرقام",
    "statsUpcomingEvents": "الفعاليات القادمة",
    "statsCategories": "الفئات المتنوعة",
    "statsVenues": "المواقع",
    "statsTicketsAvailable": "تذاكر متاحة",
    "statsCity": "المدينة",
    "statsFeatured": "فعاليات مميزة",
    "testimonialsTitle": "آراء العملاء",
    "testimonialsSubtitle": "اكتشف تجارب مستخدمينا مع منصة فعاليات الكويت",
    "ctaBrowse": "تصفح الفعاليات",
    "ctaRegister": "إنشاء حساب",
    "testimonial1Text": "تجربة رائعة! تمكنت من حجز تذاكر لحفل موسيقي مذهل في ثوانٍ. المنصة سهلة الاستخدام وتصميمها جميل جداً.",
    "testimonial1Author": "سارة الأحمد",
    "testimonial1Role": "محبة للفعاليات",
    "testimonial2Text": "أفضل منصة لحجز الفعاليات في الكويت. التنوع في الفعاليات والأسعار المناسبة يجعلها خياري الأول دائماً.",
    "testimonial2Author": "محمد العتيبي",
    "testimonial2Role": "رجل أعمال",
    "testimonial3Text": "استخدمت المنصة لتنظيم فعالية شركاتنا وكانت النتائج ممتازة. الدعم سريع والخدمة احترافية.",
    "testimonial3Author": "نورة الشمري",
    "testimonial3Role": "منظمة فعاليات"
  },
  "events": {
    "pageTitle": "الفعاليات",
    "filterCategory": "التصنيف",
    "filterDate": "التاريخ",
    "filterSearch": "ابحث عن فعالية...",
    "filterSort": "ترتيب",
    "sortDate": "التاريخ",
    "sortPrice": "السعر",
    "noEvents": "لا توجد فعاليات مطابقة",
    "fromPrice": "ابتداءً من",
    "remaining": "متبقية",
    "ticket": "تذكرة",
    "tickets": "تذاكر",
    "subtitle": "اكتشف أفضل الفعاليات في الكويت",
    "prev": "السابق",
    "next": "التالي",
    "pageOf": "صفحة {page} من {total}",
    "allCategories": "كل التصنيفات",
    "sortDateAsc": "الأقرب تاريخاً",
    "sortDateDesc": "الأبعد تاريخاً",
    "clear": "مسح"
  },
  "category": {
    "eventsIn": "فعاليات في",
    "noEventsInCategory": "لا توجد فعاليات في هذا التصنيف حالياً"
  },
  "venue": {
    "upcomingEvents": "فعاليات قادمة",
    "noUpcomingEvents": "لا توجد فعاليات قادمة في هذا المكان",
    "capacity": "السعة"
  },
  "eventDetail": {
    "about": "عن الفعالية",
    "venue": "المكان",
    "organizer": "المنظم",
    "reviews": "التقييمات",
    "review": "تقييم",
    "similarEvents": "فعاليات مشابهة",
    "featured": "مميزة",
    "capacity": "السعة",
    "person": "شخص",
    "fromPrice": "من"
  },
  "footer": {
    "about": "عن المنصة",
    "contact": "تواصل معنا",
    "careers": "الوظائف",
    "terms": "الشروط والأحكام",
    "privacy": "سياسة الخصوصية",
    "cookiePolicy": "سياسة ملفات تعريف الارتباط",
    "rights": "جميع الحقوق محفوظة",
    "quickLinks": "روابط سريعة",
    "legal": "قانوني",
    "newsletter": "النشرة البريدية",
    "newsletterDesc": "اشترك ليصلك كل جديد عن أحدث الفعاليات والعروض الحصرية",
    "newsletterPlaceholder": "بريدك الإلكتروني",
    "subscribe": "اشتراك",
    "subscribed": "تم الاشتراك ✓",
    "backToTop": "العودة للأعلى",
    "description": "منصة حجز تذاكر الفعاليات الرائدة في الكويت. اكتشف أروع الفعاليات واحجز تذاكرك بسهولة وأمان."
  },
  "booking": {
    "pageTitle": "حجوزاتي",
    "pending": "معلق",
    "confirmed": "مؤكد",
    "cancelled": "ملغى",
    "refunded": "مسترد",
    "cancelBooking": "إلغاء الحجز",
    "cancelConfirm": "هل أنت متأكد من إلغاء الحجز؟",
    "expiryWarning": "متبقي لإتمام الدفع",
    "expired": "انتهت المهلة",
    "noBookings": "ليس لديك حجوزات بعد",
    "bookingCreated": "تم حجز التذاكر مبدئياً",
    "selectTickets": "اختر التذاكر",
    "totalPrice": "المجموع",
    "attendeeInfo": "بيانات الحضور",
    "fullName": "الاسم الكامل",
    "phone": "رقم الهاتف",
    "email": "البريد الإلكتروني",
    "bookNow": "احجز الآن",
    "mustLogin": "يجب تسجيل الدخول لإتمام الحجز",
    "ticketsLabel": "تذكرة",
    "ticketsPlural": "تذاكر",
    "selectTicketsFirst": "اختر التذاكر أعلاه للمتابعة",
    "mustSelectOne": "يجب اختيار تذكرة واحدة على الأقل",
    "fillAllFields": "يجب ملء جميع بيانات الحضور",
    "bookingError": "حدث خطأ في إنشاء الحجز",
    "bookingInProgress": "جارٍ الحجز..."
  },
  "tickets": {
    "selectTickets": "اختر التذاكر",
    "free": "مجاني",
    "soldOut": "نفدت التذاكر",
    "available": "متوفر",
    "maxPerBooking": "حد أقصى",
    "perBooking": "للحجز",
    "total": "المجموع",
    "ticket": "تذكرة",
    "tickets": "تذاكر",
    "noTickets": "لا توجد تذاكر متوفرة حالياً",
    "vip": "VIP",
    "earlyBird": "مبكر",
    "group": "مجموعة"
  },
  "payment": {
    "initiate": "بدء الدفع",
    "payWithKnet": "الدفع عبر KNet",
    "processing": "جارٍ معالجة الدفع...",
    "success": "تم الدفع بنجاح!",
    "successMessage": "تم تأكيد حجزك وإرسال التذاكر لبريدك الإلكتروني",
    "failed": "فشل الدفع",
    "failedMessage": "لم تتم عملية الدفع. يمكنك المحاولة مرة أخرى.",
    "refund": "استرداد المبلغ",
    "refundConfirm": "هل أنت متأكد من استرداد المبلغ؟ سيتم إلغاء الحجز.",
    "refundReason": "سبب الاسترداد",
    "refunded": "تم الاسترداد",
    "testMode": "وضع الاختبار — لن يتم خصم مبلغ حقيقي",
    "totalDue": "المبلغ المطلوب"
  },
  "error": {
    "unauthorized": "يجب تسجيل الدخول",
    "forbidden": "ليس لديك صلاحية",
    "notFound": "غير موجود",
    "internal": "خطأ داخلي",
    "validation": "بيانات غير صالحة"
  }
}
```

---
## FILE: src/messages/en.json
---
```
{
  "common": {
    "appName": "Kuwait Events Platform",
    "loading": "Loading...",
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit",
    "create": "Create",
    "search": "Search",
    "noResults": "No results found",
    "error": "An error occurred",
    "retry": "Retry",
    "back": "Back",
    "home": "Home",
    "events": "Events",
    "categories": "Categories",
    "login": "Login",
    "register": "Register",
    "logout": "Logout",
    "profile": "Profile",
    "loadMore": "Load More",
    "tryAgain": "Try Again",
    "currency": "KWD",
    "viewDetails": "View Details",
    "allEvents": "All Events",
    "featuredEvents": "Featured Events",
    "upcomingEvents": "Upcoming Events",
    "clearFilters": "Clear Filters",
    "featured": "Featured",
    "free": "Free",
    "from": "From",
    "remaining": "Remaining"
  },
  "auth": {
    "signIn": "Sign In",
    "signUp": "Sign Up",
    "signOut": "Sign Out",
    "forgotPassword": "Forgot Password?",
    "orContinueWith": "Or continue with",
    "noAccount": "Don't have an account?",
    "hasAccount": "Already have an account?",
    "welcomeBack": "Welcome Back",
    "createAccount": "Create Account"
  },
  "profile": {
    "title": "Profile",
    "name": "Name",
    "email": "Email",
    "phone": "Phone",
    "role": "Role",
    "avatar": "Avatar",
    "saveChanges": "Save Changes",
    "saving": "Saving...",
    "updateSuccess": "Profile updated successfully",
    "updateError": "Error updating profile",
    "editClerkNote": "Edit from account settings",
    "clerkSetupMessage": "To view and edit your profile, please configure Clerk keys first",
    "clerkSetupHint": "Add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY in .env.local"
  },
  "role": {
    "attendee": "Attendee",
    "organizer": "Organizer",
    "admin": "Admin"
  },
  "nav": {
    "home": "Home",
    "events": "Events",
    "bookings": "My Bookings",
    "dashboard": "Dashboard",
    "profile": "Profile",
    "login": "Sign In",
    "register": "Sign Up"
  },
  "home": {
    "heroTitle": "Discover the Best Events in Kuwait",
    "heroSubtitle": "Fast and secure ticket booking for amazing events",
    "browseEvents": "Browse Events",
    "exploreCategories": "Explore Categories",
    "upcomingEventsCount": "Upcoming Events",
    "categoriesCount": "Categories",
    "venuesCount": "Venues",
    "discoverMore": "Discover More",
    "newsletterTitle": "Subscribe to stay updated",
    "newsletterPlaceholder": "Your email",
    "newsletterButton": "Subscribe",
    "ctaTitle": "Why Kuwait Events?",
    "ctaSubtitle": "Your trusted platform to discover and book the best events in Kuwait",
    "ctaSecureTitle": "Secure Guaranteed Tickets",
    "ctaSecureDesc": "Your booking is secured with 100% guaranteed official tickets",
    "ctaFastTitle": "Easy Fast Booking",
    "ctaFastDesc": "Book your ticket in under a minute with secure KNet payment",
    "ctaBestTitle": "Best Events",
    "ctaBestDesc": "We curate the finest events in Kuwait for you",
    "ctaButton": "Explore Events Now",
    "noFeaturedTitle": "No Events Yet",
    "noFeaturedSubtitle": "Stay tuned for amazing featured events coming soon!",
    "featuredSubtitle": "Discover handpicked events curated just for you",
    "viewAll": "View All",
    "categoriesSubtitle": "Browse events by your interests",
    "eventSingular": "event",
    "eventPlural": "events",
    "statsTitle": "Kuwait in Numbers",
    "statsSubtitle": "Kuwait Events Platform in Numbers",
    "statsUpcomingEvents": "Upcoming Events",
    "statsCategories": "Categories",
    "statsVenues": "Venues",
    "statsTicketsAvailable": "Tickets Available",
    "statsCity": "City",
    "statsFeatured": "Featured Events",
    "testimonialsTitle": "What People Say",
    "testimonialsSubtitle": "Discover what our users say about Kuwait Events Platform",
    "ctaBrowse": "Browse Events",
    "ctaRegister": "Create Account",
    "testimonial1Text": "Amazing experience! I was able to book tickets for a stunning concert in seconds. The platform is easy to use and beautifully designed.",
    "testimonial1Author": "Sarah Al-Ahmad",
    "testimonial1Role": "Events Enthusiast",
    "testimonial2Text": "The best event booking platform in Kuwait. The variety of events and reasonable prices make it my first choice always.",
    "testimonial2Author": "Mohammed Al-Otaibi",
    "testimonial2Role": "Businessman",
    "testimonial3Text": "I used the platform to organize our company event and the results were excellent. Fast support and professional service.",
    "testimonial3Author": "Noura Al-Shamri",
    "testimonial3Role": "Event Organizer"
  },
  "events": {
    "pageTitle": "Events",
    "filterCategory": "Category",
    "filterDate": "Date",
    "filterSearch": "Search events...",
    "filterSort": "Sort",
    "sortDate": "Date",
    "sortPrice": "Price",
    "noEvents": "No matching events",
    "fromPrice": "From",
    "remaining": "remaining",
    "ticket": "ticket",
    "tickets": "tickets",
    "subtitle": "Discover the best events in Kuwait",
    "prev": "Previous",
    "next": "Next",
    "pageOf": "Page {page} of {total}",
    "allCategories": "All Categories",
    "sortDateAsc": "Nearest Date",
    "sortDateDesc": "Farthest Date",
    "clear": "Clear"
  },
  "category": {
    "eventsIn": "Events in",
    "noEventsInCategory": "No events in this category yet"
  },
  "venue": {
    "upcomingEvents": "Upcoming Events",
    "noUpcomingEvents": "No upcoming events at this venue",
    "capacity": "Capacity"
  },
  "eventDetail": {
    "about": "About the Event",
    "venue": "Venue",
    "organizer": "Organizer",
    "reviews": "Reviews",
    "review": "review",
    "similarEvents": "Similar Events",
    "featured": "Featured",
    "capacity": "Capacity",
    "person": "person",
    "fromPrice": "From"
  },
  "footer": {
    "about": "About",
    "contact": "Contact",
    "careers": "Careers",
    "terms": "Terms & Conditions",
    "privacy": "Privacy Policy",
    "cookiePolicy": "Cookie Policy",
    "rights": "All rights reserved",
    "quickLinks": "Quick Links",
    "legal": "Legal",
    "newsletter": "Newsletter",
    "newsletterDesc": "Subscribe to get the latest events and exclusive offers delivered to you",
    "newsletterPlaceholder": "Your email address",
    "subscribe": "Subscribe",
    "subscribed": "Subscribed ✓",
    "backToTop": "Back to top",
    "description": "The leading event ticketing platform in Kuwait. Discover amazing events and book your tickets easily and securely."
  },
  "booking": {
    "pageTitle": "My Bookings",
    "pending": "Pending",
    "confirmed": "Confirmed",
    "cancelled": "Cancelled",
    "refunded": "Refunded",
    "cancelBooking": "Cancel Booking",
    "cancelConfirm": "Are you sure you want to cancel?",
    "expiryWarning": "remaining to complete payment",
    "expired": "Expired",
    "noBookings": "No bookings yet",
    "bookingCreated": "Tickets reserved successfully",
    "selectTickets": "Select Tickets",
    "totalPrice": "Total",
    "attendeeInfo": "Attendee Information",
    "fullName": "Full Name",
    "phone": "Phone Number",
    "email": "Email",
    "bookNow": "Book Now",
    "mustLogin": "Login required to complete booking",
    "ticketsLabel": "ticket",
    "ticketsPlural": "tickets",
    "selectTicketsFirst": "Select tickets above to continue",
    "mustSelectOne": "Must select at least one ticket",
    "fillAllFields": "Please fill all attendee information",
    "bookingError": "An error occurred creating the booking",
    "bookingInProgress": "Booking in progress..."
  },
  "tickets": {
    "selectTickets": "Select Tickets",
    "free": "Free",
    "soldOut": "Sold Out",
    "available": "Available",
    "maxPerBooking": "Max per booking",
    "perBooking": "per booking",
    "total": "Total",
    "ticket": "ticket",
    "tickets": "tickets",
    "noTickets": "No tickets available at this time",
    "vip": "VIP",
    "earlyBird": "Early Bird",
    "group": "Group"
  },
  "payment": {
    "initiate": "Initiate Payment",
    "payWithKnet": "Pay with KNet",
    "processing": "Processing payment...",
    "success": "Payment Successful!",
    "successMessage": "Your booking is confirmed and tickets have been sent to your email",
    "failed": "Payment Failed",
    "failedMessage": "Payment was not completed. You can try again.",
    "refund": "Refund",
    "refundConfirm": "Are you sure you want to refund? The booking will be cancelled.",
    "refundReason": "Refund reason",
    "refunded": "Refunded",
    "testMode": "Test mode — no real charges",
    "totalDue": "Amount Due"
  },
  "error": {
    "unauthorized": "Authentication required",
    "forbidden": "Access denied",
    "notFound": "Not found",
    "internal": "Internal error",
    "validation": "Invalid data"
  }
}
```

---
## FILE: src/i18n/routing.ts
---
```
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

---
## FILE: src/lib/i18n.ts
---
```
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "ar" | "en")) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
```

═══════════════════════════════════════════
# SECTION 3: LAYOUTS & ROUTING
═══════════════════════════════════════════

---
## FILE: src/app/layout.tsx
---
```
import type { Metadata } from "next";
import { AuthProvider } from "@/components/features/auth/auth-provider";
import { QueryProvider } from "@/components/layout/query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuwait Events Platform — منصة فعاليات الكويت",
  description: "Discover and book the best events in Kuwait — اكتشف واحجز أفضل الفعاليات في الكويت",
  keywords: ["events", "Kuwait", "tickets", "booking", "فعاليات", "الكويت", "حجز", "تذاكر"],
  authors: [{ name: "Kuwait Events Platform" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
}
```

---
## FILE: src/app/(main)/[locale]/layout.tsx
---
```
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/routing";
import { notoSansArabic } from "@/lib/fonts";
import { Navbar } from "@/components/features/layout/navbar";
import { Footer } from "@/components/features/layout/footer";
import { SiteLoader } from "@/components/features/layout/site-loader";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${notoSansArabic.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SiteLoader />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 relative">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---
## FILE: src/app/(main)/[locale]/page.tsx
---
```
import { db } from "@/lib/db";
import { HeroSection3D } from "@/components/ui/hero-section-3d";
import { FeaturedEventsGrid } from "@/components/features/events/featured-events-grid";
import { StatsBentoGrid } from "@/components/features/home/stats-bento-grid";
import { TestimonialsSection } from "@/components/features/home/testimonials-section";
import { CTATrustSection } from "@/components/features/events/cta-trust-section";
import { CategoryCarousel } from "@/components/features/events/category-carousel";

export default async function HomePage() {
  const [featuredEvents, categories, upcomingCount, venuesCount, featuredCount] = await Promise.all([
    db.event.findMany({
      where: { isFeatured: true, status: "PUBLISHED", deletedAt: null },
      include: {
        venue: { select: { nameAr: true, city: true } },
        category: { select: { nameAr: true, slug: true } },
        ticketTiers: {
          select: { price: true, quantityTotal: true, quantitySold: true },
        },
      },
      take: 6,
      orderBy: { startDate: "asc" },
    }),
    db.category.findMany({
      include: {
        _count: { select: { events: { where: { status: "PUBLISHED", deletedAt: null } } } },
      },
    }),
    db.event.count({
      where: {
        status: "PUBLISHED",
        deletedAt: null,
        startDate: { gte: new Date() },
      },
    }),
    db.venue.count(),
    db.event.count({ where: { isFeatured: true, status: "PUBLISHED", deletedAt: null } }),
  ]);

  const categoriesCount = categories.length;

  // Compute total ticket count across all tiers
  const ticketAgg = await db.ticketTier.aggregate({ _sum: { quantityTotal: true } });
  const ticketCount = ticketAgg._sum.quantityTotal ?? 0;

  return (
    <>
      <HeroSection3D
        upcomingCount={upcomingCount}
      />
      <FeaturedEventsGrid events={featuredEvents} />
      <StatsBentoGrid
        eventCount={upcomingCount}
        categoryCount={categoriesCount}
        venueCount={venuesCount}
        ticketCount={ticketCount}
        featuredCount={featuredCount}
      />
      <TestimonialsSection />
      <CTATrustSection
        upcomingCount={upcomingCount}
        categoriesCount={categoriesCount}
        venuesCount={venuesCount}
      />
      <CategoryCarousel categories={categories} />
    </>
  );
}
```

---
## FILE: src/app/(auth)/layout.tsx
---
```
import { notoSansArabic } from "@/lib/fonts";
import { ThemeProvider } from "@/components/layout/theme-provider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${notoSansArabic.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex items-center justify-center bg-muted/30">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---
## FILE: src/app/(dashboard)/[locale]/layout.tsx
---
```
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/routing";
import { notoSansArabic } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";

export default async function DashboardLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${notoSansArabic.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---
## FILE: src/proxy.ts
---
```
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/lib/routing";

const intlMiddleware = createIntlMiddleware(routing);

// Protected routes that require authentication
const protectedPaths = [
  "/dashboard",
  "/bookings",
  "/profile",
  "/api/v1/bookings",
  "/api/v1/payments",
  "/api/v1/upload",
  "/api/v1/users",
];

function isProtectedRoute(pathname: string): boolean {
  return protectedPaths.some((path) => pathname.startsWith(path));
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check protected routes (when Clerk is configured, auth will be enforced)
  if (isProtectedRoute(pathname)) {
    // In production with Clerk, this would check authentication
    // For development without Clerk keys, we allow access
  }

  // Apply i18n routing for non-API routes
  if (!pathname.startsWith("/api") && !pathname.startsWith("/_next")) {
    const response = intlMiddleware(request);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

---
## FILE: src/app/not-found.tsx
---
```
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
        <p className="text-xl mb-6 text-foreground">Page Not Found</p>
        <Link href="/ar" className="text-primary underline">
          العودة للرئيسية
        </Link>
        {" / "}
        <Link href="/en" className="text-primary underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
```

═══════════════════════════════════════════
# SECTION 4: THREE.JS LIBRARY (SIGNATURES & TYPES ONLY)
═══════════════════════════════════════════

---
## FILE: src/lib/three/fbm.ts
---
```
/**
 * Multi-octave sine noise for organic motion
 * Ported from the Golden Geometric Visions reference
 */
export function fbm(t: number, s = 0): number {
/** Deterministic PRNG — Mulberry32 seeded */
export function mulberry32(seed: number): () => number {

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

---
## FILE: src/lib/three/geometry.ts
---
```
/**
 * Islamic Geometric Geometry Generators for Three.js
 * Ported from the Golden Geometric Visions reference
 * All radii/dimensions clamped with EPS for safety
 */
import * as THREE from "three";
const EPS = 0.001;
const PI = Math.PI;
/* ─── N-pointed star polygon with correct Islamic proportions ─── */
export function makeStar(pts: number, outerR: number, innerR: number, depth: number): THREE.ExtrudeGeometry {
/* ─── Octagonal frame ring ─── */
export function makeOctFrame(oR: number, iR: number, d: number, th: number): THREE.ExtrudeGeometry {
/* ─── Octagonal prism — 8-sided column ─── */
export function makeOctPrism(radius: number, height: number): THREE.CylinderGeometry {
/* ─── Armillary sphere — concentric tilted rings ─── */
export function makeArmillary(rad: number, n: number, metalMat: THREE.Material): THREE.Group {
/* ─── Arabesque torus knot ─── */
export function makeArabesque(rad: number, tube: number, p: number, q: number): THREE.TorusKnotGeometry {
/* ─── Intersecting planes — thin glass planes at regular angular intervals ─── */
export function makeCrossPlanes(radius: number, count: number, mat: THREE.Material): THREE.Group {
/* ─── Geometric rose ring ─── */
export function makeRoseRing(majorR: number, minorR: number, petals: number, metalMat: THREE.Material): THREE.Group {
/* ─── 3D Volumetric Lattice Screen ─── */
export function createLattice3D(
/* ─── Spot Light Cookie Texture (Islamic star pattern) ─── */
export function mkCookie(sz: number): THREE.CanvasTexture {

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

---
## FILE: src/lib/three/materials.ts
---
```
/**
 * Three.js Material Definitions for Islamic Geometric 3D Scenes
 * Premium glass and metal materials with environment mapping
 */
import * as THREE from "three";
/* ═══════════════════════════════
export const goldGlass = new THREE.MeshPhysicalMaterial({
export const amberGlass = new THREE.MeshPhysicalMaterial({
export const roseGoldGlass = new THREE.MeshPhysicalMaterial({
export const deepAmberGlass = new THREE.MeshPhysicalMaterial({
export const tealGlass = new THREE.MeshPhysicalMaterial({
/* ═══════════════════════════════
export const metalGoldMat = new THREE.MeshPhysicalMaterial({
export const metalAmberMat = new THREE.MeshPhysicalMaterial({
export const wireGold = new THREE.MeshBasicMaterial({
/* ═══════════════════════════════
export const glassArr = [goldGlass, amberGlass, roseGoldGlass, deepAmberGlass, tealGlass];
export const solidArr = [metalGoldMat, metalAmberMat];

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

---
## FILE: src/lib/three/shaders.ts
---
```
/**
 * Custom GLSL Shaders for Three.js Post-Processing
 * Cinematic color grading, caustics, volumetric beams, particles, orbs
 */
export const SkyShader = {
export const OrbShader = {
export const BeamShader = {
export const CausticShader = {
export const ParticleShader = {
export const CinematicShader = {

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

---
## FILE: src/lib/three/three-canvas.ts
---
```
/**
 * Core Three.js Canvas Manager
 * Handles renderer, resize, animation loop, IntersectionObserver
 * Shared by all Three.js background components
 */
import * as THREE from "three";
export interface ThreeCanvasConfig {
export class ThreeCanvasManager {

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

---
## FILE: src/lib/three/environment.ts
---
```
/**
 * Three.js Environment Map Generator
 * Creates a warm gold environment for material reflections
 */
import * as THREE from "three";
export function createEnvironmentMap(renderer: THREE.WebGLRenderer): THREE.Texture {

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

═══════════════════════════════════════════
# SECTION 5: 3D UI COMPONENTS
═══════════════════════════════════════════

---
## FILE: src/components/ui/three-hero-bg.tsx
---
```
import { useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { ThreeCanvasManager } from "@/lib/three/three-canvas";
import { createEnvironmentMap } from "@/lib/three/environment";
import { fbm, mulberry32 } from "@/lib/three/fbm";
import {
import { glassArr, solidArr, metalGoldMat, wireGold, tealGlass } from "@/lib/three/materials";
import { SkyShader, OrbShader, BeamShader, CausticShader, ParticleShader, CinematicShader } from "@/lib/three/shaders";
/* ─── Constants ─── */
const EPS = 0.001;
const BAND = 150;
const CAM_SPD = 0.014;
const PI = Math.PI;
/* ─── Reduced motion detection ─── */
const emptySubscribe = () => () => {};
function usePrefersReducedMotion(): boolean {
interface ThreeHeroBgProps {
export function ThreeHeroBg({ scrollProgress, mouseX, mouseY }: ThreeHeroBgProps) {

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

---
## FILE: src/components/ui/three-section-bg.tsx
---
```
import { useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import * as THREE from "three";
import { ThreeCanvasManager } from "@/lib/three/three-canvas";
import { createEnvironmentMap } from "@/lib/three/environment";
import { fbm, mulberry32 } from "@/lib/three/fbm";
import {
import { metalGoldMat } from "@/lib/three/materials";
import { ParticleShader, SkyShader } from "@/lib/three/shaders";
/* ─── Types ─── */
export type SectionTheme = "hero" | "events" | "stats" | "testimonials" | "cta" | "categories" | "footer";
interface ThreeSectionBgProps {
/* ─── Simpler materials for section backgrounds (better performance) ─── */
function createSectionMaterials() {
const SECTION_MATS = createSectionMaterials();
/* ─── Reduced motion detection (SSR-safe) ─── */
const reducedMotionQuery =
function subscribeReducedMotion(cb: () => void) {
function getReducedMotionSnapshot() {
function getReducedMotionServerSnapshot() {
function usePrefersReducedMotion() {
/* ─── Scene Configuration per Theme ─── */
interface ShapePlacement {
interface LightPlacement {
interface SceneConfig {
const PI = Math.PI;
const THEME_CONFIGS: Record<SectionTheme, SceneConfig> = {
/* ─── Main Component ─── */
function ThreeSectionBg({ theme = "hero", className }: ThreeSectionBgProps) {
export { ThreeSectionBg };
export type { SectionTheme as ThreeSectionTheme };

// ... [FULL IMPLEMENTATION TRIMMED — see source file]
```

---
## FILE: src/components/ui/hero-section-3d.tsx
---
```
"use client";

import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useSyncExternalStore,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThreeHeroBg } from "@/components/ui/three-hero-bg";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Search, Compass, ChevronDown, Sparkles } from "lucide-react";

/* ──────────────────────────────────────────────
   Reduced-motion detection hook
   ────────────────────────────────────────────── */

const emptySubscribe = () => () => {};

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/* ──────────────────────────────────────────────
   Animation config — premium cubic-bezier
   ────────────────────────────────────────────── */

const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: CUBIC_PREMIUM,
    },
  },
};

const fadeSlideUpSmall = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: CUBIC_PREMIUM,
    },
  },
};

/* ──────────────────────────────────────────────
   HeroSection3D — Interactive 3D Hero with Canvas
   Replaces ScrollVideoHero with pure 3D scene.
   ────────────────────────────────────────────── */

interface HeroSection3DProps {
  /** Number of upcoming events for stats display */
  upcomingCount?: number;
}

export function HeroSection3D({ upcomingCount }: HeroSection3DProps) {
  const t = useTranslations("home");

  /* ── Refs ── */
  const containerRef = useRef<HTMLElement>(null);

  /* ── Accessibility ── */
  const prefersReducedMotion = usePrefersReducedMotion();

  /* ── Scroll tracking ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* ── Content parallax transforms ── */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  /* ── Mouse position for 3D scene ── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      mouseX.set(nx);
      mouseY.set(ny);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  /* ── Scroll progress for 3D scene ── */
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  /* ── Fallback gradient ── */
  const fallbackGradient =
    "linear-gradient(to bottom, oklch(0.15 0.03 260) 0%, oklch(0.12 0.04 260) 50%, oklch(0.10 0.02 260) 100%)";

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] overflow-hidden"
    >
      {/* ── Sticky container that stays in view while scrolling ── */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── 3D Three.js Background ── */}
        <ThreeHeroBg
          scrollProgress={scrollProgress}
          mouseX={mouseX.get()}
          mouseY={mouseY.get()}
        />

        {/* ── Fallback: gradient on reduced motion ── */}
        {prefersReducedMotion && (
          <div
            className="absolute inset-0"
            style={{ background: fallbackGradient }}
          />
        )}

        {/* ── Gradient overlay: darker at top/bottom ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.12 0.04 260 / 65%) 0%, oklch(0.12 0.04 260 / 10%) 30%, oklch(0.12 0.04 260 / 5%) 60%, oklch(0.12 0.04 260 / 55%) 100%)",
          }}
        />

        {/* ── Subtle grain texture ── */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* ── Main hero content — scroll-driven parallax fade ── */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Sparkle badge */}
            {upcomingCount !== undefined && upcomingCount > 0 && (
              <motion.div variants={fadeSlideUpSmall} className="flex justify-center">
                <div className="inline-flex items-center gap-2 ps-4 pe-5 py-2 rounded-full glass-card text-sm font-medium text-white/90 dark:text-white/90">
                  <Sparkles className="h-4 w-4 text-primary shrink-0" />
                  <span>
                    <AnimatedCounter target={upcomingCount} /> {t("upcomingEventsCount")}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Main heading — gold gradient text */}
            <motion.h1
              variants={fadeSlideUp}
              className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              {t("heroTitle")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeSlideUp}
              className="text-lg sm:text-xl md:text-2xl text-white/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              {t("heroSubtitle")}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeSlideUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <MagneticButton asChild strength={0.25}>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg glow-gold transition-all duration-300 hover:brightness-110"
                >
                  <Search className="h-5 w-5 shrink-0" />
                  <span>{t("browseEvents")}</span>
                </Link>
              </MagneticButton>

              <MagneticButton asChild strength={0.25}>
                <Link
                  href="/events#categories"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass-card text-white dark:text-white font-semibold text-base sm:text-lg border border-white/10 transition-all duration-300 hover:border-primary/30 hover:bg-white/5"
                >
                  <Compass className="h-5 w-5 shrink-0" />
                  <span>{t("exploreCategories")}</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Stats bar ── */}
        <motion.div
          className="relative z-10 absolute bottom-20 inset-x-0 pb-6 sm:pb-8 md:pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: CUBIC_PREMIUM }}
          style={{ opacity: contentOpacity }}
        >
          {upcomingCount !== undefined && upcomingCount > 0 && (
            <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  <AnimatedCounter target={upcomingCount} />
                </span>
                <span className="text-white/50 dark:text-white/50 text-xs sm:text-sm mt-1 tracking-wider uppercase">
                  {t("upcomingEventsCount")}
                </span>
              </div>

              <div className="w-px h-12 bg-white/10 hidden sm:block" />

              <div className="hidden sm:flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 dark:text-white/90">
                  <AnimatedCounter target={8} />
                </span>
                <span className="text-white/50 dark:text-white/50 text-xs sm:text-sm mt-1 tracking-wider uppercase">
                  {t("categoriesCount")}
                </span>
              </div>

              <div className="w-px h-12 bg-white/10 hidden sm:block" />

              <div className="hidden sm:flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 dark:text-white/90">
                  <AnimatedCounter target={3} />
                </span>
                <span className="text-white/50 dark:text-white/50 text-xs sm:text-sm mt-1 tracking-wider uppercase">
                  {t("venuesCount")}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="relative z-10 absolute bottom-4 sm:bottom-6 inset-x-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ opacity: contentOpacity }}
        >
          <motion.button
            type="button"
            className="flex flex-col items-center gap-1 cursor-pointer text-white/30 hover:text-white/60 transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
            }}
            aria-label={t("discoverMore")}
          >
            <span className="text-[10px] sm:text-xs tracking-widest uppercase">
              {t("discoverMore")}
            </span>
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
```

---
## FILE: src/components/ui/section-3d-bg.tsx
---
```
"use client";

/**
 * Section3DBg — Delegates to ThreeSectionBg (WebGL-based 3D backgrounds)
 * Maintains the same interface as the original Canvas 2D implementation
 * for backward compatibility with all existing imports.
 */

import { ThreeSectionBg } from "@/components/ui/three-section-bg";
import type { SectionTheme as ThreeSectionTheme } from "@/components/ui/three-section-bg";

// Re-export with the original interface name
export type SectionTheme = ThreeSectionTheme;

interface Section3DBgProps {
  theme?: SectionTheme;
  className?: string;
}

function Section3DBg({ theme = "hero", className }: Section3DBgProps) {
  return <ThreeSectionBg theme={theme} className={className} />;
}

export { Section3DBg };
export type { Section3DBgProps };
export default Section3DBg;
```

---
## FILE: src/components/ui/navbar-3d-bg.tsx
---
```
"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────
interface Navbar3DBgProps {
  isScrolled: boolean;
}

// ─── Theme Detection (SSR-safe) ──────────────────────────────
const themeQuery =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

function subscribeTheme(callback: () => void) {
  const mql = themeQuery;
  if (!mql) return () => {};
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getThemeSnapshot(): boolean {
  if (typeof document !== "undefined") {
    const html = document.documentElement;
    if (html.classList.contains("dark")) return true;
    if (html.classList.contains("light")) return false;
  }
  return themeQuery?.matches ?? false;
}

function getThemeServerSnapshot(): boolean {
  return false;
}

function useIsDark(): boolean {
  return useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
}

// ─── Reduced Motion Detection (SSR-safe) ─────────────────────
const reducedMotionQuery =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;

function subscribeReducedMotion(callback: () => void) {
  const mql = reducedMotionQuery;
  if (!mql) return () => {};
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  return reducedMotionQuery?.matches ?? false;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

// ─── Gradient Mesh Spot Configs (Deterministic) ──────────────
// Each spot is a radial gradient circle that slowly drifts across the navbar.
// Positions animate between keyframes over 10-20 seconds.

interface GradientSpot {
  // Sequence of positions the spot drifts through (percentage coordinates)
  keyframes: { x: string; y: string }[];
  // Duration for one full cycle through all keyframes (seconds)
  duration: number;
  // Size of the gradient spot (percentage of container)
  size: string;
  // Color of the gradient spot (oklch)
  color: string;
}

/** Dark mode gradient spots — navy base with gold accents */
const DARK_SPOTS: GradientSpot[] = [
  {
    keyframes: [
      { x: "15%", y: "30%" },
      { x: "40%", y: "50%" },
      { x: "70%", y: "30%" },
      { x: "40%", y: "20%" },
      { x: "15%", y: "30%" },
    ],
    duration: 18,
    size: "70%",
    color: "oklch(0.15 0.03 260 / 60%)",
  },
  {
    keyframes: [
      { x: "80%", y: "20%" },
      { x: "60%", y: "60%" },
      { x: "30%", y: "40%" },
      { x: "60%", y: "10%" },
      { x: "80%", y: "20%" },
    ],
    duration: 14,
    size: "50%",
    color: "oklch(0.76 0.13 85 / 15%)",
  },
  {
    keyframes: [
      { x: "50%", y: "70%" },
      { x: "20%", y: "40%" },
      { x: "80%", y: "50%" },
      { x: "50%", y: "30%" },
      { x: "50%", y: "70%" },
    ],
    duration: 20,
    size: "60%",
    color: "oklch(0.15 0.03 260 / 40%)",
  },
  {
    keyframes: [
      { x: "25%", y: "50%" },
      { x: "70%", y: "40%" },
      { x: "50%", y: "70%" },
      { x: "10%", y: "30%" },
      { x: "25%", y: "50%" },
    ],
    duration: 16,
    size: "40%",
    color: "oklch(0.76 0.13 85 / 10%)",
  },
];

/** Light mode gradient spots — white base with subtle gold accents */
const LIGHT_SPOTS: GradientSpot[] = [
  {
    keyframes: [
      { x: "15%", y: "30%" },
      { x: "40%", y: "50%" },
      { x: "70%", y: "30%" },
      { x: "40%", y: "20%" },
      { x: "15%", y: "30%" },
    ],
    duration: 18,
    size: "70%",
    color: "oklch(0.995 0.004 85 / 60%)",
  },
  {
    keyframes: [
      { x: "80%", y: "20%" },
      { x: "60%", y: "60%" },
      { x: "30%", y: "40%" },
      { x: "60%", y: "10%" },
      { x: "80%", y: "20%" },
    ],
    duration: 14,
    size: "50%",
    color: "oklch(0.76 0.13 85 / 8%)",
  },
  {
    keyframes: [
      { x: "50%", y: "70%" },
      { x: "20%", y: "40%" },
      { x: "80%", y: "50%" },
      { x: "50%", y: "30%" },
      { x: "50%", y: "70%" },
    ],
    duration: 20,
    size: "60%",
    color: "oklch(0.995 0.004 85 / 40%)",
  },
  {
    keyframes: [
      { x: "25%", y: "50%" },
      { x: "70%", y: "40%" },
      { x: "50%", y: "70%" },
      { x: "10%", y: "30%" },
      { x: "25%", y: "50%" },
    ],
    duration: 16,
    size: "40%",
    color: "oklch(0.76 0.13 85 / 6%)",
  },
];

// ─── Noise Texture Overlay ───────────────────────────────────
// Inline SVG feTurbulence for a subtle grain texture effect.
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// ─── Mesh Gradient Background ────────────────────────────────
function MeshGradient({ isDark, prefersReducedMotion }: { isDark: boolean; prefersReducedMotion: boolean }) {
  const spots = isDark ? DARK_SPOTS : LIGHT_SPOTS;

  // Base background color
  const baseBg = isDark
    ? "oklch(0.15 0.03 260 / 85%)"
    : "oklch(0.995 0.004 85 / 85%)";

  return (
    <div
      className="absolute inset-0"
      style={{ backgroundColor: baseBg }}
    >
      {/* ── Animated gradient spots ── */}
      {spots.map((spot, i) => {
        // Build Framer Motion keyframes for x and y positions
        const xKeyframes = spot.keyframes.map((kf) => kf.x);
        const yKeyframes = spot.keyframes.map((kf) => kf.y);

        return (
          <motion.div
            key={`spot-${i}`}
            animate={
              prefersReducedMotion
                ? { x: spot.keyframes[0].x, y: spot.keyframes[0].y }
                : { x: xKeyframes, y: yKeyframes }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: spot.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              position: "absolute",
              width: spot.size,
              height: spot.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${spot.color}, transparent 70%)`,
              filter: "blur(40px)",
              transform: "translate(-50%, -50%)",
              willChange: prefersReducedMotion ? "auto" : "transform",
            }}
          />
        );
      })}

      {/* ── Noise texture overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: NOISE_SVG,
          backgroundRepeat: "repeat",
          opacity: 0.03,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* ── Glassmorphism backdrop blur layer ── */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      />
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────
function Navbar3DBg({ isScrolled }: Navbar3DBgProps) {
  const isDark = useIsDark();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          key="navbar-3d-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
          role="presentation"
        >
          <MeshGradient isDark={isDark} prefersReducedMotion={prefersReducedMotion} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Navbar3DBg };
export type { Navbar3DBgProps };
export default Navbar3DBg;
```

---
## FILE: src/components/ui/loader-3d.tsx
---
```
"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────
   Loader3D — Premium 3D loading screen with
   rotating 8-pointed Islamic star (Rub el Hizb ☸),
   orbiting gold particles, and progress ring.
   Replaces the VideoLoader with pure code animation.
   ────────────────────────────────────────────── */

// ── Types ────────────────────────────────────────
interface Loader3DProps {
  /** Whether the app is still loading */
  isLoading: boolean;
  /** Maximum time to show loader (ms), even if isLoading is true */
  maxDuration?: number;
  /** App name to display (locale-aware) */
  appName?: string;
}

// ── Deterministic particle configs ───────────────
// 8 particles, each offset by 45°, with varying sizes for depth illusion
const PARTICLE_COUNT = 8;
const PARTICLE_ANGLES = Array.from(
  { length: PARTICLE_COUNT },
  (_, i) => i * 45
);
const PARTICLE_SIZES = [5, 4, 6, 4, 5, 4, 6, 4]; // px — deterministic
const PARTICLE_OPACITIES = [0.9, 0.6, 1, 0.7, 0.8, 0.5, 0.9, 0.6]; // varying depth

// ── SVG 8-pointed star clip-path ─────────────────
// Creates a proper 8-pointed Islamic star (Rub el Hizb)
const STAR_CLIP_PATH =
  "polygon(50% 0%, 62.5% 25%, 100% 25%, 75% 50%, 100% 75%, 62.5% 75%, 50% 100%, 37.5% 75%, 0% 75%, 25% 50%, 0% 25%, 37.5% 25%)";

// ── Gradient IDs (unique to avoid SVG collisions) ──
const GOLD_GRADIENT_ID = "loader3d-gold-gradient";
const RING_GRADIENT_ID = "loader3d-ring-gradient";

// ── Elliptical orbit parameters ──────────────────
const ORBIT_RADIUS_X = 80; // px — horizontal radius
const ORBIT_RADIUS_Y = 40; // px — vertical radius (perspective squish)
const ORBIT_DURATION = 4; // seconds per full orbit

// ── Generate smooth elliptical keyframes ─────────
// Pre-computes X/Y positions along the ellipse at regular intervals
function generateEllipseKeyframes(
  radiusX: number,
  radiusY: number,
  steps: number
): { x: number[]; y: number[] } {
  const xValues: number[] = [];
  const yValues: number[] = [];

  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    xValues.push(Math.cos(angle) * radiusX);
    yValues.push(Math.sin(angle) * radiusY);
  }

  return { x: xValues, y: yValues };
}

const ORBIT_KEYFRAMES = generateEllipseKeyframes(
  ORBIT_RADIUS_X,
  ORBIT_RADIUS_Y,
  36 // 36 steps = smooth 10° increments
);

/* ──────────────────────────────────────────────
   Loader3D Component
   ────────────────────────────────────────────── */
export function Loader3D({
  isLoading,
  maxDuration = 4000,
  appName = "فعاليات الكويت",
}: Loader3DProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  // Detect prefers-reduced-motion for accessibility
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // If reduced motion is preferred, progress is always 100% (static display)
  const [progress, setProgress] = useState(prefersReducedMotion ? 100 : 0);

  // ── Auto-dismiss after maxDuration ────────────
  useEffect(() => {
    const maxTimer = setTimeout(() => {
      setFadeOut(true);
    }, maxDuration);
    return () => clearTimeout(maxTimer);
  }, [maxDuration]);

  // ── Dismiss when loading completes ────────────
  useEffect(() => {
    if (!isLoading) {
      // Buffer: let the page render underneath before fading
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 600);
      return () => clearTimeout(fadeTimer);
    }
  }, [isLoading]);

  // ── Remove from DOM after exit animation ──────
  useEffect(() => {
    if (fadeOut) {
      const hideTimer = setTimeout(() => {
        setShowLoader(false);
      }, 800); // Match exit animation duration
      return () => clearTimeout(hideTimer);
    }
  }, [fadeOut]);

  // ── Progress ring animation (0% → 100% over 2.5s) ──
  useEffect(() => {
    // Skip animation if reduced motion is preferred (progress starts at 100%)
    if (prefersReducedMotion) return;

    const duration = 2500; // ms — matches the spec
    const startTime = Date.now();
    let rafId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReducedMotion]);

  // ── SVG progress ring calculations ────────────
  const ringRadius = 72;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringStrokeDashoffset =
    ringCircumference - (progress / 100) * ringCircumference;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "oklch(0.10 0.02 260)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
          }}
        >
          {/* ── Background: Radial vignette ────────── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 20%, oklch(0.06 0.02 260 / 80%) 100%)",
            }}
          />

          {/* ── Background: Faint grain texture ────── */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* ── Center content ─────────────────────── */}
          <div className="relative flex flex-col items-center justify-center">
            {/* ── Star + Ring + Particles wrapper ──── */}
            <div className="relative" style={{ width: 180, height: 180 }}>
              {/* ── Pulsing gold glow behind the star ── */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  width: 140,
                  height: 140,
                  left: "50%",
                  top: "50%",
                  marginLeft: -70,
                  marginTop: -70,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, oklch(0.76 0.13 85 / 30%) 0%, oklch(0.76 0.13 85 / 8%) 50%, transparent 70%)",
                }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.5 }
                    : {
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.1, 1],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ── Central 8-pointed star ──────────── */}
              <motion.div
                className="absolute"
                style={{
                  width: 120,
                  height: 120,
                  left: "50%",
                  top: "50%",
                  marginLeft: -60,
                  marginTop: -60,
                  willChange: "transform",
                }}
                animate={
                  prefersReducedMotion ? { rotate: 0 } : { rotate: 360 }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 8, // 8 seconds per revolution
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
              >
                <svg
                  viewBox="0 0 100 100"
                  width="120"
                  height="120"
                  style={{
                    clipPath: STAR_CLIP_PATH,
                    filter:
                      "drop-shadow(0 0 16px oklch(0.76 0.13 85 / 50%)) drop-shadow(0 0 4px oklch(0.82 0.14 90 / 80%))",
                  }}
                >
                  <defs>
                    <linearGradient
                      id={GOLD_GRADIENT_ID}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="oklch(0.82 0.14 90)" />
                      <stop offset="40%" stopColor="oklch(0.76 0.13 85)" />
                      <stop offset="70%" stopColor="oklch(0.70 0.11 75)" />
                      <stop offset="100%" stopColor="oklch(0.82 0.14 90)" />
                    </linearGradient>
                  </defs>
                  {/* Two overlapping squares rotated 45° = 8-pointed star */}
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill={`url(#${GOLD_GRADIENT_ID})`}
                    transform="rotate(0 50 50)"
                  />
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill={`url(#${GOLD_GRADIENT_ID})`}
                    transform="rotate(45 50 50)"
                  />
                </svg>
              </motion.div>

              {/* ── Progress ring (SVG) ─────────────── */}
              <svg
                className="absolute inset-0 pointer-events-none"
                viewBox="0 0 180 180"
                width="180"
                height="180"
                style={{ transform: "rotate(-90deg)" }} // Start from top
              >
                <defs>
                  <linearGradient
                    id={RING_GRADIENT_ID}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="oklch(0.82 0.14 90)" />
                    <stop offset="100%" stopColor="oklch(0.76 0.13 85)" />
                  </linearGradient>
                </defs>
                {/* Background track */}
                <circle
                  cx="90"
                  cy="90"
                  r={ringRadius}
                  fill="none"
                  stroke="oklch(0.76 0.13 85 / 8%)"
                  strokeWidth="2"
                />
                {/* Progress arc */}
                <circle
                  cx="90"
                  cy="90"
                  r={ringRadius}
                  fill="none"
                  stroke={`url(#${RING_GRADIENT_ID})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringStrokeDashoffset}
                  style={{
                    transition: prefersReducedMotion
                      ? "none"
                      : "stroke-dashoffset 0.08s linear",
                  }}
                />
              </svg>

              {/* ── Orbiting particles ──────────────── */}
              {!prefersReducedMotion &&
                PARTICLE_ANGLES.map((angleOffset, i) => {
                  // Each particle starts at a different point on the ellipse
                  // by offsetting the keyframe array
                  const offsetSteps = Math.round(
                    (angleOffset / 360) * ORBIT_KEYFRAMES.x.length
                  );
                  const rotatedX = [
                    ...ORBIT_KEYFRAMES.x.slice(offsetSteps),
                    ...ORBIT_KEYFRAMES.x.slice(0, offsetSteps),
                  ];
                  const rotatedY = [
                    ...ORBIT_KEYFRAMES.y.slice(offsetSteps),
                    ...ORBIT_KEYFRAMES.y.slice(0, offsetSteps),
                  ];

                  return (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute"
                      style={{
                        width: PARTICLE_SIZES[i],
                        height: PARTICLE_SIZES[i],
                        borderRadius: "50%",
                        backgroundColor: `oklch(0.82 0.14 90 / ${PARTICLE_OPACITIES[i]})`,
                        left: "50%",
                        top: "50%",
                        marginLeft: -(PARTICLE_SIZES[i] / 2),
                        marginTop: -(PARTICLE_SIZES[i] / 2),
                        boxShadow: `0 0 ${PARTICLE_SIZES[i] + 3}px oklch(0.76 0.13 85 / ${PARTICLE_OPACITIES[i] * 0.7}), 0 0 ${PARTICLE_SIZES[i] + 8}px oklch(0.76 0.13 85 / ${PARTICLE_OPACITIES[i] * 0.25})`,
                        willChange: "transform",
                      }}
                      animate={{
                        x: rotatedX,
                        y: rotatedY,
                      }}
                      transition={{
                        duration: ORBIT_DURATION,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* Subtle trail effect — larger, faded copy behind */}
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: PARTICLE_SIZES[i] * 2.5,
                          height: PARTICLE_SIZES[i] * 2.5,
                          top: -(PARTICLE_SIZES[i] * 0.75),
                          left: -(PARTICLE_SIZES[i] * 0.75),
                          backgroundColor: `oklch(0.82 0.14 90 / ${PARTICLE_OPACITIES[i] * 0.2})`,
                          filter: "blur(3px)",
                        }}
                      />
                    </motion.div>
                  );
                })}
            </div>

            {/* ── App name with gold gradient text ─── */}
            <motion.div
              className="gradient-text text-2xl sm:text-3xl font-bold mt-8 select-none"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              {appName}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader3D;
```

═══════════════════════════════════════════
# SECTION 6: FEATURE COMPONENTS (HIGH PRIORITY — business logic)
═══════════════════════════════════════════

---
## FILE: src/components/features/layout/navbar.tsx
---
```
"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useSafeAuth } from "@/hooks/use-safe-auth";
import { NavbarUserButton } from "@/components/features/auth/user-button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Calendar,
  LayoutDashboard,
  TicketCheck,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { Navbar3DBg } from "@/components/ui/navbar-3d-bg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

/* ──────────────────────────────────────────────
   Helpers for hydration-safe client detection
   ────────────────────────────────────────────── */

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/* ──────────────────────────────────────────────
   Nav link data
   ────────────────────────────────────────────── */

interface NavLink {
  href: string;
  labelKey: string;
  icon: React.ElementType;
  authOnly: boolean;
}

const NAV_LINKS: NavLink[] = [
  { href: "/events", labelKey: "events", icon: Search, authOnly: false },
  { href: "/bookings", labelKey: "bookings", icon: TicketCheck, authOnly: true },
  { href: "/profile", labelKey: "profile", icon: Calendar, authOnly: true },
  { href: "/dashboard", labelKey: "dashboard", icon: LayoutDashboard, authOnly: true },
];

/* ──────────────────────────────────────────────
   Desktop nav link with gold underline animation
   ────────────────────────────────────────────── */

function DesktopNavLink({
  href,
  label,
  icon: Icon,
  isActive,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-1.5 px-1 py-1.5 text-sm font-medium transition-colors duration-300"
    >
      <Icon className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <span
        className={
          isActive
            ? "text-primary"
            : "text-muted-foreground group-hover:text-foreground"
        }
      >
        {label}
      </span>
      {/* Gold underline — slides in from center on hover, always visible when active */}
      <span
        className={`absolute bottom-0 start-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* ──────────────────────────────────────────────
   Mobile nav link with stagger animation
   ────────────────────────────────────────────── */

const mobileItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 * i + 0.15,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: { opacity: 0, x: 24, transition: { duration: 0.2 } },
};

function MobileNavLink({
  href,
  label,
  icon: Icon,
  isActive,
  index,
  onClose,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  index: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={mobileItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link
        href={href}
        onClick={onClose}
        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
        }`}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
        {isActive && (
          <span className="ms-auto h-1.5 w-1.5 rounded-full bg-primary" />
        )}
      </Link>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Theme toggle button
   ────────────────────────────────────────────── */

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Toggle theme">
        <Sun className="h-4 w-4 opacity-50" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 relative overflow-hidden"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 90 : 0,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 0 : 1,
          rotate: theme === "light" ? -90 : 0,
          opacity: theme === "light" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
    </Button>
  );
}

/* ──────────────────────────────────────────────
   Main Navbar Component
   ────────────────────────────────────────────── */

export function Navbar() {
  const { isLoaded, isSignedIn } = useSafeAuth();
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Filter links based on auth
  const visibleLinks = NAV_LINKS.filter((link) => !link.authOnly || isSignedIn);

  // Check if a link is active
  const isActive = useCallback(
    (href: string) => {
      if (href === "/events") {
        return pathname === "/events" || pathname.startsWith("/events/");
      }
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled
          ? "h-18 bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_12px_oklch(0.15_0.03_260/6%)]"
          : "h-18 bg-transparent border-b border-transparent"
      }`}
    >
      {/* ── 3D Gradient Mesh Background (visible when scrolled) ── */}
      <Navbar3DBg isScrolled={scrolled} />

      <div className="relative z-10 container mx-auto flex h-full items-center justify-between px-4 lg:px-6">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 shrink-0"
        >
          <motion.div
            whileHover={{ rotate: 12, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center justify-center"
          >
            <Calendar className="h-6 w-6 text-primary" />
          </motion.div>
          <span className="gradient-text text-xl font-bold tracking-tight">
            {tCommon("appName")}
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {visibleLinks.map((link) => (
            <DesktopNavLink
              key={link.href}
              href={link.href}
              label={t(link.labelKey)}
              icon={link.icon}
              isActive={isActive(link.href)}
            />
          ))}
        </nav>

        {/* ── Desktop Right Section ── */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Auth state */}
          {!isLoaded && (
            <div className="h-9 w-28 animate-pulse rounded-md bg-muted/50" />
          )}
          {isLoaded && !isSignedIn && (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  {t("login")}
                </Button>
              </Link>
              <Link href="/register">
                <MagneticButton
                  strength={0.25}
                  className="glow-gold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 px-3 text-sm font-medium transition-all"
                >
                  {t("register")}
                </MagneticButton>
              </Link>
            </>
          )}
          {isLoaded && isSignedIn && <NavbarUserButton />}
        </div>

        {/* ── Mobile Right Section ── */}
        <div className="flex lg:hidden items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* ── Mobile Sheet Menu ── */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[340px] bg-background/80 backdrop-blur-2xl border-s-white/10 p-0"
        >
          <SheetHeader className="ps-6 pe-6 pt-6 pb-2">
            <SheetTitle className="flex items-center gap-2.5">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="gradient-text text-lg font-bold">{tCommon("appName")}</span>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <AnimatePresence mode="wait">
              <motion.nav className="space-y-1">
                {visibleLinks.map((link, i) => (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    label={t(link.labelKey)}
                    icon={link.icon}
                    isActive={isActive(link.href)}
                    index={i}
                    onClose={closeMobile}
                  />
                ))}
              </motion.nav>
            </AnimatePresence>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {/* Language Switcher */}
            <motion.div
              custom={visibleLinks.length}
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="px-1"
            >
              <LanguageSwitcher />
            </motion.div>

            {/* Auth Section */}
            <motion.div
              custom={visibleLinks.length + 1}
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4 space-y-2 px-1"
            >
              {!isLoaded && (
                <div className="h-9 w-full animate-pulse rounded-md bg-muted/50" />
              )}
              {isLoaded && !isSignedIn && (
                <>
                  <Link href="/login" onClick={closeMobile} className="block">
                    <Button variant="ghost" size="sm" className="w-full justify-center">
                      {t("login")}
                    </Button>
                  </Link>
                  <Link href="/register" onClick={closeMobile} className="block">
                    <MagneticButton
                      strength={0.2}
                      className="glow-gold inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 text-sm font-medium transition-all"
                    >
                      {t("register")}
                    </MagneticButton>
                  </Link>
                </>
              )}
              {isLoaded && isSignedIn && (
                <div className="flex items-center gap-3 px-3 py-2">
                  <NavbarUserButton />
                </div>
              )}
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
```

---
## FILE: src/components/features/layout/footer.tsx
---
```
"use client";

import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from "react";
import { useLocale } from "next-intl";
import { Loader3D } from "@/components/ui/loader-3d";

const emptySubscribe = () => () => {};

/**
 * SiteLoader — Shows the 3D animated loader on first visit,
 * then stores in sessionStorage so it doesn't repeat on navigation.
 */
export function SiteLoader() {
  const locale = useLocale();
  const alreadyLoaded = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem("site-loaded") === "true",
    () => false
  );

  const [isLoading, setIsLoading] = useState(!alreadyLoaded);
  const markLoadedRef = useRef(false);

  const markLoaded = useCallback(() => {
    if (!markLoadedRef.current) {
      markLoadedRef.current = true;
      sessionStorage.setItem("site-loaded", "true");
    }
  }, []);

  useEffect(() => {
    if (alreadyLoaded) return;

    // Mark as loaded after a minimum display time
    const timer = setTimeout(() => {
      setIsLoading(false);
      markLoaded();
    }, 2500);

    return () => clearTimeout(timer);
  }, [alreadyLoaded, markLoaded]);

  if (alreadyLoaded) return null;

  const appName = locale === "en" ? "Kuwait Events" : "فعاليات الكويت";

  return <Loader3D isLoading={isLoading} maxDuration={3500} appName={appName} />;
}
```

---
## FILE: src/components/features/events/category-carousel.tsx
---
```
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// Fallback emoji map for categories without icons
const CATEGORY_EMOJIS: Record<string, string> = {
  music: "🎵",
  sport: "⚽",
  tech: "💻",
  food: "🍽️",
  culture: "🎭",
  business: "💼",
  art: "🎨",
};

function getCategoryEmoji(category: any): string {
  if (category.iconUrl) return "";
  const slug = category.slug?.toLowerCase() ?? "";
  const nameEn = category.nameEn?.toLowerCase() ?? "";
  return (
    CATEGORY_EMOJIS[slug] ??
    CATEGORY_EMOJIS[nameEn] ??
    "📅"
  );
}

interface CategoryCarouselProps {
  categories: any[];
}

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  // Embla carousel setup — RTL-aware
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    direction: locale === "ar" ? "rtl" : "ltr",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    /* eslint-disable react-hooks/set-state-in-effect -- initial sync required after embla carousel mounts */
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    /* eslint-enable react-hooks/set-state-in-effect */
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="relative py-16 sm:py-20 bg-background overflow-hidden">
      {/* ── Interactive 3D shapes background ── */}
      <Section3DBg theme="categories" />

      {/* Subtle decorative blobs — theme-aware */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-1/4 -start-1/4 w-[50vw] h-[50vw] rounded-full animate-morph-blob opacity-20 dark:opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 8%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -end-1/4 w-[40vw] h-[40vw] rounded-full animate-morph-blob opacity-15 dark:opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 6%) 0%, transparent 70%)",
            animationDelay: "-4s",
            animationDuration: "14s",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                <span className="gradient-text">{tCommon("categories")}</span>
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                {t("categoriesSubtitle")}
              </p>
            </div>

            {/* Desktop navigation arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="h-10 w-10 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:text-primary disabled:opacity-30 transition-all"
                aria-label="Previous categories"
              >
                {locale === "ar" ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronLeft className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="h-10 w-10 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:text-primary disabled:opacity-30 transition-all"
                aria-label="Next categories"
              >
                {locale === "ar" ? (
                  <ChevronLeft className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Embla Carousel */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="relative">
            {/* Carousel viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-5" style={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
                {categories.map((cat: any, index: number) => {
                  const emoji = getCategoryEmoji(cat);
                  const eventCount =
                    cat._count?.events ?? cat.eventCount ?? 0;
                  const displayName = locale === "ar" ? cat.nameAr : (cat.nameEn || cat.nameAr);

                  return (
                    <div
                      key={cat.id}
                      className="flex-none w-[160px] sm:w-[180px] lg:w-[200px]"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link href={`/categories/${cat.slug}`}>
                          <TiltCard tiltAmount={6} className="h-full">
                            <Card className="h-full border-primary/10 bg-card hover:border-primary/40 transition-colors duration-300 cursor-pointer overflow-hidden group shadow-sm hover:shadow-md">
                              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                                {/* Category icon / emoji */}
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                  {cat.iconUrl ? (
                                    <img
                                      src={cat.iconUrl}
                                      alt={displayName}
                                      className="h-8 w-8 object-contain"
                                    />
                                  ) : (
                                    <span className="text-2xl">{emoji}</span>
                                  )}
                                </div>

                                {/* Category name */}
                                <h3 className="font-bold text-sm leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                                  {displayName}
                                </h3>

                                {/* Event count */}
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  <span>
                                    {eventCount}{" "}
                                    {eventCount === 1
                                      ? t("eventSingular")
                                      : t("eventPlural")}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          </TiltCard>
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Edge fade gradients */}
            <div className="pointer-events-none absolute inset-y-0 start-0 w-12 bg-gradient-to-e from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 end-0 w-12 bg-gradient-to-s from-background to-transparent" />
          </div>
        </AnimatedSection>

        {/* Mobile dots indicator */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-primary/25 hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---
## FILE: src/components/features/events/featured-events-grid.tsx
---
```
"use client";

import { EventCard } from "./event-card";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { ArrowLeft, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturedEventsGridProps {
  events: any[];
}

export function FeaturedEventsGrid({ events }: FeaturedEventsGridProps) {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  // Empty state with premium design
  if (events.length === 0) {
    return (
      <section className="relative container mx-auto px-4 py-16 overflow-hidden">
        {/* 3D shapes background */}
        <Section3DBg theme="events" />

        {/* Decorative gold line */}
        <div className="relative z-10 flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <AnimatedSection direction="up">
          <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-transparent max-w-md mx-auto overflow-hidden">
            <CardContent className="p-10 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
              >
                <Calendar className="h-10 w-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 gradient-text">
                {t("noFeaturedTitle")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("noFeaturedSubtitle")}
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <section className="relative container mx-auto px-4 py-16 overflow-hidden">
      {/* 3D shapes background */}
      <Section3DBg theme="events" />

      {/* Decorative gold line above section */}
      <div className="relative z-10 flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <Sparkles className="h-5 w-5 text-primary/60" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Section header */}
      <AnimatedSection direction="up" delay={0}>
        <div className="relative z-10 flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text leading-tight">
              {tCommon("featuredEvents")}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              {t("featuredSubtitle")}
            </p>
          </div>
          <Link href="/events" className="hidden sm:block">
            <Button
              variant="ghost"
              className="group gap-2 text-primary hover:text-primary hover:bg-primary/10 transition-colors"
            >
              {t("viewAll")}
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      {/* Events grid */}
      <AnimatedSection direction="up" delay={0.15}>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event: any, index: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <EventCard event={event} variant="featured" />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Mobile "View All" link */}
      <div className="relative z-10 mt-8 text-center sm:hidden">
        <Link href="/events">
          <Button
            variant="outline"
            className="gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
          >
            {t("viewAll")}
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
```

---
## FILE: src/components/features/events/event-card.tsx
---
```
"use client";

import { Link } from "@/i18n/routing";
import { TiltCard } from "@/components/ui/tilt-card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatKWD } from "@/lib/utils";
import { Calendar, MapPin, Clock, Users, Crown } from "lucide-react";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useSyncExternalStore,
} from "react";

/* ──────────────────────────────────────────────
   Media-query hook (SSR-safe, no setState-in-effect)
   ────────────────────────────────────────────── */
function useMediaQuery(query: string, ssrFallback = false): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query]
  );
  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  );
  const getServerSnapshot = useCallback(() => ssrFallback, [ssrFallback]);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/* ──────────────────────────────────────────────
   Props
   ────────────────────────────────────────────── */
interface EventCardProps {
  event: {
    id: string;
    titleAr: string;
    titleEn?: string | null;
    slug: string;
    coverImageUrl: string;
    startDate: string | Date;
    startTime: string;
    venue?: { nameAr: string; city: string } | null;
    category?: { nameAr: string; slug: string } | null;
    ticketTiers: {
      price: string;
      quantityAvailable?: number;
      quantityTotal?: number;
      quantitySold?: number;
    }[];
    isFeatured?: boolean;
  };
  variant?: "default" | "compact" | "featured";
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export function EventCard({ event, variant = "default" }: EventCardProps) {
  /* ── Derived data ── */
  const lowestPrice =
    event.ticketTiers.length > 0
      ? Math.min(...event.ticketTiers.map((t) => parseFloat(t.price)))
      : 0;
  const isFree = lowestPrice === 0;
  const date = new Date(event.startDate);

  const availableTickets = event.ticketTiers.reduce((sum, t) => {
    if (t.quantityAvailable !== undefined) return sum + t.quantityAvailable;
    if (t.quantityTotal !== undefined && t.quantitySold !== undefined)
      return sum + (t.quantityTotal - t.quantitySold);
    return sum;
  }, 0);

  /* ── Hover video overlay state ── */
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    false
  );
  const isMobile = useMediaQuery("(hover: none)", false);

  const imageSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileDismissRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [videoSrc, setVideoSrc] = useState<string | null>(null); // null = not yet loaded
  const [isVideoActive, setIsVideoActive] = useState(false);

  /* ── Lazy-load video via IntersectionObserver ── */
  useEffect(() => {
    if (variant === "featured" || prefersReducedMotion) return;

    const el = imageSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc("/videos/event-hover-overlay.mp4");
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, prefersReducedMotion]);

  /* ── Play / pause video based on active state ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoActive) {
      video.play().catch(() => {
        /* autoplay may be blocked — silently ignore */
      });
    } else {
      video.pause();
    }
  }, [isVideoActive]);

  /* ── Clean up timers on unmount ── */
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (mobileDismissRef.current) clearTimeout(mobileDismissRef.current);
    };
  }, []);

  /* ── Desktop hover handlers ── */
  const handleMouseEnter = useCallback(() => {
    if (prefersReducedMotion || isMobile) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsVideoActive(true);
    }, 300);
  }, [prefersReducedMotion, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsVideoActive(false);
  }, []);

  /* ── Mobile touch handler ── */
  const handleTouchStart = useCallback(() => {
    if (prefersReducedMotion) return;
    if (mobileDismissRef.current) clearTimeout(mobileDismissRef.current);
    setIsVideoActive((prev) => {
      const next = !prev;
      if (next) {
        // Auto-dismiss after 3 seconds
        mobileDismissRef.current = setTimeout(() => {
          setIsVideoActive(false);
        }, 3000);
      }
      return next;
    });
  }, [prefersReducedMotion]);

  /* ────────────────────────────────────────────
     Featured variant — cinematic overlay card
     ──────────────────────────────────────────── */
  if (variant === "featured") {
    return (
      <Link
        href={`/events/${event.slug}`}
        className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
      >
        <TiltCard className="rounded-xl" tiltAmount={8}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            {/* Image */}
            <Image
              src={event.coverImageUrl}
              alt={event.titleAr}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Cinematic gradient overlay — darker at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/20 group-hover:to-transparent" />

            {/* Gold border on hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-primary/40" />

            {/* Category badge — top-start, gold background */}
            {event.category && (
              <Badge className="absolute top-4 start-4 bg-primary text-primary-foreground border-0 shadow-lg text-xs font-semibold px-3 py-1">
                {event.category.nameAr}
              </Badge>
            )}

            {/* Featured crown badge — top-end */}
            {event.isFeatured && (
              <div className="absolute top-4 end-4 flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-yellow-300 border border-yellow-500/20">
                <Crown className="h-3 w-3" />
                <span>مميز</span>
              </div>
            )}

            {/* Bottom content area */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-2 line-clamp-2">
                {event.titleAr}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  {date.toLocaleDateString("ar-KW")}
                </span>
                {event.venue && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {event.venue.nameAr}
                  </span>
                )}
              </div>

              {/* Price — gold gradient at bottom-end */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-sm text-white/60">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{event.startTime}</span>
                </div>
                <span className="gradient-text text-base sm:text-lg font-bold">
                  {isFree ? "مجاني" : `ابتداءً من ${formatKWD(lowestPrice)}`}
                </span>
              </div>
            </div>
          </div>
        </TiltCard>
      </Link>
    );
  }

  /* ────────────────────────────────────────────
     Default / Compact variant — elegant card + hover video
     ──────────────────────────────────────────── */
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
    >
      <TiltCard
        className="rounded-xl"
        tiltAmount={variant === "compact" ? 5 : 8}
      >
        <div className="overflow-hidden rounded-xl bg-card border border-border/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:border-primary/30">
          {/* ── Image section ── */}
          <div
            ref={imageSectionRef}
            className="relative aspect-[16/10] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
          >
            <Image
              src={event.coverImageUrl}
              alt={event.titleAr}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Golden particle hover video overlay */}
            {videoSrc && !prefersReducedMotion && (
              <video
                ref={videoRef}
                src={videoSrc}
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-500 ${
                  isVideoActive ? "opacity-50" : "opacity-0"
                }`}
              />
            )}

            {/* Subtle gradient at bottom of image for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card/40 to-transparent" />

            {/* Featured badge */}
            {event.isFeatured && (
              <div className="absolute top-3 start-3 z-10 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-lg border-0">
                <Crown className="h-3 w-3" />
                <span>مميز</span>
              </div>
            )}
          </div>

          {/* ── Content section ── */}
          <div className={variant === "compact" ? "p-3" : "p-4"}>
            {/* Category badge */}
            {event.category && (
              <Badge
                variant="secondary"
                className="mb-2 text-[0.68rem] font-medium"
              >
                {event.category.nameAr}
              </Badge>
            )}

            {/* Title */}
            <h3
              className={`font-semibold leading-tight line-clamp-2 mb-2 ${
                variant === "compact" ? "text-sm" : "text-base"
              }`}
            >
              {event.titleAr}
            </h3>

            {/* Date / Time / Venue */}
            <div
              className={`space-y-1.5 text-muted-foreground ${
                variant === "compact" ? "text-xs" : "text-sm"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                <span>{date.toLocaleDateString("ar-KW")}</span>
                <span className="mx-1 text-border">|</span>
                <Clock className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                <span>{event.startTime}</span>
              </div>
              {event.venue && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                  <span className="truncate">{event.venue.nameAr}</span>
                </div>
              )}
            </div>

            {/* Bottom section — price & tickets */}
            <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between">
              <span
                className={`font-bold gradient-text ${
                  variant === "compact" ? "text-sm" : "text-base"
                }`}
              >
                {isFree ? "مجاني" : `من ${formatKWD(lowestPrice)}`}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                {availableTickets} متبقي
              </span>
            </div>
          </div>
        </div>
      </TiltCard>
    </Link>
  );
}
```

---
## FILE: src/components/features/events/event-detail-client.tsx
---
```
"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Star,
  User,
  ChevronLeft,
  Sparkles,
  Crown,
} from "lucide-react";

import { BookingForm } from "./booking-form";
import { EventCard } from "./event-card";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { AnimatedSection } from "@/components/ui/animated-section";
import { TiltCard } from "@/components/ui/tilt-card";
import { formatKWD } from "@/lib/utils";

/* ──────────────────────────────────────────────
   Props
   ────────────────────────────────────────────── */
interface EventDetailClientProps {
  event: {
    id: string;
    titleAr: string;
    titleEn?: string | null;
    descriptionAr: string;
    descriptionEn?: string | null;
    coverImageUrl: string;
    startDate: string;
    startTime: string;
    endTime?: string | null;
    isFeatured: boolean;
    category: { id: string; nameAr: string; nameEn?: string | null; slug: string };
    venue: {
      id: string;
      nameAr: string;
      address: string;
      city: string;
      capacity?: number | null;
    } | null;
    organizer: { id: string; name: string; avatarUrl?: string | null } | null;
    ticketTiers: {
      id: string;
      nameAr: string;
      type: string;
      price: string;
      quantityTotal: number;
      quantitySold: number;
      quantityAvailable: number;
      maxPerBooking: number;
    }[];
    reviews: {
      averageRating: number;
      totalReviews: number;
      recent: {
        id: string;
        rating: number;
        comment?: string | null;
        user: { name: string };
      }[];
    };
    relatedEvents: {
      id: string;
      titleAr: string;
      slug: string;
      coverImageUrl: string;
      startDate: string;
      startTime: string;
      venue: { nameAr: string; city: string };
      category: { nameAr: string; slug: string };
      lowestPrice: string;
      isFeatured?: boolean;
      ticketTiers: { price: string; quantityAvailable?: number; quantityTotal?: number; quantitySold?: number }[];
    }[];
  };
}

/* ──────────────────────────────────────────────
   Gold accent divider
   ────────────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <Sparkles className="h-4 w-4 text-primary/40" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export function EventDetailClient({ event }: EventDetailClientProps) {
  const t = useTranslations("eventDetail");
  const tc = useTranslations("common");
  const locale = useLocale();

  const date = new Date(event.startDate);
  const isFree = event.ticketTiers.every((tier) => tier.price === "0.000");

  const localeCode = locale === "ar" ? "ar-KW" : "en-US";

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="cta" />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.10 0.02 260 / 60%) 0%, oklch(0.10 0.02 260 / 30%) 40%, oklch(0.10 0.02 260 / 50%) 100%)",
        }}
      />

      <div className="relative z-10 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          {/* ── Breadcrumb ── */}
          <AnimatedSection direction="down" delay={0}>
            <nav
              className="mb-6 flex items-center gap-1.5 text-sm text-white/60"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="transition-colors hover:text-primary"
              >
                {tc("home")}
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 text-primary/50" />
              <Link
                href="/events"
                className="transition-colors hover:text-primary"
              >
                {tc("events")}
              </Link>
              {event.category && (
                <>
                  <ChevronLeft className="h-3.5 w-3.5 text-primary/50" />
                  <Link
                    href={`/categories/${event.category.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {event.category.nameAr}
                  </Link>
                </>
              )}
              <ChevronLeft className="h-3.5 w-3.5 text-primary/50" />
              <span className="text-white/90 font-medium truncate max-w-[200px]">
                {event.titleAr}
              </span>
            </nav>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ── Main Content ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Cover Image */}
              <AnimatedSection direction="up" delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden group aspect-[21/9]">
                  <Image
                    src={event.coverImageUrl}
                    alt={event.titleAr}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-primary/40" />
                  {/* Bottom gradient for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </AnimatedSection>

              {/* Title + Quick Info */}
              <AnimatedSection direction="up" delay={0.2}>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                      {event.category?.nameAr}
                    </span>
                    {event.isFeatured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                        <Crown className="h-3 w-3" />
                        {t("featured")}
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                    {event.titleAr}
                  </h1>
                  {event.titleEn && (
                    <p className="text-white/50 text-lg mb-4">
                      {event.titleEn}
                    </p>
                  )}

                  {/* Quick info pills */}
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white/80 border border-white/10">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>
                        {date.toLocaleDateString(localeCode, {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white/80 border border-white/10">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>
                        {event.startTime}
                        {event.endTime ? ` — ${event.endTime}` : ""}
                      </span>
                    </div>
                    {event.venue && (
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white/80 border border-white/10">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>
                          {event.venue.nameAr}، {event.venue.city}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              <GoldDivider />

              {/* About Section */}
              <AnimatedSection direction="up" delay={0.25}>
                <div>
                  <h2 className="gradient-text text-xl font-semibold mb-4">
                    {t("about")}
                  </h2>
                  <div className="prose prose-sm prose-invert max-w-none text-white/70 whitespace-pre-line leading-relaxed">
                    {event.descriptionAr}
                  </div>
                </div>
              </AnimatedSection>

              <GoldDivider />

              {/* Venue Section */}
              {event.venue && (
                <AnimatedSection direction="up" delay={0.3}>
                  <div>
                    <h2 className="gradient-text text-xl font-semibold mb-4">
                      {t("venue")}
                    </h2>
                    <motion.div
                      className="glass-card rounded-2xl p-6"
                      whileHover={{
                        borderColor: "oklch(0.76 0.13 85 / 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 border border-primary/20">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-lg">
                            {event.venue.nameAr}
                          </p>
                          <p className="text-sm text-white/60 mt-1">
                            {event.venue.address}، {event.venue.city}
                          </p>
                          {event.venue.capacity && (
                            <p className="text-sm text-white/50 mt-1">
                              {t("capacity")}:{" "}
                              {event.venue.capacity.toLocaleString(localeCode)}{" "}
                              {t("person")}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              )}

              {/* Organizer Section */}
              {event.organizer && (
                <AnimatedSection direction="up" delay={0.35}>
                  <div>
                    <h2 className="gradient-text text-xl font-semibold mb-4">
                      {t("organizer")}
                    </h2>
                    <motion.div
                      className="glass-card rounded-2xl p-6"
                      whileHover={{
                        borderColor: "oklch(0.76 0.13 85 / 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/20">
                          {event.organizer.avatarUrl ? (
                            <Image
                              src={event.organizer.avatarUrl}
                              alt={event.organizer.name}
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                            />
                          ) : (
                            <User className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-white text-lg">
                            {event.organizer.name}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              )}

              {/* Reviews Section */}
              {event.reviews.totalReviews > 0 && (
                <>
                  <GoldDivider />
                  <AnimatedSection direction="up" delay={0.4}>
                    <div>
                      <h2 className="gradient-text text-xl font-semibold mb-4">
                        {t("reviews")}
                      </h2>

                      {/* Rating summary */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.round(event.reviews.averageRating)
                                  ? "text-primary fill-primary"
                                  : "text-white/20"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-white/60">
                          {event.reviews.averageRating.toFixed(1)} (
                          {event.reviews.totalReviews} {t("review")})
                        </span>
                      </div>

                      {/* Recent reviews */}
                      <div className="space-y-4">
                        {event.reviews.recent.map((review) => (
                          <motion.div
                            key={review.id}
                            className="glass-card rounded-xl p-4"
                            whileHover={{
                              borderColor: "oklch(0.76 0.13 85 / 0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium text-sm text-white">
                                {review.user.name}
                              </span>
                              <div className="flex items-center gap-0.5">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className="h-3 w-3 text-primary fill-primary"
                                    />
                                  )
                                )}
                              </div>
                            </div>
                            {review.comment && (
                              <p className="text-sm text-white/60">
                                {review.comment}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </>
              )}
            </div>

            {/* ── Sidebar — Booking Form ── */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="left" delay={0.3}>
                <div className="sticky top-20">
                  <div className="rounded-2xl border border-primary/20 p-1.5 bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/5">
                    <BookingForm
                      eventId={event.id}
                      ticketTiers={event.ticketTiers}
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* ── Similar Events ── */}
          {event.relatedEvents && event.relatedEvents.length > 0 && (
            <>
              <div className="mt-16">
                <GoldDivider />
              </div>

              <AnimatedSection direction="up" delay={0.2} className="mt-8">
                <h2 className="gradient-text text-2xl font-bold mb-8">
                  {t("similarEvents")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.relatedEvents.map((related, idx) => (
                    <AnimatedSection
                      key={related.id}
                      direction="up"
                      delay={0.1 + idx * 0.08}
                    >
                      <TiltCard className="rounded-xl" tiltAmount={6}>
                        <EventCard
                          event={{
                            id: related.id,
                            titleAr: related.titleAr,
                            slug: related.slug,
                            coverImageUrl: related.coverImageUrl,
                            startDate: related.startDate,
                            startTime: related.startTime,
                            venue: related.venue,
                            category: related.category,
                            ticketTiers: related.ticketTiers,
                            isFeatured: related.isFeatured,
                          }}
                          variant="compact"
                        />
                      </TiltCard>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
```

---
## FILE: src/components/features/events/browse-events-client.tsx
---
```
"use client";

import { useState } from "react";
import { useEvents } from "@/hooks/use-events";
import { EventCard } from "./event-card";
import { EventFilters } from "./event-filters";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertTriangle,
  X,
  SearchX,
} from "lucide-react";

interface BrowseEventsClientProps {
  categories: any[];
}

export function BrowseEventsClient({ categories }: BrowseEventsClientProps) {
  const t = useTranslations("events");
  const tc = useTranslations("common");
  const [filters, setFilters] = useState({
    page: 1,
    limit: 20,
    category: "",
    search: "",
    startDateFrom: "",
    startDateTo: "",
    sortBy: "startDate",
    sortOrder: "asc" as "asc" | "desc",
  });

  const { data, isLoading, error } = useEvents(filters);

  const handleFilterChange = (newFilters: Record<string, any>) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setFilters({
      page: 1,
      limit: 20,
      category: "",
      search: "",
      startDateFrom: "",
      startDateTo: "",
      sortBy: "startDate",
      sortOrder: "asc",
    });
  };

  const hasActiveFilters =
    filters.category || filters.search || filters.startDateFrom || filters.startDateTo;

  return (
    <section className="relative py-8 overflow-hidden min-h-screen">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="events" />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.995 0.004 85 / 70%) 0%, oklch(0.995 0.004 85 / 50%) 40%, oklch(0.995 0.004 85 / 70%) 100%)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Gold decorative line divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Section header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text leading-tight">
              {t("pageTitle")}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              {t("subtitle")}
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <EventFilters
          categories={categories}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={clearFilters}
        />

        {/* Loading state with shimmer */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden glass-card"
              >
                <Skeleton className="aspect-[16/10] w-full shimmer" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4 shimmer" />
                  <Skeleton className="h-4 w-1/2 shimmer" />
                  <Skeleton className="h-4 w-1/3 shimmer" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state with premium styling */}
        {error && (
          <AnimatedSection direction="up">
            <Card className="border-destructive/20 bg-gradient-to-b from-destructive/5 to-transparent max-w-lg mx-auto mt-8">
              <CardContent className="p-10 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10"
                >
                  <AlertTriangle className="h-10 w-10 text-destructive" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {tc("error")}
                </h3>
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                >
                  {tc("retry")}
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        )}

        {/* Empty state with premium styling */}
        {data?.data?.events && data.data.events.length === 0 && (
          <AnimatedSection direction="up">
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-transparent max-w-md mx-auto mt-8">
              <CardContent className="p-10 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
                >
                  <SearchX className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {t("noEvents")}
                </h3>
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="mt-4 gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                  >
                    <X className="h-4 w-4" />
                    {tc("clearFilters")}
                  </Button>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        )}

        {/* Events grid with stagger animation */}
        {data?.data?.events && data.data.events.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {data.data.events.map((event: any, index: number) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>

            {/* Premium Pagination */}
            {data.meta && data.meta.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-10">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(filters.page - 1)}
                  disabled={filters.page <= 1}
                  className="gap-1.5 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 disabled:opacity-40 disabled:hover:bg-transparent"
                  size="sm"
                >
                  <ChevronRight className="h-4 w-4" />
                  {t("prev")}
                </Button>

                <span className="text-sm text-muted-foreground px-3 font-medium">
                  {t("pageOf", {
                    page: data.meta.page,
                    total: data.meta.totalPages,
                  })}
                </span>

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(filters.page + 1)}
                  disabled={filters.page >= data.meta.totalPages}
                  className="gap-1.5 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 disabled:opacity-40 disabled:hover:bg-transparent"
                  size="sm"
                >
                  {t("next")}
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
```

---
## FILE: src/components/features/events/cta-trust-section.tsx
---
```
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Zap,
  Star,
  ArrowLeft,
  MapPin,
  Calendar,
  Tag,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Animation config — premium cubic-bezier
   ────────────────────────────────────────────── */

const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: CUBIC_PREMIUM,
    },
  },
};

/* ──────────────────────────────────────────────
   Feature card data
   ────────────────────────────────────────────── */

interface FeatureItem {
  icon: React.ElementType;
  emoji: string;
  titleKey: string;
  descKey: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: ShieldCheck,
    emoji: "🎫",
    titleKey: "ctaSecureTitle",
    descKey: "ctaSecureDesc",
  },
  {
    icon: Zap,
    emoji: "⚡",
    titleKey: "ctaFastTitle",
    descKey: "ctaFastDesc",
  },
  {
    icon: Star,
    emoji: "🌟",
    titleKey: "ctaBestTitle",
    descKey: "ctaBestDesc",
  },
];

/* ──────────────────────────────────────────────
   CTA/Trust Section — "Why Kuwait Events?"
   Uses 3D floating shapes instead of video
   ────────────────────────────────────────────── */

interface CTATrustSectionProps {
  upcomingCount?: number;
  categoriesCount?: number;
  venuesCount?: number;
}

export function CTATrustSection({
  upcomingCount = 0,
  categoriesCount = 0,
  venuesCount = 0,
}: CTATrustSectionProps) {
  const t = useTranslations("home");

  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* ── Interactive 3D shapes background (replaces video) ── */}
      <Section3DBg theme="cta" />

      {/* ── Decorative gradient blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-1/4 -start-1/4 w-[60vw] h-[60vw] rounded-full animate-morph-blob opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 10%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -end-1/4 w-[50vw] h-[50vw] rounded-full animate-morph-blob opacity-8"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 8%) 0%, transparent 70%)",
            animationDelay: "-3s",
            animationDuration: "12s",
          }}
        />
      </div>

      {/* ── Gold accent line at top ── */}
      <div
        className="absolute top-0 inset-x-0 h-px z-[2]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.76 0.13 85 / 40%) 30%, oklch(0.76 0.13 85 / 60%) 50%, oklch(0.76 0.13 85 / 40%) 70%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection direction="up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
            {t("ctaTitle")}
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            {t("ctaSubtitle")}
          </p>
        </AnimatedSection>

        {/* Feature cards — staggered reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                variants={cardVariant}
                className="rounded-2xl p-6 sm:p-8 text-center group transition-all duration-500 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Gold icon / emoji */}
                <div className="flex justify-center mb-5">
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <span className="text-2xl sm:text-3xl">{feature.emoji}</span>
                    <Icon className="absolute -bottom-1 -end-1 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA button */}
        <AnimatedSection direction="up" delay={0.3} className="text-center mb-14 sm:mb-18">
          <MagneticButton asChild strength={0.25}>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg glow-gold transition-all duration-300 hover:brightness-110 hover:glow-gold-lg"
            >
              <span>{t("ctaButton")}</span>
              <ArrowLeft className="h-5 w-5 shrink-0 rotate-180" style={{ transform: "scaleX(-1)" }} />
            </Link>
          </MagneticButton>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Upcoming events */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-5 w-5 text-primary/70" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  {upcomingCount > 0 ? (
                    <AnimatedCounter target={upcomingCount} />
                  ) : (
                    "0"
                  )}
                </span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm tracking-wider uppercase">
                {t("upcomingEventsCount")}
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-border hidden sm:block" />

            {/* Categories */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <Tag className="h-5 w-5 text-primary/70" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  {categoriesCount > 0 ? (
                    <AnimatedCounter target={categoriesCount} />
                  ) : (
                    "0"
                  )}
                </span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm tracking-wider uppercase">
                {t("categoriesCount")}
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-border hidden sm:block" />

            {/* Venues */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-5 w-5 text-primary/70" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  {venuesCount > 0 ? (
                    <AnimatedCounter target={venuesCount} />
                  ) : (
                    "0"
                  )}
                </span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm tracking-wider uppercase">
                {t("venuesCount")}
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Gold accent line at bottom ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-px z-[2]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.76 0.13 85 / 30%) 30%, oklch(0.76 0.13 85 / 50%) 50%, oklch(0.76 0.13 85 / 30%) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
```

---
## FILE: src/components/features/events/booking-form.tsx
---
```
"use client";

import { useState, useCallback } from "react";
import { useSafeAuth } from "@/hooks/use-safe-auth";
import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { TicketSelector } from "./ticket-selector";
import { useCreateBooking } from "@/hooks/use-booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatKWD } from "@/lib/utils";
import { Loader2, AlertCircle, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TicketTier {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  type: string;
  price: string;
  quantityTotal: number;
  quantitySold: number;
  quantityAvailable: number;
  maxPerBooking: number;
}

interface BookingFormProps {
  eventId: string;
  ticketTiers: TicketTier[];
}

export function BookingForm({ eventId, ticketTiers }: BookingFormProps) {
  const { isSignedIn, isLoaded } = useSafeAuth();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("booking");
  const createBooking = useCreateBooking();

  const [ticketSelection, setTicketSelection] = useState<
    { ticketTierId: string; quantity: number }[]
  >([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [attendeeName, setAttendeeName] = useState("");
  const [attendeePhone, setAttendeePhone] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSelectionChange = useCallback(
    (selection: { ticketTierId: string; quantity: number }[], total: number) => {
      setTicketSelection(selection);
      setTotalAmount(total);
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isLoaded) return;

    if (!isSignedIn) {
      router.push("/login");
      return;
    }

    if (ticketSelection.length === 0) {
      setError(t("mustSelectOne"));
      return;
    }

    if (!attendeeName.trim() || !attendeePhone.trim() || !attendeeEmail.trim()) {
      setError(t("fillAllFields"));
      return;
    }

    try {
      const result = await createBooking.mutateAsync({
        eventId,
        attendeeName: attendeeName.trim(),
        attendeePhone: attendeePhone.trim(),
        attendeeEmail: attendeeEmail.trim(),
        tickets: ticketSelection,
      });

      if (result.data?.booking?.id) {
        try {
          const paymentRes = await fetch("/api/v1/payments/initiate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookingId: result.data.booking.id, method: "KNET" }),
          });
          const paymentData = await paymentRes.json();

          if (paymentData.data?.redirectUrl) {
            window.location.href = paymentData.data.redirectUrl;
          } else {
            router.push(`/${locale}/bookings/${result.data.booking.id}?pending=true`);
          }
        } catch {
          router.push(`/${locale}/bookings/${result.data.booking.id}?pending=true`);
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t("bookingError");
      setError(message);
    }
  };

  const isFree =
    totalAmount === 0 &&
    ticketSelection.length > 0 &&
    ticketTiers.every((t) => t.price === "0.000");

  return (
    <div className="glass-card rounded-2xl p-6">
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-4 gradient-text">{t("selectTickets")}</h2>

      <TicketSelector ticketTiers={ticketTiers} onSelectionChange={handleSelectionChange} />

      {(totalAmount > 0 || isFree) && ticketSelection.length > 0 && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="border-t border-primary/10 pt-4">
            <h3 className="font-semibold mb-3 text-foreground">
              <span className="gold-underline">{t("attendeeInfo")}</span>
            </h3>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="attendee-name"
                  className="block text-sm font-medium mb-1 text-foreground/80"
                >
                  {t("fullName")}
                </label>
                <Input
                  id="attendee-name"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder="محمد أحمد"
                  required
                  className="focus-visible:ring-primary/50 focus-visible:border-primary/50"
                />
              </div>
              <div>
                <label
                  htmlFor="attendee-phone"
                  className="block text-sm font-medium mb-1 text-foreground/80"
                >
                  {t("phone")}
                </label>
                <Input
                  id="attendee-phone"
                  value={attendeePhone}
                  onChange={(e) => setAttendeePhone(e.target.value)}
                  placeholder="96599998888"
                  dir="ltr"
                  required
                  className="focus-visible:ring-primary/50 focus-visible:border-primary/50"
                />
              </div>
              <div>
                <label
                  htmlFor="attendee-email"
                  className="block text-sm font-medium mb-1 text-foreground/80"
                >
                  {t("email")}
                </label>
                <Input
                  id="attendee-email"
                  type="email"
                  value={attendeeEmail}
                  onChange={(e) => setAttendeeEmail(e.target.value)}
                  placeholder="mohammed@example.com"
                  dir="ltr"
                  required
                  className="focus-visible:ring-primary/50 focus-visible:border-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Error state with animation */}
          <AnimatePresence>
            {error && (
              <motion.div
                role="alert"
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 flex items-center gap-2"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Booking button with gold gradient */}
          <Button
            type="submit"
            className="w-full glow-gold bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground font-semibold text-base hover:opacity-95 transition-opacity"
            size="lg"
            disabled={createBooking.isPending || ticketSelection.length === 0}
          >
            {createBooking.isPending ? (
              <>
                <Loader2 className="h-4 w-4 me-2 animate-spin" />
                {t("bookingInProgress")}
              </>
            ) : (
              `${t("bookNow")} — ${formatKWD(totalAmount)}`
            )}
          </Button>

          {/* Login required notice */}
          {!isSignedIn && isLoaded && (
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
              <LogIn className="h-3.5 w-3.5" />
              {t("mustLogin")}
            </p>
          )}
        </form>
      )}

      {totalAmount === 0 && !isFree && ticketSelection.length === 0 && (
        <p className="text-sm text-muted-foreground text-center mt-4">
          {t("selectTicketsFirst")}
        </p>
      )}
    </div>
  );
}
```

---
## FILE: src/components/features/events/ticket-selector.tsx
---
```
"use client";

import { useState, useMemo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { formatKWD } from "@/lib/utils";
import { Minus, Plus, Ticket, Sparkles, Bird, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TicketTier {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  type: string;
  price: string;
  quantityTotal: number;
  quantitySold: number;
  quantityAvailable: number;
  maxPerBooking: number;
}

interface TicketSelectorProps {
  ticketTiers: TicketTier[];
  onSelectionChange: (selection: { ticketTierId: string; quantity: number }[], total: number) => void;
}

const PREMIUM_CUBIC = [0.22, 1, 0.36, 1] as const;

function getTypeBadge(type: string, t: (key: string) => string) {
  switch (type) {
    case "VIP":
      return (
        <Badge className="bg-primary/15 text-primary border-primary/25 hover:bg-primary/20 gap-1">
          <Sparkles className="h-3 w-3" />
          {t("vip")}
        </Badge>
      );
    case "EARLY_BIRD":
      return (
        <Badge className="bg-primary/15 text-primary border-primary/25 hover:bg-primary/20 gap-1">
          <Bird className="h-3 w-3" />
          {t("earlyBird")}
        </Badge>
      );
    case "GROUP":
      return (
        <Badge className="bg-primary/15 text-primary border-primary/25 hover:bg-primary/20 gap-1">
          <Users className="h-3 w-3" />
          {t("group")}
        </Badge>
      );
    default:
      return null;
  }
}

export function TicketSelector({ ticketTiers, onSelectionChange }: TicketSelectorProps) {
  const t = useTranslations("tickets");
  const prefersReducedMotion = useReducedMotion();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const { selection, totalAmount } = useMemo(() => {
    const sel: { ticketTierId: string; quantity: number }[] = [];
    let total = 0;
    for (const [tierId, qty] of Object.entries(quantities)) {
      if (qty > 0) {
        sel.push({ ticketTierId: tierId, quantity: qty });
        const tier = ticketTiers.find((t) => t.id === tierId);
        if (tier) total += parseFloat(tier.price) * qty;
      }
    }
    return { selection: sel, totalAmount: total };
  }, [quantities, ticketTiers]);

  // Fix: Use useEffect instead of useMemo for side effect
  useEffect(() => {
    onSelectionChange(selection, totalAmount);
  }, [selection, totalAmount, onSelectionChange]);

  const updateQuantity = (tierId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[tierId] ?? 0;
      const tier = ticketTiers.find((t) => t.id === tierId);
      if (!tier) return prev;
      const newQty = Math.max(0, Math.min(current + delta, tier.maxPerBooking, tier.quantityAvailable));
      return { ...prev, [tierId]: newQty };
    });
  };

  const totalTickets = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  if (ticketTiers.length === 0) {
    return (
      <AnimatedSection direction="up" delay={0.1}>
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
            <Ticket className="h-7 w-7 text-primary" />
          </div>
          <p className="text-muted-foreground">{t("noTickets")}</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <div className="space-y-3">
      <AnimatedSection direction="up" delay={0.1}>
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Ticket className="h-5 w-5 text-primary" />
          {t("selectTickets")}
        </h3>
      </AnimatedSection>

      {ticketTiers.map((tier, index) => {
        const qty = quantities[tier.id] ?? 0;
        const isSoldOut = tier.quantityAvailable <= 0;
        const isSelected = qty > 0;
        const typeBadge = getTypeBadge(tier.type, t);

        return (
          <AnimatedSection key={tier.id} direction="up" delay={0.15 + index * 0.08}>
            <motion.div
              layout={!prefersReducedMotion}
              className={`glass-card rounded-xl p-4 sm:p-5 transition-all duration-300 ${
                isSoldOut
                  ? "opacity-40"
                  : isSelected
                    ? "border-primary/50 bg-primary/5 glow-gold"
                    : "hover:border-primary/20"
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {/* Tier name + type badge */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-semibold text-base">{tier.nameAr}</span>
                    {typeBadge}
                    {isSoldOut && (
                      <Badge variant="destructive" className="text-[10px]">
                        {t("soldOut")}
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  <div className="gradient-text text-xl font-bold mb-1.5">
                    {tier.price === "0.000" ? t("free") : formatKWD(tier.price)}
                  </div>

                  {/* Availability info */}
                  {!isSoldOut && (
                    <div className="text-xs text-muted-foreground">
                      <span>
                        {t("available")} {tier.quantityAvailable}{" "}
                        {tier.quantityAvailable === 1 ? t("ticket") : t("tickets")}
                      </span>
                      {tier.maxPerBooking < 10 && (
                        <span className="ms-1">
                          • {t("maxPerBooking")} {tier.maxPerBooking} {t("perBooking")}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Quantity controls */}
                {!isSoldOut && (
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 rounded-lg border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 disabled:opacity-30"
                      onClick={() => updateQuantity(tier.id, -1)}
                      disabled={qty <= 0}
                      style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </Button>

                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={qty}
                        initial={prefersReducedMotion ? false : { scale: 1.3, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-9 text-center font-bold text-base tabular-nums"
                      >
                        {qty}
                      </motion.span>
                    </AnimatePresence>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 rounded-lg border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 disabled:opacity-30"
                      onClick={() => updateQuantity(tier.id, 1)}
                      disabled={qty >= tier.maxPerBooking || qty >= tier.quantityAvailable}
                      style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        );
      })}

      {/* Total section */}
      {totalTickets > 0 && (
        <AnimatedSection direction="up" delay={0.15 + ticketTiers.length * 0.08}>
          <div
            className="rounded-xl p-4 sm:p-5 mt-2 border border-primary/30"
            style={{
              background: `linear-gradient(135deg, oklch(0.76 0.13 85 / 0.08) 0%, oklch(0.15 0.03 260 / 0.05) 100%)`,
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-muted-foreground">{t("total")}</span>
                <div className="text-sm mt-0.5">
                  {totalTickets} {totalTickets === 1 ? t("ticket") : t("tickets")}
                </div>
              </div>
              <div className="gradient-text text-2xl font-bold">
                {formatKWD(totalAmount)}
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
```

---
## FILE: src/components/features/events/event-filters.tsx
---
```
"use client";

import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Search, X, SlidersHorizontal } from "lucide-react";

interface EventFiltersProps {
  categories: any[];
  filters: {
    category: string;
    search: string;
    startDateFrom: string;
    startDateTo: string;
    sortBy: string;
    sortOrder: string;
  };
  onFilterChange: (filters: Record<string, any>) => void;
  onClear: () => void;
}

const PREMIUM_CUBIC = [0.22, 1, 0.36, 1] as const;

export function EventFilters({ categories, filters, onFilterChange, onClear }: EventFiltersProps) {
  const t = useTranslations("events");

  const hasActiveFilters = filters.category || filters.search || filters.startDateFrom || filters.startDateTo;

  const currentSortValue = `${filters.sortBy}-${filters.sortOrder}`;

  return (
    <AnimatedSection direction="up" delay={0.1}>
      <div className="glass-card rounded-2xl p-4 sm:p-5">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {t("filterSort")}
            </span>
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClear}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            >
              <X className="h-3.5 w-3.5 me-1.5" />
              {t("clear")}
            </Button>
          )}
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder={t("filterSearch")}
              value={filters.search}
              onChange={(e) => onFilterChange({ search: e.target.value })}
              className={`ps-9 bg-background/50 border-border/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300 ${
                filters.search ? "border-primary/40 bg-primary/5" : ""
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            />
            {filters.search && (
              <div className="absolute end-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
            )}
          </div>

          {/* Category Select */}
          <Select
            value={filters.category}
            onValueChange={(value) => onFilterChange({ category: value === "__all__" ? "" : value })}
          >
            <SelectTrigger
              className={`w-full sm:w-[180px] bg-background/50 border-border/50 transition-all duration-300 ${
                filters.category ? "border-primary/40 bg-primary/5" : ""
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            >
              <SelectValue placeholder={t("allCategories")} />
            </SelectTrigger>
            <SelectContent className="glass-card">
              <SelectItem value="__all__">{t("allCategories")}</SelectItem>
              {categories.map((cat: any) => (
                <SelectItem key={cat.id} value={cat.slug}>
                  {cat.nameAr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Date From */}
          <div className="relative">
            <Input
              type="date"
              value={filters.startDateFrom}
              onChange={(e) => onFilterChange({ startDateFrom: e.target.value })}
              className={`w-full sm:w-auto bg-background/50 border-border/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300 ${
                filters.startDateFrom ? "border-primary/40 bg-primary/5" : ""
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            />
          </div>

          {/* Sort Select */}
          <Select
            value={currentSortValue}
            onValueChange={(value) => {
              const [sortBy, sortOrder] = value.split("-");
              onFilterChange({ sortBy, sortOrder });
            }}
          >
            <SelectTrigger className="w-full sm:w-[180px] bg-background/50 border-border/50 transition-all duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass-card">
              <SelectItem value="startDate-asc">{t("sortDateAsc")}</SelectItem>
              <SelectItem value="startDate-desc">{t("sortDateDesc")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active filter indicators */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/30">
            {filters.search && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Search className="h-3 w-3" />
                {filters.search}
              </span>
            )}
            {filters.category && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {categories.find((c: any) => c.slug === filters.category)?.nameAr ?? filters.category}
              </span>
            )}
            {filters.startDateFrom && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {filters.startDateFrom}
              </span>
            )}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
```

---
## FILE: src/components/features/home/stats-bento-grid.tsx
---
```
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, Grid3X3, MapPin, Ticket, Building2, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section3DBg } from "@/components/ui/section-3d-bg";

// ── Animation config — premium cubic-bezier ────────────────
const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Types ────────────────────────────────────────────────────
interface StatsBentoGridProps {
  eventCount: number;
  categoryCount: number;
  venueCount: number;
  ticketCount: number;
  featuredCount: number;
}

interface StatCardConfig {
  icon: LucideIcon;
  labelKey: string;
  value: number | string;
  colSpan: 1 | 2;
}

// ── Stat Card Component ──────────────────────────────────────
function StatCard({
  config,
  index,
  isInView,
}: {
  config: StatCardConfig;
  index: number;
  isInView: boolean;
}) {
  const t = useTranslations("home");
  const Icon = config.icon;
  const isLarge = config.colSpan === 2;
  const isStringValue = typeof config.value === "string";

  return (
    <motion.div
      className={`relative group rounded-2xl overflow-hidden transition-all duration-300 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        isLarge ? "md:col-span-2" : "md:col-span-1"
      }`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: CUBIC_PREMIUM,
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Hover glow effect - Royal Gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.76 0.13 85 / 8%), transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* Card content */}
      <div
        className={`relative z-10 p-6 ${
          isLarge ? "flex items-center gap-5" : ""
        }`}
      >
        {/* Icon with Royal Gold gradient background */}
        <div
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, oklch(0.76 0.13 85), oklch(0.82 0.14 90))",
            boxShadow: "0 4px 14px oklch(0.76 0.13 85 / 25%)",
          }}
        >
          <Icon className="h-6 w-6 text-white drop-shadow-sm" />
        </div>

        {/* Text content */}
        <div className={isLarge ? "flex-1" : ""}>
          <p className={`font-bold text-foreground ${
            isLarge ? "text-4xl md:text-5xl" : "text-3xl"
          } mb-1`}>
            {isStringValue ? (
              config.value
            ) : (
              <AnimatedCounter target={config.value as number} />
            )}
          </p>
          <p className="text-muted-foreground text-sm font-medium">
            {t(config.labelKey as Parameters<typeof t>[0])}
          </p>
        </div>
      </div>

      {/* Subtle top-edge highlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
    </motion.div>
  );
}

// ── Main Component ───────────────────────────────────────────
export function StatsBentoGrid({
  eventCount,
  categoryCount,
  venueCount,
  ticketCount,
  featuredCount,
}: StatsBentoGridProps) {
  const t = useTranslations("home");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Stat cards configuration
  const statCards: StatCardConfig[] = [
    {
      icon: Calendar,
      labelKey: "statsUpcomingEvents",
      value: eventCount,
      colSpan: 2,
    },
    {
      icon: Grid3X3,
      labelKey: "statsCategories",
      value: categoryCount,
      colSpan: 1,
    },
    {
      icon: MapPin,
      labelKey: "statsVenues",
      value: venueCount,
      colSpan: 1,
    },
    {
      icon: Ticket,
      labelKey: "statsTicketsAvailable",
      value: ticketCount,
      colSpan: 2,
    },
    {
      icon: Building2,
      labelKey: "statsCity",
      value: t("statsCity") === "City" ? "Kuwait" : "الكويت",
      colSpan: 1,
    },
    {
      icon: Star,
      labelKey: "statsFeatured",
      value: featuredCount,
      colSpan: 1,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-background"
      aria-label={t("statsTitle")}
    >
      {/* ── Interactive 3D shapes background ── */}
      <Section3DBg theme="stats" />

      {/* ── Subtle decorative blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Gold accent blob */}
        <div
          className="absolute -top-1/4 -start-1/4 w-[60vw] h-[60vw] rounded-full animate-morph-blob opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 12%) 0%, transparent 70%)",
          }}
        />

        {/* Secondary blob */}
        <div
          className="absolute -bottom-1/4 -end-1/4 w-[50vw] h-[50vw] rounded-full animate-morph-blob opacity-8"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 8%) 0%, transparent 70%)",
            animationDelay: "-3s",
            animationDuration: "12s",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: CUBIC_PREMIUM }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            {t("statsTitle")}
          </h2>
          {/* Royal Gold accent line */}
          <div
            className="mx-auto w-16 h-1 rounded-full"
            style={{
              background: "linear-gradient(to right, oklch(0.76 0.13 85), oklch(0.82 0.14 90))",
            }}
          />
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mt-4">
            {t("statsSubtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((card, index) => (
            <StatCard
              key={card.labelKey}
              config={card}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---
## FILE: src/components/features/home/testimonials-section.tsx
---
```
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { Button } from "@/components/ui/button";
import { Quote, Star, Search, ArrowLeft, Sparkles } from "lucide-react";

// ── Animation config — premium cubic-bezier ────────────────
const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Animation Variants ─────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: CUBIC_PREMIUM,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: CUBIC_PREMIUM,
    },
  },
};

// ── Star Rating Component ──────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-[oklch(0.76_0.13_85)] text-[oklch(0.76_0.13_85)]"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

// ── Testimonial Card ──────────────────────────────
interface TestimonialData {
  id: number;
  textKey: string;
  authorKey: string;
  roleKey: string;
  rating: number;
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialData;
}) {
  const t = useTranslations("home");
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to subtle 3D rotation
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -4]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 1]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        rotateX,
        rotateZ,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative rounded-2xl p-6 transition-shadow duration-300"
    >
      {/* Card background — theme-aware */}
      <div className="absolute inset-0 rounded-2xl bg-card border border-border/50" />

      {/* Decorative Quote Icon (faded Royal Gold) */}
      <Quote
        className="absolute top-4 end-4 h-10 w-10 transition-colors duration-300 text-primary/[0.05]"
      />
      {/* Hover state for quote icon */}
      <Quote
        className="absolute top-4 end-4 h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/10"
      />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Star Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Testimonial Text */}
        <p className="leading-relaxed text-sm md:text-base text-foreground/85">
          &ldquo;{t(testimonial.textKey as Parameters<typeof t>[0])}&rdquo;
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-2 border-t border-border/30">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
            style={{
              background: "linear-gradient(to bottom right, oklch(0.76 0.13 85), oklch(0.82 0.14 90))",
              color: "oklch(0.25 0.05 85)",
            }}
          >
            {t(testimonial.authorKey as Parameters<typeof t>[0]).charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">
              {t(testimonial.authorKey as Parameters<typeof t>[0])}
            </p>
            <p className="text-xs text-muted-foreground">
              {t(testimonial.roleKey as Parameters<typeof t>[0])}
            </p>
          </div>
        </div>
      </div>

      {/* Hover glow effect — Royal Gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.76 0.13 85 / 8%), transparent 60%)",
          inset: "-2px",
          borderRadius: "1rem",
          filter: "blur(16px)",
        }}
      />
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────
export function TestimonialsSection() {
  const t = useTranslations("home");

  const testimonials: TestimonialData[] = [
    {
      id: 1,
      textKey: "testimonial1Text",
      authorKey: "testimonial1Author",
      roleKey: "testimonial1Role",
      rating: 5,
    },
    {
      id: 2,
      textKey: "testimonial2Text",
      authorKey: "testimonial2Author",
      roleKey: "testimonial2Role",
      rating: 5,
    },
    {
      id: 3,
      textKey: "testimonial3Text",
      authorKey: "testimonial3Author",
      roleKey: "testimonial3Role",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 bg-background overflow-hidden" aria-label="Testimonials">
      {/* ── Interactive 3D shapes background ── */}
      <Section3DBg theme="testimonials" />

      <div className="relative z-10 container mx-auto px-4">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: CUBIC_PREMIUM }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full premium-glass text-xs font-medium text-muted-foreground tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t("testimonialsTitle")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            {t("testimonialsTitle")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-base">
            {t("testimonialsSubtitle")}
          </p>
        </motion.div>

        {/* ── Testimonial Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </motion.div>

        {/* ── CTA Section ── */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl px-6 py-14 md:px-12 md:py-20 text-center bg-card border border-border/50">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute -top-1/4 -start-1/4 w-[60%] h-[60%] rounded-full animate-mesh-move opacity-20 z-0"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.76 0.13 85 / 15%) 0%, transparent 70%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-1/4 -end-1/4 w-[50%] h-[50%] rounded-full animate-mesh-move opacity-15 z-0"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.76 0.13 85 / 10%) 0%, transparent 70%)",
                animationDelay: "-7s",
                animationDuration: "25s",
              }}
            />

            {/* CTA Content */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 backdrop-blur-sm text-xs font-medium text-muted-foreground tracking-wide">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                {t("ctaTitle")}
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-2xl mx-auto">
                {t("ctaTitle")}
              </h3>

              <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg leading-relaxed">
                {t("ctaSubtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="relative h-12 px-8 text-base font-semibold rounded-xl border-0 transition-all duration-300"
                    style={{
                      background: "oklch(0.76 0.13 85)",
                      color: "oklch(0.25 0.05 85)",
                      boxShadow: "0 10px 25px oklch(0.76 0.13 85 / 25%)",
                    }}
                  >
                    <Link href="/events">
                      <Search className="h-5 w-5 me-2" />
                      {t("ctaBrowse")}
                    </Link>
                  </Button>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="lg"
                    asChild
                    variant="outline"
                    className="h-12 px-8 text-base font-semibold rounded-xl transition-all duration-300"
                  >
                    <Link href="/register">
                      <ArrowLeft className="h-5 w-5 me-2" />
                      {t("ctaRegister")}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---
## FILE: src/components/features/bookings/booking-detail-client.tsx
---
```
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCancelBooking } from "@/hooks/use-booking";
import { formatKWD } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Ticket, AlertTriangle, Loader2 } from "lucide-react";
import { TicketQR } from "./ticket-qr";
import { Link } from "@/i18n/routing";

interface BookingDetailClientProps {
  booking: {
    id: string;
    bookingNumber: string;
    status: string;
    totalAmount: string;
    quantity: number;
    attendeeName: string;
    attendeePhone: string;
    attendeeEmail: string;
    createdAt: string;
    event: {
      id: string;
      titleAr: string;
      slug: string;
      coverImageUrl: string;
      startDate: string;
      startTime: string;
      venue: { nameAr: string; address: string; city: string } | null;
    };
    tickets: {
      id: string;
      ticketNumber: string;
      qrCodeUrl?: string | null;
      ticketTier: { nameAr: string; type: string; price: string };
    }[];
    payment: {
      id: string;
      amount: string;
      status: string;
      method: string;
    } | null;
  };
  isPending: boolean;
}

function BookingDetailContent({ booking, isPending }: BookingDetailClientProps) {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("payment");
  const cancelBooking = useCancelBooking();
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [paying, setPaying] = useState(false);

  // عداد تنازلي 15 دقيقة
  useEffect(() => {
    if (booking.status !== "PENDING") return;

    const createdAt = new Date(booking.createdAt).getTime();
    const expiryTime = createdAt + 15 * 60 * 1000;

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = expiryTime - now;

      if (diff <= 0) {
        setTimeLeft("انتهت المهلة");
        clearInterval(timer);
        // أعد تحميل الصفحة لإظهار الحالة المُلغاة
        window.location.reload();
        return;
      }

      const minutes = Math.floor(diff / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);
      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [booking.status, booking.createdAt]);

  const isExpired = timeLeft === "انتهت المهلة";

  const handlePayNow = async () => {
    setPaying(true);
    try {
      const res = await fetch("/api/v1/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: booking.id, method: "KNET" }),
      });
      const data = await res.json();
      if (data.data?.redirectUrl) {
        window.location.href = data.data.redirectUrl;
      } else {
        alert(data.error?.message ?? "فشل بدء الدفع");
        setPaying(false);
      }
    } catch {
      alert("حدث خطأ في بدء الدفع");
      setPaying(false);
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* رسالة نجاح الدفع */}
        {paymentStatus === "success" && booking.status === "CONFIRMED" && (
          <div className="mb-6 rounded-lg border-2 border-green-400 bg-green-50 p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              <div>
                <h3 className="font-semibold text-green-800 text-lg">تم الدفع بنجاح!</h3>
                <p className="text-sm text-green-700">تم تأكيد حجزك وإرسال تفاصيل التذاكر لبريدك الإلكتروني</p>
              </div>
            </div>
          </div>
        )}

        {/* رسالة فشل الدفع */}
        {paymentStatus === "failed" && (
          <div className="mb-6 rounded-lg border-2 border-red-400 bg-red-50 p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">❌</span>
              <div>
                <h3 className="font-semibold text-red-800">فشل الدفع</h3>
                <p className="text-sm text-red-700">لم تتم عملية الدفع. يمكنك المحاولة مرة أخرى.</p>
              </div>
            </div>
          </div>
        )}

        {/* تنبيه الحجز المعلق */}
        {booking.status === "PENDING" && !isExpired && (
          <div className="mb-6 rounded-lg border-2 border-yellow-400 bg-yellow-50 p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-yellow-800">حجز معلق — يرجى إتمام الدفع</h3>
                <p className="text-sm text-yellow-700">
                  متبقي <span className="font-bold text-lg">{timeLeft}</span> لإتمام الدفع
                </p>
              </div>
            </div>
            {/* زر الدفع عبر KNet */}
            <Button
              className="w-full mt-3"
              size="lg"
              onClick={handlePayNow}
              disabled={paying}
            >
              {paying ? (
                <>
                  <Loader2 className="h-4 w-4 me-2 animate-spin" />
                  جارٍ التحويل لصفحة الدفع...
                </>
              ) : (
                `💳 الدفع عبر KNet — ${formatKWD(booking.totalAmount)}`
              )}
            </Button>
            <p className="text-xs text-yellow-600 text-center mt-2">
              وضع الاختبار — لن يتم خصم مبلغ حقيقي
            </p>
          </div>
        )}

        {isExpired && (
          <div className="mb-6 rounded-lg border-2 border-red-400 bg-red-50 p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">انتهت مهلة الدفع</h3>
                <p className="text-sm text-red-700">تم إلغاء الحجز تلقائياً وتحرير التذاكر</p>
              </div>
            </div>
          </div>
        )}

        {booking.status === "CANCELLED" && paymentStatus !== "failed" && (
          <div className="mb-6 rounded-lg border bg-muted p-4">
            <p className="font-medium text-muted-foreground">تم إلغاء هذا الحجز</p>
          </div>
        )}

        {booking.status === "CONFIRMED" && paymentStatus !== "success" && (
          <div className="mb-6 rounded-lg border-2 border-green-400 bg-green-50 p-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <h3 className="font-semibold text-green-800">تم تأكيد الحجز!</h3>
            </div>
          </div>
        )}

        {booking.status === "REFUNDED" && (
          <div className="mb-6 rounded-lg border-2 border-blue-400 bg-blue-50 p-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <h3 className="font-semibold text-blue-800">تم استرداد المبلغ</h3>
            </div>
          </div>
        )}

        {/* بطاقة تفاصيل الحجز */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>تفاصيل الحجز</CardTitle>
              <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                {booking.bookingNumber}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* الفعالية */}
            <div className="flex gap-3">
              <img
                src={booking.event.coverImageUrl}
                alt={booking.event.titleAr}
                className="h-16 w-24 rounded-md object-cover"
              />
              <div>
                <Link
                  href={`/events/${booking.event.slug}`}
                  className="font-medium hover:text-primary"
                >
                  {booking.event.titleAr}
                </Link>
                <div className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                  <MapPin className="h-3 w-3" />
                  <span>{booking.event.venue?.nameAr}</span>
                </div>
              </div>
            </div>

            <div className="border-t" />

            {/* التذاكر */}
            <div>
              <h4 className="font-medium flex items-center gap-1.5 mb-2">
                <Ticket className="h-4 w-4" /> التذاكر
              </h4>
              <div className="space-y-2">
                {booking.tickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                        {ticket.ticketNumber}
                      </span>
                      <span className="ms-2">{ticket.ticketTier.nameAr}</span>
                    </div>
                    <span className="font-medium">{formatKWD(ticket.ticketTier.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t" />

            {/* بيانات الحضور */}
            <div>
              <h4 className="font-medium mb-2">بيانات الحضور</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>الاسم: {booking.attendeeName}</p>
                <p dir="ltr" className="text-start">الهاتف: {booking.attendeePhone}</p>
                <p dir="ltr" className="text-start">البريد: {booking.attendeeEmail}</p>
              </div>
            </div>

            {/* حالة الدفع */}
            {booking.payment && (
              <>
                <div className="border-t" />
                <div>
                  <h4 className="font-medium mb-2">حالة الدفع</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">طريقة الدفع</span>
                      <span className="font-medium">{booking.payment.method}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">حالة الدفع</span>
                      <span className={`font-medium ${
                        booking.payment.status === "SUCCESS" ? "text-green-600" :
                        booking.payment.status === "PENDING" ? "text-yellow-600" :
                        booking.payment.status === "REFUNDED" ? "text-blue-600" :
                        "text-red-600"
                      }`}>
                        {booking.payment.status === "SUCCESS" ? "ناجح ✅" :
                         booking.payment.status === "PENDING" ? "معلق ⏳" :
                         booking.payment.status === "REFUNDED" ? "مسترد 💰" :
                         booking.payment.status === "FAILED" ? "فاشل ❌" :
                         booking.payment.status}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="border-t" />

            {/* المجموع */}
            <div className="flex items-center justify-between text-lg font-bold">
              <span>المجموع</span>
              <span className="text-primary">{formatKWD(booking.totalAmount)}</span>
            </div>
          </CardContent>
        </Card>

        {/* QR Codes — فقط للحجوزات المؤكدة */}
        {booking.status === "CONFIRMED" && booking.tickets.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-lg">تذاكرك — اعرض QR code عند البوابة</h3>
            <div className="space-y-3">
              {booking.tickets.map((ticket) => (
                <TicketQR
                  key={ticket.id}
                  ticketNumber={ticket.ticketNumber}
                  qrData={ticket.qrCodeUrl ?? `{"tn":"${ticket.ticketNumber}","bid":"${booking.id}","v":1}`}
                  tierName={ticket.ticketTier.nameAr}
                  eventTitle={booking.event.titleAr}
                />
              ))}
            </div>
          </div>
        )}

        {/* أزرار الإجراءات */}
        <div className="mt-4 flex gap-3">
          {booking.status === "PENDING" && !isExpired && (
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => cancelBooking.mutate(booking.id)}
              disabled={cancelBooking.isPending}
            >
              {cancelBooking.isPending ? (
                <><Loader2 className="h-4 w-4 me-2 animate-spin" /> جارٍ الإلغاء...</>
              ) : (
                "إلغاء الحجز"
              )}
            </Button>
          )}
          <Button variant="outline" asChild>
            <Link href="/bookings">My Bookings</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function BookingDetailClient({ booking, isPending }: BookingDetailClientProps) {
  return (
    <Suspense fallback={<div className="py-8 text-center text-muted-foreground">جارٍ التحميل...</div>}>
      <BookingDetailContent booking={booking} isPending={isPending} />
    </Suspense>
  );
}
```

---
## FILE: src/components/features/bookings/my-bookings-client.tsx
---
```
"use client";

import { useState } from "react";
import { useBookings, useCancelBooking } from "@/hooks/use-booking";
import { formatKWD } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Section3DBg } from "@/components/ui/section-3d-bg";

export function MyBookingsClient() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "cancelled">("upcoming");
  const cancelBooking = useCancelBooking();

  const statusMap = {
    upcoming: "CONFIRMED",
    past: "CONFIRMED",
    cancelled: "CANCELLED",
  };

  const { data, isLoading } = useBookings({
    status: statusMap[activeTab],
  });

  const bookings = data?.data?.bookings ?? [];

  return (
    <section className="relative py-8 overflow-hidden min-h-screen">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="testimonials" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.995 0.004 85 / 65%) 0%, oklch(0.995 0.004 85 / 45%) 40%, oklch(0.995 0.004 85 / 65%) 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Gold decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <h1 className="text-3xl font-bold gradient-text mb-6">حجوزاتي</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b pb-2">
          {(["upcoming", "past", "cancelled"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "upcoming" ? "قادمة" : tab === "past" ? "سابقة" : "ملغاة"}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl border p-4 flex gap-4">
                <Skeleton className="h-20 w-32 rounded-md" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && bookings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              {activeTab === "upcoming"
                ? "ليس لديك حجوزات قادمة"
                : activeTab === "past"
                ? "ليس لديك حجوزات سابقة"
                : "ليس لديك حجوزات ملغاة"}
            </p>
            <Button asChild>
              <Link href="/events">Browse Events</Link>
            </Button>
          </div>
        )}

        {!isLoading && bookings.length > 0 && (
          <div className="space-y-4">
            {bookings.map((booking: any) => {
              const date = new Date(booking.event.startDate);
              const statusLabel =
                booking.status === "CONFIRMED" ? "مؤكد ✅" :
                booking.status === "PENDING" ? "معلق ⏳" :
                booking.status === "CANCELLED" ? "ملغى ❌" :
                booking.status === "REFUNDED" ? "مسترد 💰" : booking.status;
              const statusColor =
                booking.status === "CONFIRMED" ? "text-green-600" :
                booking.status === "PENDING" ? "text-yellow-600" :
                "text-red-600";

              return (
                <Link
                  key={booking.id}
                  href={`/bookings/${booking.id}`}
                  className="block rounded-xl border p-4 hover:shadow-md transition-shadow bg-card/80 backdrop-blur-sm"
                >
                  <div className="flex gap-4">
                    <img
                      src={booking.event.coverImageUrl}
                      alt={booking.event.titleAr}
                      className="h-20 w-32 rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium truncate">{booking.event.titleAr}</h3>
                        <span className={`text-xs font-medium whitespace-nowrap ${statusColor}`}>
                          {statusLabel}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-0.5 mt-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          <span>{date.toLocaleDateString("ar-KW")}</span>
                        </div>
                        {booking.event.venue && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" />
                            <span>{booking.event.venue.nameAr}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">
                          {booking.quantity} تذكرة • رقم الحجز: {booking.bookingNumber}
                        </span>
                        <span className="font-semibold text-primary">
                          {formatKWD(booking.totalAmount)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
```

---
## FILE: src/components/features/auth/auth-provider.tsx
---
```
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
import React from "react";

/**
 * AuthProvider wraps the app with ClerkProvider when Clerk keys are configured.
 * When keys are not configured, it renders children without ClerkProvider,
 * allowing the app to function in demo/preview mode.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // If Clerk keys are not configured, render without Clerk
  if (
    !publishableKey ||
    publishableKey.includes("placeholder") ||
    !publishableKey.startsWith("pk_")
  ) {
    return <>{children}</>;
  }

  return <ClerkProvider localization={arSA} afterSignOutUrl="/login">{children}</ClerkProvider>;
}
```

---
## FILE: src/components/features/auth/user-button.tsx
---
```
"use client";

import { UserButton as ClerkUserButton } from "@clerk/nextjs";

export function NavbarUserButton() {
  return (
    <ClerkUserButton
      appearance={{
        elements: {
          avatarBox: "w-9 h-9",
        },
      }}
    />
  );
}
```

---
## FILE: src/components/features/reviews/reviews-section.tsx
---
```
"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useTranslations } from "next-intl";
import { useEventReviews, useReviewEligibility } from "@/hooks/use-reviews";
import { RatingDisplay } from "@/components/features/reviews/rating-display";
import { RatingDistribution } from "@/components/features/reviews/rating-distribution";
import { ReviewCard } from "@/components/features/reviews/review-card";
import { ReviewForm } from "@/components/features/reviews/review-form";
import { ReviewLockedState } from "@/components/features/reviews/review-locked-state";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquare, PenLine } from "lucide-react";

interface ReviewItem {
  id: string;
  rating: number;
  comment: string | null;
  organizerReply: string | null;
  organizerRepliedAt: string | null;
  createdAt: string;
  user: {
    id: string;
    name: string;
    avatarUrl: string | null;
  };
}

interface ReviewsSectionProps {
  eventId: string;
  initialAverageRating?: number;
  initialTotalReviews?: number;
}

export function ReviewsSection({
  eventId,
  initialAverageRating = 0,
  initialTotalReviews = 0,
}: ReviewsSectionProps) {
  const t = useTranslations("reviews");
  const { isSignedIn } = useAuth();
  const [sortBy, setSortBy] = useState("recent");
  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useEventReviews(eventId, {
    page,
    limit: 10,
    sortBy,
  });

  const { data: eligibilityData } = useReviewEligibility(eventId);
  const eligibility = eligibilityData?.data;

  const reviews: ReviewItem[] = data?.data?.reviews ?? [];
  const stats = data?.data?.stats;
  const meta = data?.meta;

  const averageRating = stats?.averageRating ?? initialAverageRating;
  const totalReviews = stats?.totalReviews ?? initialTotalReviews;
  const distribution = stats?.distribution ?? {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">{t("title")}</h2>
        <span className="text-gray-400 text-sm">
          ({totalReviews}{" "}
          {totalReviews === 1 ? t("reviewSingle") : t("reviewPlural")})
        </span>
      </div>

      {/* Summary: Average + Distribution */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Left: Average Rating */}
        <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl">
          <p className="text-5xl font-bold text-gray-900">
            {averageRating.toFixed(1)}
          </p>
          <RatingDisplay
            rating={averageRating}
            size="lg"
            showValue={false}
            count={totalReviews}
          />
          <p className="text-sm text-gray-500 mt-2">
            {totalReviews} {t("totalReviewsLabel")}
          </p>
        </div>

        {/* Right: Distribution */}
        <div className="p-6">
          <RatingDistribution
            distribution={distribution}
            totalReviews={totalReviews}
          />
        </div>
      </div>

      {/* Write Review CTA or Form */}
      {isSignedIn && eligibility?.canReview && !showForm && (
        <Button
          onClick={() => setShowForm(true)}
          variant="outline"
          className="w-full sm:w-auto"
        >
          <PenLine className="h-4 w-4 me-2" />
          {t("writeReview")}
        </Button>
      )}

      {isSignedIn && eligibility?.canReview && showForm && (
        <ReviewForm
          eventId={eventId}
          onSuccess={() => setShowForm(false)}
        />
      )}

      {/* Already Reviewed */}
      {isSignedIn &&
        eligibility?.hasReviewed &&
        !eligibility?.canReview && (
          <div className="p-4 bg-blue-50 rounded-lg text-sm text-blue-700">
            {t("alreadyReviewed")}
          </div>
        )}

      {/* Not Eligible */}
      {isSignedIn &&
        !eligibility?.canReview &&
        !eligibility?.hasReviewed &&
        eligibility?.reason === "NO_CONFIRMED_BOOKING" && (
          <ReviewLockedState />
        )}

      {/* Sort Controls */}
      {totalReviews > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {t("showingReviews", {
              count: reviews.length,
              total: totalReviews,
            })}
          </p>
          <Select
            value={sortBy}
            onValueChange={(v) => {
              setSortBy(v);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">{t("sortRecent")}</SelectItem>
              <SelectItem value="highest">
                {t("sortHighest")}
              </SelectItem>
              <SelectItem value="lowest">
                {t("sortLowest")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Reviews List */}
      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-3 py-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">{t("noReviews")}</p>
          <p className="text-sm text-gray-400 mt-1">{t("beFirst")}</p>
        </div>
      ) : (
        <div>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          {/* Pagination */}
          {meta && meta.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                {t("previous")}
              </Button>
              <span className="flex items-center text-sm text-gray-500 px-3">
                {page} / {meta.totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setPage(Math.min(meta.totalPages, page + 1))
                }
                disabled={page === meta.totalPages}
              >
                {t("next")}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

═══════════════════════════════════════════
# SECTION 7: API ROUTES (FULL)
═══════════════════════════════════════════

---
## FILE: src/app/api/v1/events/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page") ?? "1");
    const limit = parseInt(searchParams.get("limit") ?? "20");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const startDateFrom = searchParams.get("startDateFrom");
    const startDateTo = searchParams.get("startDateTo");
    const venueId = searchParams.get("venueId");
    const isFeatured = searchParams.get("isFeatured") === "true";
    const sortBy = searchParams.get("sortBy") ?? "startDate";
    const sortOrder = searchParams.get("sortOrder") ?? "asc";

    const skip = (page - 1) * limit;

    const where: Record<string, any> = {
      deletedAt: null,
      status: "PUBLISHED",
    };

    if (category) {
      where.category = { slug: category };
    }

    if (search) {
      // SQLite doesn't support mode: "insensitive", use contains
      where.OR = [
        { titleAr: { contains: search } },
        { titleEn: { contains: search } },
        { descriptionAr: { contains: search } },
      ];
    }

    if (startDateFrom || startDateTo) {
      where.startDate = {};
      if (startDateFrom) where.startDate.gte = new Date(startDateFrom);
      if (startDateTo) where.startDate.lte = new Date(startDateTo);
    }

    if (venueId) {
      where.venueId = venueId;
    }

    if (searchParams.get("isFeatured") !== null) {
      where.isFeatured = isFeatured;
    }

    const [events, total] = await Promise.all([
      db.event.findMany({
        where,
        include: {
          venue: { select: { id: true, nameAr: true, nameEn: true, city: true } },
          category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
          ticketTiers: {
            select: { id: true, type: true, price: true, quantityTotal: true, quantitySold: true },
          },
          organizer: { select: { id: true, name: true } },
        },
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limit,
      }),
      db.event.count({ where }),
    ]);

    const eventsWithAvailability = events.map((event) => ({
      ...event,
      ticketTiers: event.ticketTiers.map((tier) => ({
        ...tier,
        quantityAvailable: tier.quantityTotal - tier.quantitySold,
      })),
    }));

    return successResponse(
      { events: eventsWithAvailability },
      "تم جلب الفعاليات بنجاح",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب الفعاليات", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/events/[id]/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { updateEventSchema } from "@/lib/validators/event-schema";
import { generateUniqueSlug } from "@/lib/slug";

// GET /api/v1/events/:id — Get single event (supports both id and slug)
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idOrSlug } = await params;

    // Try lookup by id first, then by slug
    let event = await db.event.findUnique({
      where: { id: idOrSlug, deletedAt: null, status: "PUBLISHED" },
      include: {
        venue: true,
        category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
        organizer: { select: { id: true, name: true, avatarUrl: true } },
        ticketTiers: {},
        reviews: {
          take: 5,
          orderBy: { createdAt: "desc" },
          include: { user: { select: { name: true, avatarUrl: true } } },
        },
      },
    });

    // Fallback: try by slug (for public-facing URLs like /events/my-event-slug)
    if (!event) {
      event = await db.event.findUnique({
        where: { slug: idOrSlug, deletedAt: null, status: "PUBLISHED" },
        include: {
          venue: true,
          category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
          organizer: { select: { id: true, name: true, avatarUrl: true } },
          ticketTiers: {},
          reviews: {
            take: 5,
            orderBy: { createdAt: "desc" },
            include: { user: { select: { name: true, avatarUrl: true } } },
          },
        },
      });
    }

    if (!event) {
      return errorResponse("EVENT_NOT_FOUND", "الفعالية غير موجودة", undefined, 404);
    }

    // Calculate review stats
    const reviewStats = await db.review.aggregate({
      where: { eventId: event.id },
      _avg: { rating: true },
      _count: { rating: true },
    });

    const eventWithStats = {
      ...event,
      ticketTiers: event.ticketTiers.map((tier) => ({
        ...tier,
        quantityAvailable: tier.quantityTotal - tier.quantitySold,
      })),
      reviews: {
        averageRating: reviewStats._avg.rating
          ? parseFloat(reviewStats._avg.rating.toFixed(1))
          : 0,
        totalReviews: reviewStats._count.rating,
        recent: event.reviews.map((r) => ({
          ...r,
          organizerReply: r.organizerReply,
          organizerRepliedAt: r.organizerRepliedAt?.toISOString() ?? null,
          createdAt: r.createdAt.toISOString(),
        })),
      },
    };

    return successResponse({ event: eventWithStats }, "تم جلب الفعالية بنجاح");
  } catch (error: unknown) {
    console.error("Error fetching event:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ", undefined, 500);
  }
}

// PATCH /api/v1/events/:id — Update Event (owner or admin)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await getCurrentUser();
    if (!user) return errorResponse("UNAUTHORIZED", "غير مصرح", undefined, 401);

    // Find existing event
    const existing = await db.event.findUnique({
      where: { id, deletedAt: null },
    });
    if (!existing) {
      return errorResponse("EVENT_NOT_FOUND", "الفعالية غير موجودة", undefined, 404);
    }

    // Ownership check: organizer must own it, admin can edit any
    if (user.role !== "ADMIN" && existing.organizerId !== user.id) {
      return errorResponse("FORBIDDEN", "غير مسموح بتعديل هذه الفعالية", undefined, 403);
    }

    const body = await req.json();
    const parsed = updateEventSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        firstError?.path[0]?.toString(),
        400
      );
    }

    const data = parsed.data;

    // If title changed, regenerate slug
    let slug = existing.slug;
    if (data.titleAr && data.titleAr !== existing.titleAr) {
      slug = await generateUniqueSlug(data.titleAr, data.titleEn);
    }

    const updateData: Record<string, unknown> = {
      ...(data.titleAr !== undefined && { titleAr: data.titleAr }),
      ...(data.titleEn !== undefined && { titleEn: data.titleEn || null }),
      ...(data.descriptionAr !== undefined && { descriptionAr: data.descriptionAr }),
      ...(data.descriptionEn !== undefined && { descriptionEn: data.descriptionEn || null }),
      ...(data.coverImageUrl !== undefined && { coverImageUrl: data.coverImageUrl }),
      ...(data.galleryUrls !== undefined && { galleryUrls: JSON.stringify(data.galleryUrls) }),
      ...(data.startDate !== undefined && { startDate: new Date(data.startDate) }),
      ...(data.endDate !== undefined && { endDate: data.endDate ? new Date(data.endDate) : null }),
      ...(data.startTime !== undefined && { startTime: data.startTime }),
      ...(data.endTime !== undefined && { endTime: data.endTime || null }),
      ...(data.categoryId !== undefined && { categoryId: data.categoryId }),
      ...(data.venueId !== undefined && { venueId: data.venueId || null }),
      ...(data.metadata !== undefined && { metadata: JSON.stringify(data.metadata) }),
      ...(data.status !== undefined && { status: data.status }),
      slug,
    };

    // If ticketTiers provided, replace them
    if (data.ticketTiers && data.ticketTiers.length > 0) {
      // Delete existing tiers and create new ones
      await db.ticketTier.deleteMany({ where: { eventId: id } });
      updateData.ticketTiers = {
        create: data.ticketTiers.map((tier) => ({
          nameAr: tier.nameAr,
          nameEn: tier.nameEn || null,
          type: tier.type,
          price: tier.price,
          quantityTotal: tier.quantityTotal,
          maxPerBooking: tier.maxPerBooking,
          description: tier.description || null,
        })),
      };
    }

    const event = await db.event.update({
      where: { id },
      data: updateData,
      include: {
        category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
        venue: { select: { id: true, nameAr: true, city: true } },
        ticketTiers: true,
        organizer: { select: { id: true, name: true } },
      },
    });

    return successResponse(
      { event: serializeEvent(event) },
      "تم تحديث الفعالية بنجاح"
    );
  } catch (error: unknown) {
    console.error("Update event error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}

// DELETE /api/v1/events/:id — Soft Delete (owner or admin)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await getCurrentUser();
    if (!user) return errorResponse("UNAUTHORIZED", "غير مصرح", undefined, 401);

    const existing = await db.event.findUnique({
      where: { id, deletedAt: null },
    });
    if (!existing) {
      return errorResponse("EVENT_NOT_FOUND", "الفعالية غير موجودة", undefined, 404);
    }

    // Ownership check
    if (user.role !== "ADMIN" && existing.organizerId !== user.id) {
      return errorResponse("FORBIDDEN", "غير مسموح بحذف هذه الفعالية", undefined, 403);
    }

    // Cannot delete event with confirmed bookings
    const confirmedBookings = await db.booking.count({
      where: { eventId: id, status: "CONFIRMED" },
    });
    if (confirmedBookings > 0) {
      return errorResponse(
        "EVENT_HAS_BOOKINGS",
        "لا يمكن حذف فعالية بها حجوزات مؤكدة. يمكنك إلغاؤها بدلاً من ذلك.",
        undefined,
        409
      );
    }

    // Soft delete
    await db.event.update({
      where: { id },
      data: { deletedAt: new Date(), status: "CANCELLED" },
    });

    return successResponse(null, "تم حذف الفعالية");
  } catch (error: unknown) {
    console.error("Delete event error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}

function serializeEvent(event: Record<string, unknown>) {
  return {
    ...event,
    startDate: (event.startDate as Date)?.toISOString?.() ?? event.startDate,
    endDate: (event.endDate as Date)?.toISOString?.() ?? event.endDate,
    ticketTiers: Array.isArray(event.ticketTiers)
      ? event.ticketTiers.map((t: Record<string, unknown>) => ({
          ...t,
          price: String(t.price),
        }))
      : event.ticketTiers,
  };
}
```

---
## FILE: src/app/api/v1/events/[id]/reviews/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { createReviewSchema } from "@/lib/validators/review-schema";
import { notificationService } from "@/lib/notifications/notification-service";

// POST /api/v1/events/:id/reviews — Create a review for an event
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();
    if (!user)
      return errorResponse("UNAUTHORIZED", "غير مصرح", undefined, 401);

    const { id: eventId } = await params;

    // ── Step 1: Verify event exists ──
    const event = await db.event.findUnique({
      where: { id: eventId, deletedAt: null },
      select: { id: true, status: true, startDate: true, titleAr: true, titleEn: true, organizerId: true, organizer: { select: { id: true, email: true } } },
    });

    if (!event) {
      return errorResponse(
        "EVENT_NOT_FOUND",
        "الفعالية غير موجودة",
        undefined,
        404
      );
    }

    // ── Step 2: Verify user has a confirmed booking for this event ──
    const confirmedBooking = await db.booking.findFirst({
      where: {
        userId: user.id,
        eventId,
        status: "CONFIRMED",
        deletedAt: null,
      },
      select: { id: true },
    });

    if (!confirmedBooking) {
      return errorResponse(
        "NO_CONFIRMED_BOOKING",
        "يجب أن يكون لديك حجز مؤكد لهذه الفعالية لتتمكن من التقييم",
        undefined,
        403
      );
    }

    // ── Step 3: Verify user hasn't already reviewed this event ──
    const existingReview = await db.review.findUnique({
      where: {
        userId_eventId: {
          userId: user.id,
          eventId,
        },
      },
      select: { id: true },
    });

    if (existingReview) {
      return errorResponse(
        "ALREADY_REVIEWED",
        "لقد قمت بتقييم هذه الفعالية مسبقاً",
        undefined,
        409
      );
    }

    // ── Step 4: Validate input ──
    const body = await req.json();
    const parsed = createReviewSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        firstError?.path[0]?.toString(),
        400
      );
    }

    const { rating, comment } = parsed.data;

    // ── Step 5: Create review ──
    const review = await db.review.create({
      data: {
        rating,
        comment:
          comment && comment.trim() !== "" ? comment.trim() : null,
        userId: user.id,
        eventId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    // ── Step 6: Notify organizer (fire-and-forget) ──
    if (event.organizerId !== user.id) {
      notificationService.notifyNewReview({
        organizerId: event.organizerId,
        eventTitleAr: event.titleAr,
        eventTitleEn: event.titleEn ?? event.titleAr,
        reviewerName: user.name,
        rating,
        email: event.organizer.email,
      }).catch((err: unknown) => console.error("[Notification] New review notification error:", err));
    }

    return successResponse(
      {
        review: {
          id: review.id,
          rating: review.rating,
          comment: review.comment,
          organizerReply: review.organizerReply,
          organizerRepliedAt:
            review.organizerRepliedAt?.toISOString() ?? null,
          createdAt: review.createdAt.toISOString(),
          user: review.user,
        },
      },
      "تم إضافة التقييم بنجاح"
    );
  } catch (error: unknown) {
    console.error("Create review error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/events/[id]/reviews/list/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/v1/events/:id/reviews/list — Get reviews for an event (public)
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: eventId } = await params;
    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const sortBy = searchParams.get("sortBy") || "recent"; // recent | highest | lowest

    // Verify event exists
    const event = await db.event.findUnique({
      where: { id: eventId, deletedAt: null },
      select: { id: true },
    });

    if (!event) {
      return errorResponse(
        "EVENT_NOT_FOUND",
        "الفعالية غير موجودة",
        undefined,
        404
      );
    }

    // Build order by
    type OrderByType = { createdAt: "desc" } | { rating: "desc" } | { rating: "asc" };
    let orderBy: OrderByType = { createdAt: "desc" };
    if (sortBy === "highest") orderBy = { rating: "desc" };
    if (sortBy === "lowest") orderBy = { rating: "asc" };

    // Get reviews + stats in parallel
    const [reviews, total, stats] = await Promise.all([
      db.review.findMany({
        where: { eventId },
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              avatarUrl: true,
            },
          },
        },
      }),
      db.review.count({ where: { eventId } }),

      // Rating distribution + average
      db.review.aggregate({
        where: { eventId },
        _avg: { rating: true },
        _count: { rating: true },
      }),
    ]);

    // Get rating distribution (how many 1-star, 2-star, etc.)
    const distribution = await db.review.groupBy({
      by: ["rating"],
      where: { eventId },
      _count: { rating: true },
      orderBy: { rating: "desc" },
    });

    const distributionMap: Record<number, number> = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
    distribution.forEach((d) => {
      distributionMap[d.rating] = d._count.rating;
    });

    return successResponse(
      {
        reviews: reviews.map((r) => ({
          id: r.id,
          rating: r.rating,
          comment: r.comment,
          organizerReply: r.organizerReply,
          organizerRepliedAt:
            r.organizerRepliedAt?.toISOString() ?? null,
          createdAt: r.createdAt.toISOString(),
          user: r.user,
        })),
        stats: {
          averageRating: stats._avg.rating
            ? parseFloat(stats._avg.rating.toFixed(1))
            : 0,
          totalReviews: stats._count.rating,
          distribution: distributionMap,
        },
      },
      "تم جلب التقييمات",
      {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      }
    );
  } catch (error: unknown) {
    console.error("List reviews error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/events/[id]/reviews/eligibility/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/v1/events/:id/reviews/eligibility — Check if current user can review
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return successResponse(
        {
          canReview: false,
          reason: "NOT_AUTHENTICATED",
          hasReviewed: false,
          hasConfirmedBooking: false,
        },
        "غير مسجل الدخول"
      );
    }

    const { id: eventId } = await params;

    // Check if user has confirmed booking
    const confirmedBooking = await db.booking.findFirst({
      where: {
        userId: user.id,
        eventId,
        status: "CONFIRMED",
        deletedAt: null,
      },
      select: { id: true },
    });

    // Check if user already reviewed
    const existingReview = await db.review.findUnique({
      where: {
        userId_eventId: {
          userId: user.id,
          eventId,
        },
      },
      select: {
        id: true,
        rating: true,
        comment: true,
        createdAt: true,
      },
    });

    let canReview = false;
    let reason: string | null = null;

    if (existingReview) {
      canReview = false;
      reason = "ALREADY_REVIEWED";
    } else if (!confirmedBooking) {
      canReview = false;
      reason = "NO_CONFIRMED_BOOKING";
    } else {
      canReview = true;
      reason = null;
    }

    return successResponse(
      {
        canReview,
        reason,
        hasReviewed: !!existingReview,
        hasConfirmedBooking: !!confirmedBooking,
        existingReview: existingReview
          ? {
              id: existingReview.id,
              rating: existingReview.rating,
              comment: existingReview.comment,
              createdAt: existingReview.createdAt.toISOString(),
            }
          : null,
      },
      canReview
        ? "يمكنك إضافة تقييم"
        : reason || "لا يمكنك إضافة تقييم"
    );
  } catch (error: unknown) {
    console.error("Eligibility check error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/categories/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET() {
  try {
    const categories = await db.category.findMany({
      include: {
        _count: { select: { events: { where: { status: "PUBLISHED", deletedAt: null } } } },
      },
      orderBy: { nameAr: "asc" },
    });

    const categoriesWithCount = categories.map((cat) => ({
      id: cat.id,
      nameAr: cat.nameAr,
      nameEn: cat.nameEn,
      slug: cat.slug,
      iconUrl: cat.iconUrl,
      eventCount: cat._count.events,
    }));

    return successResponse({ categories: categoriesWithCount }, "تم جلب التصنيفات");
  } catch (error) {
    console.error("Error fetching categories:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب التصنيفات", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/venues/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET() {
  try {
    const venues = await db.venue.findMany({
      include: {
        _count: {
          select: { events: { where: { status: "PUBLISHED", deletedAt: null, startDate: { gte: new Date() } } } },
        },
      },
      orderBy: { nameAr: "asc" },
    });

    const venuesWithCount = venues.map((v) => ({
      ...v,
      upcomingEventCount: v._count.events,
    }));

    return successResponse({ venues: venuesWithCount }, "تم جلب الأماكن");
  } catch (error) {
    console.error("Error fetching venues:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب الأماكن", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/venues/[slug]/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const venue = await db.venue.findUnique({
      where: { slug },
      include: {
        events: {
          where: { status: "PUBLISHED", deletedAt: null, startDate: { gte: new Date() } },
          include: {
            category: { select: { nameAr: true, nameEn: true, slug: true } },
            ticketTiers: {
              select: { price: true },
              take: 1,
              orderBy: { price: "asc" },
            },
          },
          orderBy: { startDate: "asc" },
          take: 10,
        },
      },
    });

    if (!venue) {
      return errorResponse("VENUE_NOT_FOUND", "المكان غير موجود", undefined, 404);
    }

    const venueWithEvents = {
      ...venue,
      events: venue.events.map((e) => ({
        id: e.id,
        titleAr: e.titleAr,
        titleEn: e.titleEn,
        slug: e.slug,
        coverImageUrl: e.coverImageUrl,
        startDate: e.startDate,
        startTime: e.startTime,
        category: e.category,
        lowestPrice: e.ticketTiers[0]?.price ?? "0.000",
      })),
    };

    return successResponse({ venue: venueWithEvents }, "تم جلب المكان");
  } catch (error) {
    console.error("Error fetching venue:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/bookings/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { createBookingSchema } from "@/lib/validators/booking-schema";
import { auth } from "@clerk/nextjs/server";
import { generateBookingNumber, generateTicketNumber, getBookingExpiry } from "@/lib/booking-utils";
import { releaseExpiredBookings } from "@/lib/booking-expiry";

/**
 * POST /api/v1/bookings — إنشاء حجز مبدئي
 */
export async function POST(req: Request) {
  try {
    // 1. تحقق من المصادقة
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    // 2. ابحث عن المستخدم في DB
    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    // 3. تحقق من البيانات
    const body = await req.json();
    const parsed = createBookingSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse("VALIDATION_ERROR", firstError.message, firstError.path[0]?.toString(), 400);
    }

    const { eventId, attendeeName, attendeePhone, attendeeEmail, tickets } = parsed.data;

    // 4. تحقق من وجود الفعالية
    const event = await db.event.findUnique({
      where: { id: eventId, status: "PUBLISHED", deletedAt: null },
      include: { ticketTiers: {} },
    });
    if (!event) return errorResponse("EVENT_NOT_FOUND", "الفعالية غير موجودة", undefined, 404);

    // 5. تحقق من توفر التذاكر واحسب الكميات
    let totalAmount = 0;
    let totalQuantity = 0;
    const ticketRecords: { ticketTierId: string; quantity: number; price: string; maxPerBooking: number }[] = [];

    for (const item of tickets) {
      const tier = event.ticketTiers.find((t) => t.id === item.ticketTierId);
      if (!tier) {
        return errorResponse("VALIDATION_ERROR", `فئة التذكرة ${item.ticketTierId} غير موجودة`, "ticketTierId", 400);
      }

      const available = tier.quantityTotal - tier.quantitySold;
      if (item.quantity > available) {
        return errorResponse("TICKETS_UNAVAILABLE", `التذاكر المتوفرة لفئة "${tier.nameAr}" هي ${available} فقط`, undefined, 409);
      }

      if (item.quantity > tier.maxPerBooking) {
        return errorResponse("VALIDATION_ERROR", `الحد الأقصى للحجز لفئة "${tier.nameAr}" هو ${tier.maxPerBooking}`, undefined, 400);
      }

      const tierTotal = parseFloat(tier.price) * item.quantity;
      totalAmount += tierTotal;
      totalQuantity += item.quantity;
      ticketRecords.push({
        ticketTierId: tier.id,
        quantity: item.quantity,
        price: tier.price,
        maxPerBooking: tier.maxPerBooking,
      });
    }

    // Format total as KWD string with 3 decimals
    const totalAmountStr = totalAmount.toFixed(3);

    // 6. أنشئ الحجز والتذاكر في transaction واحد
    const booking = await db.$transaction(async (tx) => {
      // أنشئ الحجز
      const newBooking = await tx.booking.create({
        data: {
          bookingNumber: generateBookingNumber(),
          status: "PENDING",
          totalAmount: totalAmountStr,
          quantity: totalQuantity,
          attendeeName,
          attendeePhone,
          attendeeEmail,
          userId: dbUser.id,
          eventId,
        },
      });

      // أنشئ التذاكر + حدّث quantitySold
      const createdTickets = [];
      for (const record of ticketRecords) {
        // حدّث quantitySold
        await tx.ticketTier.update({
          where: { id: record.ticketTierId },
          data: { quantitySold: { increment: record.quantity } },
        });

        // أنشئ التذاكر الفردية
        for (let i = 0; i < record.quantity; i++) {
          const ticket = await tx.ticket.create({
            data: {
              ticketNumber: generateTicketNumber(),
              ticketTierId: record.ticketTierId,
              bookingId: newBooking.id,
            },
          });
          createdTickets.push(ticket);
        }
      }

      return { ...newBooking, tickets: createdTickets };
    });

    // 7. أرجع النتيجة مع معلومات انتهاء الصلاحية
    const expiresAt = getBookingExpiry();

    return successResponse(
      {
        booking: {
          id: booking.id,
          bookingNumber: booking.bookingNumber,
          status: booking.status,
          totalAmount: booking.totalAmount,
          quantity: booking.quantity,
          event: {
            id: event.id,
            titleAr: event.titleAr,
          },
          tickets: booking.tickets.map((t: { id: string; ticketNumber: string }) => ({
            id: t.id,
            ticketNumber: t.ticketNumber,
          })),
          expiresAt: expiresAt.toISOString(),
        },
      },
      "تم حجز التذاكر مبدئياً، يرجى إتمام الدفع خلال 15 دقيقة"
    );
  } catch (error: unknown) {
    console.error("Error creating booking:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في إنشاء الحجز", undefined, 500);
  }
}

/**
 * GET /api/v1/bookings — قائمة حجوزات المستخدم
 */
export async function GET(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") ?? "1");
    const limit = parseInt(searchParams.get("limit") ?? "10");
    const status = searchParams.get("status");

    const where: Record<string, unknown> = {
      userId: dbUser.id,
      deletedAt: null,
    };
    if (status) where.status = status;

    // حرّر الحجوزات المنتهية أولاً
    await releaseExpiredBookings();

    const [bookings, total] = await Promise.all([
      db.booking.findMany({
        where,
        include: {
          event: {
            select: {
              id: true,
              titleAr: true,
              titleEn: true,
              slug: true,
              coverImageUrl: true,
              startDate: true,
              startTime: true,
              venue: { select: { nameAr: true } },
            },
          },
          tickets: {
            include: {
              ticketTier: { select: { nameAr: true, nameEn: true, price: true } },
            },
          },
          payment: { select: { id: true, status: true } },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      db.booking.count({ where }),
    ]);

    // Prices are already strings in SQLite, no conversion needed
    const bookingsWithStringAmounts = bookings.map((b) => ({
      ...b,
      tickets: b.tickets.map((t) => ({
        ...t,
        ticketTier: {
          ...t.ticketTier,
        },
      })),
    }));

    return successResponse(
      { bookings: bookingsWithStringAmounts },
      "تم جلب الحجوزات",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error: unknown) {
    console.error("Error fetching bookings:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب الحجوزات", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/bookings/[id]/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@clerk/nextjs/server";

/**
 * GET /api/v1/bookings/:id — تفاصيل حجز
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    const { id } = await params;
    const booking = await db.booking.findUnique({
      where: { id, deletedAt: null },
      include: {
        event: {
          select: {
            id: true,
            titleAr: true,
            titleEn: true,
            slug: true,
            coverImageUrl: true,
            startDate: true,
            startTime: true,
            endTime: true,
            venue: { select: { nameAr: true, address: true, city: true } },
          },
        },
        tickets: {
          include: {
            ticketTier: { select: { nameAr: true, nameEn: true, type: true, price: true } },
          },
        },
        payment: true,
      },
    });

    if (!booking) return errorResponse("BOOKING_NOT_FOUND", "الحجز غير موجود", undefined, 404);
    if (booking.userId !== dbUser.id && dbUser.role !== "ADMIN") {
      return errorResponse("FORBIDDEN", "ليس لديك صلاحية لعرض هذا الحجز", undefined, 403);
    }

    // Prices are already strings in SQLite
    return successResponse(
      {
        booking: {
          ...booking,
          tickets: booking.tickets.map((t) => ({
            ...t,
            ticketTier: { ...t.ticketTier },
          })),
          payment: booking.payment
            ? { ...booking.payment }
            : null,
        },
      },
      "تم جلب تفاصيل الحجز"
    );
  } catch (error) {
    console.error("Error fetching booking:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/bookings/[id]/cancel/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@clerk/nextjs/server";

/**
 * PATCH /api/v1/bookings/:id/cancel — إلغاء حجز
 */
export async function PATCH(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    const { id } = await params;
    const booking = await db.booking.findUnique({
      where: { id, deletedAt: null },
      include: { tickets: true },
    });

    if (!booking) return errorResponse("BOOKING_NOT_FOUND", "الحجز غير موجود", undefined, 404);
    if (booking.userId !== dbUser.id && dbUser.role !== "ADMIN") {
      return errorResponse("FORBIDDEN", "ليس لديك صلاحية لإلغاء هذا الحجز", undefined, 403);
    }
    if (booking.status !== "PENDING") {
      return errorResponse("VALIDATION_ERROR", "يمكن إلغاء الحجوزات المعلقة فقط", undefined, 400);
    }

    // حرّر التذاكر + ألغِ الحجز في transaction
    await db.$transaction(async (tx) => {
      // حرّر quantitySold لكل فئة تذكرة
      const tierQuantities = new Map<string, number>();
      for (const ticket of booking.tickets) {
        tierQuantities.set(ticket.ticketTierId, (tierQuantities.get(ticket.ticketTierId) ?? 0) + 1);
      }

      for (const [tierId, qty] of tierQuantities) {
        await tx.ticketTier.update({
          where: { id: tierId },
          data: { quantitySold: { decrement: qty } },
        });
      }

      // احذف التذاكر
      await tx.ticket.deleteMany({ where: { bookingId: booking.id } });

      // ألغِ الحجز
      await tx.booking.update({
        where: { id: booking.id },
        data: { status: "CANCELLED" },
      });
    });

    return successResponse(
      { booking: { id: booking.id, status: "CANCELLED" } },
      "تم إلغاء الحجز وتحرير التذاكر"
    );
  } catch (error) {
    console.error("Error cancelling booking:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في إلغاء الحجز", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/bookings/release-expired/route.ts
---
```
import { releaseExpiredBookings } from "@/lib/booking-expiry";
import { successResponse } from "@/lib/api-response";

/**
 * POST /api/v1/bookings/release-expired
 * يُحرّر التذاكر للحجوزات المنتهية
 * يمكن استدعاؤه من cron job أو يدوياً
 */
export async function POST() {
  const result = await releaseExpiredBookings();
  return successResponse(result, `تم تحرير ${result.released} حجز منتهي`);
}
```

---
## FILE: src/app/api/v1/payments/initiate/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { initiatePaymentSchema } from "@/lib/validators/payment-schema";
import { initiateKNetPayment } from "@/lib/knet";
import { auth } from "@clerk/nextjs/server";

/**
 * POST /api/v1/payments/initiate
 * بدء عملية الدفع — يُنشئ Payment record ويُرجع redirect URL
 */
export async function POST(req: Request) {
  try {
    // 1. تحقق من المصادقة
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    // 2. تحقق من البيانات
    const body = await req.json();
    const parsed = initiatePaymentSchema.safeParse(body);
    if (!parsed.success) {
      return errorResponse("VALIDATION_ERROR", parsed.error.issues[0].message, undefined, 400);
    }

    const { bookingId, method } = parsed.data;

    // 3. تحقق من الحجز
    const booking = await db.booking.findUnique({
      where: { id: bookingId, deletedAt: null },
      include: { event: true },
    });

    if (!booking) return errorResponse("BOOKING_NOT_FOUND", "الحجز غير موجود", undefined, 404);
    if (booking.userId !== dbUser.id) return errorResponse("FORBIDDEN", "ليس حجزك", undefined, 403);
    if (booking.status !== "PENDING") return errorResponse("VALIDATION_ERROR", "الحجز ليس معلقاً", undefined, 400);

    // تحقق من عدم انتهاء الصلاحية
    const createdAt = new Date(booking.createdAt).getTime();
    const expiryTime = createdAt + 15 * 60 * 1000;
    if (Date.now() > expiryTime) {
      return errorResponse("BOOKING_EXPIRED", "انتهت مهلة الحجز", undefined, 410);
    }

    // 4. تحقق من عدم وجود دفع سابق ناجح
    const existingPayment = await db.payment.findUnique({
      where: { bookingId },
    });
    if (existingPayment && existingPayment.status === "SUCCESS") {
      return errorResponse("VALIDATION_ERROR", "تم الدفع مسبقاً", undefined, 400);
    }

    // 5. بدء الدفع عبر KNet
    const amount = booking.totalAmount;
    const knetResult = await initiateKNetPayment({
      bookingId,
      amount,
      currency: "KWD",
    });

    if (!knetResult.success || !knetResult.redirectUrl) {
      return errorResponse("PAYMENT_FAILED", "فشل بدء عملية الدفع", undefined, 422);
    }

    // أنشئ أو حدّث Payment في DB
    const payment = await db.payment.upsert({
      where: { bookingId },
      update: {
        status: "PENDING",
        method: method ?? "KNET",
        knetPaymentId: knetResult.paymentId,
      },
      create: {
        amount: booking.totalAmount,
        currency: "KWD",
        status: "PENDING",
        method: method ?? "KNET",
        knetPaymentId: knetResult.paymentId,
        bookingId,
      },
    });

    return successResponse(
      {
        payment: {
          id: payment.id,
          status: payment.status,
          amount: payment.amount,
          currency: payment.currency,
        },
        redirectUrl: knetResult.redirectUrl,
        paymentId: knetResult.paymentId,
      },
      "تم بدء عملية الدفع — سيتم تحويلك لصفحة الدفع"
    );
  } catch (error: unknown) {
    console.error("Error initiating payment:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في بدء الدفع", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/payments/callback/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { processKNetCallback, verifyKNetSignature } from "@/lib/knet";
import { generateQRCodesForBooking } from "@/lib/qr-utils";
import { sendBookingConfirmationEmail, sendPaymentFailureEmail } from "@/lib/email";

/**
 * POST /api/v1/payments/callback
 * KNet server-to-server callback بعد الدفع
 * Auth: public (KNet server) — نتحقق من signature بدلاً من auth
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[KNet Callback] Received:", JSON.stringify(body));

    // 1. تحقق من signature (في production فقط)
    if (process.env.NODE_ENV === "production" && body.signature) {
      const secretKey = process.env.KNET_SECRET_KEY!;
      const dataToVerify = `${body.paymentId}|${body.result}|${body.transactionId ?? ""}|${body.amount ?? ""}`;
      const isValid = verifyKNetSignature(body.signature, dataToVerify, secretKey);
      if (!isValid) {
        console.error("[KNet Callback] Invalid signature");
        return errorResponse("UNAUTHORIZED", "Invalid signature", undefined, 401);
      }
    }

    // 2. معالجة بيانات Callback
    const result = processKNetCallback(body);

    // 3. ابحث عن Payment بواسطة knetPaymentId
    const payment = await db.payment.findFirst({
      where: { knetPaymentId: result.paymentId },
      include: {
        booking: {
          include: {
            event: {
              select: {
                titleAr: true,
                startDate: true,
                startTime: true,
                venue: { select: { nameAr: true } },
              },
            },
            tickets: {
              include: {
                ticketTier: { select: { nameAr: true, price: true } },
              },
            },
          },
        },
      },
    });

    if (!payment) {
      console.error("[KNet Callback] Payment not found for paymentId:", result.paymentId);
      return errorResponse("PAYMENT_NOT_FOUND", "Payment not found", undefined, 404);
    }

    // 4. تحديث بناءً على النتيجة
    if (result.success) {
      // === الدفع ناجح ===
      await db.$transaction(async (tx) => {
        // حدّث Payment
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "SUCCESS",
            transactionId: result.transactionId ?? `txn_${Date.now()}`,
            knetResult: JSON.stringify(body),
          },
        });

        // حدّث Booking
        await tx.booking.update({
          where: { id: payment.bookingId },
          data: { status: "CONFIRMED" },
        });
      });

      // ولّد QR codes (خارج transaction لأنه لا يحتاج atomicity)
      await generateQRCodesForBooking(payment.bookingId);

      // أرسل بريد تأكيد
      const booking = payment.booking;
      await sendBookingConfirmationEmail({
        to: booking.attendeeEmail,
        attendeeName: booking.attendeeName,
        bookingNumber: booking.bookingNumber,
        eventTitle: booking.event.titleAr,
        eventDate: new Date(booking.event.startDate).toLocaleDateString("ar-KW", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        eventTime: booking.event.startTime,
        venueName: booking.event.venue?.nameAr ?? "غير محدد",
        ticketCount: booking.quantity,
        totalAmount: booking.totalAmount,
        bookingId: booking.id,
        appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
      });

      console.log(`[KNet Callback] Payment SUCCESS for booking: ${payment.bookingId}`);
    } else {
      // === الدفع فشل ===
      const booking = payment.booking;

      await db.$transaction(async (tx) => {
        // حدّث Payment
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "FAILED",
            transactionId: result.transactionId,
            knetResult: JSON.stringify(body),
          },
        });

        // حرّر التذاكر (decrement quantitySold)
        const tierQuantities = new Map<string, number>();
        for (const ticket of booking.tickets) {
          tierQuantities.set(ticket.ticketTierId, (tierQuantities.get(ticket.ticketTierId) ?? 0) + 1);
        }
        for (const [tierId, qty] of tierQuantities) {
          await tx.ticketTier.update({
            where: { id: tierId },
            data: { quantitySold: { decrement: qty } },
          });
        }

        // احذف التذاكر
        await tx.ticket.deleteMany({ where: { bookingId: booking.id } });

        // ألغِ الحجز
        await tx.booking.update({
          where: { id: payment.bookingId },
          data: { status: "CANCELLED" },
        });
      });

      // أرسل بريد فشل
      await sendPaymentFailureEmail({
        to: booking.attendeeEmail,
        attendeeName: booking.attendeeName,
        bookingNumber: booking.bookingNumber,
        eventTitle: booking.event.titleAr,
      });

      console.log(`[KNet Callback] Payment FAILED for booking: ${payment.bookingId}`);
    }

    return successResponse(
      {
        payment: {
          id: payment.id,
          status: result.success ? "SUCCESS" : "FAILED",
          transactionId: result.transactionId,
        },
      },
      result.success ? "تم الدفع بنجاح" : "فشل الدفع"
    );
  } catch (error) {
    console.error("[KNet Callback] Error:", error);
    return errorResponse("INTERNAL_ERROR", "Callback processing error", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/payments/[id]/refund/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { refundPaymentSchema } from "@/lib/validators/payment-schema";
import { refundKNetPayment } from "@/lib/knet";
import { auth } from "@clerk/nextjs/server";

/**
 * POST /api/v1/payments/:id/refund
 * استرداد المبلغ — المنظم أو الأدمن فقط
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    // فقط ORGANIZER أو ADMIN يمكنهم الاسترداد
    if (dbUser.role !== "ORGANIZER" && dbUser.role !== "ADMIN") {
      return errorResponse("FORBIDDEN", "ليس لديك صلاحية الاسترداد", undefined, 403);
    }

    const { id } = await params;

    // تحقق من البيانات
    const body = await req.json();
    const parsed = refundPaymentSchema.safeParse(body);
    if (!parsed.success) {
      return errorResponse("VALIDATION_ERROR", parsed.error.issues[0].message, undefined, 400);
    }

    const { reason } = parsed.data;

    // ابحث عن الدفع
    const payment = await db.payment.findUnique({
      where: { id },
      include: {
        booking: {
          include: {
            event: { select: { organizerId: true } },
            tickets: true,
          },
        },
      },
    });

    if (!payment) return errorResponse("PAYMENT_NOT_FOUND", "الدفع غير موجود", undefined, 404);
    if (payment.status !== "SUCCESS") {
      return errorResponse("VALIDATION_ERROR", "يمكن استرداد المدفوعات الناجحة فقط", undefined, 400);
    }

    // تحقق من الملكية (organizer يملك الفعالية) أو admin
    if (dbUser.role !== "ADMIN" && payment.booking.event.organizerId !== dbUser.id) {
      return errorResponse("FORBIDDEN", "ليس لديك صلاحية استرداد هذا الدفع", undefined, 403);
    }

    // اطلب الاسترداد من KNet
    const knetResult = await refundKNetPayment({
      paymentId: payment.knetPaymentId ?? "",
      transactionId: payment.transactionId ?? "",
      amount: payment.amount,
      reason,
    });

    if (!knetResult.success) {
      return errorResponse("PAYMENT_FAILED", "فشل طلب الاسترداد من KNet", undefined, 422);
    }

    // حدّث DB
    await db.$transaction(async (tx) => {
      // حدّث Payment
      await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: "REFUNDED",
          refundedAt: new Date(),
          refundReason: reason,
        },
      });

      // حدّث Booking
      await tx.booking.update({
        where: { id: payment.bookingId },
        data: { status: "REFUNDED" },
      });

      // حرّر التذاكر (decrement quantitySold)
      const tierQuantities = new Map<string, number>();
      for (const ticket of payment.booking.tickets) {
        tierQuantities.set(ticket.ticketTierId, (tierQuantities.get(ticket.ticketTierId) ?? 0) + 1);
      }
      for (const [tierId, qty] of tierQuantities) {
        await tx.ticketTier.update({
          where: { id: tierId },
          data: { quantitySold: { decrement: qty } },
        });
      }

      // احذف التذاكر
      await tx.ticket.deleteMany({ where: { bookingId: payment.bookingId } });
    });

    return successResponse(
      {
        payment: {
          id: payment.id,
          status: "REFUNDED",
          refundedAt: new Date().toISOString(),
        },
      },
      "تم الاسترداد بنجاح"
    );
  } catch (error: unknown) {
    console.error("Error refunding payment:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في الاسترداد", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/payments/mock-redirect/route.ts
---
```
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/v1/payments/mock-redirect
 *
 * هذا endpoint يحاكي إعادة توجيه KNet بعد الدفع.
 * في وضع MOCK، KNet redirect URL يشير هنا.
 * هذا endpoint يحوّل المستخدم لصفحة النجاح/الفشل
 * ويُرسل callback داخلياً.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const paymentId = searchParams.get("paymentId");
  const bookingId = searchParams.get("bookingId");
  const result = searchParams.get("result") ?? "CAPTURED";

  if (!paymentId || !bookingId) {
    return NextResponse.redirect(
      new URL("/ar/bookings?error=invalid_payment", req.url)
    );
  }

  // أرسل callback داخلياً لمحاكاة server-to-server callback من KNet
  const callbackUrl = new URL("/api/v1/payments/callback", req.url);
  try {
    await fetch(callbackUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentId,
        result,
        transactionId: `txn_mock_${Date.now()}`,
        amount: "0", // سيُقرأ من DB
        authCode: `AUTH_${Date.now()}`,
        ud1: bookingId,
      }),
    });
  } catch (error) {
    console.error("[Mock Redirect] Callback failed:", error);
  }

  // وجّه المستخدم لصفحة النتيجة
  if (result === "CAPTURED") {
    return NextResponse.redirect(
      new URL(`/ar/bookings/${bookingId}?payment=success`, req.url)
    );
  } else {
    return NextResponse.redirect(
      new URL(`/ar/bookings/${bookingId}?payment=failed`, req.url)
    );
  }
}
```

---
## FILE: src/app/api/v1/notifications/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

const notificationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  filter: z.enum(["all", "unread"]).default("all"),
});

/**
 * GET /api/v1/notifications — قائمة إشعارات المستخدم مع صفحات
 */
export async function GET(req: Request) {
  try {
    // 1. Auth check
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    // 2. Find user in DB
    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    // 3. Validate query params
    const { searchParams } = new URL(req.url);
    const parsed = notificationQuerySchema.safeParse({
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
      filter: searchParams.get("filter"),
    });
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse("VALIDATION_ERROR", firstError.message, firstError.path[0]?.toString(), 400);
    }

    const { page, limit, filter } = parsed.data;

    // 4. Build where clause
    const where: Record<string, unknown> = {
      userId: dbUser.id,
    };
    if (filter === "unread") {
      where.isRead = false;
    }

    // 5. Fetch notifications with pagination
    const [notifications, total] = await Promise.all([
      db.notification.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      db.notification.count({ where }),
    ]);

    // 6. Parse the `data` field from JSON string to object (SQLite stores it as string)
    const parsedNotifications = notifications.map((n) => ({
      ...n,
      data: n.data ? JSON.parse(n.data) : null,
    }));

    // 7. Return with pagination meta
    return successResponse(
      parsedNotifications,
      "تم جلب الإشعارات",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error: unknown) {
    console.error("Error fetching notifications:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب الإشعارات", undefined, 500);
  }
}

/**
 * PATCH /api/v1/notifications — تعليم كل الإشعارات كمقروءة
 */
export async function PATCH() {
  try {
    // 1. Auth check
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    // 2. Find user in DB
    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    // 3. Update all unread notifications
    const result = await db.notification.updateMany({
      where: {
        userId: dbUser.id,
        isRead: false,
      },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });

    return successResponse(
      { updatedCount: result.count },
      "تم تعليم كل الإشعارات كمقروءة"
    );
  } catch (error: unknown) {
    console.error("Error marking all notifications as read:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في تعليم الإشعارات", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/notifications/[id]/read/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@clerk/nextjs/server";

/**
 * PATCH /api/v1/notifications/:id/read — تعليم إشعار كمقروء
 */
export async function PATCH(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Auth check
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    // 2. Find user in DB
    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    // 3. Await params (Next.js 16 async params)
    const { id } = await params;

    // 4. Find notification and verify ownership
    const notification = await db.notification.findUnique({
      where: { id },
    });
    if (!notification || notification.userId !== dbUser.id) {
      return errorResponse("NOTIFICATION_NOT_FOUND", "الإشعار غير موجود", undefined, 404);
    }

    // 5. Update isRead and readAt
    const updated = await db.notification.update({
      where: { id },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });

    // 6. Parse data field from JSON string
    const parsedNotification = {
      ...updated,
      data: updated.data ? JSON.parse(updated.data) : null,
    };

    return successResponse(
      { notification: parsedNotification },
      "تم تعليم الإشعار كمقروء"
    );
  } catch (error: unknown) {
    console.error("Error marking notification as read:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في تعليم الإشعار", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/notifications/count/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@clerk/nextjs/server";

/**
 * GET /api/v1/notifications/count — عدد الإشعارات غير المقروءة
 */
export async function GET() {
  try {
    // 1. Auth check
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    // 2. Find user in DB
    const dbUser = await db.user.findUnique({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    // 3. Count unread notifications
    const unreadCount = await db.notification.count({
      where: {
        userId: dbUser.id,
        isRead: false,
      },
    });

    return successResponse(
      { unreadCount },
      "تم جلب عدد الإشعارات غير المقروءة"
    );
  } catch (error: unknown) {
    console.error("Error fetching notification count:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب عدد الإشعارات", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/reviews/[id]/reply/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { z } from "zod";

const replySchema = z.object({
  reply: z
    .string()
    .min(1, "الرد لا يمكن أن يكون فارغاً")
    .max(500, "الرد يجب أن يكون أقل من 500 حرف"),
});

// POST /api/v1/reviews/:id/reply — Organizer replies to a review
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireRole(["ORGANIZER", "ADMIN"]);

    const { id: reviewId } = await params;

    const review = await db.review.findUnique({
      where: { id: reviewId },
      include: {
        event: {
          select: { id: true, organizerId: true },
        },
      },
    });

    if (!review) {
      return errorResponse(
        "REVIEW_NOT_FOUND",
        "التقييم غير موجود",
        undefined,
        404
      );
    }

    if (user.role !== "ADMIN" && review.event.organizerId !== user.id) {
      return errorResponse(
        "FORBIDDEN",
        "غير مسموح بالرد على تقييم فعالية لا تملكها",
        undefined,
        403
      );
    }

    const body = await req.json();
    const parsed = replySchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        undefined,
        400
      );
    }

    const updatedReview = await db.review.update({
      where: { id: reviewId },
      data: {
        organizerReply: parsed.data.reply.trim(),
        organizerRepliedAt: new Date(),
      },
    });

    return successResponse(
      {
        review: {
          id: updatedReview.id,
          organizerReply: updatedReview.organizerReply,
          organizerRepliedAt:
            updatedReview.organizerRepliedAt?.toISOString() ?? null,
        },
      },
      "تم إضافة الرد بنجاح"
    );
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      (error.message.includes("UNAUTHORIZED") ||
        error.message.includes("FORBIDDEN"))
    ) {
      return errorResponse(
        "FORBIDDEN",
        "صلاحيات غير كافية",
        undefined,
        403
      );
    }
    console.error("Reply to review error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/tickets/validate/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { validateTicketSchema } from "@/lib/validators/ticket-schema";

// POST /api/v1/tickets/validate — Validate a ticket at event entrance
export async function POST(req: NextRequest) {
  try {
    const user = await requireRole(["ORGANIZER", "ADMIN"]);

    const body = await req.json();
    const parsed = validateTicketSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        firstError?.path[0]?.toString(),
        400
      );
    }

    const { ticketNumber, eventId } = parsed.data;

    // ── Step 1: Verify organizer owns this event ──
    const event = await db.event.findUnique({
      where: { id: eventId, deletedAt: null },
      select: { id: true, organizerId: true },
    });

    if (!event) {
      return errorResponse(
        "EVENT_NOT_FOUND",
        "الفعالية غير موجودة",
        undefined,
        404
      );
    }

    // Only the event organizer or an admin can validate tickets for this event
    if (user.role !== "ADMIN" && event.organizerId !== user.id) {
      return errorResponse(
        "FORBIDDEN",
        "غير مسموح بالتحقق من تذاكر فعالية لا تملكها",
        undefined,
        403
      );
    }

    // ── Step 2: Find the ticket ──
    const ticket = await db.ticket.findUnique({
      where: { ticketNumber },
      include: {
        ticketTier: {
          select: {
            nameAr: true,
            nameEn: true,
            type: true,
            price: true,
            eventId: true,
          },
        },
        booking: {
          select: {
            id: true,
            attendeeName: true,
            attendeeEmail: true,
            attendeePhone: true,
            status: true,
            bookingNumber: true,
            quantity: true,
            eventId: true,
          },
        },
      },
    });

    if (!ticket) {
      return successResponse(
        {
          valid: false,
          ticket: null,
          reason: "TICKET_NOT_FOUND",
        },
        "التذكرة غير موجودة"
      );
    }

    // ── Step 3: Verify ticket belongs to this event ──
    if (ticket.ticketTier.eventId !== eventId) {
      return successResponse(
        {
          valid: false,
          ticket: null,
          reason: "WRONG_EVENT",
        },
        "التذكرة لا تنتمي لهذه الفعالية"
      );
    }

    // ── Step 4: Verify booking is confirmed ──
    if (ticket.booking.status !== "CONFIRMED") {
      return successResponse(
        {
          valid: false,
          ticket: {
            id: ticket.id,
            ticketNumber: ticket.ticketNumber,
            isUsed: ticket.isUsed,
            usedAt: ticket.usedAt?.toISOString() ?? null,
            ticketTier: {
              ...ticket.ticketTier,
              price: ticket.ticketTier.price.toString(),
            },
            booking: ticket.booking,
            event: null,
          },
          reason: "BOOKING_NOT_CONFIRMED",
        },
        "حجز هذه التذكرة غير مؤكد"
      );
    }

    // ── Step 5: Check if already used ──
    if (ticket.isUsed) {
      const ticketEvent = await db.event.findUnique({
        where: { id: eventId },
        select: {
          id: true,
          titleAr: true,
          titleEn: true,
          startDate: true,
          startTime: true,
        },
      });

      return successResponse(
        {
          valid: false,
          ticket: {
            id: ticket.id,
            ticketNumber: ticket.ticketNumber,
            isUsed: true,
            usedAt: ticket.usedAt?.toISOString() ?? null,
            ticketTier: {
              ...ticket.ticketTier,
              price: ticket.ticketTier.price.toString(),
            },
            booking: ticket.booking,
            event: ticketEvent
              ? {
                  ...ticketEvent,
                  startDate: ticketEvent.startDate.toISOString(),
                }
              : null,
          },
          reason: "ALREADY_USED",
        },
        "التذكرة مُستخدمة بالفعل"
      );
    }

    // ── Step 6: Mark ticket as used (atomic update) ──
    const updatedTicket = await db.ticket.update({
      where: { id: ticket.id },
      data: {
        isUsed: true,
        usedAt: new Date(),
      },
      include: {
        ticketTier: {
          select: {
            nameAr: true,
            nameEn: true,
            type: true,
            price: true,
          },
        },
        booking: {
          select: {
            attendeeName: true,
            attendeeEmail: true,
            attendeePhone: true,
            status: true,
            bookingNumber: true,
            quantity: true,
          },
        },
      },
    });

    // ── Step 7: Return success ──
    const ticketEvent = await db.event.findUnique({
      where: { id: eventId },
      select: {
        id: true,
        titleAr: true,
        titleEn: true,
        startDate: true,
        startTime: true,
      },
    });

    return successResponse(
      {
        valid: true,
        ticket: {
          id: updatedTicket.id,
          ticketNumber: updatedTicket.ticketNumber,
          isUsed: true,
          usedAt: updatedTicket.usedAt?.toISOString(),
          ticketTier: {
            ...updatedTicket.ticketTier,
            price: updatedTicket.ticketTier.price.toString(),
          },
          booking: updatedTicket.booking,
          event: ticketEvent
            ? {
                ...ticketEvent,
                startDate: ticketEvent.startDate.toISOString(),
              }
            : null,
        },
        reason: null,
      },
      "تم التحقق من التذكرة بنجاح"
    );
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      (error.message.includes("UNAUTHORIZED") ||
        error.message.includes("FORBIDDEN"))
    ) {
      return errorResponse(
        "FORBIDDEN",
        "صلاحيات غير كافية",
        undefined,
        403
      );
    }
    console.error("Ticket validation error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/tickets/history/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/v1/tickets/history?eventId=xxx — Recent validation history
export async function GET(req: NextRequest) {
  try {
    const user = await requireRole(["ORGANIZER", "ADMIN"]);

    const eventId = req.nextUrl.searchParams.get("eventId");
    if (!eventId) {
      return errorResponse(
        "VALIDATION_ERROR",
        "eventId مطلوب",
        "eventId",
        400
      );
    }

    // Verify organizer owns this event
    const event = await db.event.findUnique({
      where: { id: eventId, deletedAt: null },
      select: { id: true, organizerId: true },
    });

    if (!event) {
      return errorResponse(
        "EVENT_NOT_FOUND",
        "الفعالية غير موجودة",
        undefined,
        404
      );
    }

    if (user.role !== "ADMIN" && event.organizerId !== user.id) {
      return errorResponse("FORBIDDEN", "غير مسموح", undefined, 403);
    }

    // Get recently validated tickets (last 50)
    const recentTickets = await db.ticket.findMany({
      where: {
        ticketTier: { eventId },
        isUsed: true,
        usedAt: { not: null },
      },
      orderBy: { usedAt: "desc" },
      take: 50,
      select: {
        id: true,
        ticketNumber: true,
        usedAt: true,
        ticketTier: {
          select: {
            nameAr: true,
            type: true,
            price: true,
          },
        },
        booking: {
          select: {
            attendeeName: true,
            attendeeEmail: true,
            bookingNumber: true,
          },
        },
      },
    });

    return successResponse(
      {
        tickets: recentTickets.map((t) => ({
          ...t,
          usedAt: t.usedAt?.toISOString(),
          ticketTier: {
            ...t.ticketTier,
            price: t.ticketTier.price.toString(),
          },
        })),
      },
      "تم جلب سجل التحقق"
    );
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      (error.message.includes("UNAUTHORIZED") ||
        error.message.includes("FORBIDDEN"))
    ) {
      return errorResponse(
        "FORBIDDEN",
        "صلاحيات غير كافية",
        undefined,
        403
      );
    }
    console.error("Validation history error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/tickets/stats/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/v1/tickets/stats?eventId=xxx — Ticket validation stats for an event
export async function GET(req: NextRequest) {
  try {
    const user = await requireRole(["ORGANIZER", "ADMIN"]);

    const eventId = req.nextUrl.searchParams.get("eventId");
    if (!eventId) {
      return errorResponse("VALIDATION_ERROR", "eventId مطلوب", "eventId", 400);
    }

    // Verify organizer owns this event
    const event = await db.event.findUnique({
      where: { id: eventId, deletedAt: null },
      select: { id: true, organizerId: true, titleAr: true, titleEn: true },
    });

    if (!event) {
      return errorResponse(
        "EVENT_NOT_FOUND",
        "الفعالية غير موجودة",
        undefined,
        404
      );
    }

    if (user.role !== "ADMIN" && event.organizerId !== user.id) {
      return errorResponse("FORBIDDEN", "غير مسموح", undefined, 403);
    }

    // Get ticket stats
    const [totalTickets, usedTickets, unusedTickets, totalBookings, checkedInBookings] =
      await Promise.all([
        // Total tickets for confirmed bookings
        db.ticket.count({
          where: {
            ticketTier: { eventId },
            booking: { status: "CONFIRMED" },
          },
        }),
        // Used tickets
        db.ticket.count({
          where: {
            ticketTier: { eventId },
            booking: { status: "CONFIRMED" },
            isUsed: true,
          },
        }),
        // Unused tickets
        db.ticket.count({
          where: {
            ticketTier: { eventId },
            booking: { status: "CONFIRMED" },
            isUsed: false,
          },
        }),
        // Total confirmed bookings
        db.booking.count({
          where: { eventId, status: "CONFIRMED" },
        }),
        // Bookings with at least one checked-in ticket
        db.booking.count({
          where: {
            eventId,
            status: "CONFIRMED",
            tickets: { some: { isUsed: true } },
          },
        }),
      ]);

    return successResponse(
      {
        event: {
          id: event.id,
          titleAr: event.titleAr,
          titleEn: event.titleEn,
        },
        stats: {
          totalTickets,
          usedTickets,
          unusedTickets,
          checkInRate:
            totalTickets > 0
              ? ((usedTickets / totalTickets) * 100).toFixed(1)
              : "0.0",
          totalBookings,
          checkedInBookings,
        },
      },
      "تم جلب إحصائيات التذاكر"
    );
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      (error.message.includes("UNAUTHORIZED") ||
        error.message.includes("FORBIDDEN"))
    ) {
      return errorResponse(
        "FORBIDDEN",
        "صلاحيات غير كافية",
        undefined,
        403
      );
    }
    console.error("Ticket stats error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/search/suggestions/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { NextRequest } from "next/server";
import { z } from "zod";

const suggestionsSchema = z.object({
  q: z.string().min(2).max(100),
  limit: z.coerce.number().int().min(1).max(10).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const parsed = suggestionsSchema.safeParse({
      q: searchParams.get("q"),
      limit: searchParams.get("limit") ?? "5",
    });

    if (!parsed.success) {
      return errorResponse(
        "VALIDATION_ERROR",
        "يجب أن يكون الاستعلام حرفين على الأقل",
        undefined,
        400
      );
    }

    const { q, limit = 5 } = parsed.data;
    const searchTerm = q.trim();

    // SQLite-compatible search using Prisma contains
    const events = await db.event.findMany({
      where: {
        status: "PUBLISHED",
        deletedAt: null,
        OR: [
          { titleAr: { contains: searchTerm } },
          { titleEn: { contains: searchTerm } },
        ],
      },
      select: {
        id: true,
        titleAr: true,
        titleEn: true,
        slug: true,
      },
      take: limit,
      orderBy: { startDate: "asc" },
    });

    const data = events.map((e) => ({
      id: e.id,
      titleAr: e.titleAr,
      titleEn: e.titleEn,
      slug: e.slug,
    }));

    return successResponse(data, "تم جلب الاقتراحات");
  } catch (error: unknown) {
    console.error("Error fetching suggestions:", error);
    return errorResponse(
      "INTERNAL_ERROR",
      "خطأ في جلب الاقتراحات",
      undefined,
      500
    );
  }
}
```

---
## FILE: src/app/api/v1/cron/reminders/route.ts
---
```
import { db } from "@/lib/db";
import { NotificationType } from "@/lib/notifications/types";
import { sendEmail } from "@/lib/email";
import { successResponse, errorResponse } from "@/lib/api-response";

/**
 * GET /api/v1/cron/reminders
 * Sends event reminder notifications to users with upcoming bookings.
 *
 * Deduplication: checks for existing EVENT_REMINDER notifications per booking
 * within the last 48 hours (filtered in JS since SQLite doesn't support JSON path queries).
 *
 * Security: requires CRON_SECRET Bearer token.
 */
export async function GET(request: Request) {
  // ── Authorization ──────────────────────────────────────────
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret) {
    if (!authHeader || authHeader !== `Bearer ${cronSecret}`) {
      return errorResponse("UNAUTHORIZED", "Missing or invalid cron secret", undefined, 401);
    }
  }

  try {
    const now = new Date();
    const twentyFourHoursFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const fortyEightHoursAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

    // Find all confirmed bookings for events starting within the next 24h
    const upcomingBookings = await db.booking.findMany({
      where: {
        status: "CONFIRMED",
        event: {
          startDate: {
            gte: now,
            lte: twentyFourHoursFromNow,
          },
        },
      },
      include: {
        user: true,
        event: {
          include: {
            venue: true,
          },
        },
      },
    });

    if (upcomingBookings.length === 0) {
      return successResponse({ remindersSent: 0 }, "No upcoming bookings to remind");
    }

    let remindersSent = 0;

    for (const booking of upcomingBookings) {
      // ── Deduplication check (JS-based, since SQLite JSON path filter doesn't work) ──
      const existingReminders = await db.notification.findMany({
        where: {
          userId: booking.user.id,
          type: NotificationType.EVENT_REMINDER,
          createdAt: { gte: fortyEightHoursAgo },
        },
      });

      const alreadyReminded = existingReminders.some((n) => {
        try {
          const d = JSON.parse(n.data || "{}");
          return d.bookingNumber === booking.bookingNumber;
        } catch {
          return false;
        }
      });

      if (alreadyReminded) continue;

      // ── Create notification ──────────────────────────────────
      await db.notification.create({
        data: {
          userId: booking.user.id,
          type: NotificationType.EVENT_REMINDER,
          title: `تذكير: ${booking.event.titleAr}`,
          message: `الفعالية "${booking.event.titleAr}" ستبدأ قريباً`,
          data: JSON.stringify({
            bookingNumber: booking.bookingNumber,
            eventId: booking.event.id,
            eventTitle: booking.event.titleAr,
          }),
        },
      });

      // ── Send reminder email ──────────────────────────────────
      try {
        const eventDate = booking.event.startDate.toLocaleDateString("ar-KW", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        await sendEmail({
          to: booking.attendeeEmail,
          subject: `تذكير: ${booking.event.titleAr} غداً!`,
          html: `
            <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>مرحباً ${booking.attendeeName}،</h2>
              <p>هذا تذكير بأن الفعالية <strong>${booking.event.titleAr}</strong> ستبدأ قريباً!</p>
              <p>📅 ${eventDate}</p>
              <p>🕐 ${booking.event.startTime}</p>
              ${booking.event.venue ? `<p>📍 ${booking.event.venue.nameAr}</p>` : ""}
              <p>رقم الحجز: <strong>${booking.bookingNumber}</strong></p>
            </div>
          `,
        });
      } catch (emailError: unknown) {
        console.error("[Cron Reminders] Failed to send reminder email:", emailError);
        // Continue even if email fails — notification was already created
      }

      remindersSent++;
    }

    return successResponse(
      { remindersSent, totalBookings: upcomingBookings.length },
      `Sent ${remindersSent} reminders out of ${upcomingBookings.length} upcoming bookings`
    );
  } catch (error: unknown) {
    console.error("[Cron Reminders] Error:", error);
    return errorResponse(
      "INTERNAL_ERROR",
      error instanceof Error ? error.message : "Failed to process reminders",
      undefined,
      500
    );
  }
}

export const dynamic = "force-dynamic";
```

---
## FILE: src/app/api/v1/webhooks/clerk/route.ts
---
```
import { Webhook } from "svix";
import { headers } from "next/headers";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return Response.json(
      { success: false, error: { code: "INVALID_BODY", message: "Invalid JSON body" } },
      { status: 400 }
    );
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("Missing CLERK_WEBHOOK_SECRET env var");
    return new Response("Server configuration error", { status: 500 });
  }

  const wh = new Webhook(webhookSecret);
  let evt: Record<string, unknown>;
  try {
    evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as Record<string, unknown>;
  } catch {
    return new Response("Invalid signature", { status: 401 });
  }

  const { type, data } = payload as {
    type: string;
    data: Record<string, unknown>;
  };

  switch (type) {
    case "user.created": {
      const emailAddresses = data.email_addresses as Array<{
        email_address: string;
      }>;
      const email = emailAddresses?.[0]?.email_address ?? "";
      const firstName = (data.first_name as string) ?? "";
      const lastName = (data.last_name as string) ?? "";
      const name = `${firstName} ${lastName}`.trim() || "مستخدم";
      const imageUrl = (data.image_url as string) ?? null;

      await db.user.create({
        data: {
          clerkId: data.id as string,
          email,
          name,
          avatarUrl: imageUrl,
          role: "ATTENDEE",
        },
      });
      break;
    }
    case "user.updated": {
      const emailAddresses = data.email_addresses as Array<{
        email_address: string;
      }>;
      const email = emailAddresses?.[0]?.email_address ?? "";
      const firstName = (data.first_name as string) ?? "";
      const lastName = (data.last_name as string) ?? "";
      const name = `${firstName} ${lastName}`.trim() || "مستخدم";
      const imageUrl = (data.image_url as string) ?? null;

      await db.user.update({
        where: { clerkId: data.id as string },
        data: {
          email,
          name,
          avatarUrl: imageUrl,
        },
      });
      break;
    }
    case "user.deleted": {
      await db.user.update({
        where: { clerkId: data.id as string },
        data: { isActive: false, deletedAt: new Date() },
      });
      break;
    }
  }

  return Response.json({ success: true });
}
```

---
## FILE: src/app/api/v1/admin/events/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import type { Prisma } from "@prisma/client";

// GET /api/v1/admin/events — List ALL events including drafts (admin only)
export async function GET(req: NextRequest) {
  try {
    await requireRole(["ADMIN"]);

    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status") || undefined;
    const search = searchParams.get("search") || undefined;
    const isFeatured = searchParams.get("isFeatured");
    const includeDeleted = searchParams.get("includeDeleted") === "true";

    const where: Prisma.EventWhereInput = {};

    if (!includeDeleted) where.deletedAt = null;
    if (status) where.status = status;
    if (isFeatured !== null && isFeatured !== undefined && isFeatured !== "") {
      where.isFeatured = isFeatured === "true";
    }
    if (search) {
      where.OR = [
        { titleAr: { contains: search } },
        { titleEn: { contains: search } },
      ];
    }

    const [events, total] = await Promise.all([
      db.event.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          titleAr: true,
          titleEn: true,
          slug: true,
          status: true,
          isFeatured: true,
          startDate: true,
          startTime: true,
          coverImageUrl: true,
          deletedAt: true,
          createdAt: true,
          organizer: {
            select: { id: true, name: true, email: true, role: true },
          },
          category: {
            select: { id: true, nameAr: true, nameEn: true, slug: true },
          },
          venue: {
            select: { id: true, nameAr: true, city: true },
          },
          ticketTiers: {
            select: {
              price: true,
              quantityTotal: true,
              quantitySold: true,
            },
          },
          _count: {
            select: {
              bookings: true,
              reviews: true,
            },
          },
        },
      }),
      db.event.count({ where }),
    ]);

    // Status stats
    const statusStats = await db.event.groupBy({
      by: ["status"],
      where: includeDeleted ? {} : { deletedAt: null },
      _count: { status: true },
    });

    return successResponse(
      {
        events: events.map((e) => ({
          ...e,
          startDate: e.startDate.toISOString(),
          createdAt: e.createdAt.toISOString(),
          deletedAt: e.deletedAt?.toISOString() ?? null,
          ticketTiers: e.ticketTiers.map((t) => ({
            ...t,
            price: t.price.toString(),
            quantityAvailable: t.quantityTotal - t.quantitySold,
          })),
          bookingsCount: e._count.bookings,
          reviewsCount: e._count.reviews,
          totalCapacity: e.ticketTiers.reduce((sum, t) => sum + t.quantityTotal, 0),
          totalSold: e.ticketTiers.reduce((sum, t) => sum + t.quantitySold, 0),
        })),
        statusStats: statusStats.reduce(
          (acc, s) => ({ ...acc, [s.status]: s._count.status }),
          {} as Record<string, number>
        ),
      },
      "تم جلب الفعاليات",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Admin events list error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/events/[id]/feature/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { featureEventSchema } from "@/lib/validators/admin-schema";

// PATCH /api/v1/admin/events/:id/feature — Toggle event featured status (admin only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(["ADMIN"]);
    const { id } = await params;

    const event = await db.event.findUnique({
      where: { id, deletedAt: null },
    });

    if (!event) {
      return errorResponse("EVENT_NOT_FOUND", "الفعالية غير موجودة", undefined, 404);
    }

    const body = await req.json();
    const parsed = featureEventSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        undefined,
        400
      );
    }

    const { isFeatured } = parsed.data;

    const updatedEvent = await db.event.update({
      where: { id },
      data: { isFeatured },
      select: {
        id: true,
        titleAr: true,
        titleEn: true,
        isFeatured: true,
        status: true,
      },
    });

    return successResponse(
      { event: updatedEvent },
      isFeatured
        ? "تم تمييز الفعالية كـ مميزة"
        : "تم إزالة التمييز عن الفعالية"
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Feature event error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/events/[id]/status/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { changeEventStatusSchema } from "@/lib/validators/admin-schema";

// PATCH /api/v1/admin/events/:id/status — Change event status (admin only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(["ADMIN"]);
    const { id } = await params;

    const event = await db.event.findUnique({
      where: { id },
    });

    if (!event) {
      return errorResponse("EVENT_NOT_FOUND", "الفعالية غير موجودة", undefined, 404);
    }

    const body = await req.json();
    const parsed = changeEventStatusSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        undefined,
        400
      );
    }

    const { status } = parsed.data;

    const updatedEvent = await db.event.update({
      where: { id },
      data: { status },
      select: {
        id: true,
        titleAr: true,
        titleEn: true,
        status: true,
      },
    });

    return successResponse(
      { event: updatedEvent },
      `تم تغيير حالة الفعالية إلى ${status}`
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Change event status error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/categories/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { createCategorySchema } from "@/lib/validators/admin-schema";

// GET /api/v1/admin/categories — List categories with event counts (admin only)
export async function GET() {
  try {
    await requireRole(["ADMIN"]);

    const categories = await db.category.findMany({
      orderBy: { nameAr: "asc" },
      include: {
        _count: {
          select: {
            events: { where: { deletedAt: null } },
          },
        },
      },
    });

    return successResponse(
      {
        categories: categories.map((c) => ({
          ...c,
          eventsCount: c._count.events,
          createdAt: c.createdAt.toISOString(),
          updatedAt: c.updatedAt.toISOString(),
        })),
      },
      "تم جلب التصنيفات"
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Admin categories list error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}

// POST /api/v1/admin/categories — Create category (admin only)
export async function POST(req: NextRequest) {
  try {
    await requireRole(["ADMIN"]);

    const body = await req.json();
    const parsed = createCategorySchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        firstError?.path[0]?.toString(),
        400
      );
    }

    const data = parsed.data;

    // Check slug uniqueness
    const existing = await db.category.findUnique({
      where: { slug: data.slug },
    });
    if (existing) {
      return errorResponse(
        "SLUG_ALREADY_EXISTS",
        "الرابط المختصر مستخدم بالفعل",
        "slug",
        409
      );
    }

    const category = await db.category.create({
      data: {
        nameAr: data.nameAr,
        nameEn: data.nameEn || null,
        slug: data.slug,
        iconUrl: data.iconUrl && data.iconUrl !== "" ? data.iconUrl : null,
        description: data.description || null,
      },
    });

    return successResponse({ category }, "تم إنشاء التصنيف بنجاح");
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Create category error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/categories/[id]/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { updateCategorySchema } from "@/lib/validators/admin-schema";

// PATCH /api/v1/admin/categories/:id — Update category (admin only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(["ADMIN"]);
    const { id } = await params;

    const category = await db.category.findUnique({ where: { id } });
    if (!category) {
      return errorResponse("CATEGORY_NOT_FOUND", "التصنيف غير موجود", undefined, 404);
    }

    const body = await req.json();
    const parsed = updateCategorySchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        firstError?.path[0]?.toString(),
        400
      );
    }

    const data = parsed.data;

    // Check slug uniqueness if changed
    if (data.slug && data.slug !== category.slug) {
      const existing = await db.category.findUnique({
        where: { slug: data.slug },
      });
      if (existing) {
        return errorResponse(
          "SLUG_ALREADY_EXISTS",
          "الرابط المختصر مستخدم بالفعل",
          "slug",
          409
        );
      }
    }

    const updatedCategory = await db.category.update({
      where: { id },
      data: {
        ...(data.nameAr !== undefined && { nameAr: data.nameAr }),
        ...(data.nameEn !== undefined && { nameEn: data.nameEn || null }),
        ...(data.slug !== undefined && { slug: data.slug }),
        ...(data.iconUrl !== undefined && {
          iconUrl: data.iconUrl && data.iconUrl !== "" ? data.iconUrl : null,
        }),
        ...(data.description !== undefined && {
          description: data.description || null,
        }),
      },
    });

    return successResponse(
      { category: updatedCategory },
      "تم تحديث التصنيف بنجاح"
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Update category error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}

// DELETE /api/v1/admin/categories/:id — Delete category (admin only)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireRole(["ADMIN"]);
    const { id } = await params;

    const category = await db.category.findUnique({
      where: { id },
      include: {
        _count: {
          select: { events: true },
        },
      },
    });

    if (!category) {
      return errorResponse("CATEGORY_NOT_FOUND", "التصنيف غير موجود", undefined, 404);
    }

    // Prevent deletion if category has events
    if (category._count.events > 0) {
      return errorResponse(
        "CATEGORY_HAS_EVENTS",
        `لا يمكن حذف التصنيف لأنه يحتوي على ${category._count.events} فعالية. قم بنقل الفعاليات أولاً.`,
        undefined,
        409
      );
    }

    await db.category.delete({ where: { id } });

    return successResponse(null, "تم حذف التصنيف بنجاح");
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Delete category error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/users/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import type { Prisma } from "@prisma/client";

// GET /api/v1/admin/users — List all users (admin only)
export async function GET(req: NextRequest) {
  try {
    await requireRole(["ADMIN"]);

    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const search = searchParams.get("search") || undefined;
    const role = searchParams.get("role") || undefined;
    const isActive = searchParams.get("isActive");
    const includeDeleted = searchParams.get("includeDeleted") === "true";

    const where: Prisma.UserWhereInput = {};

    if (!includeDeleted) {
      where.deletedAt = null;
    }

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } },
      ];
    }

    if (role) where.role = role;
    if (isActive !== null && isActive !== undefined && isActive !== "") {
      where.isActive = isActive === "true";
    }

    const [users, total] = await Promise.all([
      db.user.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          clerkId: true,
          email: true,
          name: true,
          phone: true,
          avatarUrl: true,
          role: true,
          isActive: true,
          deletedAt: true,
          createdAt: true,
          updatedAt: true,
          _count: {
            select: {
              events: { where: { deletedAt: null } },
              bookings: { where: { deletedAt: null } },
              reviews: true,
            },
          },
        },
      }),
      db.user.count({ where }),
    ]);

    // Role distribution stats
    const roleStats = await db.user.groupBy({
      by: ["role"],
      where: { deletedAt: null },
      _count: { role: true },
    });

    return successResponse(
      {
        users: users.map((u) => ({
          ...u,
          eventsCount: u._count.events,
          bookingsCount: u._count.bookings,
          reviewsCount: u._count.reviews,
          createdAt: u.createdAt.toISOString(),
          updatedAt: u.updatedAt.toISOString(),
          deletedAt: u.deletedAt?.toISOString() ?? null,
        })),
        roleStats: roleStats.reduce(
          (acc, s) => ({ ...acc, [s.role]: s._count.role }),
          {} as Record<string, number>
        ),
      },
      "تم جلب المستخدمين",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Admin users list error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/users/[id]/role/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { changeUserRoleSchema } from "@/lib/validators/admin-schema";

// PATCH /api/v1/admin/users/:id/role — Change user role (admin only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireRole(["ADMIN"]);
    const { id } = await params;

    // Find user
    const user = await db.user.findUnique({
      where: { id, deletedAt: null },
    });

    if (!user) {
      return errorResponse("USER_NOT_FOUND", "المستخدم غير موجود", undefined, 404);
    }

    // Prevent admin from demoting themselves
    if (user.id === admin.id) {
      return errorResponse(
        "CANNOT_MODIFY_SELF",
        "لا يمكنك تغيير دورك الخاص",
        undefined,
        400
      );
    }

    // Validate input
    const body = await req.json();
    const parsed = changeUserRoleSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        undefined,
        400
      );
    }

    const { role } = parsed.data;

    // Update user role
    const updatedUser = await db.user.update({
      where: { id },
      data: { role },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
      },
    });

    // Also update Clerk publicMetadata so frontend can see the new role immediately
    try {
      const { clerkClient } = await import("@clerk/nextjs/server");
      const client = await clerkClient();
      await client.users.updateUser(user.clerkId, {
        publicMetadata: { role },
      });
    } catch (clerkError: unknown) {
      console.error("Failed to update Clerk metadata:", clerkError);
      // Don't fail the whole request — DB update succeeded
    }

    return successResponse(
      { user: updatedUser },
      `تم تغيير دور المستخدم إلى ${role}`
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Change user role error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/users/[id]/active/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";
import { toggleUserActiveSchema } from "@/lib/validators/admin-schema";

// PATCH /api/v1/admin/users/:id/active — Activate/deactivate user (admin only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireRole(["ADMIN"]);
    const { id } = await params;

    const user = await db.user.findUnique({
      where: { id },
    });

    if (!user) {
      return errorResponse("USER_NOT_FOUND", "المستخدم غير موجود", undefined, 404);
    }

    // Prevent admin from deactivating themselves
    if (user.id === admin.id) {
      return errorResponse(
        "CANNOT_MODIFY_SELF",
        "لا يمكنك تعطيل حسابك الخاص",
        undefined,
        400
      );
    }

    const body = await req.json();
    const parsed = toggleUserActiveSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return errorResponse(
        "VALIDATION_ERROR",
        firstError?.message || "بيانات غير صالحة",
        undefined,
        400
      );
    }

    const { isActive } = parsed.data;

    const updatedUser = await db.user.update({
      where: { id },
      data: {
        isActive,
        // If deactivating, also soft-delete
        ...(isActive === false ? { deletedAt: new Date() } : {}),
        // If reactivating, remove soft-delete
        ...(isActive === true ? { deletedAt: null } : {}),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
      },
    });

    // Also block/unblock in Clerk
    try {
      const { clerkClient } = await import("@clerk/nextjs/server");
      const client = await clerkClient();
      if (isActive) {
        await client.users.updateUser(user.clerkId, {
          banned: false,
        });
      } else {
        await client.users.updateUser(user.clerkId, {
          banned: true,
        });
      }
    } catch (clerkError: unknown) {
      console.error("Failed to update Clerk ban status:", clerkError);
    }

    return successResponse(
      { user: updatedUser },
      isActive ? "تم تفعيل المستخدم" : "تم تعطيل المستخدم"
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
      return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);
    }
    if (error instanceof Error && error.message.includes("FORBIDDEN")) {
      return errorResponse("FORBIDDEN", "صلاحيات غير كافية", undefined, 403);
    }
    console.error("Toggle user active error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/admin/stats/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@clerk/nextjs/server";

/**
 * GET /api/v1/admin/stats — Admin dashboard statistics
 * Uses findMany + JS reduce instead of _sum because SQLite stores
 * totalAmount as String and Prisma _sum only works on numeric fields.
 */
export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    const dbUser = await db.user.findFirst({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser || dbUser.role !== "ADMIN") {
      return errorResponse("FORBIDDEN", "الوصول مرفوض", undefined, 403);
    }

    const [
      totalUsers,
      totalEvents,
      totalBookings,
      confirmedBookings,
      totalRevenueRows,
    ] = await Promise.all([
      db.user.count({ where: { isActive: true, deletedAt: null } }),
      db.event.count({ where: { deletedAt: null } }),
      db.booking.count({ where: { deletedAt: null } }),
      db.booking.count({ where: { status: "CONFIRMED", deletedAt: null } }),
      db.booking.findMany({
        where: { status: "CONFIRMED", deletedAt: null },
        select: { totalAmount: true },
      }),
    ]);

    // Calculate total revenue in JS since _sum doesn't work on String fields in SQLite
    const totalRevenue = totalRevenueRows.reduce(
      (sum, b) => sum + parseFloat(b.totalAmount),
      0
    );

    return successResponse(
      {
        totalUsers,
        totalEvents,
        totalBookings,
        confirmedBookings,
        totalRevenue,
      },
      "تم جلب الإحصائيات بنجاح"
    );
  } catch (error: unknown) {
    console.error("Error fetching admin stats:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب الإحصائيات", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/dashboard/stats/route.ts
---
```
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@clerk/nextjs/server";

/**
 * GET /api/v1/dashboard/stats — User dashboard statistics
 * Uses findMany + JS reduce instead of _sum because SQLite stores
 * totalAmount as String and Prisma _sum only works on numeric fields.
 */
export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

    const dbUser = await db.user.findFirst({
      where: { clerkId: userId, isActive: true, deletedAt: null },
    });
    if (!dbUser) return errorResponse("UNAUTHORIZED", "المستخدم غير موجود", undefined, 401);

    const [
      upcomingBookings,
      confirmedBookings,
      totalSpentRows,
    ] = await Promise.all([
      db.booking.count({
        where: {
          userId: dbUser.id,
          status: "CONFIRMED",
          deletedAt: null,
          event: { startDate: { gte: new Date() } },
        },
      }),
      db.booking.count({
        where: {
          userId: dbUser.id,
          status: "CONFIRMED",
          deletedAt: null,
        },
      }),
      db.booking.findMany({
        where: {
          userId: dbUser.id,
          status: "CONFIRMED",
          deletedAt: null,
        },
        select: { totalAmount: true },
      }),
    ]);

    // Calculate total spent in JS since _sum doesn't work on String fields in SQLite
    const totalSpent = totalSpentRows.reduce(
      (sum, b) => sum + parseFloat(b.totalAmount),
      0
    );

    return successResponse(
      {
        upcomingBookings,
        confirmedBookings,
        totalSpent,
      },
      "تم جلب إحصائيات لوحة التحكم بنجاح"
    );
  } catch (error: unknown) {
    console.error("Error fetching dashboard stats:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب الإحصائيات", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/dashboard/bookings/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/v1/dashboard/bookings — Bookings for Organizer's Events
export async function GET(req: NextRequest) {
  try {
    const user = await requireRole(["ORGANIZER", "ADMIN"]);

    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const eventId = searchParams.get("eventId") || undefined;
    const status = searchParams.get("status") || undefined;

    // Get organizer's event IDs
    const orgEvents = await db.event.findMany({
      where: { organizerId: user.id, deletedAt: null },
      select: { id: true },
    });
    const orgEventIds = orgEvents.map((e) => e.id);

    const where: Record<string, unknown> = {
      eventId: { in: orgEventIds },
      deletedAt: null,
    };

    if (eventId) where.eventId = eventId;
    if (status) where.status = status;

    const [bookings, total] = await Promise.all([
      db.booking.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          bookingNumber: true,
          status: true,
          totalAmount: true,
          quantity: true,
          attendeeName: true,
          attendeeEmail: true,
          attendeePhone: true,
          createdAt: true,
          event: {
            select: {
              id: true,
              titleAr: true,
              titleEn: true,
              startDate: true,
            },
          },
          payment: {
            select: {
              id: true,
              status: true,
              method: true,
              transactionId: true,
            },
          },
          tickets: {
            select: {
              id: true,
              ticketNumber: true,
              isUsed: true,
              ticketTier: { select: { nameAr: true, type: true } },
            },
          },
        },
      }),
      db.booking.count({ where }),
    ]);

    return successResponse(
      {
        bookings: bookings.map((b) => ({
          ...b,
          totalAmount: b.totalAmount.toString(),
          event: {
            ...b.event,
            startDate: b.event.startDate.toISOString(),
          },
        })),
      },
      "تم جلب الحجوزات",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error: unknown) {
    if (error instanceof Error && (error.message === "FORBIDDEN" || error.message === "UNAUTHORIZED")) {
      return errorResponse(
        error.message === "UNAUTHORIZED" ? "UNAUTHORIZED" : "FORBIDDEN",
        error.message === "UNAUTHORIZED" ? "غير مصرح" : "صلاحيات غير كافية",
        undefined,
        error.message === "UNAUTHORIZED" ? 401 : 403
      );
    }
    console.error("Dashboard bookings error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/dashboard/events/route.ts
---
```
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/clerk";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/v1/dashboard/events — Organizer's Events
export async function GET(req: NextRequest) {
  try {
    const user = await requireRole(["ORGANIZER", "ADMIN"]);

    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status") || undefined;
    const search = searchParams.get("search") || undefined;

    const where: Record<string, unknown> = {
      organizerId: user.id,
      deletedAt: null,
    };

    if (status) where.status = status;
    if (search) {
      where.OR = [
        { titleAr: { contains: search } },
        { titleEn: { contains: search } },
      ];
    }

    const [events, total] = await Promise.all([
      db.event.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          titleAr: true,
          titleEn: true,
          slug: true,
          status: true,
          isFeatured: true,
          startDate: true,
          startTime: true,
          coverImageUrl: true,
          createdAt: true,
          category: { select: { nameAr: true, nameEn: true } },
          venue: { select: { nameAr: true, city: true } },
          ticketTiers: {
            select: {
              price: true,
              quantityTotal: true,
              quantitySold: true,
            },
          },
          _count: {
            select: {
              bookings: { where: { status: "CONFIRMED" } },
            },
          },
        },
      }),
      db.event.count({ where }),
    ]);

    return successResponse(
      {
        events: events.map((e) => ({
          ...e,
          startDate: e.startDate.toISOString(),
          createdAt: e.createdAt.toISOString(),
          ticketTiers: e.ticketTiers.map((t) => ({
            ...t,
            price: t.price.toString(),
            quantityAvailable: t.quantityTotal - t.quantitySold,
          })),
          bookingsCount: e._count.bookings,
        })),
      },
      "تم جلب فعاليات المنظم",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error: unknown) {
    if (error instanceof Error && (error.message === "FORBIDDEN" || error.message === "UNAUTHORIZED")) {
      return errorResponse(
        error.message === "UNAUTHORIZED" ? "UNAUTHORIZED" : "FORBIDDEN",
        error.message === "UNAUTHORIZED" ? "غير مصرح" : "صلاحيات غير كافية",
        undefined,
        error.message === "UNAUTHORIZED" ? 401 : 403
      );
    }
    console.error("Dashboard events error:", error);
    return errorResponse("INTERNAL_ERROR", "خطأ داخلي", undefined, 500);
  }
}
```

---
## FILE: src/app/api/v1/users/me/route.ts
---
```
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { userUpdateSchema } from "@/lib/validators/user-schema";

export async function PATCH(req: Request) {
  const { userId } = await auth();
  if (!userId)
    return errorResponse("UNAUTHORIZED", "يجب تسجيل الدخول", undefined, 401);

  const body = await req.json();
  const parsed = userUpdateSchema.safeParse(body);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return errorResponse(
      "VALIDATION_ERROR",
      firstError?.message ?? "بيانات غير صالحة",
      firstError?.path[0]?.toString(),
      400
    );
  }

  const user = await db.user.update({
    where: { clerkId: userId },
    data: parsed.data,
  });

  return successResponse(user, "تم تحديث الملف الشخصي");
}
```

---
## FILE: src/app/api/cron/release-expired/route.ts
---
```
import { releaseExpiredBookings } from "@/lib/booking-expiry";
import { successResponse } from "@/lib/api-response";

/**
 * GET /api/cron/release-expired
 * يُستدعى من cron job خارجي (مثل Vercel Cron أو GitHub Actions)
 * لتحرير الحجوزات المنتهية بشكل دوري
 *
 * في Vercel، أضف في vercel.json:
 * {
 *   "crons": [{
 *     "path": "/api/cron/release-expired",
 *     "schedule": "5 * * * *"
 *   }]
 * }
 */
export async function GET() {
  const result = await releaseExpiredBookings();
  console.log(`[Cron] Released ${result.released} expired bookings`);
  return successResponse(result, `Released ${result.released} expired bookings`);
}

export const dynamic = "force-dynamic";
```

═══════════════════════════════════════════
# SECTION 8: LIBRARIES & UTILITIES
═══════════════════════════════════════════

---
## FILE: src/lib/api-response.ts
---
```
interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export function successResponse<T>(
  data: T,
  message: string,
  meta?: PaginationMeta
) {
  return Response.json({
    success: true,
    data,
    message,
    ...(meta && { meta }),
  });
}

export function errorResponse(
  code: string,
  message: string,
  field?: string,
  status = 400
) {
  return Response.json(
    { success: false, error: { code, message, field: field ?? null } },
    { status }
  );
}
```

---
## FILE: src/lib/db.ts
---
```
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db```

---
## FILE: src/lib/fonts.ts
---
```
import { Noto_Sans_Arabic } from "next/font/google";

/**
 * Shared font configuration for the Kuwait Events Platform.
 * Used by both main and dashboard locale layouts.
 */
export const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});
```

---
## FILE: src/lib/routing.ts
---
```
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
});
```

---
## FILE: src/lib/validators/event-schema.ts
---
```
import { z } from "zod";

export const createEventSchema = z.object({
  titleAr: z.string().min(3, "عنوان الفعالية يجب أن يكون 3 أحرف على الأقل").max(200),
  titleEn: z.string().min(3).max(200).optional(),
  descriptionAr: z.string().min(10, "الوصف يجب أن يكون 10 أحرف على الأقل"),
  descriptionEn: z.string().optional(),
  coverImageUrl: z.string().url("رابط الصورة غير صالح"),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "صيغة التاريخ غير صحيحة"),
  startTime: z.string().regex(/^\d{2}:\d{2}$/, "صيغة الوقت غير صحيحة"),
  endTime: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  categoryId: z.string().min(1, "يجب اختيار التصنيف"),
  venueId: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
  ticketTiers: z.array(
    z.object({
      nameAr: z.string().min(1, "اسم التذكرة مطلوب"),
      nameEn: z.string().optional(),
      type: z.enum(["STANDARD", "VIP", "EARLY_BIRD", "GROUP"]),
      price: z.string().regex(/^\d+\.\d{3}$/, "صيغة السعر غير صحيحة (مثال: 15.000)"),
      quantityTotal: z.number().int().positive("الكمية يجب أن تكون أكبر من 0"),
      maxPerBooking: z.number().int().min(1).max(50).default(10),
      description: z.string().optional(),
    })
  ).min(1, "يجب إضافة فئة تذكرة واحدة على الأقل"),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;

export const updateEventSchema = createEventSchema.partial();
export type UpdateEventInput = z.infer<typeof updateEventSchema>;
```

---
## FILE: src/lib/validators/booking-schema.ts
---
```
import { z } from "zod";

export const createBookingSchema = z.object({
  eventId: z.string().min(1, "يجب اختيار الفعالية"),
  attendeeName: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل").max(100),
  attendeePhone: z.string().regex(/^965\d{8}$/, "رقم الهاتف يجب أن يبدأ بـ 965 ويتكون من 11 رقم"),
  attendeeEmail: z.string().email("البريد الإلكتروني غير صالح"),
  tickets: z.array(
    z.object({
      ticketTierId: z.string().min(1),
      quantity: z.number().int().min(1, "يجب اختيار تذكرة واحدة على الأقل").max(50),
    })
  ).min(1, "يجب اختيار تذكرة واحدة على الأقل"),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;
```

---
## FILE: src/lib/validators/review-schema.ts
---
```
import { z } from "zod";

export const createReviewSchema = z.object({
  rating: z
    .number({ required_error: "التقييم مطلوب" })
    .int("التقييم يجب أن يكون رقم صحيح")
    .min(1, "الحد الأدنى للتقييم هو 1")
    .max(5, "الحد الأقصى للتقييم هو 5"),
  comment: z
    .string()
    .max(1000, "التعليق يجب أن يكون أقل من 1000 حرف")
    .optional()
    .or(z.literal("")),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
```

---
## FILE: src/lib/validators/payment-schema.ts
---
```
import { z } from "zod";

export const initiatePaymentSchema = z.object({
  bookingId: z.string().min(1, "يجب تحديد الحجز"),
  method: z.enum(["KNET"]).default("KNET"),
});

export type InitiatePaymentInput = z.infer<typeof initiatePaymentSchema>;

export const refundPaymentSchema = z.object({
  reason: z.string().min(3, "يجب ذكر سبب الاسترداد").max(500),
});

export type RefundPaymentInput = z.infer<typeof refundPaymentSchema>;
```

---
## FILE: src/lib/validators/ticket-schema.ts
---
```
import { z } from "zod";

export const validateTicketSchema = z.object({
  ticketNumber: z
    .string()
    .regex(/^TCK-\d{4}-\d{4}$/, "صيغة رقم التذكرة غير صالحة (TCK-XXXX-XXXX)"),
  eventId: z.string().cuid("معرف الفعالية غير صالح"),
});

export type ValidateTicketInput = z.infer<typeof validateTicketSchema>;

export const validateTicketResponseSchema = z.object({
  valid: z.boolean(),
  ticket: z
    .object({
      id: z.string(),
      ticketNumber: z.string(),
      isUsed: z.boolean(),
      usedAt: z.string().nullable(),
      ticketTier: z.object({
        nameAr: z.string(),
        nameEn: z.string().nullable(),
        type: z.string(),
        price: z.string(),
      }),
      booking: z.object({
        attendeeName: z.string(),
        attendeeEmail: z.string(),
        attendeePhone: z.string(),
        status: z.string(),
        bookingNumber: z.string(),
        quantity: z.number(),
      }),
      event: z
        .object({
          id: z.string(),
          titleAr: z.string(),
          titleEn: z.string().nullable(),
          startDate: z.string(),
          startTime: z.string(),
        })
        .nullable(),
    })
    .nullable(),
  reason: z.string().nullable(),
});

export type ValidateTicketResponse = z.infer<
  typeof validateTicketResponseSchema
>;
```

---
## FILE: src/lib/validators/user-schema.ts
---
```
import { z } from "zod";

export const userUpdateSchema = z.object({
  phone: z
    .string()
    .regex(/^965\d{8}$/, "رقم الهاتف يجب أن يبدأ بـ 965 ويتكون من 11 رقم")
    .optional(),
  avatarUrl: z.string().url("رابط الصورة غير صالح").optional(),
});

export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
```

---
## FILE: src/lib/validators/admin-schema.ts
---
```
import { z } from "zod";

// ── User Management ──
export const changeUserRoleSchema = z.object({
  role: z.enum(["ATTENDEE", "ORGANIZER", "ADMIN"], {
    required_error: "الدور مطلوب",
    invalid_type_error: "دور غير صالح",
  }),
});

export const toggleUserActiveSchema = z.object({
  isActive: z.boolean({
    required_error: "حالة التفعيل مطلوبة",
  }),
});

export type ChangeUserRoleInput = z.infer<typeof changeUserRoleSchema>;
export type ToggleUserActiveInput = z.infer<typeof toggleUserActiveSchema>;

// ── Category Management ──
export const createCategorySchema = z.object({
  nameAr: z
    .string()
    .min(2, "اسم التصنيف بالعربية يجب أن يكون حرفين على الأقل")
    .max(100),
  nameEn: z
    .string()
    .min(2, "Category name must be at least 2 characters")
    .max(100)
    .optional(),
  slug: z
    .string()
    .min(2, "الرابط المختصر يجب أن يكون حرفين على الأقل")
    .max(100)
    .regex(
      /^[a-z0-9-]+$/,
      "الرابط المختصر يجب أن يحتوي على أحرف إنجليزية صغيرة وأرقام وشرطات فقط"
    ),
  iconUrl: z
    .string()
    .url("رابط الأيقونة غير صالح")
    .optional()
    .or(z.literal("")),
  description: z.string().max(500).optional(),
});

export const updateCategorySchema = createCategorySchema.partial().extend({
  nameAr: z.string().min(2).max(100).optional(),
  slug: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/)
    .optional(),
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;

// ── Event Moderation ──
export const featureEventSchema = z.object({
  isFeatured: z.boolean({
    required_error: "حالة التمييز مطلوبة",
  }),
});

export const changeEventStatusSchema = z.object({
  status: z.enum(["DRAFT", "PUBLISHED", "CANCELLED", "COMPLETED"], {
    required_error: "حالة الفعالية مطلوبة",
  }),
});

export type FeatureEventInput = z.infer<typeof featureEventSchema>;
export type ChangeEventStatusInput = z.infer<typeof changeEventStatusSchema>;
```

---
## FILE: src/lib/booking-utils.ts
---
```
/**
 * يولد رقم حجز فريد بالصيغة: EVT-2026-000001
 */
export function generateBookingNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 999999)
    .toString()
    .padStart(6, "0");
  return `EVT-${year}-${random}`;
}

/**
 * يولد رقم تذكرة فريد بالصيغة: TCK-XXXX-XXXX
 * بدون I,O,0,1 لتجنب اللبس
 */
export function generateTicketNumber(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "TCK-";
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  result += "-";
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * يحسب تاريخ انتهاء الحجز (15 دقيقة من الآن)
 */
export function getBookingExpiry(): Date {
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 15);
  return expiry;
}
```

---
## FILE: src/lib/booking-expiry.ts
---
```
import { db } from "./db";

/**
 * يُحرّر التذاكر للحجوزات منتهية الصلاحية
 * يُستدعى من API route أو cron job
 */
export async function releaseExpiredBookings() {
  const now = new Date();

  // ابحث عن الحجوزات PENDING التي تجاوزت 15 دقيقة
  const expiredBookings = await db.booking.findMany({
    where: {
      status: "PENDING",
      createdAt: { lt: new Date(now.getTime() - 15 * 60 * 1000) },
    },
    include: {
      tickets: { include: { ticketTier: true } },
    },
  });

  if (expiredBookings.length === 0) return { released: 0 };

  for (const booking of expiredBookings) {
    // حرّر التذاكر (قلل quantitySold)
    for (const ticket of booking.tickets) {
      await db.ticketTier.update({
        where: { id: ticket.ticketTierId },
        data: { quantitySold: { decrement: 1 } },
      });
    }

    // ألغِ الحجز
    await db.booking.update({
      where: { id: booking.id },
      data: { status: "CANCELLED" },
    });

    // احذف التذاكر
    await db.ticket.deleteMany({
      where: { bookingId: booking.id },
    });
  }

  return { released: expiredBookings.length };
}
```

---
## FILE: src/lib/knet.ts
---
```
import crypto from "crypto";

/**
 * KNet Payment Gateway Integration
 *
 * هذا wrapper يتعامل مع KNet hosted payment page.
 * في وضع MOCK (development)، يحاكي الاستجابة بدون اتصال حقيقي.
 * في وضع PRODUCTION، يتواصل مع KNet API.
 */

interface KNetPaymentRequest {
  paymentId: string;
  amount: string;
  currency: string;
  merchantId: string;
  callbackUrl: string;
  orderId: string;
}

interface KNetPaymentResponse {
  success: boolean;
  redirectUrl?: string;
  paymentId?: string;
  error?: string;
}

interface KNetCallbackData {
  paymentId: string;
  result: string; // CAPTURED, NOT_CAPTURED, etc.
  transactionId?: string;
  amount?: string;
  authCode?: string;
  postDate?: string;
  ref?: string;
  trackId?: string;
  ud1?: string; // custom field — booking ID
}

const isMockMode =
  process.env.KNET_BASE_URL === "https://test.knet.com/api" ||
  !process.env.KNET_BASE_URL ||
  process.env.NODE_ENV === "development";

/**
 * توليد HMAC SHA256 signature
 */
export function generateKNetSignature(data: string, secret: string): string {
  return crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("hex");
}

/**
 * التحقق من HMAC signature من KNet callback
 */
export function verifyKNetSignature(
  receivedSignature: string,
  data: string,
  secret: string
): boolean {
  const expectedSignature = generateKNetSignature(data, secret);
  return crypto.timingSafeEqual(
    Buffer.from(receivedSignature, "hex"),
    Buffer.from(expectedSignature, "hex")
  );
}

/**
 * توليد payment ID فريد
 */
export function generateKNetPaymentId(): string {
  return `knet_${Date.now()}_${crypto.randomBytes(8).toString("hex")}`;
}

/**
 * بدء عملية دفع عبر KNet
 */
export async function initiateKNetPayment(params: {
  bookingId: string;
  amount: string;
  currency?: string;
}): Promise<KNetPaymentResponse> {
  const merchantId = process.env.KNET_MERCHANT_ID ?? "";
  const apiKey = process.env.KNET_API_KEY ?? "";
  const secretKey = process.env.KNET_SECRET_KEY ?? "";
  const baseUrl = process.env.KNET_BASE_URL ?? "";
  const callbackUrl = process.env.KNET_CALLBACK_URL ?? "";

  const paymentId = generateKNetPaymentId();

  // === MOCK MODE ===
  if (isMockMode) {
    console.log(
      `[KNet MOCK] Initiating payment: ${paymentId} for booking: ${params.bookingId}, amount: ${params.amount} ${params.currency ?? "KWD"}`
    );

    // محاكاة — نُرجع redirect URL وهمي يؤدي لصفحة النجاح
    const mockRedirectUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/api/v1/payments/mock-redirect?paymentId=${paymentId}&bookingId=${params.bookingId}&result=CAPTURED`;

    return {
      success: true,
      redirectUrl: mockRedirectUrl,
      paymentId,
    };
  }

  // === PRODUCTION MODE ===
  try {
    // 1. بناء طلب الدفع
    const paymentRequest: KNetPaymentRequest = {
      paymentId,
      amount: params.amount,
      currency: params.currency ?? "KWD",
      merchantId,
      callbackUrl,
      orderId: params.bookingId,
    };

    // 2. توليد signature
    const signatureData = `${paymentRequest.merchantId}|${paymentRequest.paymentId}|${paymentRequest.amount}|${paymentRequest.currency}|${paymentRequest.orderId}`;
    const signature = generateKNetSignature(signatureData, secretKey);

    // 3. إرسال طلب لـ KNet
    const response = await fetch(`${baseUrl}/payment/initiate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Signature": signature,
      },
      body: JSON.stringify({
        ...paymentRequest,
        signature,
        ud1: params.bookingId, // custom field للربط مع الحجز
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[KNet] Initiate payment failed:", errorText);
      return { success: false, error: "KNet initiate failed" };
    }

    const result = await response.json();

    return {
      success: true,
      redirectUrl: result.redirectUrl ?? result.paymentUrl,
      paymentId: result.paymentId ?? paymentId,
    };
  } catch (error) {
    console.error("[KNet] Initiate payment error:", error);
    return { success: false, error: "KNet connection failed" };
  }
}

/**
 * معالجة callback من KNet
 */
export function processKNetCallback(callbackData: KNetCallbackData): {
  success: boolean;
  paymentId: string;
  result: string;
  transactionId?: string;
  authCode?: string;
} {
  return {
    success: callbackData.result === "CAPTURED",
    paymentId: callbackData.paymentId,
    result: callbackData.result,
    transactionId: callbackData.transactionId,
    authCode: callbackData.authCode,
  };
}

/**
 * طلب استرداد من KNet
 */
export async function refundKNetPayment(params: {
  paymentId: string;
  transactionId: string;
  amount: string;
  reason: string;
}): Promise<{ success: boolean; error?: string }> {
  const merchantId = process.env.KNET_MERCHANT_ID ?? "";
  const apiKey = process.env.KNET_API_KEY ?? "";
  const secretKey = process.env.KNET_SECRET_KEY ?? "";
  const baseUrl = process.env.KNET_BASE_URL ?? "";

  // === MOCK MODE ===
  if (isMockMode) {
    console.log(
      `[KNet MOCK] Refunding payment: ${params.paymentId}, amount: ${params.amount}, reason: ${params.reason}`
    );
    return { success: true };
  }

  // === PRODUCTION MODE ===
  try {
    const signatureData = `${merchantId}|${params.paymentId}|${params.amount}|${params.transactionId}`;
    const signature = generateKNetSignature(signatureData, secretKey);

    const response = await fetch(`${baseUrl}/payment/refund`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Signature": signature,
      },
      body: JSON.stringify({
        paymentId: params.paymentId,
        transactionId: params.transactionId,
        amount: params.amount,
        reason: params.reason,
        signature,
      }),
    });

    if (!response.ok) {
      return { success: false, error: "KNet refund failed" };
    }

    return { success: true };
  } catch (error) {
    console.error("[KNet] Refund error:", error);
    return { success: false, error: "KNet refund connection failed" };
  }
}
```

---
## FILE: src/lib/email.ts
---
```
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * يرسل بريد إلكتروني عبر Resend
 */
export async function sendEmail({ to, subject, html }: EmailOptions): Promise<boolean> {
  // في وضع التطوير بدون Resend API key، سجّل فقط
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_xxxxxxxx") {
    console.log(`[Email MOCK] To: ${to}, Subject: ${subject}`);
    return true;
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "noreply@kuwaitevents.com",
      to,
      subject,
      html,
    });

    if (error) {
      console.error("[Email] Send failed:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Email] Send error:", error);
    return false;
  }
}

/**
 * يرسل بريد تأكيد الحجز
 */
export async function sendBookingConfirmationEmail(params: {
  to: string;
  attendeeName: string;
  bookingNumber: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  venueName: string;
  ticketCount: number;
  totalAmount: string;
  bookingId: string;
  appUrl: string;
}): Promise<boolean> {
  const {
    to,
    attendeeName,
    bookingNumber,
    eventTitle,
    eventDate,
    eventTime,
    venueName,
    ticketCount,
    totalAmount,
    bookingId,
    appUrl,
  } = params;

  const html = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; direction: rtl; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
        .header { background: linear-gradient(135deg, #1a56db, #3b82f6); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px; }
        .info-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #eee; }
        .info-label { color: #666; font-size: 14px; }
        .info-value { font-weight: 600; font-size: 14px; }
        .amount { font-size: 28px; font-weight: bold; color: #1a56db; text-align: center; margin: 20px 0; }
        .cta { display: block; width: fit-content; margin: 20px auto; padding: 12px 30px; background: #1a56db; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; }
        .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ تم تأكيد حجزك!</h1>
        </div>
        <div class="content">
          <p>مرحباً ${attendeeName}،</p>
          <p>تم تأكيد حجزك بنجاح. إليك تفاصيل الحجز:</p>

          <div class="info-row">
            <span class="info-label">رقم الحجز</span>
            <span class="info-value">${bookingNumber}</span>
          </div>
          <div class="info-row">
            <span class="info-label">الفعالية</span>
            <span class="info-value">${eventTitle}</span>
          </div>
          <div class="info-row">
            <span class="info-label">التاريخ</span>
            <span class="info-value">${eventDate}</span>
          </div>
          <div class="info-row">
            <span class="info-label">الوقت</span>
            <span class="info-value">${eventTime}</span>
          </div>
          <div class="info-row">
            <span class="info-label">المكان</span>
            <span class="info-value">${venueName}</span>
          </div>
          <div class="info-row">
            <span class="info-label">عدد التذاكر</span>
            <span class="info-value">${ticketCount}</span>
          </div>

          <div class="amount">${totalAmount} د.ك</div>

          <a href="${appUrl}/ar/bookings/${bookingId}" class="cta">عرض التذاكر و QR Codes</a>
        </div>
        <div class="footer">
          منصة فعاليات الكويت — noreply@kuwaitevents.com
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to,
    subject: `تأكيد الحجز ${bookingNumber} — ${eventTitle}`,
    html,
  });
}

/**
 * يرسل بريد فشل الدفع
 */
export async function sendPaymentFailureEmail(params: {
  to: string;
  attendeeName: string;
  bookingNumber: string;
  eventTitle: string;
}): Promise<boolean> {
  const html = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; direction: rtl; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
        .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; text-align: center; }
        .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>❌ فشل عملية الدفع</h1>
        </div>
        <div class="content">
          <p>مرحباً ${params.attendeeName}،</p>
          <p>لم تتم عملية الدفع للحجز <strong>${params.bookingNumber}</strong> للفعالية <strong>${params.eventTitle}</strong>.</p>
          <p>يمكنك إعادة المحاولة من صفحة الحجوزات.</p>
        </div>
        <div class="footer">منصة فعاليات الكويت</div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: params.to,
    subject: `فشل الدفع للحجز ${params.bookingNumber}`,
    html,
  });
}
```

---
## FILE: src/lib/clerk.ts
---
```
import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export async function getCurrentUser() {
  const { userId } = await auth();
  if (!userId) return null;

  // userId is the Clerk user ID (starts with "user_")
  // Lookup our DB user by clerkId
  return db.user.findUnique({
    where: { clerkId: userId, isActive: true, deletedAt: null },
  });
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) throw new Error("UNAUTHORIZED");
  return user;
}

export async function requireRole(roles: string[]) {
  const user = await requireAuth();
  if (!roles.includes(user.role)) throw new Error("FORBIDDEN");
  return user;
}
```

---
## FILE: src/lib/r2.ts
---
```
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";

const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT || "https://placeholder.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "placeholder",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "placeholder",
  },
});

const BUCKET = process.env.R2_BUCKET_NAME || "kuwait-events";
const PUBLIC_URL = process.env.R2_PUBLIC_URL || "https://cdn.kuwaitevents.com";

export async function getPresignedUploadUrl(
  filename: string,
  contentType: string,
  folder: "events" | "avatars" | "categories" = "events"
) {
  const ext = filename.split(".").pop();
  const key = `${folder}/${randomUUID()}-${filename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    ContentType: contentType,
  });

  const presignedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 3600, // 1 hour
  });

  const publicUrl = `${PUBLIC_URL}/${key}`;

  return { presignedUrl, publicUrl, key };
}
```

---
## FILE: src/lib/slug.ts
---
```
import { db } from "./db";

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

export async function generateUniqueSlug(
  titleAr: string,
  titleEn?: string
): Promise<string> {
  const baseSlug = titleEn ? toSlug(titleEn) : toSlug(titleAr);
  let slug = baseSlug || `event-${Date.now().toString(36)}`;
  let counter = 1;

  while (await db.event.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}
```

---
## FILE: src/lib/qr-utils.ts
---
```
import { db } from "./db";

/**
 * يولد QR code data لتذكرة
 * البيانات المشفرة: ticket number + booking ID
 */
export function generateTicketQRData(ticketNumber: string, bookingId: string): string {
  // البيانات داخل QR code — JSON string
  return JSON.stringify({
    tn: ticketNumber,
    bid: bookingId,
    v: 1, // version
  });
}

/**
 * يولد QR code data لكل تذاكر الحجز ويحدّث DB
 */
export async function generateQRCodesForBooking(bookingId: string): Promise<void> {
  const tickets = await db.ticket.findMany({
    where: { bookingId },
  });

  for (const ticket of tickets) {
    const qrData = generateTicketQRData(ticket.ticketNumber, bookingId);
    // في Production، نرفع QR image لـ R2. الآن نحفظ البيانات فقط.
    // QR code يُولّد client-side باستخدام qrcode.react
    await db.ticket.update({
      where: { id: ticket.id },
      data: { qrCodeUrl: qrData },
    });
  }
}
```

---
## FILE: src/lib/search.ts
---
```
import { db } from "@/lib/db";

export interface SearchEventsParams {
  query?: string;
  category?: string;
  city?: string;
  startDateFrom?: string;
  startDateTo?: string;
  sortBy?: "startDate" | "price" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

/**
 * Search and filter events with sorting support.
 *
 * Note: Prisma with SQLite does not support sorting by a related model's
 * field value (e.g. min ticket price). When sortBy is "price", we sort
 * by startDate in the Prisma query, then re-sort in JavaScript by the
 * minimum ticket price from ticketTiers.
 */
export async function searchEvents({
  query,
  category,
  city,
  startDateFrom,
  startDateTo,
  sortBy = "startDate",
  sortOrder = "asc",
  page = 1,
  limit = 20,
}: SearchEventsParams) {
  const skip = (page - 1) * limit;

  const startDateFilter: Record<string, unknown> = {};
  if (startDateFrom) startDateFilter.gte = new Date(startDateFrom);
  if (startDateTo) startDateFilter.lte = new Date(startDateTo);

  const where: Record<string, unknown> = {
    deletedAt: null,
    status: "PUBLISHED",
    ...(Object.keys(startDateFilter).length > 0 ? { startDate: startDateFilter } : {}),
  };

  if (query) {
    where.OR = [
      { titleAr: { contains: query } },
      { titleEn: { contains: query } },
      { descriptionAr: { contains: query } },
    ];
  }

  if (category) {
    where.category = { slug: category };
  }

  if (city) {
    where.venue = { city };
  }

  // For price sort, use startDate as Prisma orderBy since SQLite
  // doesn't support sorting by related model field values,
  // then re-sort results in JavaScript by minimum ticket price.
  const prismaOrderBy =
    sortBy === "price"
      ? { startDate: sortOrder }
      : { [sortBy]: sortOrder };

  const [events, total] = await Promise.all([
    db.event.findMany({
      where,
      include: {
        venue: { select: { id: true, nameAr: true, nameEn: true, city: true } },
        category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
        ticketTiers: {
          select: { id: true, type: true, price: true, quantityTotal: true, quantitySold: true },
        },
        organizer: { select: { id: true, name: true } },
      },
      orderBy: prismaOrderBy,
      skip,
      take: limit,
    }),
    db.event.count({ where }),
  ]);

  const eventsWithAvailability = events.map((event) => ({
    ...event,
    ticketTiers: event.ticketTiers.map((tier) => ({
      ...tier,
      quantityAvailable: tier.quantityTotal - tier.quantitySold,
    })),
  }));

  // When sorting by price, re-sort in JavaScript by minimum ticket tier price
  if (sortBy === "price") {
    eventsWithAvailability.sort((a, b) => {
      const minPriceA = Math.min(...a.ticketTiers.map((t) => parseFloat(t.price)));
      const minPriceB = Math.min(...b.ticketTiers.map((t) => parseFloat(t.price)));
      return sortOrder === "asc"
        ? minPriceA - minPriceB
        : minPriceB - minPriceA;
    });
  }

  return {
    events: eventsWithAvailability,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}
```

---
## FILE: src/lib/constants.ts
---
```
// App constants for Kuwait Events Platform

export const ROLES = {
  ATTENDEE: "ATTENDEE",
  ORGANIZER: "ORGANIZER",
  ADMIN: "ADMIN",
} as const;

export const EVENT_STATUSES = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  CANCELLED: "CANCELLED",
  SOLD_OUT: "SOLD_OUT",
  COMPLETED: "COMPLETED",
} as const;

export const BOOKING_STATUSES = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  CANCELLED: "CANCELLED",
  REFUNDED: "REFUNDED",
} as const;

export const PAYMENT_STATUSES = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  REFUNDED: "REFUNDED",
} as const;

export const TICKET_TYPES = {
  STANDARD: "STANDARD",
  VIP: "VIP",
  EARLY_BIRD: "EARLY_BIRD",
  GROUP: "GROUP",
} as const;

export const CURRENCY = {
  code: "KWD",
  nameAr: "دينار كويتي",
  nameEn: "Kuwaiti Dinar",
  symbolAr: "د.ك",
  decimals: 3,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

export const BOOKING_EXPIRY_MINUTES = 15;
```

---
## FILE: src/lib/utils.ts
---
```
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as KWD currency
 * KWD has 3 decimal places (e.g., 12.500 KWD)
 */
export function formatKWD(
  amount: number | string,
  locale: "ar" | "en" = "ar"
) {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;
  const formatter = new Intl.NumberFormat(
    locale === "ar" ? "ar-KW" : "en-KW",
    {
      style: "currency",
      currency: "KWD",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }
  );
  return formatter.format(value);
}

/**
 * Generate a unique booking number
 * Format: EVT-YYYY-NNNNNN
 */
export function generateBookingNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 999999)
    .toString()
    .padStart(6, "0");
  return `EVT-${year}-${random}`;
}

/**
 * Generate a unique ticket number
 * Format: TCK-XXXX-XXXX
 */
export function generateTicketNumber(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const segment = () =>
    Array.from({ length: 4 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  return `TCK-${segment()}-${segment()}`;
}

/**
 * Generate a URL-friendly slug from Arabic or English text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .concat(`-${Date.now().toString(36)}`);
}
```

---
## FILE: src/lib/notifications/notification-service.ts
---
```
import React from "react";
import { db } from "@/lib/db";
import { NotificationType, type NotificationPayload, type EmailPayload } from "./types";
import { sendTemplateEmail } from "./email-sender";

// Email template imports
import { BookingConfirmationEmail } from "@/emails/templates/booking-confirmation";
import { PaymentSuccessEmail } from "@/emails/templates/payment-success";
import { PaymentFailedEmail } from "@/emails/templates/payment-failed";
import { BookingCancelledEmail } from "@/emails/templates/booking-cancelled";
import { EventReminderEmail } from "@/emails/templates/event-reminder";
import { NewBookingNotificationEmail } from "@/emails/templates/new-booking-notification";
import { NewReviewNotificationEmail } from "@/emails/templates/new-review-notification";
import { RefundProcessedEmail } from "@/emails/templates/refund-processed";
import { TicketUsedEmail } from "@/emails/templates/ticket-used";

class NotificationService {
  /**
   * Core send method — creates a DB notification record and optionally sends email (fire-and-forget).
   */
  async send(payload: NotificationPayload): Promise<void> {
    // 1. Persist notification to database
    try {
      await db.notification.create({
        data: {
          userId: payload.userId,
          type: payload.type,
          titleAr: payload.titleAr,
          titleEn: payload.titleEn,
          bodyAr: payload.bodyAr,
          bodyEn: payload.bodyEn,
          data: payload.data ? JSON.stringify(payload.data) : undefined,
        },
      });
    } catch (error: unknown) {
      console.error(
        `[NotificationService] Failed to create notification for user ${payload.userId}:`,
        error
      );
      // Don't throw — notification creation failure should not break the calling flow
    }

    // 2. Send email if requested (fire-and-forget)
    if (payload.sendEmail && payload.emailData) {
      this.sendEmailNotification(payload.emailData).catch((error: unknown) => {
        console.error(
          `[NotificationService] Email sending failed for ${payload.emailData!.to}:`,
          error
        );
      });
    }
  }

  /**
   * Sends an email using the appropriate template.
   */
  private async sendEmailNotification(emailData: EmailPayload): Promise<void> {
    const template = this.getEmailTemplate(emailData.template, emailData.templateData);
    if (!template) {
      console.warn(
        `[NotificationService] No email template found for: ${emailData.template}`
      );
      return;
    }

    // Use English subject as the email subject (could be enhanced with locale detection)
    const subject = emailData.subjectEn || emailData.subjectAr;

    await sendTemplateEmail({
      to: emailData.to,
      subject,
      template,
    });
  }

  /**
   * Returns the appropriate React email template element for a given template name.
   */
  private getEmailTemplate(
    templateName: string,
    templateData: Record<string, unknown>
  ): React.ReactElement | null {
    switch (templateName) {
      case "booking-confirmed":
        return React.createElement(BookingConfirmationEmail, { data: templateData });
      case "payment-success":
        return React.createElement(PaymentSuccessEmail, { data: templateData });
      case "payment-failed":
        return React.createElement(PaymentFailedEmail, { data: templateData });
      case "booking-cancelled":
        return React.createElement(BookingCancelledEmail, { data: templateData });
      case "event-reminder":
        return React.createElement(EventReminderEmail, { data: templateData });
      case "new-booking":
        return React.createElement(NewBookingNotificationEmail, { data: templateData });
      case "new-review":
        return React.createElement(NewReviewNotificationEmail, { data: templateData });
      case "refund-processed":
        return React.createElement(RefundProcessedEmail, { data: templateData });
      case "ticket-used":
        return React.createElement(TicketUsedEmail, { data: templateData });
      default:
        return null;
    }
  }

  // ───────────────────────────────────────────────
  // Convenience methods for each notification type
  // ───────────────────────────────────────────────

  async notifyBookingConfirmed(params: {
    userId: string;
    bookingNumber: string;
    eventTitleAr: string;
    eventTitleEn: string;
    totalAmount: string;
    ticketCount: number;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.userId,
      type: NotificationType.BOOKING_CONFIRMED,
      titleAr: "تم تأكيد الحجز",
      titleEn: "Booking Confirmed",
      bodyAr: `تم تأكيد حجزك رقم ${params.bookingNumber} للفعالية "${params.eventTitleAr}"`,
      bodyEn: `Your booking #${params.bookingNumber} for "${params.eventTitleEn}" has been confirmed`,
      data: {
        bookingNumber: params.bookingNumber,
        totalAmount: params.totalAmount,
        ticketCount: params.ticketCount,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `تأكيد الحجز ${params.bookingNumber}`,
            subjectEn: `Booking Confirmed — ${params.bookingNumber}`,
            template: "booking-confirmed",
            templateData: {
              bookingNumber: params.bookingNumber,
              eventTitleAr: params.eventTitleAr,
              eventTitleEn: params.eventTitleEn,
              totalAmount: params.totalAmount,
              ticketCount: params.ticketCount,
            },
          }
        : undefined,
    });
  }

  async notifyPaymentSuccess(params: {
    userId: string;
    bookingNumber: string;
    amount: string;
    method: string;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.userId,
      type: NotificationType.PAYMENT_SUCCESS,
      titleAr: "تم الدفع بنجاح",
      titleEn: "Payment Successful",
      bodyAr: `تم استلام الدفع بمبلغ ${params.amount} د.ك للحجز ${params.bookingNumber}`,
      bodyEn: `Payment of ${params.amount} KWD received for booking ${params.bookingNumber}`,
      data: {
        bookingNumber: params.bookingNumber,
        amount: params.amount,
        method: params.method,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `تم الدفع — الحجز ${params.bookingNumber}`,
            subjectEn: `Payment Successful — Booking ${params.bookingNumber}`,
            template: "payment-success",
            templateData: {
              bookingNumber: params.bookingNumber,
              amount: params.amount,
              method: params.method,
            },
          }
        : undefined,
    });
  }

  async notifyPaymentFailed(params: {
    userId: string;
    bookingNumber: string;
    amount: string;
    reason?: string;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.userId,
      type: NotificationType.PAYMENT_FAILED,
      titleAr: "فشل عملية الدفع",
      titleEn: "Payment Failed",
      bodyAr: `فشل الدفع للحجز ${params.bookingNumber}${params.reason ? `: ${params.reason}` : ""}`,
      bodyEn: `Payment failed for booking ${params.bookingNumber}${params.reason ? `: ${params.reason}` : ""}`,
      data: {
        bookingNumber: params.bookingNumber,
        amount: params.amount,
        reason: params.reason,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `فشل الدفع — الحجز ${params.bookingNumber}`,
            subjectEn: `Payment Failed — Booking ${params.bookingNumber}`,
            template: "payment-failed",
            templateData: {
              bookingNumber: params.bookingNumber,
              amount: params.amount,
              reason: params.reason,
            },
          }
        : undefined,
    });
  }

  async notifyBookingCancelled(params: {
    userId: string;
    bookingNumber: string;
    eventTitleAr: string;
    eventTitleEn: string;
    reason?: string;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.userId,
      type: NotificationType.BOOKING_CANCELLED,
      titleAr: "تم إلغاء الحجز",
      titleEn: "Booking Cancelled",
      bodyAr: `تم إلغاء حجزك رقم ${params.bookingNumber} للفعالية "${params.eventTitleAr}"`,
      bodyEn: `Your booking #${params.bookingNumber} for "${params.eventTitleEn}" has been cancelled`,
      data: {
        bookingNumber: params.bookingNumber,
        reason: params.reason,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `إلغاء الحجز ${params.bookingNumber}`,
            subjectEn: `Booking Cancelled — ${params.bookingNumber}`,
            template: "booking-cancelled",
            templateData: {
              bookingNumber: params.bookingNumber,
              eventTitleAr: params.eventTitleAr,
              eventTitleEn: params.eventTitleEn,
              reason: params.reason,
            },
          }
        : undefined,
    });
  }

  async notifyEventReminder(params: {
    userId: string;
    eventTitleAr: string;
    eventTitleEn: string;
    eventDate: string;
    eventTime: string;
    venueNameAr: string;
    venueNameEn: string;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.userId,
      type: NotificationType.EVENT_REMINDER,
      titleAr: "تذكير بالفعالية",
      titleEn: "Event Reminder",
      bodyAr: `الفعالية "${params.eventTitleAr}" ستبدأ يوم ${params.eventDate} الساعة ${params.eventTime}`,
      bodyEn: `"${params.eventTitleEn}" starts on ${params.eventDate} at ${params.eventTime}`,
      data: {
        eventTitleAr: params.eventTitleAr,
        eventTitleEn: params.eventTitleEn,
        eventDate: params.eventDate,
        eventTime: params.eventTime,
        venueNameAr: params.venueNameAr,
        venueNameEn: params.venueNameEn,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `تذكير: ${params.eventTitleAr}`,
            subjectEn: `Reminder: ${params.eventTitleEn}`,
            template: "event-reminder",
            templateData: {
              eventTitleAr: params.eventTitleAr,
              eventTitleEn: params.eventTitleEn,
              eventDate: params.eventDate,
              eventTime: params.eventTime,
              venueNameAr: params.venueNameAr,
              venueNameEn: params.venueNameEn,
            },
          }
        : undefined,
    });
  }

  async notifyNewBooking(params: {
    organizerId: string;
    bookingNumber: string;
    attendeeName: string;
    eventTitleAr: string;
    eventTitleEn: string;
    ticketCount: number;
    totalAmount: string;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.organizerId,
      type: NotificationType.NEW_BOOKING,
      titleAr: "حجز جديد",
      titleEn: "New Booking",
      bodyAr: `حجز جديد رقم ${params.bookingNumber} من ${params.attendeeName} للفعالية "${params.eventTitleAr}"`,
      bodyEn: `New booking #${params.bookingNumber} from ${params.attendeeName} for "${params.eventTitleEn}"`,
      data: {
        bookingNumber: params.bookingNumber,
        attendeeName: params.attendeeName,
        ticketCount: params.ticketCount,
        totalAmount: params.totalAmount,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `حجز جديد — ${params.bookingNumber}`,
            subjectEn: `New Booking — ${params.bookingNumber}`,
            template: "new-booking",
            templateData: {
              bookingNumber: params.bookingNumber,
              attendeeName: params.attendeeName,
              eventTitleAr: params.eventTitleAr,
              eventTitleEn: params.eventTitleEn,
              ticketCount: params.ticketCount,
              totalAmount: params.totalAmount,
            },
          }
        : undefined,
    });
  }

  async notifyNewReview(params: {
    organizerId: string;
    eventTitleAr: string;
    eventTitleEn: string;
    reviewerName: string;
    rating: number;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.organizerId,
      type: NotificationType.NEW_REVIEW,
      titleAr: "تقييم جديد",
      titleEn: "New Review",
      bodyAr: `تقييم جديد من ${params.reviewerName} على الفعالية "${params.eventTitleAr}" — ${params.rating}/5`,
      bodyEn: `New review from ${params.reviewerName} on "${params.eventTitleEn}" — ${params.rating}/5`,
      data: {
        reviewerName: params.reviewerName,
        rating: params.rating,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `تقييم جديد على ${params.eventTitleAr}`,
            subjectEn: `New Review on ${params.eventTitleEn}`,
            template: "new-review",
            templateData: {
              eventTitleAr: params.eventTitleAr,
              eventTitleEn: params.eventTitleEn,
              reviewerName: params.reviewerName,
              rating: params.rating,
            },
          }
        : undefined,
    });
  }

  async notifyRefundProcessed(params: {
    userId: string;
    bookingNumber: string;
    amount: string;
    reason?: string;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.userId,
      type: NotificationType.REFUND_PROCESSED,
      titleAr: "تم معالجة الاسترداد",
      titleEn: "Refund Processed",
      bodyAr: `تم استرداد مبلغ ${params.amount} د.ك للحجز ${params.bookingNumber}`,
      bodyEn: `Refund of ${params.amount} KWD processed for booking ${params.bookingNumber}`,
      data: {
        bookingNumber: params.bookingNumber,
        amount: params.amount,
        reason: params.reason,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `تم الاسترداد — الحجز ${params.bookingNumber}`,
            subjectEn: `Refund Processed — Booking ${params.bookingNumber}`,
            template: "refund-processed",
            templateData: {
              bookingNumber: params.bookingNumber,
              amount: params.amount,
              reason: params.reason,
            },
          }
        : undefined,
    });
  }

  async notifyTicketUsed(params: {
    userId: string;
    ticketNumber: string;
    eventTitleAr: string;
    eventTitleEn: string;
    usedAt: string;
    email?: string;
  }): Promise<void> {
    await this.send({
      userId: params.userId,
      type: NotificationType.TICKET_USED,
      titleAr: "تم استخدام التذكرة",
      titleEn: "Ticket Used",
      bodyAr: `تم استخدام التذكرة رقم ${params.ticketNumber} للفعالية "${params.eventTitleAr}"`,
      bodyEn: `Ticket #${params.ticketNumber} for "${params.eventTitleEn}" has been used`,
      data: {
        ticketNumber: params.ticketNumber,
        usedAt: params.usedAt,
      },
      sendEmail: !!params.email,
      emailData: params.email
        ? {
            to: params.email,
            subjectAr: `تم استخدام التذكرة ${params.ticketNumber}`,
            subjectEn: `Ticket Used — ${params.ticketNumber}`,
            template: "ticket-used",
            templateData: {
              ticketNumber: params.ticketNumber,
              eventTitleAr: params.eventTitleAr,
              eventTitleEn: params.eventTitleEn,
              usedAt: params.usedAt,
            },
          }
        : undefined,
    });
  }
}

export const notificationService = new NotificationService();
```

---
## FILE: src/lib/notifications/email-sender.ts
---
```
import { render } from "@react-email/components";
import { sendEmail } from "@/lib/email";

interface SendTemplateEmailParams {
  to: string;
  subject: string;
  template: React.ReactElement;
}

export async function sendTemplateEmail({
  to,
  subject,
  template,
}: SendTemplateEmailParams): Promise<boolean> {
  try {
    const html = await render(template);
    return sendEmail({ to, subject, html });
  } catch (error: unknown) {
    console.error("[Email Sender] Template rendering or sending error:", error);
    return false;
  }
}
```

---
## FILE: src/lib/notifications/types.ts
---
```
/**
 * Notification types (stored as String in SQLite, validated at app level)
 */
export enum NotificationType {
  EVENT_REMINDER = "EVENT_REMINDER",
  BOOKING_CONFIRMATION = "BOOKING_CONFIRMATION",
  PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  BOOKING_CANCELLED = "BOOKING_CANCELLED",
}
```

═══════════════════════════════════════════
# SECTION 9: HOOKS
═══════════════════════════════════════════

---
## FILE: src/hooks/use-safe-auth.ts
---
```
"use client";

import { useSyncExternalStore } from "react";

/**
 * Safe auth hook that works even when Clerk is not configured.
 * Returns mock auth state when Clerk keys are missing.
 * Uses useSyncExternalStore with module-level cached snapshots
 * to avoid infinite re-renders from new object references.
 */

const emptySubscribe = () => () => {};

// Module-level cached snapshots to prevent infinite re-renders
const LOADED_NOT_SIGNED_IN = { isLoaded: true, isSignedIn: false, userId: null as string | null };
const NOT_LOADED = { isLoaded: false, isSignedIn: false, userId: null as string | null };

function getClerkStatus() {
  if (typeof window === "undefined") {
    return NOT_LOADED;
  }
  const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!pk || pk.includes("placeholder") || !pk.startsWith("pk_")) {
    return LOADED_NOT_SIGNED_IN;
  }
  // Clerk is configured - will be handled by ClerkProvider + useAuth
  return NOT_LOADED;
}

export function useSafeAuth() {
  const state = useSyncExternalStore(
    emptySubscribe,
    getClerkStatus,
    () => NOT_LOADED
  );

  return state;
}
```

---
## FILE: src/hooks/use-events.ts
---
```
"use client";

import { useQuery } from "@tanstack/react-query";

interface EventFilters {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  startDateFrom?: string;
  startDateTo?: string;
  venueId?: string;
  isFeatured?: boolean;
  sortBy?: string;
  sortOrder?: string;
}

export function useEvents(filters: EventFilters = {}) {
  return useQuery({
    queryKey: ["events", filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters.page) params.set("page", String(filters.page));
      if (filters.limit) params.set("limit", String(filters.limit));
      if (filters.category) params.set("category", filters.category);
      if (filters.search) params.set("search", filters.search);
      if (filters.startDateFrom) params.set("startDateFrom", filters.startDateFrom);
      if (filters.startDateTo) params.set("startDateTo", filters.startDateTo);
      if (filters.venueId) params.set("venueId", filters.venueId);
      if (filters.isFeatured) params.set("isFeatured", "true");
      if (filters.sortBy) params.set("sortBy", filters.sortBy);
      if (filters.sortOrder) params.set("sortOrder", filters.sortOrder);

      const res = await fetch(`/api/v1/events?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
    staleTime: 60 * 1000,
  });
}
```

---
## FILE: src/hooks/use-event.ts
---
```
"use client";

import { useQuery } from "@tanstack/react-query";

export function useEvent(slug: string) {
  return useQuery({
    queryKey: ["event", slug],
    queryFn: async () => {
      const res = await fetch(`/api/v1/events/${slug}`);
      if (!res.ok) throw new Error("Failed to fetch event");
      return res.json();
    },
    enabled: !!slug,
    staleTime: 60 * 1000,
  });
}
```

---
## FILE: src/hooks/use-booking.ts
---
```
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreateBookingInput } from "@/lib/validators/booking-schema";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateBookingInput) => {
      const res = await fetch("/api/v1/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message ?? "فشل إنشاء الحجز");
      return json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useBookings(filters?: { status?: string; page?: number }) {
  return useQuery({
    queryKey: ["bookings", filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters?.status) params.set("status", filters.status);
      if (filters?.page) params.set("page", String(filters.page));
      const res = await fetch(`/api/v1/bookings?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useBooking(id: string) {
  return useQuery({
    queryKey: ["booking", id],
    queryFn: async () => {
      const res = await fetch(`/api/v1/bookings/${id}`);
      if (!res.ok) throw new Error("Failed to fetch booking");
      return res.json();
    },
    enabled: !!id,
    staleTime: 30 * 1000,
  });
}

export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (bookingId: string) => {
      const res = await fetch(`/api/v1/bookings/${bookingId}/cancel`, {
        method: "PATCH",
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message ?? "فشل إلغاء الحجز");
      return json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}
```

---
## FILE: src/hooks/use-categories.ts
---
```
"use client";

import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("/api/v1/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
  });
}
```

---
## FILE: src/hooks/use-reviews.ts
---
```
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreateReviewInput } from "@/lib/validators/review-schema";

export function useEventReviews(
  eventId: string,
  params?: { page?: number; limit?: number; sortBy?: string }
) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.sortBy) query.set("sortBy", params.sortBy);

  return useQuery({
    queryKey: ["reviews", eventId, params],
    queryFn: async () => {
      const res = await fetch(
        `/api/v1/events/${eventId}/reviews/list?${query}`
      );
      if (!res.ok) throw new Error("Failed to fetch reviews");
      return res.json();
    },
    staleTime: 60 * 1000, // 1 minute
    enabled: !!eventId,
  });
}

export function useReviewEligibility(eventId: string) {
  return useQuery({
    queryKey: ["review-eligibility", eventId],
    queryFn: async () => {
      const res = await fetch(
        `/api/v1/events/${eventId}/reviews/eligibility`
      );
      if (!res.ok) throw new Error("Failed to check eligibility");
      return res.json();
    },
    staleTime: 30 * 1000, // 30 seconds
    enabled: !!eventId,
  });
}

export function useCreateReview(eventId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateReviewInput) => {
      const res = await fetch(`/api/v1/events/${eventId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          error.error?.message || "Failed to create review"
        );
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", eventId] });
      queryClient.invalidateQueries({
        queryKey: ["review-eligibility", eventId],
      });
      queryClient.invalidateQueries({ queryKey: ["event"] }); // refresh event detail
    },
  });
}

export function useReplyToReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      reviewId,
      reply,
    }: {
      reviewId: string;
      reply: string;
    }) => {
      const res = await fetch(`/api/v1/reviews/${reviewId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to reply");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["event"] });
    },
  });
}
```

---
## FILE: src/hooks/use-payment.ts
---
```
"use client";

import { useMutation } from "@tanstack/react-query";
import type { InitiatePaymentInput } from "@/lib/validators/payment-schema";

export function useInitiatePayment() {
  return useMutation({
    mutationFn: async (data: InitiatePaymentInput) => {
      const res = await fetch("/api/v1/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message ?? "فشل بدء الدفع");
      return json;
    },
  });
}
```

---
## FILE: src/hooks/use-notifications.ts
---
```
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

// API response type
interface NotificationData {
  id: string;
  userId: string;
  type: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  data: Record<string, unknown> | null;
  isRead: boolean;
  readAt: string | null;
  createdAt: string;
}

interface NotificationsResponse {
  success: boolean;
  data: NotificationData[];
  message: string;
  meta?: { page: number; limit: number; total: number; totalPages: number };
}

interface UnreadCountResponse {
  success: boolean;
  data: { unreadCount: number };
  message: string;
}

export function useNotifications(filter: "all" | "unread" = "all", page = 1) {
  const { isSignedIn } = useAuth();
  return useQuery({
    queryKey: ["notifications", filter, page],
    queryFn: async (): Promise<NotificationsResponse> => {
      const res = await fetch(`/api/v1/notifications?filter=${filter}&page=${page}&limit=20`);
      if (!res.ok) throw new Error("Failed to fetch notifications");
      return res.json();
    },
    enabled: isSignedIn,
    staleTime: 30 * 1000,
  });
}

export function useUnreadCount() {
  const { isSignedIn } = useAuth();
  return useQuery({
    queryKey: ["notifications-unread-count"],
    queryFn: async (): Promise<UnreadCountResponse> => {
      const res = await fetch("/api/v1/notifications/count");
      if (!res.ok) throw new Error("Failed to fetch count");
      return res.json();
    },
    enabled: isSignedIn,
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000,
  });
}

export function useMarkAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (notificationId: string) => {
      const res = await fetch(`/api/v1/notifications/${notificationId}/read`, { method: "PATCH" });
      if (!res.ok) throw new Error("Failed to mark as read");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["notifications-unread-count"] });
    },
  });
}

export function useMarkAllAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/v1/notifications", { method: "PATCH" });
      if (!res.ok) throw new Error("Failed to mark all as read");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["notifications-unread-count"] });
    },
  });
}

export type { NotificationData, NotificationsResponse, UnreadCountResponse };
```

---
## FILE: src/hooks/use-search.ts
---
```
"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";

export interface SearchFiltersState {
  search?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  priceFrom?: string;
  priceTo?: string;
  venueId?: string;
  organizerId?: string;
  city?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export function useSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read filters from URL
  const filters: SearchFiltersState = useMemo(() => {
    const params: SearchFiltersState = {};
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");
    const priceFrom = searchParams.get("priceFrom");
    const priceTo = searchParams.get("priceTo");
    const venueId = searchParams.get("venueId");
    const organizerId = searchParams.get("organizerId");
    const city = searchParams.get("city");
    const sortBy = searchParams.get("sortBy");
    const sortOrder = searchParams.get("sortOrder") as "asc" | "desc" | null;
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");

    if (search) params.search = search;
    if (category) params.category = category;
    if (dateFrom) params.dateFrom = dateFrom;
    if (dateTo) params.dateTo = dateTo;
    if (priceFrom) params.priceFrom = priceFrom;
    if (priceTo) params.priceTo = priceTo;
    if (venueId) params.venueId = venueId;
    if (organizerId) params.organizerId = organizerId;
    if (city) params.city = city;
    if (sortBy) params.sortBy = sortBy;
    if (sortOrder) params.sortOrder = sortOrder;
    if (page) params.page = parseInt(page, 10);
    if (limit) params.limit = parseInt(limit, 10);

    return params;
  }, [searchParams]);

  // Update URL with new filters (shallow routing)
  const updateFilters = useCallback(
    (newFilters: Partial<SearchFiltersState>) => {
      const params = new URLSearchParams(searchParams.toString());

      // Reset page to 1 when filters change (unless changing page itself)
      if (!("page" in newFilters)) {
        params.set("page", "1");
      }

      for (const [key, value] of Object.entries(newFilters)) {
        if (value === undefined || value === null || value === "") {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  // Clear all filters
  const clearFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  // Remove a single filter
  const removeFilter = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  // Build query string for API
  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value));
      }
    }
    return params.toString();
  }, [filters]);

  // React Query for search results
  const {
    data: searchResult,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["events-search", queryString],
    queryFn: async () => {
      const res = await fetch(`/api/v1/events?${queryString}`);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(
          (err as Record<string, unknown>)?.error
            ? String((err as Record<string, { message: string }>).error.message)
            : "Failed to search events"
        );
      }
      return res.json();
    },
    staleTime: 30 * 1000,
  });

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.category) count++;
    if (filters.dateFrom || filters.dateTo) count++;
    if (filters.priceFrom || filters.priceTo) count++;
    if (filters.venueId) count++;
    if (filters.organizerId) count++;
    if (filters.city) count++;
    return count;
  }, [filters]);

  return {
    filters,
    updateFilters,
    clearFilters,
    removeFilter,
    searchResult,
    isLoading,
    isError,
    error,
    activeFilterCount,
  };
}

// Suggestions hook with debounce
export function useFetchSuggestions(query: string) {
  return useQuery({
    queryKey: ["search-suggestions", query],
    queryFn: async () => {
      if (query.length < 2) return [];
      const res = await fetch(
        `/api/v1/search/suggestions?q=${encodeURIComponent(query)}&limit=5`
      );
      if (!res.ok) return [];
      const json = await res.json();
      return (json as { data?: unknown[] }).data ?? [];
    },
    enabled: query.length >= 2,
    staleTime: 10 * 1000,
  });
}
```

---
## FILE: src/hooks/use-admin.ts
---
```
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  ChangeUserRoleInput,
  ToggleUserActiveInput,
  CreateCategoryInput,
  UpdateCategoryInput,
  FeatureEventInput,
  ChangeEventStatusInput,
} from "@/lib/validators/admin-schema";

// ── Users ──
export function useAdminUsers(params?: {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  isActive?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.search) query.set("search", params.search);
  if (params?.role) query.set("role", params.role);
  if (params?.isActive) query.set("isActive", params.isActive);

  return useQuery({
    queryKey: ["admin", "users", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/admin/users?${query}`);
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useChangeUserRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      data,
    }: {
      userId: string;
      data: ChangeUserRoleInput;
    }) => {
      const res = await fetch(`/api/v1/admin/users/${userId}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to change role");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "stats"] });
    },
  });
}

export function useToggleUserActive() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      data,
    }: {
      userId: string;
      data: ToggleUserActiveInput;
    }) => {
      const res = await fetch(`/api/v1/admin/users/${userId}/active`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to toggle active");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
    },
  });
}

// ── Events ──
export function useAdminEvents(params?: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
  isFeatured?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.status) query.set("status", params.status);
  if (params?.search) query.set("search", params.search);
  if (params?.isFeatured) query.set("isFeatured", params.isFeatured);

  return useQuery({
    queryKey: ["admin", "events", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/admin/events?${query}`);
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useFeatureEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      eventId,
      data,
    }: {
      eventId: string;
      data: FeatureEventInput;
    }) => {
      const res = await fetch(`/api/v1/admin/events/${eventId}/feature`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to feature event");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
    },
  });
}

export function useChangeEventStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      eventId,
      data,
    }: {
      eventId: string;
      data: ChangeEventStatusInput;
    }) => {
      const res = await fetch(`/api/v1/admin/events/${eventId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to change status");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
    },
  });
}

// ── Categories ──
export function useAdminCategories() {
  return useQuery({
    queryKey: ["admin", "categories"],
    queryFn: async () => {
      const res = await fetch("/api/v1/admin/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
    staleTime: 60 * 1000,
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateCategoryInput) => {
      const res = await fetch("/api/v1/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to create category");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "categories"] });
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      categoryId,
      data,
    }: {
      categoryId: string;
      data: UpdateCategoryInput;
    }) => {
      const res = await fetch(`/api/v1/admin/categories/${categoryId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to update category");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "categories"] });
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categoryId: string) => {
      const res = await fetch(`/api/v1/admin/categories/${categoryId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to delete category");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "categories"] });
    },
  });
}

// ── Stats ──
export function useAdminStats() {
  return useQuery({
    queryKey: ["admin", "stats"],
    queryFn: async () => {
      const res = await fetch("/api/v1/admin/stats");
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    staleTime: 60 * 1000,
  });
}
```

---
## FILE: src/hooks/use-dashboard.ts
---
```
"use client";

import { useQuery } from "@tanstack/react-query";

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: async () => {
      const res = await fetch("/api/v1/dashboard/stats");
      if (!res.ok) throw new Error("Failed to fetch dashboard stats");
      return res.json();
    },
    staleTime: 30 * 1000, // 30 seconds
  });
}

export function useOrganizerEvents(params?: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.status) query.set("status", params.status);
  if (params?.search) query.set("search", params.search);

  return useQuery({
    queryKey: ["dashboard", "events", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/dashboard/events?${query}`);
      if (!res.ok) throw new Error("Failed to fetch organizer events");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useOrganizerBookings(params?: {
  page?: number;
  limit?: number;
  eventId?: string;
  status?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.eventId) query.set("eventId", params.eventId);
  if (params?.status) query.set("status", params.status);

  return useQuery({
    queryKey: ["dashboard", "bookings", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/dashboard/bookings?${query}`);
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}
```

---
## FILE: src/hooks/use-event-mutations.ts
---
```
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateEventInput, UpdateEventInput } from "@/lib/validators/event-schema";

export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateEventInput) => {
      const res = await fetch("/api/v1/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to create event");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard", "events"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "stats"] });
    },
  });
}

export function useUpdateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateEventInput }) => {
      const res = await fetch(`/api/v1/events/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to update event");
      }
      return res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["dashboard", "events"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "stats"] });
      queryClient.invalidateQueries({ queryKey: ["event", variables.id] });
    },
  });
}

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/v1/events/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to delete event");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard", "events"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "stats"] });
    },
  });
}
```

---
## FILE: src/hooks/use-upload.ts
---
```
"use client";

import { useMutation } from "@tanstack/react-query";

export function usePresignedUpload() {
  return useMutation({
    mutationFn: async ({
      filename,
      contentType,
      folder,
    }: {
      filename: string;
      contentType: string;
      folder?: "events" | "avatars" | "categories";
    }) => {
      const params = new URLSearchParams({ filename, contentType });
      if (folder) params.set("folder", folder);

      const res = await fetch(`/api/v1/upload/presigned?${params}`);
      if (!res.ok) throw new Error("Failed to get upload URL");
      return res.json();
    },
  });
}

export function useUploadFile() {
  const presignedMutation = usePresignedUpload();

  return useMutation({
    mutationFn: async ({
      file,
      folder,
    }: {
      file: File;
      folder?: "events" | "avatars" | "categories";
    }) => {
      // Step 1: Get presigned URL
      const { data } = await presignedMutation.mutateAsync({
        filename: file.name,
        contentType: file.type,
        folder,
      });

      // Step 2: Upload to R2 via presigned URL
      const uploadRes = await fetch(data.presignedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (!uploadRes.ok) throw new Error("Upload failed");

      // Step 3: Return public URL
      return { publicUrl: data.publicUrl, key: data.key };
    },
  });
}
```

---
## FILE: src/hooks/use-venues.ts
---
```
"use client";

import { useQuery } from "@tanstack/react-query";

export function useVenue(slug: string) {
  return useQuery({
    queryKey: ["venue", slug],
    queryFn: async () => {
      const res = await fetch(`/api/v1/venues/${slug}`);
      if (!res.ok) throw new Error("Failed to fetch venue");
      return res.json();
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}
```

---
## FILE: src/hooks/use-ticket-validation.ts
---
```
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ValidateTicketInput } from "@/lib/validators/ticket-schema";

export function useValidateTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ValidateTicketInput) => {
      const res = await fetch("/api/v1/tickets/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          error.error?.message || "فشل التحقق من التذكرة"
        );
      }
      return res.json();
    },
    onSuccess: () => {
      // Invalidate stats and history so they refresh
      queryClient.invalidateQueries({ queryKey: ["ticket-stats"] });
      queryClient.invalidateQueries({ queryKey: ["validation-history"] });
    },
  });
}

export function useTicketStats(eventId: string | undefined) {
  return useQuery({
    queryKey: ["ticket-stats", eventId],
    queryFn: async () => {
      if (!eventId) return null;
      const res = await fetch(`/api/v1/tickets/stats?eventId=${eventId}`);
      if (!res.ok) throw new Error("Failed to fetch ticket stats");
      return res.json();
    },
    enabled: !!eventId,
    staleTime: 10 * 1000, // 10 seconds — stats change frequently during check-in
  });
}

export function useValidationHistory(eventId: string | undefined) {
  return useQuery({
    queryKey: ["validation-history", eventId],
    queryFn: async () => {
      if (!eventId) return null;
      const res = await fetch(`/api/v1/tickets/history?eventId=${eventId}`);
      if (!res.ok) throw new Error("Failed to fetch validation history");
      return res.json();
    },
    enabled: !!eventId,
    staleTime: 5 * 1000, // 5 seconds — refresh often during active scanning
  });
}
```

═══════════════════════════════════════════
# SECTION 10: SHARED UI COMPONENTS
═══════════════════════════════════════════

---
## FILE: src/components/ui/animated-counter.tsx
---
```
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

/**
 * AnimatedCounter — shared component for counting up to a target number.
 * Uses requestAnimationFrame with ease-out cubic for smooth deceleration.
 * Only starts animating when scrolled into view (once: true).
 */
export function AnimatedCounter({ target, duration = 1800, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView || target === 0) return;

    startTimeRef.current = null;

    function step(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}
```

---
## FILE: src/components/ui/animated-section.tsx
---
```
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

function getOffset(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case "up":
      return { x: 0, y: 40 };
    case "down":
      return { x: 0, y: -40 };
    case "left":
      return { x: 60, y: 0 };
    case "right":
      return { x: -60, y: 0 };
    case "none":
      return { x: 0, y: 0 };
    default:
      return { x: 0, y: 40 };
  }
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offset = getOffset(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
```

---
## FILE: src/components/ui/magnetic-button.tsx
---
```
"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  asChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  asChild = false,
  onClick,
  disabled = false,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current || disabled) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      // Clamp displacement to max 8px
      const maxDisplacement = 8;
      const clampedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX));
      const clampedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY));

      setPosition({ x: clampedX, y: clampedY });
    },
    [strength, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const Comp = asChild ? Slot : "button";

  return (
    <motion.button
      ref={ref}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {asChild ? <Comp>{children}</Comp> : children}
    </motion.button>
  );
}

export default MagneticButton;
```

---
## FILE: src/components/ui/tilt-card.tsx
---
```
"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glowColor?: string;
}

export function TiltCard({
  children,
  className,
  tiltAmount = 10,
  glowColor = "rgba(201, 168, 76, 0.15)",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate percentage position within card
      const percentX = ((e.clientX - rect.left) / rect.width) * 100;
      const percentY = ((e.clientY - rect.top) / rect.height) * 100;

      // Calculate rotation (invert Y axis for natural tilt direction)
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * tiltAmount;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * tiltAmount;

      setTilt({ rotateX, rotateY });
      setGlowPosition({ x: percentX, y: percentY });
    },
    [tiltAmount]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        {children}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`
            : "none",
          opacity: isHovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
}

export default TiltCard;
```

---
## FILE: src/components/ui/motion.tsx
---
```
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
```

---
## FILE: src/components/layout/theme-provider.tsx
---
```
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

---
## FILE: src/components/layout/query-provider.tsx
---
```
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60 * 1000, retry: 1 },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
```

---
## FILE: src/components/layout/language-switcher.tsx
---
```
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isSwitching, setIsSwitching] = useState(false);

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    setIsSwitching(true);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      // Small delay to let the transition feel smooth
      setTimeout(() => setIsSwitching(false), 300);
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      disabled={isPending}
      className="relative gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      <Globe className="h-4 w-4" />
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium"
        >
          {locale === "ar" ? "EN" : "عربي"}
        </motion.span>
      </AnimatePresence>
      {isPending && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-3 w-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </Button>
  );
}
```

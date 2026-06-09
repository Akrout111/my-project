# Migration Guide: SQLite → PostgreSQL

This guide covers migrating the Kuwait Events Platform from SQLite (development) to PostgreSQL (production).

---

## 1. Provision a PostgreSQL Database

Provision a PostgreSQL instance via your preferred provider (e.g., Supabase, Neon, Railway, AWS RDS, or self-hosted). You will need:

- **Host**, **port**, **database name**, **username**, and **password**
- A connection string in the format:
  ```
  postgresql://<username>:<password>@<host>:<port>/<database>?schema=public
  ```

### Recommended providers

| Provider   | Free Tier | Notes                          |
|------------|-----------|--------------------------------|
| Supabase   | Yes       | Built-in auth, easy dashboard  |
| Neon       | Yes       | Serverless, auto-scaling       |
| Railway    | Yes       | Simple deploy, good for small  |
| AWS RDS    | No        | Enterprise, full control       |

---

## 2. Replace the Schema File

```bash
# Back up the SQLite schema
cp prisma/schema.prisma prisma/schema.prisma.sqlite

# Replace with PostgreSQL version
cp prisma/schema.prisma.postgres prisma/schema.prisma
```

The PostgreSQL schema includes:
- **Native Prisma enums** instead of String fields validated at the application level
- **Decimal types** (`@db.Decimal(10, 3)`) for currency fields (KWD)
- **Json types** for structured data (`galleryUrls`, `metadata`, `notification.data`)

---

## 3. Update DATABASE_URL

Set the `DATABASE_URL` environment variable to your PostgreSQL connection string:

```bash
# In .env or your deployment environment
DATABASE_URL="postgresql://user:password@host:5432/kuwait_events?schema=public"
```

**Important:** Remove or comment out any old SQLite `DATABASE_URL` entries.

---

## 4. Run Prisma Migration

```bash
# Generate the Prisma client for PostgreSQL
bun run db:generate

# Create and apply the initial migration
npx prisma migrate dev --name init

# For production deployment, use:
npx prisma migrate deploy
```

This will:
- Create all tables with proper PostgreSQL column types
- Create native enum types in the database
- Set up indexes and foreign key constraints

---

## 5. Seed the New Database

```bash
bun run db:seed
```

The seed script will:
- Create categories, venues, and organizer user
- Create sample events with ticket tiers
- Compute and backfill the `minPrice` field for all events

---

## 6. Zod Validation Changes

When migrating to PostgreSQL with native enums and Decimal/Json types, the following Zod schema changes are needed:

### 6.1 Enum Fields

In SQLite, enum fields are `z.string()` with `.refine()` or `z.enum()`. With PostgreSQL native enums, the Zod schemas can use `z.nativeEnum()`:

```typescript
// Before (SQLite — String enums validated in Zod)
role: z.string().refine((v) => ["ATTENDEE", "ORGANIZER", "ADMIN"].includes(v))

// After (PostgreSQL — native enums)
import { Role } from "@prisma/client"
role: z.nativeEnum(Role)
```

Affected files in `src/lib/validators/`:
- `auth-schema.ts` — `role` field
- `event-schema.ts` — `status`, ticket `type` fields
- `booking-schema.ts` — `status` field
- `payment-schema.ts` — `status`, `method` fields

### 6.2 Price Fields (String → Decimal)

In SQLite, prices are stored as strings (e.g., `"15.000"`). In PostgreSQL with `Decimal`, Prisma returns `Prisma.Decimal` objects. Update Zod schemas:

```typescript
// Before (SQLite — string prices)
price: z.string()

// After (PostgreSQL — Decimal prices)
price: z.number().positive()  // or z.instanceof(Prisma.Decimal)
```

Affected files:
- `event-schema.ts` — `ticketTiers.price`
- `booking-schema.ts` — `totalAmount`
- `payment-schema.ts` — `amount`

### 6.3 JSON Fields (String → Json)

In SQLite, JSON is stored as strings. In PostgreSQL with `Json` type, Prisma returns parsed objects:

```typescript
// Before (SQLite — JSON strings)
galleryUrls: z.string()
metadata: z.record(z.unknown())

// After (PostgreSQL — native Json)
galleryUrls: z.array(z.string())
metadata: z.record(z.unknown())
```

Affected files:
- `event-schema.ts` — `galleryUrls`, `metadata`

### 6.4 Serialization Changes

In API routes, price fields no longer need `.toString()` calls since Prisma handles Decimal serialization. Remove patterns like:

```typescript
// Before (SQLite)
price: t.price.toString()

// After (PostgreSQL — Decimal auto-serializes)
price: t.price  // Already a number or Decimal
```

---

## 7. Data Migration (Existing SQLite Data)

If you have existing data in SQLite that needs to be migrated:

```bash
# Export SQLite data
npx prisma db seed  # or use a custom export script

# Import into PostgreSQL
# Option 1: Re-run seed on PostgreSQL
bun run db:seed

# Option 2: Use pgloader for direct migration
pgloader sqlite:///path/to/db/custom.db postgresql://user:pass@host:5432/dbname
```

For production migrations, consider using [pgloader](https://github.com/dimitri/pgloader) for zero-downtime data transfer.

---

## 8. Environment Variables Checklist

Ensure these environment variables are set for the PostgreSQL deployment:

| Variable             | Required | Description                              |
|----------------------|----------|------------------------------------------|
| `DATABASE_URL`       | Yes      | PostgreSQL connection string              |
| `JWT_SECRET`         | Yes      | Secret for JWT token signing              |
| `NEXTAUTH_SECRET`    | Yes      | Secret for NextAuth.js                    |
| `CLERK_SECRET_KEY`   | Optional | For Clerk integration                    |
| `KNET_BASE_URL`      | Optional | KNet payment gateway URL                 |
| `KNET_MERCHANT_ID`   | Optional | KNet merchant ID                         |
| `KNET_API_KEY`       | Optional | KNet API key                             |
| `KNET_SECRET_KEY`    | Optional | KNet secret key                          |
| `R2_ACCESS_KEY_ID`   | Optional | Cloudflare R2 access key                 |
| `R2_SECRET_ACCESS_KEY`| Optional| Cloudflare R2 secret key                 |
| `R2_BUCKET_NAME`     | Optional | Cloudflare R2 bucket name                |
| `R2_ACCOUNT_ID`      | Optional | Cloudflare R2 account ID                 |

---

## 9. Verify the Migration

After migration, verify:

1. **Schema**: `npx prisma db pull` should match `schema.prisma`
2. **Data**: Check event count, ticket tiers, and user records
3. **minPrice**: All events should have computed `minPrice` values
4. **API**: Test key endpoints (`/api/v1/events`, `/api/v1/events/:id`)
5. **Price sorting**: Verify `?sortBy=minPrice&sortOrder=asc` works correctly

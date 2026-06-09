# Kuwait Events Platform | منصة فعاليات الكويت

A full-stack web application for discovering, booking, and managing events in Kuwait. Built with Next.js 16, TypeScript, Prisma, and Tailwind CSS.

## Features

- Event discovery with bilingual search (Arabic/English)
- Event booking with KNet payment integration
- QR code ticket generation and validation
- Admin dashboard with analytics
- Review and rating system
- Real-time notifications
- Full RTL support

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Database | SQLite + Prisma 6 (PostgreSQL-ready) |
| UI | Tailwind CSS 4 + shadcn/ui |
| Auth | Clerk + Custom JWT |
| Payments | KNet Gateway |
| Storage | Cloudflare R2 |
| Email | Resend + React Email |
| i18n | next-intl (Arabic + English) |

## Getting Started | بدء الاستخدام

### Prerequisites | المتطلبات المسبقة

- Node.js 18+ or Bun 1.0+
- Clerk account (for authentication, optional)
- KNet merchant account (for payments, optional)
- Cloudflare R2 bucket (for file storage, optional)
- Resend account (for email, optional)

### Installation | التثبيت

```bash
# Clone the repository
git clone https://github.com/Akrout111/my-project.git
cd my-project

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Set up database
bun run db:push
bun run db:seed

# Start development server
bun run dev
```

### Environment Variables | متغيرات البيئة

See `.env.example` for all required environment variables with descriptions.

## Available Scripts | الأوامر المتاحة

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run lint` | Run ESLint |
| `bun run test` | Run tests |
| `bun run test:watch` | Run tests in watch mode |
| `bun run test:coverage` | Run tests with coverage report |
| `bun run db:push` | Push Prisma schema to database |
| `bun run db:seed` | Seed database with sample data |

## Project Structure | هيكل المشروع

```
src/
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (dashboard)/     # Admin dashboard pages
│   ├── (main)/          # Public-facing pages
│   └── api/v1/          # API route handlers
├── components/
│   ├── features/        # Domain-specific components
│   ├── layout/          # Layout utilities
│   └── ui/              # shadcn/ui + custom UI
├── emails/              # React Email templates
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and libraries
├── messages/            # i18n translation files
└── types/               # TypeScript type definitions
```

## API Documentation | توثيق واجهة برمجة التطبيقات

API endpoints follow RESTful conventions under `/api/v1/`. All endpoints return standardized JSON responses:

**Success:** `{ success: true, data: T, message?: string }`
**Error:** `{ success: false, error: { code: string, message: string } }`

## Contributing | المساهمة

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make changes and commit with conventional commits
3. Push and create a Pull Request
4. Ensure CI checks pass before merge

## License | الترخيص

Private - All rights reserved.

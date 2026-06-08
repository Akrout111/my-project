# Task A4 — Fix Footer Social Icons

## Agent: Frontend Styling Agent

## Summary
Improved footer social icon visibility and hover effects by updating two className strings in `src/components/features/layout/footer.tsx`.

## Changes Made

### File: `src/components/features/layout/footer.tsx`

1. **Social link `<a>` className** (line 96):
   - Before: `border-border/50 bg-muted/30 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_16px_oklch(0.76_0.13_85/25%)]`
   - After: `border-primary/15 bg-primary/5 hover:border-primary/40 hover:bg-primary/15 hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_0_16px_oklch(0.76_0.13_85/20%)]`

2. **Icon className** (line 98):
   - Before: `text-muted-foreground`
   - After: `text-foreground/70`

## Verification
- `bun run lint`: 0 errors, 2 pre-existing warnings only
- `aria-label` attributes already present on all social links ✓
- No other parts of the footer changed

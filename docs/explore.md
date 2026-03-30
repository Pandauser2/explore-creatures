# Explore Doc: Current State and Integration Map

This document captures what is already built for `explore-creatures`, how it currently works, known constraints, and the open questions that should be clarified before further feature work.

## 1) What Exists Today

### Product surface
- Single-page Next.js (App Router) landing page for pet travel quote generation.
- Mobile-first layout with hero, quote form, services, process, testimonials, FAQ, final CTA, and footer.
- Client-side quote estimate calculation and lead capture flow.

### Core technical stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- `lucide-react` icons
- No database

### Content model
- Primary source: Google Sheets CSV feeds (content + services) via `lib/sheets.ts`.
- Fallback source: `content/fallback.json` when feed fetch/parse fails.

## 2) File-Level Architecture

### Page composition
- `app/page.tsx`
  - Orchestrates page sections.
  - Calls `getSiteData()` from `lib/sheets.ts`.

### UI sections
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/QuoteForm.tsx`
- `components/ServicesSection.tsx`
- `components/ProcessSection.tsx`
- `components/TestimonialsSection.tsx`
- `components/FaqSection.tsx`
- `components/FinalCta.tsx`
- `components/Footer.tsx`

### Data/content
- `lib/sheets.ts`
  - Fetches two CSV URLs.
  - Parses CSV manually.
  - Validates expected headers.
  - Returns normalized shape:
    - `hero: { title, subtitle, cta }`
    - `services: [{ title, description, icon }]`
    - `finalCta: string`
  - Falls back to `content/fallback.json` with `console.error` logging on failure.

### Lead submission and CORS handling
- `components/QuoteForm.tsx`
  - Submits lead data to same-origin `POST /api/lead`.
- `app/api/lead/route.ts`
  - Server-side proxy that forwards JSON to Google Apps Script web app endpoint.
  - Handles `OPTIONS`.
  - Returns normalized JSON success/failure for UI.
  - Includes upstream error checks and logs.

### Assets/config
- `public/images/hero.jpg`
- `tailwind.config.ts`, `postcss.config.js`, `next.config.js`

## 3) Current Functional Behavior

### Quote calculator
- Inputs: origin, destination, pet type, weight.
- Logic:
  - `base = 200`
  - if origin != destination: `+300`
  - weight factor: `weight * 2`
  - pet multiplier: dog `1.2`, cat `1.0`, other `1.5`
  - final price = `(base + weightFactor) * petMultiplier`
  - display range = `price ±20%`
- UX:
  - 1-second simulated loading before showing estimate.

### Lead flow
- After estimate, user enters email and submits.
- UI states:
  - loading (`Sending...`)
  - success (`We'll contact you shortly`)
  - fallback error message
- Payload currently sent by UI to `/api/lead`:
  - `email`, `origin`, `destination`, `pet_type`, `weight`

## 4) Integration Dependencies

### External endpoint
- Google Apps Script web app URL receives forwarded JSON from `/api/lead`.
- This endpoint is a hardcoded URL in `app/api/lead/route.ts`.

### Google Sheets CMS
- Two hardcoded CSV URLs in `lib/sheets.ts` (currently placeholder-style values).
- If unreachable/malformed, app renders from fallback JSON.

## 5) Constraints Already Enforced

- No DB / no backend persistence in app itself.
- Minimal code and low-complexity implementation.
- No external CSV parser package.
- Uses Next Image for hero image.
- Maintains full UI render even when remote content fetch fails.

## 6) Known Risks / Edge Cases

- Lead proxy currently allows broad CORS response headers; could be tightened if needed.
- Apps Script may return HTML with status 200 for script-level errors; route currently checks for common error signatures but this is heuristic.
- CSV parser is intentionally simple; very complex CSV edge cases could still break parse semantics.
- Hardcoded external URLs increase maintenance overhead if endpoints change.

## 7) Ambiguities / Questions To Clarify Before Next Feature Work

1. Should `/api/lead` be restricted to same-origin requests only (remove `Access-Control-Allow-Origin: *`)?
2. Do we want strict server-side payload validation (email format, weight bounds, allowed pet types) before forwarding to Apps Script?
3. Should Apps Script return a strict JSON contract (e.g., `{ ok: true }`) so proxy can avoid heuristic HTML string checks?
4. Should Sheets CSV URLs and Apps Script URL move to env/config (for staging/prod separation), or remain hardcoded by design?
5. Should lead submissions include additional fields (timestamp, estimated range, user agent, source campaign)?
6. Do we need anti-spam controls (rate limiting / CAPTCHA) on lead submission now, or after initial pilot traffic?

## 8) Suggested Next Planning Step

Before any new implementation, align on:
- lead security posture (`/api/lead` policy),
- canonical Apps Script response schema,
- and environment/config strategy for external URLs.

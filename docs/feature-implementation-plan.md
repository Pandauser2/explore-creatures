# Feature Implementation Plan

**Overall Progress:** `0%`

## TLDR
Implement the exact 8-area visual and backend improvement plan requested: bold rounded design system, upgraded hero/form/services/process/testimonials, expanded lead payload, and minimal backend hardening.

## Critical Decisions
- Decision 1: Keep existing architecture and only apply minimal, modular updates per requested scope.
- Decision 2: Use the exact requested visual direction (Nunito ExtraBold, rounded UI, specified color palette).
- Decision 3: Expand lead data contract to include `date` and `service type` while preserving current quote flow.
- Decision 4: Apply only three backend quick wins from open questions: `.env` config, validation, and basic IP rate limiting.

## Tasks:

- [ ] 🟥 **Step 1: Design System Refresh**
  - [ ] 🟥 Use Nunito ExtraBold for headings with a friendly rounded personality.
  - [ ] 🟥 Set primary color to tangerine orange `#FF6B35` with sunny yellow, mint green, ocean blue, and hot coral accent ramps.
  - [ ] 🟥 Apply generous radius everywhere (pill buttons, rounded cards, soft inputs).

- [ ] 🟥 **Step 2: Hero Section Redesign**
  - [ ] 🟥 Replace current hero with full-width joyful pet+owner travel photo background.
  - [ ] 🟥 Add frosted glass navbar pill, bold headline with emoji tone, and dual CTA.
  - [ ] 🟥 Anchor trust-stats bar at hero bottom edge: `1000+ relocations / 50+ countries / 999+ pets`.

- [ ] 🟥 **Step 3: Quote Form Expansion**
  - [ ] 🟥 Add `travel date` field.
  - [ ] 🟥 Add `service type` field.
  - [ ] 🟥 Keep quote form visual style pill/rounded to match the playful aesthetic.

- [ ] 🟥 **Step 4: Services Section Upgrade**
  - [ ] 🟥 Add International / Domestic toggle, mirroring the requested reference structure.
  - [ ] 🟥 Render services as bright-bordered icon cards.
  - [ ] 🟥 Update Google Sheets CMS model to support International/Domestic split.

- [ ] 🟥 **Step 5: How It Works Visual Redesign**
  - [ ] 🟥 Replace current `ProcessSection` with numbered circle steps connected by dashed colourful lines.
  - [ ] 🟥 Keep layout bold and scan-friendly with no prose-heavy copy.

- [ ] 🟥 **Step 6: Testimonials Strategy Update**
  - [ ] 🟥 Add pet emoji avatars.
  - [ ] 🟥 Add route labels (e.g., `Jakarta → East Java`).
  - [ ] 🟥 Add star ratings and stronger story-style testimonial content.

- [ ] 🟥 **Step 7: Lead Payload Contract Update**
  - [ ] 🟥 Expand payload to `email + origin + destination + pet type + weight + date + service type`.
  - [ ] 🟥 Forward expanded payload through `/api/lead` to Apps Script.
  - [ ] 🟥 Keep existing pricing flow and submission UX intact.

- [ ] 🟥 **Step 8: Backend Hardening**
  - [ ] 🟥 Move hardcoded Sheets and Apps Script URLs to `.env` config.
  - [ ] 🟥 Add server-side validation on `email`, `weight`, and `pet type` (plus new fields).
  - [ ] 🟥 Add basic IP-based rate limiting on `/api/lead`.

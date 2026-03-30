# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

### Added
- Added server-side lead proxy endpoint at `POST /api/lead` to forward quote lead submissions to the Google Apps Script web app.
- Added explicit `OPTIONS` handling for `/api/lead` to support preflight requests.

### Changed
- Updated quote email submission in `components/QuoteForm.tsx` to post to same-origin `/api/lead` instead of calling the Apps Script URL directly from the browser.
- Added upstream response inspection in `app/api/lead/route.ts` to detect script-side JSON parse errors and return actionable API errors.

### Fixed
- Fixed lead submission failures caused by browser CORS/preflight behavior when posting directly to Apps Script.
- Improved lead submission UX by keeping clear success and fallback error messages based on proxy response status.

### Security
- Reduced exposure of third-party webhook calls from the browser by moving external submission to server-side route handling.

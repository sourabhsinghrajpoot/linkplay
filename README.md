# LinkPlay

LinkPlay is a consent-first cloud-video library. It is intentionally designed to use official provider APIs and authenticated user access only; it does not and must not circumvent access controls, DRM, or provider restrictions.

## Run locally

1. Copy `.env.example` to `.env` and set secure values.
2. Run `docker compose up --build` or install Node 22 dependencies with `npm install`.
3. For a local Node run: `npm run db:generate`, `npm run db:migrate`, then `npm run dev`.

## Provider security model

The metadata endpoint validates Google Drive URLs and calls the official Drive API. In production, replace API-key-only metadata lookup with a user OAuth token using least-privilege `drive.readonly` scope, persist tokens encrypted, and request streaming only when Google’s API and the user’s sharing permission permit it.

## Production checklist

- Set `AUTH_SECRET`, all OAuth callback URLs, and provider secrets in your deployment environment.
- Add Auth.js configuration, email provider, CSRF/rate-limit middleware, audit logging, and signed payment webhook routes before accepting users.
- Configure Stripe/Razorpay server SDKs and verify every webhook signature before activating subscription records.
- Run migrations in CI/CD, enable TLS for PostgreSQL/Redis, and restrict database access to the private network.
- Add a consent screen, privacy policy, terms, data-retention policy, and a provider-by-provider playback capability matrix.

## Included routes

- `/` premium responsive landing page
- `/dashboard` interactive library UI and authorized-link validation dialog
- `/watch` permission-aware playback gateway
- `POST /api/providers/google/metadata` official Google Drive metadata lookup
- `GET /api/health` deployment health check

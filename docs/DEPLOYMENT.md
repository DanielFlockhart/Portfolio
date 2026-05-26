# Deployment guide

## Recommended architecture

Use **Firebase App Hosting** for this template rather than static-only Firebase Hosting. The site has a server route at `/api/contact` that writes to Firestore using the Firebase Admin SDK, and App Hosting is the cleaner Firebase-native route for dynamic Next.js apps.

## Domain plan

Use this as the canonical structure:

- Primary: `https://danielflockhart.com`
- Redirect to primary: `https://www.danielflockhart.com`
- Redirect to primary: `https://danielflockhart.co.uk`
- Redirect to primary: `https://www.danielflockhart.co.uk`

This keeps one public identity and avoids duplicate SEO signals.

## Firebase setup

1. Create a Firebase project.
2. Enable Firestore in production mode.
3. Install Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
```

4. Deploy Firestore rules and indexes:

```bash
firebase deploy --only firestore
```

5. Push this repo to GitHub.
6. In Firebase Console, go to **Hosting & Serverless → App Hosting**.
7. Create a backend and connect it to your GitHub repo.
8. Set environment variables in the Firebase Console, or use `apphosting.yaml`.

## Environment variables

At minimum:

```bash
NEXT_PUBLIC_SITE_URL=https://danielflockhart.com
```

For local Firestore Admin SDK access, use either:

```bash
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
```

or the values in `.env.example`:

```bash
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

On Firebase App Hosting, Firebase can automatically provide runtime Firebase config when the backend is linked to the project.

## Seed Firestore with sample projects

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
npm run seed:firebase
```

This writes documents into the `projects` collection using each project's `slug` as the document ID.

## Add custom domains

In Firebase Console:

1. Open your App Hosting backend.
2. Go to **Settings → Add custom domain**.
3. Add `danielflockhart.com` first.
4. Add `www.danielflockhart.com`, `danielflockhart.co.uk`, and `www.danielflockhart.co.uk` afterwards.
5. Use Firebase's redirect option to point secondary domains to `danielflockhart.com`.
6. Add the DNS records that Firebase gives you. Do not guess the A/CNAME/TXT records; Firebase will generate the exact values.
7. Remove old A, AAAA or CNAME records pointing to other providers if Firebase cannot provision SSL.

## Final pre-application checklist

- Replace placeholder wording with hard evidence and screenshots.
- Add 2–3 strong case studies, not 12 shallow projects.
- Keep the site employer-neutral.
- Check the contact form stores messages in Firestore.
- Check every external link.
- Run Lighthouse and fix obvious accessibility/SEO issues.
- Make sure the site works on mobile.

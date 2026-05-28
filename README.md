# Daniel Flockhart Portfolio

A reusable portfolio starter built with **Next.js**, **Tailwind CSS** and **Firebase**. It is deliberately general-purpose: suitable for software engineering, AI/ML, startup, research and product applications rather than one company-specific job application.

## What this includes

- Next.js App Router + TypeScript
- Tailwind CSS v4 setup
- Brutalist light portfolio design
- Project case-study pages
- Contact form with server-side Firestore storage
- Firebase Admin SDK integration with local-data fallback
- Firebase App Hosting config
- Firestore rules and indexes
- Seed data script
- SEO metadata, sitemap and robots
- Canonical domain default: `https://danielflockhart.com`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configure content

Quickest route: edit `lib/site.ts`.

More scalable route: seed the sample projects into Firestore and manage published projects in Firebase.

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
npm run seed:firebase
```

## Configure Firebase

1. Create a Firebase project.
2. Enable Firestore.
3. Deploy Firestore rules:

```bash
firebase deploy --only firestore
```

4. Deploy the app with Firebase App Hosting from GitHub.
5. Add `danielflockhart.com`, `www.danielflockhart.com`, `danielflockhart.co.uk` and `www.danielflockhart.co.uk` as custom domains.
6. Make `danielflockhart.com` the canonical domain and redirect the others to it.

See `docs/DEPLOYMENT.md` and `docs/FIREBASE_SCHEMA.md`.

# Firestore schema

This template works from local data in `lib/site.ts` immediately. Firestore is optional at first, but useful once you want a lightweight portfolio CMS.

## Collection: `projects`

Document ID should be the project slug, e.g. `ai-drug-discovery-pipeline`.

```json
{
  "title": "AI Drug Discovery Pipeline",
  "kicker": "Research platform for molecule generation and analysis",
  "summary": "Short summary shown on cards.",
  "description": "Longer case-study text.",
  "category": "AI / ML Research",
  "year": "2025",
  "status": "Research",
  "visibility": "published",
  "featured": true,
  "featuredOrder": 1,
  "stack": ["Python", "PyTorch", "Next.js"],
  "highlights": ["Designed an end-to-end pipeline.", "Validated outputs with RDKit."],
  "metrics": [{ "label": "Generated molecules analysed", "value": "57k+" }],
  "links": [{ "label": "Codebase", "href": "https://github.com/...", "external": true }]
}
```

### Required fields

- `title`
- `summary`
- `visibility`
- `featuredOrder`

### Visibility

Only documents with `visibility: "published"` are publicly readable by Firestore rules and read by the app.

## Collection: `contactMessages`

Written by `/api/contact` through Firebase Admin SDK.

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Message body",
  "source": "portfolio",
  "userAgent": "browser user agent",
  "createdAt": "server timestamp"
}
```

Client-side reads and writes are blocked by `firestore.rules`. Keep it that way unless you add Firebase Auth, App Check and rate limiting.

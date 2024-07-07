# AI SaaS Platform with Next.js 13, React, Tailwind, Prisma, Stripe, Clerk, OpenAPI, Replicate, PlanetScale, MySQL, TypeScript & Crisp

Credits: [Antonio Erdeljac](https://github.com/AntonioErdeljac)

Features:

- Full responsiveness
- Clerk Authentication (Email, Google, UserName)
- Client form validation and handling using react-hook-form
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Stripe monthly subscription
- Free tier with API limiting
- POST, DELETE, and GET routes in route handlers (app/api)
- Handle relations between Server and Child components!
- Folder structure in Next 14 App Router


### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=
```


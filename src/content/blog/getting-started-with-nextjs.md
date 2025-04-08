---
title: 'Getting Started with Next.js'
publishedAt: '2024-04-02'
summary: 'A beginner-friendly guide to setting up a Next.js project with TypeScript, App Router, and modern best practices.'
image: '/blog/getting-started-with-nextjs.webp'
author: { name: 'Eliot Sanford', image: '/authors/eliot.webp' }
---

# Getting Started with Next.js

There's something refreshing about starting a new Next.js project—like stepping into a vibrant garden full of potential.
This guide walks you through setting up your project while emphasizing best practices that help your ideas grow naturally.

## Prerequisites

Before diving in, be sure you have:

- Node.js 16.8 or later
- npm, yarn, or pnpm for package management
- A great code editor (we love VS Code)

## Creating Your Next.js Project

The easiest way to get your project off the ground is with the `create-next-app` command:

```bash
npx create-next-app@latest my-next-app
# or
yarn create next-app my-next-app
# or
pnpm create next-app my-next-app
```

During the setup, choose:

- TypeScript for enhanced type safety
- ESLint for code quality
- Tailwind CSS for styling with efficiency
- App Router for the latest routing features

> 🫐 The App Router in Next.js 13+ opens up exciting possibilities, just like discovering a new blueberry variety in your patch.

## Understanding the Project Structure

Once created, your project will be arranged like a well-planned orchard:

```
my-next-app/
├── app/         // routes, layouts, and pages
├── public/      // your static assets
├── components/  // reusable UI components
├── next.config.js // Next.js config
├── tailwind.config.js // Tailwind config
└── tsconfig.json
```

Every folder has its role—each one as important as a different section of your blueberry field.

## Building Your First Page

In Next.js, file-based routing is as natural as planting rows in your orchard. Here's how a simple page looks:

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-6">Welcome to My Next.js App</h1>
      <p className="text-xl">Start your journey by editing this page.</p>
    </main>
  );
}
```

## Adding Layouts

Layouts keep your design consistent—think of them like the blueprint of your dream home. They ensure that every part of your application shares a common structure, just as every room in a well-designed house has its place.

```tsx
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Created with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="py-4 px-6 bg-slate-100">
          <nav>{/* Your navigation here */}</nav>
        </header>
        {children}
        <footer className="py-4 px-6 bg-slate-100">
          {/* Footer content */}
        </footer>
      </body>
    </html>
  );
}
```

## Data Fetching

Next.js makes data fetching as straightforward as watering your plants. In server components, you can use `fetch` directly:

```tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error('Unable to fetch posts');
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Client Components

For interactivity—like turning a blueberry into a jam—you'll need client components:

```tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Performance Optimizations

Next.js offers built-in optimizations to make your experience as fresh as picking ripe blueberries:

- **Image Optimization:** Use the Next.js `Image` component
- **Route Prefetching:** Automatic prefetching helps streamline navigation

Happy coding—nurture your new project and watch it grow!

# PetFriends

A pet image gallery built with React, TypeScript, and styled-components as part of a front-end challenge.

## Getting Started

```bash
npm install
npm run dev
```

## Features

- Browse pets fetched from a live API with loading skeletons and error retry
- Select multiple images and download them — shows count and estimated file size
- Select All (filtered results) / Clear Selection
- Sort by Name A→Z, Z→A, Date Newest, Date Oldest
- Real-time search filtering by title or description
- Detail view for each pet at `/pets/:id`
- About Me page at `/about`
- 404 page for unknown routes
- Pagination — 8 images per page, page number preserved in URL
- Selection state persists across route navigation
- Responsive — 1 column mobile, 2 tablet, 4 desktop
- CSS custom properties for easy theme color changes

## Tech Stack

- React 19 + TypeScript
- styled-components
- react-router-dom v6
- Vite

## Architecture Decisions

**`useFetchPets` hook** — handles loading, error, isEmpty, and retry states explicitly. Uses a module-level cache so navigating away and back doesn't re-fetch.

**`SelectionContext`** — wraps the app above the router so selection state survives route changes.

**Performance** — `React.memo` on `PetCard`, `useCallback` for stable handlers, `useMemo` for filter/sort with pre-computed timestamps, `data-*` attributes instead of styled-component props for selection state to avoid CSS class regeneration.

**Routing** — page number stored in URL query params (`?page=2`) so the browser back button restores the exact page.

## Theme

Colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --color-primary: #166534;
  --color-secondary: #16a34a;
}
```

Change these two values to retheme the entire app.

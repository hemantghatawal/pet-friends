# AI Prompts Used in Project

## 1. Separate Styles and Logic

**Prompt:**
Refactor this React component by separating business logic and UI. Move all styling (CSS or styled-components) into a separate file, and keep the main component focused only on logic and structure. Ensure clean imports, better readability, and do not change any existing functionality.

---

## 2. Extract Styled Components

**Prompt:**
Extract all styled-components from this file into a separate `*.styles.ts` file. Move every styled component to the new file, export them properly, update imports in the original component, and keep naming consistent and readable.

---

## 3. Create Context File

**Prompt:**
Create a React Context for global state management using TypeScript. Set up the Context API with a Provider and a custom hook, ensure it is scalable and reusable, and include an example of how to use it in a component.

---

## 4. Code Review for Quality and Performance

**Prompt:**
Review the entire codebase for code quality and performance improvements. Identify bad practices, suggest fixes, optimize performance where possible, improve readability and maintainability, and ensure everything follows modern React and TypeScript best practices without breaking existing functionality.

## 5. Page Number Persistence

**Prompt:**
Preserve the page number when navigating to a detail page and back — clicking Back to Gallery should return to the same page.

**What was done:**
- Replaced `useState` for page with `useSearchParams` — page lives in the URL as `?page=2`
- `navigate(-1)` in `PetDetailPage` pops back to the exact previous URL including the query param
- `replace: true` in `setSearchParams` prevents pagination clicks from polluting browser history

---

## 6. Final Audits, Skeleton Loader, Prompts.md and Fixes

**Prompt:**
Check the whole project and let me know which steps were missed and what additional things can be done.

**Issues found and fixed:**
- Deleted unused `src/App.css` and empty `src/components/Toolbar/` folder
- Added loading skeleton cards (`SkeletonCard`) — replaces the plain "Loading pets..." text with animated shimmer placeholders matching the Polaroid card shape
- Created `src/pages/NotFoundPage.tsx` — displays a large "404", a friendly message, and a link back to the gallery
- Fixed `Select All` — previously selected all pets regardless of search/sort; now selects only the currently filtered results
- Updated `AboutPage` to be a real About Me page with personal intro, tech stack tags, and GitHub/LinkedIn links
- Updated `README.md` — replaced the Vite boilerplate with a proper project README covering features, setup, architecture decisions, and theming
- Added a `SkeletonDetailPage` component that mirrors the actual detail page layout (back link, title/description/date row, hero image block) using the same shimmer animation as the gallery skeletons; also added an individual download button overlaid on the bottom-right of the pet image on the detail page.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for the Diamond Youth Football League (DYFL), a youth football organization. The site provides information about leagues, schedules, results, and contact information. It's built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
# or using the CLI directly
npx eslint
```

The development server runs on `http://localhost:3000` by default.

## Architecture

### Framework Setup
- **Next.js 16** with App Router (file-based routing in `src/app/`)
- **React 19** with Server Components as the default
- **TypeScript** with strict mode enabled
- **Turbopack** enabled for faster development builds

### Component Organization

The codebase follows a clear component hierarchy:

1. **App Routes** (`src/app/`): Page-level components using Next.js App Router
   - Each directory represents a route (e.g., `/about`, `/contact`, `/leagues`)
   - `layout.tsx` provides the root layout with Navigation and Footer
   - `page.tsx` files are route endpoints

2. **Shared Components** (`src/components/shared/`): Cross-page components
   - `navigation/Navigation.tsx`: Site-wide navigation header
   - `footer/Footer.tsx`: Site-wide footer

3. **Page-Specific Components** (`src/components/home/`): Components for specific pages
   - `Hero.tsx`: Server component wrapper
   - `HeroClient.tsx`: Client component for carousel with progressive image loading
   - `LeagueValue.tsx`: League information section
   - `ContactStrip.tsx`: Contact information banner

4. **UI Components** (`src/components/ui/`): Reusable shadcn/ui primitives
   - Pre-built components from shadcn/ui (button, carousel, dialog, input, sheet, table, tabs, textarea)
   - Styled with Tailwind CSS and CVA (class-variance-authority)

### Styling System

The project uses **shadcn/ui** design system:
- Configuration in `components.json` with "new-york" style variant
- CSS variables for theming defined in `src/app/globals.css`
- Supports both light and dark modes (dark mode configured but not actively used)
- Primary brand color: `#FF4500` (Orange-red)
- Secondary background: `#FFE7C9` (Light peach)
- Uses `cn()` utility from `src/lib/utils.ts` for merging Tailwind classes

### Client vs Server Components

- **Server Components** (default): Most page routes and wrapper components
- **Client Components** (marked with `'use client'`): Interactive components requiring hooks or browser APIs
  - `HeroClient.tsx`: Uses carousel with autoplay and progressive loading
  - Navigation/footer likely contain interactive elements (check files for details)

### Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `src/*`
- Used throughout for clean imports (e.g., `@/components/ui/button`)

### Image Handling

- Currently using placeholder images from `placehold.co`
- Next.js Image component configured to allow this domain
- Real images should be placed in `public/images/` directory
- SVG support is enabled (`dangerouslyAllowSVG: true`)

### Progressive Enhancement Pattern

The `HeroClient.tsx` demonstrates a progressive loading pattern:
- Loads 5 initial images eagerly
- Progressively loads remaining images in batches
- Uses `priority` and `loading` props strategically for performance

## Key Technical Patterns

### Adding New Pages
1. Create a new directory in `src/app/[route-name]/`
2. Add `page.tsx` for the route component
3. Optionally add page-specific components in `src/components/[route-name]/`

### Adding shadcn/ui Components
```bash
# The project uses shadcn/ui CLI
npx shadcn@latest add [component-name]
```
This will automatically place components in `src/components/ui/` with correct configuration.

### Styling Conventions
- Use Tailwind utility classes directly in components
- Use `cn()` from `@/lib/utils` when conditionally applying classes
- Brand colors: Use `text-[#FF4500]` for primary orange, `bg-[#FFE7C9]` for light backgrounds
- Border radius: Use `rounded-[1.618rem]` for golden ratio-based rounding (used consistently)

### Font Configuration
- Primary font: Inter (configured in `layout.tsx`)
- Weights: 400, 500, 700
- Font display: swap for better performance

## Important Context

### League Information
The site displays information for three age groups:
- Under 12: 7-a-side, players born 2014-2015
- Under 14: 9-a-side, players born 2012-2013
- Under 16: 11-a-side, players born 2010-2011

### External Integration
Results and fixtures link to a Google Sheets document (see `/leagues` page).

### Static Assets
- Logo files available in multiple formats: `.jpg`, `.png`, `.svg`
- Located in `public/` directory
- Photos stored in `public/images/DYFL-Photos/`

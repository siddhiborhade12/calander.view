# Calendar View (React + TypeScript + Tailwind + Storybook)

This is a small Calendar View component built from scratch using React, TypeScript, Tailwind CSS and Storybook. It implements:

- Month view (42-cell grid)
- CalendarCell component (shows up to 3 events + `+N more`)
- Event modal (lazy-loaded) with validation (title & date range)
- Event CRUD with localStorage persistence
- Storybook stories (Default, Empty)
- Basic Week-view skeleton (time-slot layout can be extended)

## Tech
- React 18, TypeScript (strict)
- Tailwind CSS
- Vite for dev
- Storybook for component previews
- date-fns (optional small helpers)
- clsx for className composition

## Install & Run
```bash
npm install
npm run dev        # open http://localhost:5173
npm run storybook  # open Storybook at http://localhost:6006

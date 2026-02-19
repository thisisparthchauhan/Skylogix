# Skylogix Project Structure

This project follows a feature-based architecture within the Next.js App Router.

## Directory Tree

```
src/
├── app/                    # Next.js App Router (Pages & Layouts)
│   ├── (marketing)/        # Marketing pages group (Home, About)
│   ├── (dashboard)/        # Client portal (Future)
│   ├── api/                # API Routes
│   ├── globals.css         # Global styles & Tailwind variables
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
│
├── components/             # React Components
│   ├── layout/             # Structural components (Navbar, Footer)
│   ├── sections/           # Page sections (Hero, Features, Contact)
│   ├── ui/                 # Reusable UI elements (Buttons, Inputs)
│   └── icons/              # Custom icons
│
├── lib/                    # Utilities & Logic
│   ├── utils.ts            # Helper functions (cn, formatters)
│   ├── constants.ts        # Global constants
│   └── validations/        # Zod schemas
│
├── styles/                 # Styling Resources
│   └── design-tokens.json  # Design system tokens
│
└── types/                  # TypeScript Definitions
```

## Key Files

*   **`src/styles/design-tokens.json`**: Single source of truth for colors, spacing, and typography.
*   **`tailwind.config.ts`**: Maps tokens to Tailwind classes.
*   **`src/app/globals.css`**: CSS variables for theme support (Dark/Light).

## Best Practices

1.  **Colocation**: Keep related files close (e.g., if a component needs a specific hook, put it in a hooks folder nearby or common hooks in `lib/hooks`).
2.  **Server Components**: Use Server Components by default. Add `"use client"` only when interactivity is needed.
3.  **Shadcn UI**: UI components in `components/ui` should remain mostly untouched to allow for easy updates.

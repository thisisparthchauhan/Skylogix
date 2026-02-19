# Skylogix Project Structure Guide

This guide explains the purpose of each folder and key file in the Skylogix project, designed for non-developers to understand where everything is located.

## 📂 Root Directory
The main folder containing the entire project.

- **`src/`**: The most important folder. Contains all the source code for the website.
- **`public/`**: Stores static files like images, icons, and fonts that are publicly accessible.
- **`package.json`**: The project's configuration file, listing all installed libraries and commands.
- **`next.config.mjs`**: Configuration settings for the Next.js framework.
- **`tailwind.config.ts`**: Configuration for styling (colors, fonts, spacing).

## 📂 src/ (Source Code)
This is where the actual development happens.

### `app/`
Contains the pages and layout of the website.
- **`page.tsx`**: The main homepage of the site.
- **`layout.tsx`**: Defines the common layout (like headers and footers) shared across multiple pages.
- **`globals.css`**: The main stylesheet for global designs and fonts.

### `components/`
Contains reusable building blocks for the user interface.
- **`ui/`**: Specialized components from the Shadcn UI library (e.g., buttons, cards, inputs).
- **`Header.tsx`** / **`Footer.tsx`**: (Examples) Standalone components used in the layout.

### `lib/`
Contains utility functions and helper code.
- **`utils.ts`**: Helper functions for styling and other tasks.

## 📂 public/ (Static Assets)
Files here can be accessed directly by the browser.
- **`images/`**: Folder for project images.
- **`icons/`**: Folder for SVG icons.

---
**Note:** As the project grows, more folders might be added to organizing features, but the core structure will remain consistent with this guide.

# Vite + React + React Router + PostCSS + Tailwind CSS

## Get Started
```
$ npm install
$ npm run dev
```

## About
**There are three branches, created in order. The tip of main was used to created each branch.**

`[v0-base]`
- Created with `npm create vite@latest` with Post CSS, Tailwind CSS, and React Router

`[v1-styled]`
- Applied basic styling

`[v2-grid]`
- Added a css grid layout
- This layout sets screeen breakpoints in `tailwind.config.js` and `grid.css`
- ```
  "sm": "480px"
  "md": "768px"
  "lg": "1280px"
  "xl": "1440px"
  ```
- `sm`: up to 48px (mobile) content cell only
- `md`: 768px and up (tablet and desktop narrow) hides right cell
- `lg`: 1280px and up (desktop wide) left, content, and right cells are displayed, and max-width set to `lg`
- `xl`: 1440px and up (desktop widest) left, content, and right cells are displayed, and max-width set to `xl`

## Details
- Absolute path configured in `tsconfig.json` and `vite.config.json`
- Two example pages, three example layouts, one example component:
```
  src/
    components/
      Stub.tsx
    layouts/
      LayoutGrid.tsx
      LayoutSimple.tsx
      LayoutStandard.tsx
      shared/
        Bottom.tsx
        NavLinks.tsx
        Top.tsx
    pages/
      Home.tsx
      Dashboard.tsx
```

## License
`MIT License`
Commit ee8cdda8b01bc111456fdfbdbbc833eb2f048fbd
3/20/2024

---

`-- ORIGINAL README --`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

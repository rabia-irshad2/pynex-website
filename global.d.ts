// global.d.ts
// Ambient type declarations for CSS side-effect imports.

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@fontsource/bebas-neue/400.css';
declare module '@fontsource-variable/geist-mono';
declare module '@fontsource-variable/inter';
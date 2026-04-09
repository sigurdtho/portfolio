import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  // Class-based dark mode — toggled via <html class="dark">
  darkMode: 'class',

  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      // ── Fjord Night palette ───────────────────────────────────────────
      colors: {
        fjord: {
          bg:        '#0f172a',   // slate-950  – main background (dark)
          card:      '#1e2937',   // slate-800  – card surfaces
          text:      '#e2e8f0',   // slate-200  – primary text
          accent:    '#14b8a6',   // teal-500   – interactive accent
          highlight: '#4ade80',   // emerald-400– badges / highlights
          muted:     '#64748b',   // slate-500  – secondary / muted text
        },
      },

      // ── Typography ────────────────────────────────────────────────────
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        display: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },

      // ── Transitions ───────────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },

  plugins: [
    // Provides `prose` classes for rich markdown rendering in blog posts
    typography,
  ],
};

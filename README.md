# BriamsHealth · CureVirtual Landing Page

A modern, fully responsive React + Tailwind CSS landing page for **BriamsHealth** and its
telehealth platform **CureVirtual**. Zero backend required — everything runs client-side.

## Stack

- React 18 + Vite
- Tailwind CSS (custom brand palette + Poppins font)
- [lucide-react](https://lucide.dev) icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
briamshealth/
├── index.html                 # Entry HTML, loads Poppins from Google Fonts
├── tailwind.config.js         # Brand color palette, font, shadows
├── postcss.config.js
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Renders the landing page
    ├── index.css                # Tailwind directives + base styles
    └── components/
        └── BriamsHealthLanding.jsx   # The full page: Navbar, Hero, Features,
                                        # User Roles, Solutions, About, Newsletter, Footer
```

## Brand tokens (tailwind.config.js)

| Token       | Hex       | Usage                          |
|-------------|-----------|---------------------------------|
| `navy`      | `#01375B` | Primary brand color, headings   |
| `teal`      | `#00A896` | Secondary / CTA color           |
| `deepbg`    | `#0B1B3D` | Deep dark backgrounds           |
| `sky`       | `#48CAE4` | Accent icon color                |
| `lightbg`   | `#F4F7FB` | Section backgrounds             |

## Customizing

- **Copy**: all section content lives directly in `src/data/` or inside components — edit in place.
- **Colors**: adjust `tailwind.config.js` → `theme.extend.colors`.
- **Newsletter form**: currently client-side only (`useState`), with a success state on
  submit. Wire `handleSubmit` in the `Newsletter` component to your email provider or API
  when ready.

## Deployment (Vercel)

This project is fully configured for **zero-config deployment on Vercel**.

1. Create a GitHub repository and push your code.
2. Go to [Vercel](https://vercel.com/) and click **Add New... > Project**.
3. Import your GitHub repository.
4. Leave all build settings as default (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
5. (Optional) If you added any environment variables in `.env.example`, add them in the Environment Variables section.
6. Click **Deploy**.

Vercel will automatically read `vercel.json` and configure SPA routing and caching headers.

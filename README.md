# Thamani Healthcare Website

A modern, high-performance website for Thamani Healthcare, built with Next.js 14 and featuring advanced 3D visualizations. The site is optimized for speed, SEO, and accessibility.

## 🚀 Key Features

- **Advanced 3D Animations**: Custom Three.js cardiovascular network visualization with heartbeat effects.
- **Premium Design**: Red-themed "Pulse" UI with glassmorphism, smooth gradients, and Framer Motion animations.
- **Responsive Layout**: Fully responsive design optimized for mobile, tablet, and desktop.
- **SEO Optimized**: dynamic sitemap, robots.txt, JSON-LD structured data, and Open Graph tags.
- **Performance**: Static HTML export for fast loading and GitHub Pages deployment.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Three.js](https://threejs.org/)
- **Forms**: [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```
thamani-web/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About Us page
│   │   ├── careers/      # Careers page
│   │   ├── contact/      # Contact page & API
│   │   ├── not-found.tsx # Custom 404 page
│   │   └── ...           # Other pages
│   ├── components/       # Reusable React components
│   │   ├── forms/        # Form components with validation
│   │   ├── layout/       # Header, Footer
│   │   ├── three/        # Three.js animation wrappers
│   │   └── ui/           # Base UI components (Button, Card, etc.)
│   └── lib/              # Utilities and Three.js logic
├── public/               # Static assets (images, logos)
└── .github/workflows/    # CI/CD for GitHub Pages
```

## 🚦 Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3.  **Build for production**:
    ```bash
    npm run build
    ```
    This generates static HTML files in the `out/` directory.

## 🚢 Deployment

The project is configured for automated deployment to **GitHub Pages**.

- **Push to `main` branch**: Triggers the GitHub Actions workflow.
- **Build**: The workflow runs `npm run build`.
- **Deploy**: The contents of `out/` are deployed to the `gh-pages` branch.

See `DEPLOYMENT.md` for detailed deployment instructions.

## 📄 License

© 2026 Thamani Healthcare. All rights reserved.

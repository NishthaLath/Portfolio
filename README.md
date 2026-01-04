# Portfolio

> A modern, minimal, and dark-first portfolio website built with Next.js and TypeScript, showcasing professional experience, projects, and research work.

[![Deploy to GitHub Pages](https://github.com/NishthaLath/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/NishthaLath/Portfolio/actions/workflows/deploy.yml)

**Live Demo:** [https://nishthalath.github.io/Portfolio/](https://nishthalath.github.io/Portfolio/)

## ✨ Features

- **🌙 Dark-First Design** - Elegant dark theme optimized for readability
- **📱 Fully Responsive** - Seamless experience across all devices
- **⚡ Static Export** - Fast loading with Next.js static site generation
- **🎨 Modern UI** - Clean interface built with Tailwind CSS
- **♿ Accessibility** - WCAG compliant with skip links and semantic HTML
- **🚀 Auto-Deploy** - Automatic deployment to GitHub Pages via GitHub Actions
- **🔍 SEO Optimized** - Proper meta tags and structured content
- **📊 Sections Include:**
  - About & Academic Background
  - Technical Skills
  - Professional Experience
  - Projects with detailed case studies
  - Research Publications
  - Awards & Leadership

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Deployment:** GitHub Pages with GitHub Actions
- **Fonts:** Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NishthaLath/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
# Build the static site
npm run build

# Preview the production build locally
npm run start
```

The static files will be generated in the `out` directory.

## 🎨 Customization

### Update Personal Information

All portfolio content is centralized in [app/page.tsx](app/page.tsx). Modify the following objects:

- **`profile`** - Personal information, headline, about section, and academic details
- **`skills`** - Technical skills grouped by category
- **`experience`** - Work experience and internships
- **`projects`** - Project case studies with detailed descriptions
- **`research`** - Research publications and papers
- **`leadership`** - Leadership roles and activities

### Update Links

Social media and contact links are in the `profile.links` object:

```typescript
links: {
  github: "https://github.com/YourUsername",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
  email: "your.email@example.com",
}
```

### Configure SEO

Set the `NEXT_PUBLIC_SITE_URL` environment variable for correct canonical URLs and Open Graph metadata. This is automatically configured in the GitHub Actions workflow but can be set locally:

```bash
export NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Styling

- **Colors & Theme:** Modify CSS variables in [app/globals.css](app/globals.css)
- **Layout:** Adjust component structure in [app/page.tsx](app/page.tsx)
- **Tailwind Config:** Extend Tailwind configuration in [postcss.config.mjs](postcss.config.mjs)

## 📂 Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       ├── deploy.yml      # GitHub Pages deployment workflow
│       └── nextjs.yml      # Next.js CI workflow
├── app/
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main portfolio page with all content
├── public/                 # Static assets (favicon, images)
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── DEPLOYMENT.md           # Detailed deployment guide
└── README.md               # This file
```

## 🌐 Deployment

### GitHub Pages (Automatic)

This portfolio is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under "Build and deployment", select **Source:** `GitHub Actions`

2. **Automatic Deployment:**
   - Every push to the `main` branch automatically triggers deployment
   - GitHub Actions builds and deploys the site

3. **Access Your Site:**
   - Your portfolio will be live at: `https://[username].github.io/Portfolio/`

4. **Manual Deployment:**
   - Go to the **Actions** tab
   - Select "Deploy to GitHub Pages" workflow
   - Click "Run workflow"

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Other Hosting Options

The static export can be deployed to any static hosting service:

- **Vercel:** Connect your repository and deploy with zero configuration
- **Netlify:** Drag and drop the `out` folder or connect via Git
- **AWS S3 + CloudFront:** Upload the `out` directory to an S3 bucket
- **Custom Server:** Serve the `out` directory with any web server (nginx, Apache, etc.)

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build static site for production
- `npm run start` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Code Quality

The project uses:
- **ESLint** for code linting
- **TypeScript** for type safety
- **Next.js ESLint Config** for best practices

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/NishthaLath/Portfolio/issues).

## 👤 Author

**Nishtha Lath**
- GitHub: [@NishthaLath](https://github.com/NishthaLath)
- LinkedIn: [nishtha-lath-335206276](https://www.linkedin.com/in/nishtha-lath-335206276/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

⭐ Star this repository if you find it helpful!

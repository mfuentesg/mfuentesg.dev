# mfuentesg.dev

A modern, high-performance personal portfolio built with cutting-edge web technologies. Features a sleek design with smooth animations, dark mode support, and optimized performance.

## ✨ Features

- **Modern Stack**: Built with Next.js 16, React 19, and TypeScript
- **Beautiful UI**: Tailwind CSS with custom animations and Radix UI components
- **Dark Mode**: Seamless theme switching with `next-themes`
- **Responsive Design**: Mobile-first approach with `use-mobile` hook
- **Animated Sections**: Scroll-triggered animations and terminal typing effects
- **Performance Optimized**: Image optimization, source maps disabled in production
- **Accessible**: Built with accessibility best practices using Radix UI primitives
- **SEO Ready**: Sitemap, robots.txt, and manifest included

## 🎯 Sections

- **Header & Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Eye-catching introduction with animated elements
- **About**: Personal background and expertise
- **Projects**: Showcase of notable work with project cards
- **Writing**: Blog section or articles
- **Contact**: Easy-to-use contact form
- **Status Bar**: Real-time status indicator
- **Grid Background**: Ambient visual design element

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (18.17, 19, 20, or later)
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mfuentesg.dev-2u

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## 📦 Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🛠️ Development

### Code Quality

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check
```

### Scripts Overview

| Script         | Purpose                                  |
| -------------- | ---------------------------------------- |
| `dev`          | Start development server with hot reload |
| `build`        | Create optimized production build        |
| `start`        | Run production server                    |
| `lint`         | Check code quality with ESLint           |
| `lint:fix`     | Automatically fix ESLint issues          |
| `format`       | Format code with Prettier                |
| `format:check` | Verify code formatting                   |

## 🗂️ Project Structure

```
├── app/
│   ├── page.tsx          # Home page
│   └── layout.tsx        # Root layout
├── components/
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── writing-section.tsx
│   ├── contact-section.tsx
│   ├── header.tsx
│   ├── nav.tsx
│   ├── project-card.tsx
│   ├── section-header.tsx
│   ├── social-links.tsx
│   ├── status-bar.tsx
│   ├── grid-background.tsx
│   ├── animate-on-scroll.tsx
│   └── terminal-typing.tsx
├── hooks/
│   └── use-mobile.tsx    # Mobile detection hook
├── lib/
│   ├── types.ts          # TypeScript type definitions
│   ├── utils.ts          # Utility functions
│   └── constants.ts      # App constants
├── public/               # Static assets
└── [config files]        # ESLint, Tailwind, TypeScript, etc.
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework with PostCSS support
- **Animations**: Custom animations with `tailwindcss-animate`
- **UI Components**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent icon set
- **Theme System**: `next-themes` for dark mode and light mode support

## 🔧 Tech Stack

| Technology   | Version | Purpose               |
| ------------ | ------- | --------------------- |
| Next.js      | 16.1.6  | React framework       |
| React        | 19.2.4  | UI library            |
| TypeScript   | 5.7.3   | Type safety           |
| Tailwind CSS | 3.4.19  | Styling               |
| Radix UI     | Latest  | Accessible components |
| Lucide React | 0.544.0 | Icons                 |
| next-themes  | 0.4.6   | Theme management      |

### Development Tools

| Tool         | Purpose             |
| ------------ | ------------------- |
| ESLint       | Code quality        |
| Prettier     | Code formatting     |
| PostCSS      | CSS transformations |
| Autoprefixer | Vendor prefixes     |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The site is fully responsive with breakpoints optimized for:

- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)
- Large screens (1920px and up)

## ♿ Accessibility

Built with accessibility in mind:

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📝 Environment Variables

Create a `.env.local` file (if needed for deployment):

```env
# Add any required environment variables here
```

## 🚀 Performance

- **Image Optimization**: Automatic format selection (AVIF, WebP)
- **Code Splitting**: Automatic code splitting by Next.js
- **Tree Shaking**: Optimized imports from Lucide React
- **Caching**: Configured cache headers for static assets
- **Production**: Source maps disabled for smaller bundle size

## 📄 License

This project is licensed under the MIT License - feel free to use this as a template for your own portfolio.

## 👤 Author

**mfuentesg**

- Website: [mfuentesg.dev](https://mfuentesg.dev)
- GitHub: [@mfuentesg](https://github.com/mfuentesg)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

## 📞 Get in Touch

Have questions or want to collaborate? Reach out through:

- Email: Contact form on the website
- GitHub: [@mfuentesg](https://github.com/mfuentesg)
- LinkedIn: Check social links on the site

---

**Made with ❤️ using Next.js and modern web technologies**

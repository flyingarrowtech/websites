# Agency Website

A modern, high-performance agency website built with React, TypeScript, and Tailwind CSS. Showcasing services in SaaS development, AI integration, React Native apps, MERN stack development, and dedicated engineering teams.

## 🚀 Live Demo

[View Live Website](https://flyingarrowtech.github.io/websites/)

## 📍 Company Information

**Location:** Semari, Marihan, Mirzapur, India  
**Email:** hello@agency.com  
**Services:** Remote (India) - All positions

## ✨ Features

- **Modern Tech Stack:** React 19, TypeScript, Vite 7, React Router 7
- **Optimized Performance:** Code splitting, lazy loading, chunks < 500KB
- **Premium Design:** Dark mode, smooth animations with GSAP & Framer Motion
- **SEO Optimized:** React Helmet Async for meta tags
- **Error Handling:** Error boundaries for graceful error recovery
- **Responsive:** Mobile-first design with Tailwind CSS 4
- **Fast Loading:** Optimized bundle size with manual chunk splitting

## 🛠️ Tech Stack

### Core
- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7.3** - Build tool & dev server
- **React Router 7.13** - Client-side routing

### Styling & Animation
- **Tailwind CSS 4.1** - Utility-first CSS
- **Framer Motion 12.34** - Smooth animations
- **GSAP 3.14** - Advanced animations
- **Lucide React** - Icon library

### Additional Libraries
- **React Helmet Async** - SEO meta tags
- **clsx & tailwind-merge** - Conditional styling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/flyingarrowtech/website.git

# Navigate to project directory
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📂 Project Structure

```
agency-website/
├── src/
│   ├── components/
│   │   ├── home/           # Home page sections
│   │   ├── layout/         # Navbar, Footer
│   │   ├── ui/             # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   └── LoadingFallback.tsx
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Process.tsx
│   │   ├── Blog.tsx
│   │   ├── Careers.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── dist/                   # Production build
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎯 Key Pages

- **Home** - Hero, services snapshot, case studies preview
- **Services** - MVP Development, SaaS, AI Integration, React Native, MERN Stack
- **Process** - 5-step development process with timeline
- **Case Studies** - Portfolio of completed projects
- **Blog** - Latest insights on SaaS and AI trends
- **Careers** - Job listings with search and filter
- **Contact** - Calendly integration for booking calls

## 🚀 Performance Optimizations

### Bundle Size Optimization
- **Before:** 587 KB (189 KB gzipped) - Single chunk
- **After:** Largest chunk 201 KB (62 KB gzipped) - **65% reduction**

### Techniques Used
1. **Lazy Loading:** All routes loaded on-demand
2. **Code Splitting:** Separate chunks for vendors and pages
3. **Manual Chunks:**
   - `react-vendor` (39 KB) - React core libraries
   - `animation-vendor` (193 KB) - GSAP & Framer Motion
   - `ui-vendor` (11 KB) - Icons & utilities
   - `helmet-vendor` (23 KB) - SEO library
4. **Tree Shaking:** Unused code eliminated
5. **Minification:** esbuild for optimal compression

## 🎨 Design Features

- **Dark Mode Support:** System preference detection
- **Glassmorphism Effects:** Modern UI aesthetics
- **Smooth Animations:** GSAP ScrollTrigger & Framer Motion
- **Responsive Design:** Mobile, tablet, desktop optimized
- **Premium Typography:** Google Fonts integration
- **Micro-interactions:** Hover effects and transitions

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root:

```env
VITE_COMPANY_NAME=Agency
```

### Vite Configuration
- Manual chunk splitting for optimal loading
- esbuild minification
- Source maps disabled in production
- Target: ES2015

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.



## 📞 Contact

For inquiries, please reach out:
- **Email:** hello@agency.com
- **Location:** Semari, Marihan, Mirzapur, India
- **Website:** [https://flyingarrowtech.github.io/website/](https://flyingarrowtech.github.io/website/)

---

**Note:** Replace `https://calendly.com/d/demo/30min` in `Contact.tsx` with your actual Calendly URL before deploying.

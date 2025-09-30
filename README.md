# Next Build - Professional Computer Building Website

A modern, responsive website for Next Build, a professional computer building service. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js optimization
- 🎯 SEO optimized with proper meta tags
- 📧 Contact form with validation
- 🖼️ Interactive gallery with filtering
- 💬 Customer testimonials carousel
- 🎮 Service showcase with detailed information

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons and emojis
- **Fonts**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── Gallery.tsx          # Portfolio gallery
│   ├── About.tsx            # About section
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer component
├── lib/                     # Utility functions
└── types/                   # TypeScript type definitions
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue gradient (primary-600 to primary-900)
- Accent: Cyan gradient (accent-600 to accent-900)

### Content
- Update company information in `src/components/About.tsx`
- Modify services in `src/components/Services.tsx`
- Add/remove gallery items in `src/components/Gallery.tsx`
- Update contact information in `src/components/Contact.tsx`

### Images
Add your images to the `public/images/` directory. See `public/images/placeholder.txt` for required image specifications.

## Deployment

The site is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## Performance

- Optimized images with Next.js Image component
- CSS purging with Tailwind
- Lazy loading for better performance
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own projects.

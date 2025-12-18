# OutoVox - Modern Software House Portfolio

A stunning, futuristic portfolio website for OutoVox software house, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern & Futuristic Design** - Cutting-edge UI with gradients, animations, and glassmorphism
- ⚡ **Next.js 15** - Latest features including App Router and Server Components
- 🎯 **TypeScript** - Full type safety throughout the application
- 💅 **Tailwind CSS** - Utility-first CSS with custom configurations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🌈 **Animated Backgrounds** - Interactive particle systems and gradient effects
- 🧩 **Component-Based** - Modular and reusable React components
- 🎭 **Interactive Elements** - Smooth transitions and hover effects

## Sections

1. **Hero** - Eye-catching landing section with animated particle background
2. **Services** - Showcase of all IT services offered
3. **Portfolio** - Filterable project gallery
4. **About** - Company story, values, and team
5. **Contact** - Contact form and information
6. **Footer** - Links and social media

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS animations & Canvas API
- **Icons:** Emoji icons (can be replaced with icon libraries)

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ },
}
```

### Content

- Update company information in each component
- Modify team members in `components/About.tsx`
- Change project portfolio in `components/Portfolio.tsx`
- Update services in `components/Services.tsx`

## Project Structure

```
/Users/bilalmalik/Outovox/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── Portfolio.tsx    # Portfolio section
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## License

© 2024 OutoVox. All rights reserved.

## Support

For questions or support, contact us at hello@outovox.com


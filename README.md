# Wild Sprouts Homestead School

A Next.js website for Wild Sprouts Homestead School - a nature-based early childhood education program.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Move images to public directory:
```bash
# The images need to be moved from src/images to public/images
mkdir -p public/images
cp src/images/* public/images/
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
wander-sites/
├── src/
│   ├── app/              # Next.js app directory (pages)
│   │   ├── layout.js     # Root layout
│   │   ├── page.js       # Home page
│   │   ├── about/        # About & Philosophy page
│   │   ├── programs/     # Programs page
│   │   ├── staff/        # Staff page
│   │   └── contact/      # Contact page
│   ├── components/       # Reusable React components
│   ├── hooks/            # Custom React hooks
│   └── styles/           # Global styles and fonts
├── public/               # Static assets
│   ├── wild-sprouts-logo.png
│   └── images/           # Image assets
└── package.json
```

## 🎨 Pages

- **Home** (`/`) - Hero section, features, daily schedule, testimonials, FAQ
- **About & Philosophy** (`/about`) - School story, philosophy, core values
- **Programs** (`/programs`) - Age groups, curriculum, daily schedule
- **Staff** (`/staff`) - Staff bios, credentials, trust signals
- **Contact** (`/contact`) - Contact form, tour scheduling, map, Brightwheel link

## 🛠 Built With

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **React Slick** - Carousel/slider component

## 🎨 Customization

### Colors

Update colors in `tailwind.config.js`:

```js
colors: {
  beige: { b1: "#F5F3E7" },
  green: { g1: "#8C943E" },
  gray: { g1: "#46594D" },
  orange: { o1: "#F0AB6F" },
  blue: { b1: "#98BFD0" },
}
```

### Fonts

The site uses:
- **PerfectlyVintages** (serif) - Headings
- **Inter** (sans-serif) - Body text

Fonts are loaded from `src/styles/fonts.css` and `src/fonts/`

## 📝 Content Updates

To update content:

1. **Navigation**: Edit `src/components/Header.js`
2. **Footer**: Edit `src/components/Footer.js`
3. **Homepage sections**: Edit component files in `src/components/`
4. **Page content**: Edit files in `src/app/[page]/page.js`

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## 📧 Contact Information

Update contact details in:
- `src/app/contact/page.js`
- `src/components/Footer.js`
- `src/components/Header.js` (social media links)

## ⚠️ Important Notes

1. **Images**: Make sure all images from `src/images/` are copied to `public/images/` before running
2. **Logo**: The Wild Sprouts logo should be at `public/wild-sprouts-logo.png`
3. **Forms**: The contact form is currently client-side only. Integrate with a backend/service for actual submissions
4. **Map**: The map on the contact page is a placeholder. Integrate Google Maps or similar service
5. **Brightwheel**: Update the Brightwheel link with your actual school's URL

## 🔄 Migration Notes

This site was migrated from Gatsby to Next.js 14:
- Removed `gatsby-plugin-image` and replaced with Next.js `Image`
- Removed Gatsby-specific components and replaced with Next.js equivalents
- Updated routing from Gatsby's file-based to Next.js App Router
- Converted all components to use Next.js conventions

## 📄 License

This project is private and proprietary to Wild Sprouts Homestead School.

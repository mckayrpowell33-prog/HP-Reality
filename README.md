# Hailey Powell Realty Website Starter

A clean, text-only Next.js starter website for **Hailey Powell Realty**, designed for Boise-area real estate branding. The UI is minimal, polished, and easy to customize without adding backend complexity.

## Project Overview

This project provides a full front-end website shell with:
- Home
- Search Homes
- Featured Listings
- Boise Areas
- About
- Reviews
- Contact

The design emphasizes spacious layout, elegant typography, subtle shadows, and approachable interactions using a forest-green local brand style.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Plain JavaScript (no TypeScript)

## Setup & Install

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint via Next.js

## Folder Structure

```text
/app
  /about/page.jsx
  /boise-areas/page.jsx
  /contact/page.jsx
  /featured-listings/page.jsx
  /reviews/page.jsx
  /search-homes/page.jsx
  /layout.jsx
  /page.jsx
  /globals.css
/components
  Header.jsx
  Footer.jsx
  MobileMenu.jsx
  SectionHeading.jsx
  ListingCard.jsx
  TestimonialCard.jsx
  AreaCard.jsx
  Hero.jsx
  CTASection.jsx
  PageHero.jsx
/data
  listings.js
  testimonials.js
  areas.js
/public
  README.txt
```

## Placeholder & Customization Notes

### Logo replacement
Text-based logo placeholders are currently used so no image files are required.

Update these files when real logos are ready:
- `components/Header.jsx`
- `components/Footer.jsx`

Suggested future logo asset paths:
- `/public/logo-primary.png`
- `/public/logo-mark.png`
- `/public/logo-light.png`

### Home hero background image
A comment is included in `components/Hero.jsx` showing where to add a Boise foothills/skyline image later.

### IDX integration location
A comment marks where real IDX search can be integrated later in:
- `app/search-homes/page.jsx`

### Google Reviews embed location
A comment marks where Google Reviews embed code can be added in:
- `app/reviews/page.jsx`

### Instagram URL update locations
Comments mark where to replace placeholder links in:
- `components/Footer.jsx`
- `app/contact/page.jsx`

### Placeholder content updates
Most copy and sample data can be edited directly in:
- `data/listings.js`
- `data/testimonials.js`
- `data/areas.js`

## Notes

- This starter intentionally ships with **no binary assets**.
- Image and logo areas are represented with styled placeholder blocks.
- No backend, CMS, auth, or API integrations are included by default.

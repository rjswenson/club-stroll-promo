# Club Stroll Interactive Play

[![Integration Tests](https://github.com/rjswenson/club-stroll-promo/actions/workflows/test.yml/badge.svg)](https://github.com/rjswenson/club-stroll-promo/actions/workflows/test.yml)

In-person interactive play based on Kansas City's rich history of jazz and nightlife.

## Overview

Club Stroll is an immersive theatrical experience that brings the vibrant era of the 1920s to life through storytelling, live performances, and audience participation. Set against the backdrop of Kansas City's legendary jazz scene, this production celebrates the city's cultural heritage and musical legacy.

## Features

- **Immersive Storytelling**: Experience Kansas City's jazz age through engaging narratives
- **Live Performances**: Authentic performances capturing the spirit of the 1920s
- **Audience Participation**: Interactive elements that make you part of the story
- **Historical Authenticity**: Based on Kansas City's actual jazz and nightlife history

## Tech Stack

- **Framework**: Astro
- **Focus**: SEO, Marketing, Performance
- **Type**: Promotional Website
- **Testing**: Playwright (E2E and integration tests)
- **CI/CD**: GitHub Actions

## Testing

This project uses **Playwright** for end-to-end and integration testing.

### Running Tests

```bash
npm test              # Run all tests headlessly
npm run test:ui       # Interactive UI mode for debugging
npm run test:headed   # Watch tests execute in browser
npm run test:report   # View HTML report from last run
```

### Test Coverage

- **Page Load Tests**: Home page, navigation, 404 handling
- **Content Verification**: Video embed, semantic structure, responsive design
- **CI/CD**: Tests run automatically on every push and pull request via GitHub Actions

See [tests/README.md](tests/README.md) for more details.

## Project Status

This is a promotional website for the interactive play. The site is optimized for search engines and designed to engage potential audiences.

## Links

- **GitHub**: [rjswenson/club-stroll-promo](https://github.com/rjswenson/club-stroll-promo)
- **Portfolio**: Featured on [7un.me](https://7un.me)

## About the Production

Club Stroll celebrates Kansas City's rich cultural heritage, bringing to life the jazz clubs, nightlife, and vibrant atmosphere that defined the city's musical golden age. Through interactive theatre, audiences step into this historic era and become part of the story.

## Tags

`Promo` `Astro` `In-Person` `Theatre` `Producer` `Kansas City` `Jazz` `1920s` `Interactive Theatre`

## Local Deployment

Club Stroll is an Astro static site with no backend dependencies, making it simple to deploy anywhere.

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Or alternatively
npm start
```

Visit [http://localhost:4321](http://localhost:4321) (Astro's default port)

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The build output is in the `dist/` directory.

### Production Deployment

This static site can be deployed to any of the following platforms:

**Recommended Options:**
- **Vercel** - Zero config, automatic deployments from git
  ```bash
  npm i -g vercel
  vercel
  ```
- **Netlify** - Drag-and-drop or git-based deployments
- **Cloudflare Pages** - Global CDN with excellent performance
- **GitHub Pages** - Free hosting for public repositories

**Build Configuration:**
- Build command: `npm run build`
- Output directory: `dist/`
- No environment variables required

**Configured Site URL:** https://clubstrollkc.com (see astro.config.mjs:5)

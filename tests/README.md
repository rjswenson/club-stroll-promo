# Integration Tests for Club Stroll Promo

This directory contains Playwright integration tests for the Club Stroll promotional website.

## Test Files

- **`pages.spec.ts`** - Page load and navigation tests
- **`content.spec.ts`** - Content verification and structure tests

## Running Tests

```bash
# Run all tests (headless)
npm test

# Run tests in interactive UI mode
npm run test:ui

# Run tests with browser visible
npm run test:headed

# View test report
npm run test:report
```

## Test Coverage

### Page Load Tests
- Home page loads successfully (200 status)
- Main heading displays correctly
- Tagline is visible
- Hero description is present
- Footer with copyright year
- 404 page for non-existent routes

### Content Verification Tests
- Video embed section exists
- Main section structure is correct (header, hero, footer)
- Semantic HTML structure (main, h1)
- Only one h1 per page
- Responsive design meta tags present

## CI/CD

Tests run automatically on GitHub Actions for:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

## Configuration

Test configuration is in `playwright.config.ts`:
- Base URL: `http://localhost:4321` (Astro preview server)
- Browser: Chromium only
- Retries: 2 on CI, 0 locally
- Workers: 1 on CI (sequential), parallel locally
- Reporter: GitHub format on CI, HTML report locally
- Screenshots: On failure only
- Traces: On first retry

## Adding New Tests

When adding new pages or features:
1. Add page load tests to `pages.spec.ts`
2. Add content verification tests to `content.spec.ts`
3. Run tests locally: `npm test`
4. Ensure all tests pass before committing

## Troubleshooting

If tests fail:
1. Check test output for specific errors
2. Run in headed mode to see browser: `npm run test:headed`
3. Use UI mode for debugging: `npm run test:ui`
4. Check screenshots in `test-results/` directory
5. Review HTML report: `npm run test:report`

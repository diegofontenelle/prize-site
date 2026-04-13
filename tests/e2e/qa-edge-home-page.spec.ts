import { test, expect } from '@playwright/test';
import path from 'path';

const SCREENSHOTS_DIR = 'tests/results/edge';

test.describe('Unhappy Path & Edge Cases: home page', () => {

  // TC-EDGE-001: No uncaught JS errors
  test('TC-EDGE-001: no uncaught JS errors on page load', async ({ page }) => {
    const pageErrors: Error[] = [];

    // Attach listener BEFORE navigation
    page.on('pageerror', (err) => {
      pageErrors.push(err);
    });

    await page.goto('/', { waitUntil: 'networkidle' });

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-001-no-js-errors.png'),
      fullPage: true,
    });

    expect(
      pageErrors,
      `Expected zero uncaught JS errors but got ${pageErrors.length}: ${pageErrors.map((e) => e.message).join('; ')}`
    ).toHaveLength(0);
  });

  // TC-EDGE-002: Nav hidden on mobile
  test('TC-EDGE-002: nav links hidden on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // The nav has class "hidden md:flex" — it should not be visible at 375px
    const mobileNav = page.locator('nav.hidden');

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-002-mobile-nav-hidden.png'),
      fullPage: false,
    });

    await expect(mobileNav).not.toBeVisible();
  });

  // TC-EDGE-003: Hero images load (naturalWidth > 0)
  test('TC-EDGE-003: hero images all load with naturalWidth > 0', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // Evaluate naturalWidth of every <img> inside the hero <section>
    const brokenImages = await page.evaluate(() => {
      const hero = document.querySelector('section');
      if (!hero) return ['hero section not found'];

      const imgs = Array.from(hero.querySelectorAll('img'));
      return imgs
        .filter((img) => img.naturalWidth === 0)
        .map((img) => img.src || img.getAttribute('src') || 'unknown src');
    });

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-003-hero-images-loaded.png'),
      fullPage: false,
    });

    expect(
      brokenImages,
      `These hero images have naturalWidth === 0 (broken): ${brokenImages.join(', ')}`
    ).toHaveLength(0);
  });

  // TC-EDGE-004: Resources bg-front.png image loads
  test('TC-EDGE-004: resources bg-front.png image loads with naturalWidth > 0', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const isBroken = await page.evaluate(() => {
      const img = document.querySelector('img[src*="bg-front.png"]') as HTMLImageElement | null;
      if (!img) return 'img element not found in DOM';
      if (img.naturalWidth === 0) return `naturalWidth is 0 for src=${img.src}`;
      return null;
    });

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-004-resources-bgfront-loaded.png'),
      fullPage: false,
    });

    expect(isBroken).toBeNull();
  });

  // TC-EDGE-005: Footer email href
  test('TC-EDGE-005: footer email link has correct mailto href', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const emailLink = page.locator('footer a[href^="mailto:"]');

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-005-footer-email-href.png'),
      fullPage: false,
    });

    const href = await emailLink.getAttribute('href');
    expect(href).toBe('mailto:atendimento@cashin.com.br');
  });

  // TC-EDGE-006: Footer phone href
  test('TC-EDGE-006: footer phone link has correct tel href', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const phoneLink = page.locator('footer a[href^="tel:"]');

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-006-footer-phone-href.png'),
      fullPage: false,
    });

    const href = await phoneLink.getAttribute('href');
    expect(href).toBe('tel:+5511975821007');
  });

  // TC-EDGE-007: No horizontal overflow at 1280px
  test('TC-EDGE-007: no horizontal overflow at 1280x720', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const overflow = await page.evaluate(() => {
      return {
        scrollWidth: document.body.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-007-no-overflow-1280.png'),
      fullPage: false,
    });

    expect(
      overflow.scrollWidth,
      `Horizontal overflow at 1280px: scrollWidth=${overflow.scrollWidth} > innerWidth=${overflow.innerWidth}`
    ).toBeLessThanOrEqual(overflow.innerWidth);
  });

  // TC-EDGE-008: No horizontal overflow at 375px (with 20px tolerance)
  test('TC-EDGE-008: no horizontal overflow at 375x667 (20px tolerance)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const overflow = await page.evaluate(() => {
      return {
        scrollWidth: document.body.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-008-no-overflow-375.png'),
      fullPage: false,
    });

    const tolerance = 20;
    expect(
      overflow.scrollWidth,
      `Horizontal overflow at 375px: scrollWidth=${overflow.scrollWidth} > innerWidth=${overflow.innerWidth} + ${tolerance}px tolerance`
    ).toBeLessThanOrEqual(overflow.innerWidth + tolerance);
  });

  // TC-EDGE-009: "Acessar conta" stays on same page
  test('TC-EDGE-009: clicking "Acessar conta" stays on same page (/ or /#login)', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const ctaLink = page.locator('a', { hasText: 'Acessar conta' });
    await ctaLink.click();

    // Wait for any navigation to settle
    await page.waitForLoadState('networkidle');

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-009-acessar-conta-same-page.png'),
      fullPage: false,
    });

    const url = new URL(page.url());
    const isStillHomePage = url.pathname === '/' && (url.hash === '' || url.hash === '#login');

    expect(
      isStillHomePage,
      `Expected URL to be / or /#login but got: ${page.url()}`
    ).toBe(true);
  });

  // TC-EDGE-010: Social links have aria-labels
  test('TC-EDGE-010: footer social links have aria-labels', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const linkedinLink = page.locator('footer a[aria-label="LinkedIn"]');
    const whatsappLink = page.locator('footer a[aria-label="WhatsApp"]');
    const emailLink   = page.locator('footer a[aria-label="Email"]');

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-010-social-aria-labels.png'),
      fullPage: false,
    });

    await expect(linkedinLink).toHaveAttribute('aria-label', 'LinkedIn');
    await expect(whatsappLink).toHaveAttribute('aria-label', 'WhatsApp');
    await expect(emailLink).toHaveAttribute('aria-label', 'Email');
  });

});

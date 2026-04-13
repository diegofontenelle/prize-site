import { test } from '@playwright/test';
import path from 'path';

const VISUAL_DIR = '/Users/diegofontenelle/code/prize-site/tests/results/visual';

test.describe('Visual Comparison: home page', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  // TC-VISUAL-001: Full page desktop screenshot at 1280×720
  test('TC-VISUAL-001: full page desktop screenshot 1280x720', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.screenshot({
      path: path.join(VISUAL_DIR, 'desktop-full-page.png'),
      fullPage: true,
    });
  });

  // TC-VISUAL-002: Header screenshot
  test('TC-VISUAL-002: header screenshot', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const header = page.locator('header').first();
    await header.screenshot({
      path: path.join(VISUAL_DIR, 'desktop-header.png'),
    });
  });

  // TC-VISUAL-003: Hero section screenshot
  test('TC-VISUAL-003: hero section screenshot', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    const hero = page.locator('section').first();
    await hero.screenshot({
      path: path.join(VISUAL_DIR, 'desktop-hero.png'),
    });
  });

  // TC-VISUAL-004: Solutions blue banner screenshot
  test('TC-VISUAL-004: solutions blue banner screenshot', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    // Locate the Solutions section — look for a section containing "Soluções" or "soluções" text
    const solutionsSection = page
      .locator('section')
      .filter({ hasText: /soluções/i })
      .first();
    await solutionsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await solutionsSection.screenshot({
      path: path.join(VISUAL_DIR, 'desktop-solutions.png'),
    });
  });

  // TC-VISUAL-005: Resources section screenshot
  test('TC-VISUAL-005: resources section screenshot', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const resourcesSection = page
      .locator('section')
      .filter({ hasText: /recursos/i })
      .first();
    await resourcesSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await resourcesSection.screenshot({
      path: path.join(VISUAL_DIR, 'desktop-resources.png'),
    });
  });

  // TC-VISUAL-006: CTA blue gradient section screenshot
  test('TC-VISUAL-006: CTA blue gradient section screenshot', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    // CTA section uniquely contains "Premie de forma inteligente" (not the Hero's "Bonifique")
    const ctaSection = page
      .locator('section')
      .filter({ hasText: /Premie de forma inteligente/i })
      .first();
    await ctaSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await ctaSection.screenshot({
      path: path.join(VISUAL_DIR, 'desktop-cta.png'),
    });
  });

  // TC-VISUAL-007: Footer screenshot
  test('TC-VISUAL-007: footer screenshot', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const footer = page.locator('footer').first();
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await footer.screenshot({
      path: path.join(VISUAL_DIR, 'desktop-footer.png'),
    });
  });

  // TC-VISUAL-008: Mobile full page 375×667
  test('TC-VISUAL-008: mobile full page screenshot 375x667', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.screenshot({
      path: path.join(VISUAL_DIR, 'mobile-full-page.png'),
      fullPage: true,
    });
  });
});

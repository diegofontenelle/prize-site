import { test, expect, type Page } from '@playwright/test';
import path from 'path';
import { ROUTES } from '../../src/lib/site';

const VISUAL_DIR = 'tests/results/visual';

const PAGES = [
  { path: ROUTES.home, slug: 'home' },
  { path: ROUTES.comoFunciona, slug: 'como-funciona' },
  { path: ROUTES.baseLegal, slug: 'base-legal' },
  { path: ROUTES.seguranca, slug: 'seguranca' },
  { path: ROUTES.duvidas, slug: 'duvidas' },
  { path: ROUTES.recebeuPrizes, slug: 'recebeu-prizes' },
  { path: ROUTES.faleComAGente, slug: 'fale-com-a-gente' },
] as const;

const DESKTOP = { width: 1280, height: 720 };
const MOBILE = { width: 390, height: 844 };

/**
 * Abre a página no estado final das animações: com movimento reduzido o site
 * desliga as animações (globals.css) e a contagem dos números já mostra o valor final.
 */
async function openStill(page: Page, route: string) {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(route, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // Esconde o indicador do dev server (next dev), que não faz parte da página
  await page.addStyleTag({ content: 'nextjs-portal{display:none !important}' });
}

/** Largura do documento vs. largura da janela (sem rolagem horizontal). */
function overflow(page: Page) {
  return page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
}

test.describe('Visual: desktop 1280x720', () => {
  test.use({ viewport: DESKTOP });

  // TC-VISUAL-001..007: página inteira no desktop
  for (const [i, p] of PAGES.entries()) {
    const id = String(i + 1).padStart(3, '0');
    test(`TC-VISUAL-${id}: desktop full page ${p.path}`, async ({ page }, testInfo) => {
      await openStill(page, p.path);
      await expect(page.locator('main')).toBeVisible();

      const size = await overflow(page);
      expect(size.scrollWidth, `rolagem horizontal em ${p.path}`).toBeLessThanOrEqual(size.innerWidth);

      await page.screenshot({
        path: path.join(VISUAL_DIR, testInfo.project.name, `desktop-${p.slug}.png`),
        fullPage: true,
      });
    });
  }
});

test.describe('Visual: mobile 390x844', () => {
  test.use({ viewport: MOBILE });

  // TC-VISUAL-008..014: página inteira no celular
  for (const [i, p] of PAGES.entries()) {
    const id = String(i + 8).padStart(3, '0');
    test(`TC-VISUAL-${id}: mobile full page ${p.path}`, async ({ page }, testInfo) => {
      await openStill(page, p.path);
      await expect(page.locator('main')).toBeVisible();

      await page.screenshot({
        path: path.join(VISUAL_DIR, testInfo.project.name, `mobile-${p.slug}.png`),
        fullPage: true,
      });
    });
  }

  // TC-VISUAL-015..021: sem rolagem horizontal a 390px, com as animações rodando de verdade
  for (const [i, p] of PAGES.entries()) {
    const id = String(i + 15).padStart(3, '0');
    test(`TC-VISUAL-${id}: no horizontal overflow at 390px ${p.path}`, async ({ page }) => {
      await page.goto(p.path, { waitUntil: 'networkidle' });

      // Confere no topo e depois de rolar até o fim (ilustrações e balões flutuantes já em cena)
      let size = await overflow(page);
      expect(size.scrollWidth, `rolagem horizontal em ${p.path} (topo)`).toBeLessThanOrEqual(size.innerWidth);

      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForTimeout(500);
      size = await overflow(page);
      expect(size.scrollWidth, `rolagem horizontal em ${p.path} (fim)`).toBeLessThanOrEqual(size.innerWidth);

      // A página também não rola na horizontal
      const scrolledX = await page.evaluate(() => {
        window.scrollTo(200, window.scrollY);
        return window.scrollX;
      });
      expect(scrolledX).toBe(0);
    });
  }

  // TC-VISUAL-022: menu do celular aberto cabe na tela
  test('TC-VISUAL-022: mobile menu fits the viewport', async ({ page }, testInfo) => {
    await openStill(page, ROUTES.home);
    await page.locator('header details.mnav summary').click();

    const panel = page.locator('header details.mnav > div');
    await expect(panel).toBeVisible();
    const box = await panel.boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(MOBILE.width);

    const size = await overflow(page);
    expect(size.scrollWidth).toBeLessThanOrEqual(size.innerWidth);

    await page.screenshot({ path: path.join(VISUAL_DIR, testInfo.project.name, 'mobile-menu-open.png') });
  });
});

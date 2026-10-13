import { test, expect } from '@playwright/test';
import { CONTACT, LOGIN_URL, MAIN_NAV, ROUTES } from '../../src/lib/site';

const SCREENSHOTS_DIR = 'tests/results/happy';

/** As 7 páginas do site, com o título da aba e o H1 de cada uma. */
const PAGES = [
  { path: ROUTES.home, slug: 'home', title: 'Prize · Premiação por desempenho, paga por Pix', h1: 'Premie quem faz acontecer.' },
  { path: ROUTES.comoFunciona, slug: 'como-funciona', title: 'Como funciona · Prize', h1: 'Do Pix da empresa ao Pix de quem fez acontecer.' },
  { path: ROUTES.baseLegal, slug: 'base-legal', title: 'Base legal · Prize', h1: 'Prêmio não é salário, desde que seja prêmio de verdade.' },
  { path: ROUTES.seguranca, slug: 'seguranca', title: 'Segurança · Prize', h1: 'Seguro para quem paga e para quem recebe.' },
  { path: ROUTES.duvidas, slug: 'duvidas', title: 'Dúvidas · Prize', h1: 'Dúvidas frequentes' },
  { path: ROUTES.recebeuPrizes, slug: 'recebeu-prizes', title: 'Recebeu Prizes? · Prize', h1: 'Você recebeu Prizes. Eles são seus.' },
  { path: ROUTES.faleComAGente, slug: 'fale-com-a-gente', title: 'Fale com a gente · Prize', h1: 'Fale com a gente.' },
] as const;

/** URLs do site antigo e para onde redirecionam (next.config.ts). */
const OLD_URLS = [
  { from: '/sobre', to: ROUTES.home },
  { from: '/nossa-plataforma', to: ROUTES.comoFunciona },
  { from: '/como-usar', to: ROUTES.comoFunciona },
  { from: '/fale-conosco', to: ROUTES.faleComAGente },
] as const;

test.describe('Happy Path: site', () => {
  // TC-HAPPY-001: cada rota carrega com um <main> e o H1 da página
  for (const [i, p] of PAGES.entries()) {
    test(`TC-HAPPY-001.${i + 1}: ${p.path} loads with <main>`, async ({ page }) => {
      const response = await page.goto(p.path, { waitUntil: 'networkidle' });
      expect(response?.status()).toBe(200);

      await expect(page).toHaveTitle(p.title);
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('main h1')).toHaveText(p.h1);
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('footer')).toBeAttached();

      await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-001-${p.slug}.png` });
    });
  }

  // TC-HAPPY-002: header fica fixo no topo ao rolar
  test('TC-HAPPY-002: header sticky after scroll', async ({ page }) => {
    await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

    const header = page.locator('header');
    await expect(header).toHaveCSS('position', 'sticky');

    await page.evaluate(() => window.scrollTo(0, 1200));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(1000);

    await expect(header).toBeInViewport();
    const box = await header.boundingBox();
    expect(box?.y).toBe(0);

    await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-002-header-sticky.png` });
  });

  // TC-HAPPY-003: logo do header leva para a página inicial
  test('TC-HAPPY-003: header logo links to /', async ({ page }) => {
    await page.goto(ROUTES.duvidas, { waitUntil: 'networkidle' });

    const logo = page.locator('header').getByRole('link', { name: 'Prize — página inicial' });
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', ROUTES.home);

    await logo.click();
    await expect(page).toHaveURL(ROUTES.home);
    await expect(page.locator('main h1')).toHaveText(PAGES[0].h1);

    await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-003-logo.png` });
  });

  test.describe('desktop navigation', () => {
    // O menu principal só aparece acima de 1080px (abaixo disso, vira o menu "Abrir menu").
    test.use({ viewport: { width: 1280, height: 800 } });

    // TC-HAPPY-004: links do menu principal levam às rotas certas
    test('TC-HAPPY-004: main nav links navigate to the right routes', async ({ page }) => {
      await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

      const nav = page.getByRole('navigation', { name: 'Principal' });
      await expect(nav).toBeVisible();
      await expect(nav.getByRole('link')).toHaveText(MAIN_NAV.map((item) => item.label));

      for (const item of MAIN_NAV) {
        const link = nav.getByRole('link', { name: item.label, exact: true });
        await expect(link).toHaveAttribute('href', item.href);
        await link.click();

        await expect(page).toHaveURL(item.href);
        const target = PAGES.find((p) => p.path === item.href);
        await expect(page.locator('main h1')).toHaveText(target!.h1);
        // O link da página atual fica marcado
        await expect(nav.getByRole('link', { name: item.label, exact: true })).toHaveAttribute('aria-current', 'page');
      }

      await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-004-main-nav.png` });
    });

    // TC-HAPPY-005: botão "Fale com a gente" do header leva ao formulário
    test('TC-HAPPY-005: header "Fale com a gente" navigates to /fale-com-a-gente', async ({ page }) => {
      await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

      const cta = page.locator('header').getByRole('link', { name: 'Fale com a gente' }).first();
      await expect(cta).toBeVisible();
      await cta.click();

      await expect(page).toHaveURL(ROUTES.faleComAGente);
      await expect(page.getByRole('heading', { name: 'Pedir uma proposta' })).toBeVisible();

      await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-005-header-cta.png` });
    });
  });

  // TC-HAPPY-006: "Entrar" aponta para o acesso à conta (LOGIN_URL), em nova aba
  test('TC-HAPPY-006: "Entrar" points to LOGIN_URL', async ({ page }) => {
    await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

    const headerLink = page.locator('header').getByRole('link', { name: 'Entrar', exact: true });
    await expect(headerLink).toBeVisible();

    // Todos os "Entrar" da página (header, seção "Recebeu Prizes?" e rodapé)
    const all = page.getByRole('link', { name: 'Entrar', exact: true });
    expect(await all.count()).toBeGreaterThanOrEqual(3);
    for (const link of await all.all()) {
      await expect(link).toHaveAttribute('href', LOGIN_URL);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
    }

    await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-006-entrar.png` });
  });

  // TC-HAPPY-007: URLs antigas redirecionam (308) para as páginas novas
  for (const [i, r] of OLD_URLS.entries()) {
    test(`TC-HAPPY-007.${i + 1}: ${r.from} redirects to ${r.to}`, async ({ page, request }) => {
      const response = await request.get(r.from, { maxRedirects: 0 });
      expect(response.status()).toBe(308);
      expect(new URL(response.headers()['location'], 'http://localhost').pathname).toBe(r.to);

      await page.goto(r.from, { waitUntil: 'networkidle' });
      expect(new URL(page.url()).pathname).toBe(r.to);
      await expect(page.locator('main')).toBeVisible();
    });
  }

  // TC-HAPPY-008: rodapé com links das páginas e contato
  test('TC-HAPPY-008: footer links and contact info', async ({ page }) => {
    await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    const footerNav = footer.getByRole('navigation', { name: 'Rodapé' });
    for (const item of MAIN_NAV) {
      await expect(footerNav.getByRole('link', { name: item.label, exact: true })).toHaveAttribute('href', item.href);
    }

    const email = footer.getByRole('link', { name: CONTACT.email });
    await expect(email).toBeVisible();
    await expect(email).toHaveAttribute('href', `mailto:${CONTACT.email}`);

    const phone = footer.getByRole('link', { name: CONTACT.phoneLabel });
    await expect(phone).toBeVisible();
    await expect(phone).toHaveAttribute('href', CONTACT.phoneHref);

    await expect(footer.getByText('© 2026 Prize', { exact: false })).toBeVisible();

    await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-008-footer.png` });
  });

  // TC-HAPPY-009: chamadas da página inicial levam às páginas de cada assunto
  test('TC-HAPPY-009: home CTAs navigate to their pages', async ({ page }) => {
    await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

    const ctas = [
      { name: 'Ver como funciona', to: ROUTES.comoFunciona },
      { name: 'Ver segurança', to: ROUTES.seguranca },
      { name: 'Ver a base legal', to: ROUTES.baseLegal },
      { name: 'Ver como sacar', to: ROUTES.recebeuPrizes },
      { name: 'Ver todas as dúvidas', to: ROUTES.duvidas },
    ];
    for (const cta of ctas) {
      const link = page.locator('main').getByRole('link', { name: cta.name, exact: true });
      await link.scrollIntoViewIfNeeded();
      await link.click();
      await expect(page).toHaveURL(cta.to);
      await expect(page.locator('main h1')).toBeVisible();
      await page.goBack({ waitUntil: 'networkidle' });
      await expect(page).toHaveURL(ROUTES.home);
    }

    // Todo link interno do <main> da home aponta para uma rota existente
    const hrefs = await page
      .locator('main a[href^="/"]')
      .evaluateAll((links) => [...new Set(links.map((a) => a.getAttribute('href')))]);
    const known: string[] = Object.values(ROUTES);
    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) expect(known).toContain(href);

    await page.screenshot({ path: `${SCREENSHOTS_DIR}/tc-009-home-ctas.png` });
  });
});

import { test, expect } from '@playwright/test';

const SCREENSHOTS_DIR = 'tests/results/happy';

test.describe('Happy Path: home page', () => {
  // TC-HAPPY-001: Page loads at /
  test('TC-HAPPY-001: page loads at /', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // Assert body exists (no crash)
    await expect(page.locator('body')).toBeVisible();

    // Assert the page has some meaningful content
    const mainEl = page.locator('main');
    await expect(mainEl).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-001-page-loads.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-002: Header fixed after scroll
  test('TC-HAPPY-002: header fixed after scroll', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Scroll down 500px
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(300);

    // Header must still be in viewport
    await expect(header).toBeInViewport();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-002-header-fixed-after-scroll.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-003: Logo renders and links to /
  test('TC-HAPPY-003: logo renders and links to /', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // The logo link is inside the header and has href="/"
    const logoLink = page.locator('header a[href="/"]');
    await expect(logoLink).toBeVisible();

    // There must be an img inside the logo link
    const logoImg = logoLink.locator('img');
    await expect(logoImg).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-003-logo-renders.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-004: Nav links visible and navigate
  test('TC-HAPPY-004: nav links visible and navigate', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const nav = page.locator('header nav');

    // Assert all three nav links are present and visible
    const produtoLink = nav.getByRole('link', { name: 'Produto' });
    const sobreLink = nav.getByRole('link', { name: 'Sobre' });
    const ajudaLink = nav.getByRole('link', { name: 'Ajuda' });

    await expect(produtoLink).toBeVisible();
    await expect(sobreLink).toBeVisible();
    await expect(ajudaLink).toBeVisible();

    // Click Produto → /nossa-plataforma
    await produtoLink.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/nossa-plataforma/);
    await page.goBack({ waitUntil: 'networkidle' });

    // Click Sobre → /sobre
    await nav.getByRole('link', { name: 'Sobre' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/sobre/);
    await page.goBack({ waitUntil: 'networkidle' });

    // Click Ajuda → /como-usar
    await nav.getByRole('link', { name: 'Ajuda' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/como-usar/);
    await page.goBack({ waitUntil: 'networkidle' });

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-004-nav-links.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-005: "Acessar conta" button visible with href="#login"
  test('TC-HAPPY-005: "Acessar conta" button visible with href="#login"', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const acessarConta = page.locator('header').getByRole('link', { name: 'Acessar conta' });
    await expect(acessarConta).toBeVisible();

    const href = await acessarConta.getAttribute('href');
    expect(href).toBe('#login');

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-005-acessar-conta-button.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-006: Hero H1 visible
  test('TC-HAPPY-006: hero H1 visible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Bonifique sua equipe de forma inteligente');

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-006-hero-h1.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-007: Hero CTA links to /como-usar
  test('TC-HAPPY-007: hero CTA links to /como-usar', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // The hero section is the first section; its CTA link is the first "Contrate nossos serviços"
    const heroCTA = page
      .locator('section')
      .first()
      .getByRole('link', { name: /Contrate nossos serviços/i });

    await expect(heroCTA).toBeVisible();
    await heroCTA.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/como-usar/);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-007-hero-cta-navigates.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-008: Solutions section text visible
  test('TC-HAPPY-008: solutions section text visible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    await expect(
      page.getByText('Tudo que sua empresa precisa', { exact: false }),
    ).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-008-solutions-text.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-009: Resources 4 feature cards
  test('TC-HAPPY-009: resources 4 feature cards', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    await expect(page.getByText('Prêmios com pagamentos instantâneos')).toBeVisible();
    await expect(page.getByText('Histórico de todas as transações feitas')).toBeVisible();
    await expect(page.getByText('Diversas opções de resgate de créditos')).toBeVisible();
    await expect(page.getByText('Sem uso de informações sensíveis')).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-009-resource-cards.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-010: CTA headline visible
  test('TC-HAPPY-010: CTA headline visible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    await expect(
      page.getByText('Premie de forma inteligente', { exact: false }),
    ).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-010-cta-headline.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-011: CTA button links to /como-usar
  test('TC-HAPPY-011: CTA section button links to /como-usar', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // The CTA section contains the h2 "Premie de forma inteligente..." followed by the button.
    // We scope to the section that contains that heading.
    const ctaSection = page.locator('section').filter({
      has: page.locator('h2', { hasText: 'Premie de forma inteligente' }),
    });

    await expect(ctaSection).toBeVisible();

    const ctaButton = ctaSection.getByRole('link', { name: /Contrate nossos serviços/i });
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/como-usar/);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-011-cta-button-navigates.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-012: Footer contact info visible
  test('TC-HAPPY-012: footer contact info visible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const footer = page.locator('footer');
    await expect(footer.getByText('atendimento@cashin.com.br')).toBeVisible();
    await expect(footer.getByText('+55 (11) 97582-1007')).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-012-footer-contact.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-013: Footer social icons
  test('TC-HAPPY-013: footer social icons', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const footer = page.locator('footer');

    const linkedin = footer.getByRole('link', { name: 'LinkedIn' });
    const whatsapp = footer.getByRole('link', { name: 'WhatsApp' });
    const email = footer.getByRole('link', { name: 'Email' });

    await expect(linkedin).toBeVisible();
    await expect(whatsapp).toBeVisible();
    await expect(email).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-013-footer-social-icons.png`,
      fullPage: false,
    });
  });

  // TC-HAPPY-014: Footer copyright
  test('TC-HAPPY-014: footer copyright', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const footer = page.locator('footer');
    await expect(footer.getByText('© 2026 Prize', { exact: false })).toBeVisible();

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/tc-014-footer-copyright.png`,
      fullPage: false,
    });
  });
});

import { test, expect, type Page } from '@playwright/test';
import path from 'path';
import { LOGIN_URL, MAIN_NAV, ROUTES } from '../../src/lib/site';

const SCREENSHOTS_DIR = 'tests/results/edge';
const ALL_ROUTES = Object.values(ROUTES);

/** Abre o formulário de contato pronto para uso (componente cliente hidratado). */
async function openContactForm(page: Page) {
  await page.goto(ROUTES.faleComAGente, { waitUntil: 'networkidle' });
  const form = page.locator('form');
  await expect(form).toBeVisible();
  return form;
}

test.describe('Unhappy Path & Edge Cases: site', () => {
  // TC-EDGE-001: nenhuma página gera erro de JS (nem aviso de hidratação no console)
  test('TC-EDGE-001: no JS errors on any route', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`console: ${msg.text()}`);
    });

    for (const route of ALL_ROUTES) {
      await page.goto(route, { waitUntil: 'networkidle' });
      // Rola até o fim para disparar as ilustrações e a contagem dos números
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForTimeout(300);
    }

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-001-no-js-errors.png') });
    expect(errors, errors.join('\n')).toHaveLength(0);
  });

  test.describe('mobile menu (390px)', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    // TC-EDGE-002: menu do celular abre, lista as páginas e navega
    test('TC-EDGE-002: mobile menu opens and navigates', async ({ page }) => {
      await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

      // Menu de desktop e CTA do header somem; fica o botão "Abrir menu"
      await expect(page.getByRole('navigation', { name: 'Principal' })).toBeHidden();
      await expect(page.locator('header .hdr-cta')).toBeHidden();
      await expect(page.locator('header').getByRole('link', { name: 'Entrar', exact: true })).toHaveAttribute('href', LOGIN_URL);

      const menu = page.locator('header details.mnav');
      const toggle = menu.locator('summary');
      await expect(toggle).toBeVisible();
      await expect(toggle).toHaveAttribute('aria-label', 'Abrir menu');

      await toggle.click();
      await expect(menu).toHaveAttribute('open', '');
      for (const item of MAIN_NAV) {
        await expect(menu.getByRole('link', { name: item.label, exact: true })).toBeVisible();
      }
      await expect(menu.getByRole('link', { name: 'Fale com a gente' })).toBeVisible();
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-002-mobile-menu-open.png') });

      // Navega e o menu fecha sozinho
      await menu.getByRole('link', { name: 'Segurança', exact: true }).click();
      await expect(page).toHaveURL(ROUTES.seguranca);
      await expect(menu).not.toHaveAttribute('open', '');
      await expect(page.locator('main h1')).toHaveText('Seguro para quem paga e para quem recebe.');

      // O item da página atual fica marcado, e o CTA do menu leva ao formulário
      await toggle.click();
      await expect(menu.getByRole('link', { name: 'Segurança', exact: true })).toHaveAttribute('aria-current', 'page');
      await menu.getByRole('link', { name: 'Fale com a gente' }).click();
      await expect(page).toHaveURL(ROUTES.faleComAGente);
      await expect(menu).not.toHaveAttribute('open', '');

      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-002-mobile-menu-navigated.png') });
    });

    // TC-EDGE-011: menu do celular fecha com Esc, toque fora, logo e voltar do navegador
    test('TC-EDGE-011: mobile menu closes on Escape, outside tap, logo and back', async ({ page }) => {
      await page.goto(ROUTES.home, { waitUntil: 'networkidle' });
      const menu = page.locator('header details.mnav');
      const toggle = menu.locator('summary');

      // Esc fecha e devolve o foco ao botão do menu
      await toggle.click();
      await expect(menu).toHaveAttribute('open', '');
      await page.keyboard.press('Escape');
      await expect(menu).not.toHaveAttribute('open', '');
      await expect(toggle).toBeFocused();

      // Toque fora do menu fecha (na margem esquerda; o painel do menu fica alinhado à direita)
      await toggle.click();
      await expect(menu).toHaveAttribute('open', '');
      await page.mouse.click(8, 300);
      await expect(menu).not.toHaveAttribute('open', '');

      // Logo (mesma página) fecha
      await toggle.click();
      await page.locator('header').getByRole('link', { name: 'Prize — página inicial' }).click();
      await expect(menu).not.toHaveAttribute('open', '');

      // Voltar do navegador com o menu aberto troca de página e fecha o menu
      await menu.locator('summary').click();
      await menu.getByRole('link', { name: 'Dúvidas', exact: true }).click();
      await expect(page).toHaveURL(ROUTES.duvidas);
      await toggle.click();
      await expect(menu).toHaveAttribute('open', '');
      await page.goBack();
      await expect(page).toHaveURL(ROUTES.home);
      await expect(menu).not.toHaveAttribute('open', '');

      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-011-mobile-menu-closes.png') });
    });
  });

  // TC-EDGE-003: perguntas frequentes abrem e fecham (<details> nativo)
  test('TC-EDGE-003: FAQ details toggle', async ({ page }) => {
    await page.goto(ROUTES.duvidas, { waitUntil: 'networkidle' });

    const first = page.locator('details.faq', { has: page.getByText('Como a minha empresa começa?') });
    const second = page.locator('details.faq', { has: page.getByText('Como coloco saldo na Prize?') });

    // A primeira de cada grupo já vem aberta
    await expect(first).toHaveAttribute('open', '');
    await expect(first.locator('p')).toBeVisible();
    await expect(second).not.toHaveAttribute('open', '');
    await expect(second.locator('p')).toBeHidden();

    await first.locator('summary').click();
    await expect(first).not.toHaveAttribute('open', '');
    await expect(first.locator('p')).toBeHidden();

    await second.locator('summary').click();
    await expect(second).toHaveAttribute('open', '');
    await expect(second.locator('p')).toBeVisible();

    // Teclado: Enter no summary também alterna
    await second.locator('summary').focus();
    await page.keyboard.press('Enter');
    await expect(second).not.toHaveAttribute('open', '');

    // Atalho "Para quem recebe" leva ao grupo
    await page.getByRole('navigation', { name: 'Grupos de perguntas' }).getByRole('link', { name: 'Para quem recebe' }).click();
    await expect(page).toHaveURL(/#quem-recebe$/);
    await expect(page.locator('main').getByRole('heading', { name: 'Para quem recebe', level: 2 })).toBeInViewport();

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-003-faq-toggle.png') });
  });

  // TC-EDGE-004: enviar o formulário vazio mostra os erros de cada campo
  test('TC-EDGE-004: contact form shows errors on empty submit', async ({ page }) => {
    const form = await openContactForm(page);

    await form.getByRole('button', { name: 'Enviar' }).click();

    await expect(form.getByRole('alert')).toHaveText('Revise os campos marcados para enviar.');
    const messages = [
      'Informe o seu nome.',
      'Informe um e-mail válido, como nome@empresa.com.br.',
      'Informe o celular com DDD.',
      'Informe o nome da empresa.',
      'Informe o seu cargo.',
      'Escolha uma opção.',
      'Para enviar, é preciso concordar com a Política de Privacidade.',
    ];
    for (const message of messages) await expect(form.getByText(message)).toBeVisible();
    await expect(form.getByText('Escolha uma faixa.')).toHaveCount(2);

    // O texto do rótulo inclui o "*" de obrigatório; /^Empresa/ não pega "Empregados da empresa".
    for (const label of [/^Nome completo/, /^E-mail de trabalho/, /^Celular com DDD/, /^Empresa/, /^Cargo/]) {
      await expect(form.getByLabel(label)).toHaveAttribute('aria-invalid', 'true');
    }
    // Campo opcional não é marcado
    await expect(form.getByLabel('CNPJ')).not.toHaveAttribute('aria-invalid', 'true');

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-004-form-errors.png'), fullPage: true });
  });

  // TC-EDGE-005: e-mail que passa no navegador mas não na regra do site ("a@b") continua com erro
  test('TC-EDGE-005: contact form rejects an e-mail without domain', async ({ page }) => {
    const form = await openContactForm(page);

    await form.getByLabel('Nome completo').fill('Mariana Costa');
    await form.getByLabel('E-mail de trabalho').fill('a@b');
    await form.getByLabel('Celular com DDD').fill('(11) 91234-5678');
    await form.getByLabel(/^Empresa/).fill('Distribuidora Aurora');
    await form.getByLabel('Cargo').fill('Gerente de RH');
    await form.getByLabel('Quantas pessoas vai premiar?').selectOption('De 51 a 200');
    await form.getByLabel('Quanto vai premiar por ano?').selectOption('Ainda não sei');
    await form.getByLabel('Os dois').check();
    await form.getByRole('checkbox', { name: /Li e concordo/ }).check();
    await form.getByRole('button', { name: 'Enviar' }).click();

    await expect(form.getByRole('alert')).toBeVisible();
    await expect(form.getByText('Informe um e-mail válido, como nome@empresa.com.br.')).toBeVisible();
    await expect(form.getByLabel('E-mail de trabalho')).toHaveAttribute('aria-invalid', 'true');
    await expect(form.getByLabel('Nome completo')).toHaveAttribute('aria-invalid', 'false');
    await expect(page.locator('main').getByRole('status')).toHaveCount(0);

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-005-form-bad-email.png') });
  });

  // TC-EDGE-006: envio válido mostra a confirmação; "Enviar outro contato" volta ao formulário
  test('TC-EDGE-006: contact form shows the sent state on valid submit', async ({ page }) => {
    const form = await openContactForm(page);

    await form.getByLabel('Nome completo').fill('Mariana Costa');
    await form.getByLabel('E-mail de trabalho').fill('mariana.costa@aurora.com.br');
    await form.getByLabel('Celular com DDD').fill('(11) 91234-5678');
    await form.getByLabel(/^Empresa/).fill('Distribuidora Aurora');
    await form.getByLabel('Cargo').fill('Gerente de RH');
    await form.getByLabel('Quantas pessoas vai premiar?').selectOption('De 51 a 200');
    await form.getByLabel('Quanto vai premiar por ano?').selectOption('De R$ 100 mil a R$ 300 mil');
    await form.getByLabel('Empregados da empresa').check();
    await form.getByRole('checkbox', { name: /Li e concordo/ }).check();
    await form.getByRole('button', { name: 'Enviar' }).click();

    const status = page.locator('main').getByRole('status');
    await expect(status).toBeVisible();
    await expect(status.getByRole('heading', { name: 'Recebemos o seu contato' })).toBeVisible();
    await expect(status).toContainText('Obrigado, Mariana. A gente responde em até 24 horas no e-mail mariana.costa@aurora.com.br.');
    // O botão Enviar some com o formulário: a confirmação entra na tela e recebe o foco
    await expect(status.getByRole('heading', { name: 'Recebemos o seu contato' })).toBeFocused();
    await expect(status).toBeInViewport();
    await expect(page.locator('form')).toHaveCount(0);
    await expect(status.getByRole('link', { name: 'Voltar para o início' })).toHaveAttribute('href', ROUTES.home);

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-006-form-sent.png') });

    await status.getByRole('button', { name: 'Enviar outro contato' }).click();
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('form').getByRole('alert')).toHaveCount(0);
  });

  // TC-EDGE-007: rota desconhecida responde 404
  test('TC-EDGE-007: unknown route returns 404', async ({ page }) => {
    const response = await page.goto('/pagina-que-nao-existe', { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
    // O layout continua lá, com caminho de volta
    await expect(page.locator('header').getByRole('link', { name: 'Prize — página inicial' })).toBeVisible();

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-007-404.png') });
  });

  // TC-EDGE-008: imagens carregam (foto da home e avatares das ilustrações)
  test('TC-EDGE-008: images load', async ({ page, request }) => {
    await page.goto(ROUTES.home, { waitUntil: 'networkidle' });
    const hero = page.locator('main img').first();
    await expect(hero).toBeVisible();
    await expect.poll(() => hero.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth)).toBeGreaterThan(0);

    for (const file of ['hero.jpg', 'avatar-a.jpg', 'avatar-b.jpg']) {
      const response = await request.get(`/img/site/${file}`);
      expect(response.status(), file).toBe(200);
      expect(response.headers()['content-type']).toContain('image/jpeg');
    }

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-008-images.png') });
  });

  // TC-EDGE-009: ilustrações animadas ficam paradas até aparecerem na tela, também após navegação no cliente
  test('TC-EDGE-009: data-play illustrations start when scrolled into view', async ({ page }) => {
    await page.goto(ROUTES.home, { waitUntil: 'networkidle' });

    // Navegação no cliente (o observador precisa achar as ilustrações da página nova)
    await page.locator('footer').getByRole('link', { name: 'Segurança', exact: true }).click();
    await expect(page).toHaveURL(ROUTES.seguranca);

    const ill = page.locator('main [data-play]').first();
    await expect(ill).toBeAttached();
    await expect(ill).not.toHaveAttribute('data-inview', '');
    const pausedBefore = await ill.locator('.ia1').evaluate((el) => getComputedStyle(el).animationPlayState);
    expect(pausedBefore).toBe('paused');

    await ill.scrollIntoViewIfNeeded();
    await expect(ill).toHaveAttribute('data-inview', '');
    const playingAfter = await ill.locator('.ia1').evaluate((el) => getComputedStyle(el).animationPlayState);
    expect(playingAfter).toBe('running');

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-009-data-play.png') });
  });

  // TC-EDGE-010: nenhum link quebrado entre as páginas
  test('TC-EDGE-010: internal links and anchors resolve', async ({ page, request }) => {
    const internal = new Set<string>();
    const brokenAnchors: string[] = [];

    for (const route of ALL_ROUTES) {
      await page.goto(route, { waitUntil: 'networkidle' });
      const found = await page.evaluate(() => {
        const hrefs = [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')!);
        const anchors = hrefs.filter((h) => h.startsWith('#') && h.length > 1);
        return {
          internal: hrefs.filter((h) => h.startsWith('/')),
          missing: anchors.filter((h) => !document.getElementById(h.slice(1))),
          legacy: hrefs.filter((h) => /\.dc\.html|claude\.ai|_blob/.test(h)),
        };
      });
      found.internal.forEach((h) => internal.add(h));
      brokenAnchors.push(...found.missing.map((h) => `${route} ${h}`));
      expect(found.legacy, `links do protótipo em ${route}`).toHaveLength(0);
    }

    expect(brokenAnchors, brokenAnchors.join(', ')).toHaveLength(0);
    for (const href of internal) {
      const response = await request.get(href);
      expect(response.status(), href).toBe(200);
    }
  });
  // TC-EDGE-012: envio com erro leva ao primeiro campo marcado (o botão Enviar fica no fim do formulário)
  test('TC-EDGE-012: contact form focuses the first invalid field', async ({ page }) => {
    const form = await openContactForm(page);
    await form.getByRole('button', { name: 'Enviar' }).click();
    const nome = form.getByLabel(/^Nome completo/);
    await expect(nome).toBeFocused();
    await expect(nome).toBeInViewport();

    // Com os campos de texto válidos, o próximo erro é a primeira faixa (select)
    await nome.fill('Mariana Costa');
    await form.getByLabel(/^E-mail de trabalho/).fill('mariana@empresa.com.br');
    await form.getByLabel(/^Celular com DDD/).fill('11912345678');
    await form.getByLabel(/^Empresa/).fill('Aurora');
    await form.getByLabel(/^Cargo/).fill('RH');
    await form.getByRole('button', { name: 'Enviar' }).click();
    const pessoas = form.getByLabel(/^Quantas pessoas vai premiar/);
    await expect(pessoas).toBeFocused();
    await expect(pessoas).toBeInViewport();

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'TC-EDGE-012-form-focus-first-invalid.png') });
  });

  // TC-EDGE-013: números da home nunca ficam parados num valor de partida ("R$ 1 milhões")
  test.describe('home numbers (1440x900)', () => {
    test.use({ viewport: { width: 1440, height: 900 } });

    test('TC-EDGE-013: numbers show final values outside the count-up', async ({ page }) => {
      await page.goto(ROUTES.home, { waitUntil: 'networkidle' });
      const values = page.locator('#numeros .ct');
      // Seção só um pouco visível ao abrir: valores finais, sem contagem
      await expect(values).toHaveText(['15', '40']);
      await expect(page.locator('#numeros')).not.toHaveClass(/st-run/);

      // Durante a contagem o valor em reais nunca fica abaixo de 2
      const seen = new Set<string>();
      await page.locator('#numeros').scrollIntoViewIfNeeded();
      for (let i = 0; i < 30; i++) {
        seen.add((await values.nth(1).textContent()) ?? '');
        await page.waitForTimeout(100);
      }
      expect([...seen]).not.toContain('1');
      await expect(values).toHaveText(['15', '40']);
    });
  });
});

import { FONT_DISPLAY } from "@/lib/site";

const FAQS = [
  {
    q: "Tem tarifa para sacar?",
    a: "O saque por Pix não tem tarifa. Se o saque por TED estiver liberado para você, cada TED custa R$ 2,00.",
  },
  {
    q: "Por que o Pix só vai para a chave do meu CPF?",
    a: "Por segurança: assim o dinheiro só cai numa conta no seu nome.",
  },
  {
    q: "Meu CPF não é chave Pix. E agora?",
    a: "Cadastre o seu CPF como chave Pix no aplicativo do seu banco e volte para sacar. Se o saque por TED estiver liberado para você, também dá para sacar por TED.",
  },
  {
    q: "Quanto tempo o dinheiro leva para cair?",
    a: "O Pix é processado na hora, mas pode levar alguns minutos. A TED é feita em dias úteis, das 6h30 às 16h30; pedida fora desse horário, sai no próximo dia útil.",
  },
  {
    q: "Esqueci a senha.",
    a: "Na tela de entrada, use Esqueci minha senha. O link que chega no seu e-mail vale por 30 minutos.",
  },
  {
    q: "Perdi o celular com o autenticador.",
    a: "Use um dos códigos de recuperação que você guardou ao criar o acesso, na opção Recuperar autenticador. Sem os códigos, procure a administração da empresa que premiou você.",
  },
  {
    q: "Prêmio tem Imposto de Renda?",
    a: "Tem. Prêmio em dinheiro é rendimento. Para saber como declarar, fale com o RH da empresa que premiou você.",
  },
];

export default function PerguntasRecebe() {
  return (
    <section aria-labelledby="duvidas-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 48 }}>
        <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1D4ED8" }}>Dúvidas</span>
          <h2 id="duvidas-t" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(32px, 3.8vw, 52px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}>Perguntas de quem recebe</h2>
        </div>
        <div style={{ flex: "2 1 560px", minWidth: 0, display: "flex", flexDirection: "column", borderTop: "1px solid #E2E8F0" }}>
          {FAQS.map(({ q, a }) => (
            <details key={q} className="faq" style={{ borderBottom: "1px solid #E2E8F0" }}>
              <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, minHeight: 68, padding: "16px 0", fontSize: 18, fontWeight: 700 }}>
                {q}
                <span className="faq-plus" aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg className="ic" width="18" height="18" viewBox="0 0 24 24" style={{ strokeWidth: 2.2 }}><path d="M12 5v14M5 12h14"></path></svg>
                </span>
              </summary>
              <p style={{ padding: "0 52px 22px 0", fontSize: 16, lineHeight: 1.65, color: "#475569" }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

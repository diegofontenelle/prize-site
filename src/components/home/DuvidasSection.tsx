import { FONT_DISPLAY, ROUTES } from "@/lib/site";
import MoreLink from "./MoreLink";

const FAQ = [
  {
    question: "E o Imposto de Renda?",
    answer: "O prêmio é rendimento de quem recebe e tem Imposto de Renda. A empresa precisa informar o pagamento; o seu contador orienta como fazer.",
  },
  {
    question: "Posso premiar quem não é empregado da minha empresa?",
    answer: "Pode. Mas a regra do art. 457 da CLT vale só para empregados: para outras pessoas, a tributação é diferente. Fale com o seu contador antes.",
  },
  {
    question: "Como a minha empresa começa?",
    answer: "Fale com a gente. Depois da conversa, mandamos a proposta. Com o contrato assinado, a Prize cria o acesso da empresa e o responsável recebe o convite por e-mail.",
  },
  {
    question: "Como coloco saldo na Prize?",
    answer: "Pelo painel da empresa, só por Pix. Você escolhe quantos Prizes quer adicionar e paga o Pix.",
  },
];

/** Dúvidas frequentes com <details> nativos (âncora #duvidas). */
export default function DuvidasSection() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-t" style={{ padding: "0 clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)", scrollMarginTop: 84 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 id="duvidas-t" style={{ textAlign: "center", fontFamily: FONT_DISPLAY, fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Dúvidas frequentes
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQ.map((item) => (
            <details key={item.question} className="faq" style={{ borderRadius: 24, background: "#F5F7FB", padding: "0 24px" }}>
              <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, minHeight: 72, padding: "14px 0", fontSize: 18, fontWeight: 800 }}>
                {item.question}
                <span
                  className="faq-plus"
                  aria-hidden="true"
                  style={{ width: 40, height: 40, borderRadius: 999, background: "#FFFFFF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                >
                  <svg className="ic" width="18" height="18" viewBox="0 0 24 24" style={{ strokeWidth: 2.4 }}>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p style={{ padding: "0 56px 22px 0", fontSize: 16, lineHeight: 1.65, color: "#475569" }}>{item.answer}</p>
            </details>
          ))}
        </div>
        <MoreLink href={ROUTES.duvidas} style={{ alignSelf: "center" }}>
          Ver todas as dúvidas
        </MoreLink>
      </div>
    </section>
  );
}

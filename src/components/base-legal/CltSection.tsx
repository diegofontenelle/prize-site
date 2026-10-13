import { sectionTitle } from "./styles";

const PARAGRAFOS = [
  {
    label: "CLT, art. 457, § 2º",
    quote:
      "“As importâncias, ainda que habituais, pagas a título de ajuda de custo, auxílio-alimentação, vedado seu pagamento em dinheiro, diárias para viagem, prêmios e abonos não integram a remuneração do empregado, não se incorporam ao contrato de trabalho e não constituem base de incidência de qualquer encargo trabalhista e previdenciário.”",
    meaning: "o prêmio não entra no salário e não é base de INSS nem de FGTS.",
  },
  {
    label: "CLT, art. 457, § 4º",
    quote:
      "“Consideram-se prêmios as liberalidades concedidas pelo empregador em forma de bens, serviços ou valor em dinheiro a empregado ou a grupo de empregados, em razão de desempenho superior ao ordinariamente esperado no exercício de suas atividades.”",
    meaning: "prêmio é o que a empresa decide dar a empregados por um desempenho acima do esperado.",
  },
];

export default function CltSection() {
  return (
    <section aria-labelledby="clt-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 id="clt-t" style={sectionTitle}>O que diz a CLT</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#475569", maxWidth: 540, textWrap: "pretty" }}>Dois parágrafos do art. 457 tratam do prêmio.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: 24 }}>
          {PARAGRAFOS.map((item) => (
            <figure key={item.label} className="quote" style={{ display: "flex", flexDirection: "column", gap: 18, padding: 32, borderRadius: 32, background: "#F5F7FB" }}>
              <span style={{ alignSelf: "flex-start", height: 36, padding: "0 16px", borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 14, fontWeight: 800, display: "flex", alignItems: "center" }}>{item.label}</span>
              <blockquote style={{ fontSize: 17, lineHeight: 1.7, color: "#0E1A33", paddingLeft: 18, borderLeft: "3px solid #2563EB", textWrap: "pretty" }}>{item.quote}</blockquote>
              <figcaption style={{ fontSize: 16, lineHeight: 1.6, color: "#475569", textWrap: "pretty" }}>
                <strong style={{ color: "#0E1A33" }}>Em outras palavras:</strong>
                {/* um só nó de texto (com o espaço), como no protótipo: evita diferença de kerning */}
                {` ${item.meaning}`}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

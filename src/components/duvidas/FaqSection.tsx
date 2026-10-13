import { FONT_DISPLAY } from "@/lib/site";
import type { FaqGroup } from "./faqs";

/** Um grupo de perguntas: título + lista de <details> nativos (sem JS). */
export default function FaqSection({ group }: { group: FaqGroup }) {
  return (
    <section id={group.id} aria-labelledby={group.titleId} style={{ scrollMarginTop: 96, display: "flex", flexDirection: "column", gap: 20 }}>
      <h2
        id={group.titleId}
        style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em", textWrap: "balance" }}
      >
        {group.title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {group.items.map((item) => (
          <details key={item.question} className="faq" open={item.open} style={{ borderRadius: 24, background: "#F5F7FB", padding: "0 24px" }}>
            <summary
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, minHeight: 72, padding: "14px 0", fontSize: 18, fontWeight: 800, lineHeight: 1.35 }}
            >
              {item.question}
              <span
                className="faq-plus"
                aria-hidden="true"
                style={{ width: 40, height: 40, borderRadius: 999, background: "#FFFFFF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              >
                <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.4 }}>
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p style={{ padding: "0 56px 22px 0", fontSize: 16, lineHeight: 1.65, color: "#475569", textWrap: "pretty" }}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

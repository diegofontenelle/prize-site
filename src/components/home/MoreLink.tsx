import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type MoreLinkProps = {
  href: string;
  children: ReactNode;
  /** Sobrescreve o estilo base (ex.: alignSelf, color). */
  style?: CSSProperties;
};

/** Link de texto com seta ("Ver como funciona →"). */
export default function MoreLink({ href, children, style }: MoreLinkProps) {
  return (
    <Link
      className="more"
      href={href}
      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, fontSize: 16, fontWeight: 800, color: "#1D4ED8", ...style }}
    >
      {children}
      <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

import type { CSSProperties } from "react";

type IconProps = { size: number; style?: CSSProperties };

/** Ícone "i" num círculo, usado nos avisos. */
export function InfoIcon({ size, style }: IconProps) {
  return (
    <svg className="ic" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={style}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

/** Visto (check) das listas. */
export function CheckIcon() {
  return (
    <svg className="ic" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.6 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/** Envelope do link de e-mail. */
export function MailIcon() {
  return (
    <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

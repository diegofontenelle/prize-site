"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { LOGIN_URL, MAIN_NAV, ROUTES } from "@/lib/site";
import { PrizeWordmark } from "./Brand";

export default function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", height: 76, display: "flex", alignItems: "center", gap: 24 }}>
        <Link href={ROUTES.home} aria-label="Prize — página inicial" style={{ display: "flex", alignItems: "center", height: 44, color: "#2563EB", flexShrink: 0 }}>
          <PrizeWordmark style={{ height: 30, width: 118, display: "block" }} />
        </Link>

        <nav className="dnav" aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: 2, minWidth: 0 }}>
          {MAIN_NAV.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                className="navlink"
                href={item.href}
                aria-current={current ? "page" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 44,
                  padding: "0 14px",
                  borderRadius: 999,
                  background: current ? "#EEF4FF" : undefined,
                  color: current || ("accent" in item && item.accent) ? "#1D4ED8" : "#0E1A33",
                  fontSize: 15,
                  fontWeight: current || ("accent" in item && item.accent) ? 700 : 600,
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <a className="pill pill-line" href={LOGIN_URL} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", height: 46, padding: "0 20px", borderRadius: 999, border: "2px solid #2563EB", color: "#1D4ED8", fontSize: 15, fontWeight: 700 }}>
            Entrar
          </a>
          <Link
            className="pill pill-blue hdr-cta"
            href={ROUTES.faleComAGente}
            aria-current={pathname === ROUTES.faleComAGente ? "page" : undefined}
            style={{ display: "flex", alignItems: "center", height: 46, padding: "0 22px", borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontSize: 15, fontWeight: 700, whiteSpace: "nowrap" }}
          >
            Fale com a gente
          </Link>

          <details ref={menuRef} className="mnav" style={{ position: "relative" }}>
            <summary aria-label="Abrir menu" style={{ width: 46, height: 46, borderRadius: 999, background: "#EEF4FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D4ED8" }}>
              <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <div style={{ position: "absolute", right: 0, top: 56, width: 300, maxWidth: "calc(100vw - 32px)", background: "#FFFFFF", borderRadius: 22, boxShadow: "0 20px 50px rgba(14, 26, 51, 0.18)", padding: 10, display: "flex", flexDirection: "column" }}>
              {MAIN_NAV.map((item) => {
                const current = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    className="mlink"
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={current ? "page" : undefined}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: 46,
                      padding: "0 14px",
                      borderRadius: 14,
                      background: current ? "#EEF4FF" : undefined,
                      color: current || ("accent" in item && item.accent) ? "#1D4ED8" : "#0E1A33",
                      fontSize: 16,
                      fontWeight: current || ("accent" in item && item.accent) ? 700 : 600,
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link className="pill pill-blue" href={ROUTES.faleComAGente} onClick={closeMenu} style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", height: 50, borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}>
                Fale com a gente
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import { Figtree, Quicksand } from "next/font/google";
import PlayOnView from "@/components/site/PlayOnView";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Prize · Premiação por desempenho, paga por Pix",
    template: "%s · Prize",
  },
  description: "Premie sua equipe por desempenho com Prizes que viram dinheiro na conta, por Pix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${quicksand.variable}`}>
      <body>
        <div className="site">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <PlayOnView />
      </body>
    </html>
  );
}

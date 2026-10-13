import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Páginas do site antigo apontam para a página nova equivalente.
  async redirects() {
    return [
      { source: "/sobre", destination: "/", permanent: true },
      { source: "/nossa-plataforma", destination: "/como-funciona", permanent: true },
      { source: "/como-usar", destination: "/como-funciona", permanent: true },
      { source: "/fale-conosco", destination: "/fale-com-a-gente", permanent: true },
    ];
  },
};

export default nextConfig;

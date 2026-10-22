/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: "/servizi", destination: "/competenze", permanent: true },
      {
        source: "/servizi-e-costi",
        destination: "/competenze",
        permanent: true,
      },
      { source: "/contact", destination: "/contatti", permanent: true },
      { source: "/chi-siamo", destination: "/studio", permanent: true },
      { source: "/info", destination: "/studio", permanent: true },
    ];
  },
};

export default nextConfig;

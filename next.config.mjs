/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: '/servizi', destination: '/competenze', permanent: true },
      { source: '/servizi-e-costi', destination: '/competenze', permanent: true },
      { source: '/studio', destination: '/', permanent: true },
      { source: '/chi-siamo', destination: '/', permanent: true },
      { source: '/info', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;

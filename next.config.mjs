/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso ajuda a Hostinger a servir o projeto Node de forma mais eficiente
  output: 'standalone',
  // Se você tiver imagens de domínios externos (como o da Leroy Merlin), precisa autorizar aqui
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.leroymerlin.com.br',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.tcdn.com.br',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      }
    ],
  },
};

export default nextConfig;

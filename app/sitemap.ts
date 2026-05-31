import { MetadataRoute } from 'next';
import { CITIES } from '@/lib/cities';
import { PRODUCTS } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://blocos-herrera.vercel.app';
  const baseUrl = rawBaseUrl.includes('olariaherrera.com.br')
    ? 'https://blocos-herrera.vercel.app'
    : rawBaseUrl;

  const cityUrls = CITIES.map((city) => ({
    url: `${baseUrl}/cidade/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const productUrls = PRODUCTS.map((product) => ({
    url: `${baseUrl}/produtos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blocos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/revestimentos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bordas-atermicas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...productUrls,
    ...cityUrls,
  ];
}

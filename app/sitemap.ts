import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://olariaherrera.com.br';
  const cities = [
    'campinas', 'hortolandia', 'sumare', 'paulinia', 
    'valinhos', 'vinhedo', 'monte-mor', 'nova-odessa'
  ];

  const cityUrls = cities.map(city => ({
    url: `${baseUrl}/cidade/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
    ...cityUrls,
  ];
}

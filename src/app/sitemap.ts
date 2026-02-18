import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dyfl.co.ke';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/leagues`,
      lastModified: new Date('2026-01-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}

import { MetadataRoute } from 'next';
import { BASE_URL } from './lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: [`${BASE_URL}/sitemap/0.xml`,
        `${BASE_URL}/sitemap/1.xml`,
        `${BASE_URL}/sitemap/2.xml`,
        `${BASE_URL}/sitemap/3.xml`,
    ],
  };
}

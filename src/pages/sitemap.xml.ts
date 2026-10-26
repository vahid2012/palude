import type { Endpoint } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site.ts';

export const GET: Endpoint = async () => {
  const base = SITE.url;

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/export/', priority: '0.9', changefreq: 'weekly' },
    { loc: '/blog/', priority: '0.9', changefreq: 'weekly' },
    { loc: '/about/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/certifications/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/shipping-and-logistics/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/request-a-quote/', priority: '0.9', changefreq: 'monthly' },
    { loc: '/faq/', priority: '0.7', changefreq: 'monthly' },
    { loc: '/contact/', priority: '0.8', changefreq: 'monthly' },
  ];

  const exportPosts = await getCollection('exports');
  const blogPosts = await getCollection('blog');

  const urls = [
    ...staticPages,
    ...exportPosts.map((p) => ({
      loc: `/export/${p.slug}/`,
      priority: '0.8',
      changefreq: 'monthly' as const,
      lastmod: (p.data.updatedDate ?? p.data.publishDate).toISOString(),
    })),
    ...blogPosts.map((p) => ({
      loc: `/blog/${p.slug}/`,
      priority: '0.7',
      changefreq: 'monthly' as const,
      lastmod: (p.data.updatedDate ?? p.data.publishDate).toISOString(),
    })),
  ];

  const lastmod = new Date('2026-10-25').toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${base}${u.loc}</loc>\n    <lastmod>${u.lastmod ?? lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

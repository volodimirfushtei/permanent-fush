
export const dynamic = 'force-static';
export const revalidate = 0;

export async function GET() {
    const now = new Date().toISOString();

    const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://permanent-fush.vercel.app/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://permanent-fush.vercel.app/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://permanent-fush.vercel.app/contacts</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Додай інші сторінки -->
</urlset>`;

    return new Response(content, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

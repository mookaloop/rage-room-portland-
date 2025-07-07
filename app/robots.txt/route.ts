export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://rageroomportland.co/sitemap.xml

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Allow important pages for SEO
Allow: /
Allow: /book
Allow: /how-it-works
Allow: /parties-events
Allow: /gift-cards`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}

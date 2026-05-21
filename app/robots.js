export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'], // Lu bisa tambahin path lain di sini
    },
    sitemap: 'https://affiliatekit.my.id/sitemap.xml',
  }
}
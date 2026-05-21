// app/layout.js
import './globals.css'; // Sesuaikan dengan path CSS lu

export const metadata = {
  title: 'AffiliateKit AI - Generator Caption & Komentar TikTok / Shopee Free',
  description: 'Tools gratis pembuat caption jualan kreatif (AIDA formula) dan generator gambar komentar tiruan TikTok ke PNG transparan untuk konten affiliate Anda.',
  icons: {
    icon: '/favicon.png', // Arahkan ke file yang lu buat
  },
  keywords: ['affiliate kit', 'caption generator tiktok', 'shopee affiliate tools', 'fake tiktok comment png', 'copywriting ai indonesia', 'buat caption fyp'],
  authors: [{ name: 'Andre Nurdiansyah' }],
  metadataBase: new URL('https://affiliatekit.my.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AffiliateKit AI - Generator Caption & Komentar TikTok Free',
    description: 'Bikin caption jualan FYP material dan download PNG komentar transparan dalam hitungan detik.',
    url: 'https://affiliatekit.my.id',
    siteName: 'AffiliateKit AI',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AffiliateKit AI - Generator Caption & Komentar TikTok Free',
    description: 'Tools gratis penunjang pejuang komisi affiliate di Indonesia.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
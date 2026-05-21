import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

// 1. Data Artikel Lokal berdasarkan Slug (Key harus pas dengan URL)
const ARTICLES_DATA = {
  'cara-buat-visual-hook-tiktok': {
    tag: "Strategi Konten",
    title: "Cara Membuat Visual Hook TikTok yang Bikin Penonton Berhenti Swipe",
    date: "Mei 2026",
    readTime: "4 Menit Baca",
    content: (
      <>
        <p className="font-semibold text-slate-200">
          Tiga detik pertama adalah penentu hidup mati konten video short atau TikTok Anda. Jika dalam 3 detik awal mata penonton tidak "terkunci", mereka akan langsung melakukan swipe. Di sinilah visual hook memegang peranan krusial.
        </p>
        <h2 className="text-lg sm:text-xl font-bold text-slate-100 pt-4">Apa Itu Visual Hook?</h2>
        <p>
          Visual hook adalah elemen grafis, teks, atau pergerakan instan di awal video yang langsung memancing rasa penasaran psikologis penonton tanpa mereka harus mendengarkan audio terlebih dahulu.
        </p>
        <h2 className="text-lg sm:text-xl font-bold text-slate-100 pt-4">Trik Menggunakan Komentar Transparan (Mockup)</h2>
        <p>
          Salah satu trik visual hook paling efektif yang digunakan oleh top kreator affiliate saat ini adalah menempelkan <span className="text-teal-400 font-semibold">asset box komentar tiruan berformat PNG transparan</span> di detik 0-3 video mereka.
        </p>
        <blockquote className="border-l-4 border-teal-500 bg-slate-950 p-4 rounded-xl text-xs sm:text-sm text-slate-400 my-4 italic">
          "Kenapa ini berhasil? Karena secara psikologis, netizen sangat suka membaca ruang komentar. Ketika ada kotak komentar muncul di layar, mata penonton otomatis akan berhenti memproses video dan fokus membaca teks komentar tersebut."
        </blockquote>
        <h2 className="text-lg sm:text-xl font-bold text-slate-100 pt-4">Langkah Optimasi di CapCut / Premiere:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gunakan generator komentar PNG transparan dari dashboard untuk membuat teks kontroversial atau pertanyaan yang memancing rasa penasaran (misal: <span className="italic text-slate-400">"Beneran sebagus itu kak? Mau beli tapi ragu..."</span>).</li>
          <li>Letakkan asset PNG tersebut sebagai overlay di bagian atas atau tengah video Anda.</li>
          <li>Batasi durasi kemunculannya hanya pada <span className="text-emerald-400 font-semibold">1.5 hingga 2.5 detik pertama</span> saja, lalu hilangkan menggunakan efek fade-out tipis agar penonton beralih fokus ke produk yang Anda review.</li>
        </ul>
      </>
    )
  },
  'formula-copywriting-aida-affiliate': {
    tag: "Copywriting",
    title: "Mengenal Formula AIDA: Rahasia Copywriting Caption Jualan Tinggi Konversi",
    date: "Mei 2026",
    readTime: "5 Menit Baca",
    content: (
      <>
        <p className="font-semibold text-slate-200">
          Banyak kreator pemula mengira jualan online di TikTok atau Instagram hanya modal pasang link. Padahal, tanpa penulisan caption (*copywriting*) yang memikat, audiens tidak akan tergerak untuk mengklik keranjang kuning Anda.
        </p>
        <h2 className="text-lg sm:text-xl font-bold text-slate-100 pt-4">Membongkar Struktur AIDA</h2>
        <p>
          Formula AIDA adalah pola psikologi penjualan tertua di dunia yang dimanfaatkan AI kami untuk membuat caption otomatis untuk Anda. Berikut adalah detail cara kerjanya:
        </p>
        <div className="space-y-3 my-4">
          <p><strong>1. Attention (Perhatian):</strong> Kalimat pembuka berupa kalimat tebal, pertanyaan retoris, atau fakta mengejutkan untuk menghentikan jempol audiens.</p>
          <p><strong>2. Interest (Ketertarikan):</strong> Membeberkan fakta menarik atau masalah krusial yang dihadapi target pasar (misal: benci bau badan tapi parfum lokal tidak tahan lama).</p>
          <p><strong>3. Desire (Keinginan):</strong> Menawarkan solusi instan melalui keunggulan produk Anda yang sudah dianalisis oleh generator AI.</p>
          <p><strong>4. Action (Tindakan):</strong> Ajakan bertindak (*Call to Action*) yang jelas seperti menunjuk arah keranjang kuning atau keranjang belanja.</p>
        </div>
      </>
    )
  }
};

// 2. Komponen Halaman Utama Menggunakan Dynamic Params `slug`
export default async function BlogPage({ params }) {
  // Tunggu resolusi params untuk mengambil slug
  const { slug } = await params;
  
  const article = ARTICLES_DATA[slug];

  // Jika slug tidak terdaftar di objek data, otomatis lempar ke halaman 404 Next.js bawaan
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        
        {/* Tombol Kembali */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Dashboard
        </Link>

        {/* Metadata Artikel */}
        <div className="space-y-4 mb-8 border-b border-slate-800 pb-6">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            {article.tag}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 font-medium">
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-slate-500" /> Admin AffiliateKit</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-500" /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-500" /> {article.readTime}</span>
          </div>
        </div>

        {/* Isi Konten Artikel */}
        <article className="prose prose-invert max-w-none text-slate-300 space-y-5 text-sm sm:text-base leading-relaxed">
          {article.content}
        </article>

      </div>
    </main>
  );
}
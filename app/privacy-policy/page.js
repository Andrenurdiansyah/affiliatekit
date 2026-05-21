'use client';

import React, { useState } from 'react';

// Catatan: Di Next.js App Router, jika memakai 'use client', metadata harus di-handle 
// berbeda atau dibiarkan di layout. Namun jika ingin tetap aman terindeks, 
// gunakan tag <title> di dalam return HTML seperti di bawah.

export default function PrivacyPolicy() {
  const [lang, setLang] = useState('en'); // 'en' atau 'id'

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300 font-sans py-12 px-4">
      {/* Pengganti metadata di Client Component agar tetap SEO */}
      <title>Privacy Policy - AffiliateKit AI</title>
      <meta name="description" content="Privacy Policy, data management guidelines, and cookie policy for AffiliateKit AI." />

      <div className="max-w-3xl mx-auto bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-800 backdrop-blur">
        
        {/* HEADER & TOMBOL SWITCH BAHASA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-100">
              {lang === 'en' ? 'Privacy Policy' : 'Kebijakan Privasi'}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'en' ? 'Last updated: May 2026' : 'Terakhir diperbarui: Mei 2026'}
            </p>
          </div>

          {/* Tombol Toggle Bahasa */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto text-xs font-semibold">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                lang === 'en' ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              English (EN)
            </button>
            <button
              onClick={() => setLang('id')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                lang === 'id' ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Indonesia (ID)
            </button>
          </div>
        </div>

        {/* KONTEN DUA BAHASA DINAMIS */}
        <div className="space-y-6 text-sm leading-relaxed">
          {lang === 'en' ? (
            /* ================= ENGLISH VERSION ================= */
            <>
              <p>
                At <strong>AffiliateKit AI</strong> (accessible from https://affiliatekit.my.id), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AffiliateKit AI and how we use it.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">1. Log Files & Analytics</h2>
              <p>
                AffiliateKit AI follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">2. Google DoubleClick DART Cookie</h2>
              <p>
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">3. Advertising Partners Privacy Policies</h2>
              <p>
                Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on AffiliateKit AI, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">4. Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </>
          ) : (
            /* ================= INDONESIAN VERSION ================= */
            <>
              <p>
                Di <strong>AffiliateKit AI</strong> (dapat diakses dari https://affiliatekit.my.id), salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh AffiliateKit AI serta bagaimana kami menggunakannya.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">1. File Log & Analitik</h2>
              <p>
                AffiliateKit AI mengikuti prosedur standar dalam menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), stempel tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Semua ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">2. Google DoubleClick DART Cookie</h2>
              <p>
                Google adalah salah satu vendor pihak ketiga di situs kami. Google menggunakan cookie, yang dikenal sebagai cookie DART, untuk menyajikan iklan kepada pengunjung situs kami berdasarkan kunjungan mereka ke situs kami dan situs lain di internet. Pengunjung dapat memilih untuk menolak penggunaan cookie DART dengan mengunjungi Kebijakan Privasi jaringan iklan dan konten Google.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">3. Kebijakan Privasi Mitra Iklan</h2>
              <p>
                Server iklan atau jaringan iklan pihak ketiga menggunakan teknologi seperti cookie, JavaScript, atau Web Beacon yang digunakan dalam masing-masing iklan dan tautan yang muncul di AffiliateKit AI, yang dikirim langsung ke browser pengguna. Mereka secara otomatis menerima alamat IP Anda ketika hal ini terjadi. Teknologi ini digunakan untuk mengukur efektivitas kampanye iklan mereka dan/atau untuk mempersonalisasi konten iklan yang Anda lihat di situs web yang Anda kunjungi.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">4. Persetujuan</h2>
              <p>
                Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui Syarat dan Ketentuannya.
              </p>
            </>
          )}
        </div>

        {/* BACK TO HOME LINK */}
        <div className="mt-8 pt-4 border-t border-slate-800 text-center">
          <a href="/" className="text-xs text-teal-400 hover:underline">
            ← {lang === 'en' ? 'Back to Tools' : 'Kembali ke Tools'}
          </a>
        </div>

      </div>
    </main>
  );
}
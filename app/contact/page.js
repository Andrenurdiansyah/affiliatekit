'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [lang, setLang] = useState('en'); // 'en' atau 'id'

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300 font-sans py-12 px-4">
      {/* Pengganti metadata di Client Component agar tetap terindeks SEO */}
      <title>Contact & About Us - AffiliateKit AI</title>
      <meta name="description" content="Get in touch with Andre Nurdiansyah, the creator of AffiliateKit AI." />

      <div className="max-w-2xl mx-auto bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-800 backdrop-blur text-center">
        
        {/* TOMBOL SWITCH BAHASA */}
        <div className="flex justify-end mb-6">
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
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

        {/* JUDUL */}
        <h1 className="text-2xl font-extrabold text-slate-100 mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
          {lang === 'en' ? 'About & Contact Us' : 'Tentang & Kontak Kami'}
        </h1>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>

        {/* KONTEN UTAMA */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-300 max-w-md mx-auto">
          {lang === 'en' ? (
            /* ================= ENGLISH VERSION ================= */
            <>
              <p>
                <strong>AffiliateKit AI</strong> is a free web-based utility created to empower digital creators, video editors, and affiliate marketers in Indonesia to build engaging content without friction.
              </p>
              <p>
                Developed and maintained by <strong>Andre Nurdiansyah</strong>, this tool aims to provide cutting-edge, high-fidelity productivity helpers entirely for free.
              </p>
            </>
          ) : (
            /* ================= INDONESIAN VERSION ================= */
            <>
              <p>
                <strong>AffiliateKit AI</strong> adalah sebuah utilitas berbasis web gratis yang diciptakan untuk membantu para kreator digital, editor video, dan pelaku affiliate marketing di Indonesia dalam membuat konten menarik tanpa hambatan.
              </p>
              <p>
                Dikembangkan dan dikelola langsung oleh <strong>Andre Nurdiansyah</strong>, alat ini bertujuan untuk menyediakan fitur produktivitas berkualitas tinggi dan responsif secara gratis.
              </p>
            </>
          )}
          
          {/* BAGIAN KONTAK (SAMA UNTUK KEDUA BAHASA) */}
          <div className="pt-6 border-t border-slate-800/60 mt-6">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
              {lang === 'en' ? 'Business & Support Inquiries' : 'Pertanyaan Bisnis & Dukungan'}
            </p>
            <p className="text-base font-mono text-teal-400 mt-1 selection:bg-teal-500/30 break-all">
              andrenurdiansyah92@gmail.com
            </p>
            <p className="text-xs text-slate-500 mt-2">
              {lang === 'en' 
                ? 'We usually respond within 24–48 business hours.' 
                : 'Kami biasanya merespons dalam waktu 24–48 jam kerja.'}
            </p>
          </div>
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
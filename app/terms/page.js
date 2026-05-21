'use client';

import React, { useState } from 'react';

export default function TermsOfService() {
  const [lang, setLang] = useState('en'); // 'en' atau 'id'

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300 font-sans py-12 px-4">
      {/* Pengganti metadata di Client Component agar tetap SEO */}
      <title>Terms of Service - AffiliateKit AI</title>
      <meta name="description" content="Terms and Conditions of use for AffiliateKit AI tools and services." />

      <div className="max-w-3xl mx-auto bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-800 backdrop-blur">
        
        {/* HEADER & TOMBOL SWITCH BAHASA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-100">
              {lang === 'en' ? 'Terms of Service' : 'Ketentuan Layanan'}
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
                Welcome to <strong>AffiliateKit AI</strong>. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">1. Use of Tools</h2>
              <p>
                The tools provided on this website—specifically the AI TikTok/Shopee Caption Generator and the Fake TikTok Comment Generator—are intended for creative brainstorming and promotional content assistance for affiliate marketers. Users are solely responsible for the final marketing copy and generated images they deploy on social media networks.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">2. Disclaimer</h2>
              <p>
                The materials on AffiliateKit AI are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, or fitness for a particular purpose.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">3. Limitations of Liability</h2>
              <p>
                In no event shall AffiliateKit AI or its owners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the tools on this website.
              </p>
            </>
          ) : (
            /* ================= INDONESIAN VERSION ================= */
            <>
              <p>
                Selamat datang di <strong>AffiliateKit AI</strong>. Dengan mengakses situs web ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan penggunaan berikut. Jika Anda tidak setuju dengan bagian apa pun dari ketentuan ini, mohon untuk tidak menggunakan situs web kami.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">1. Penggunaan Layanan (Tools)</h2>
              <p>
                Layanan yang disediakan di situs web ini—khususnya *AI TikTok/Shopee Caption Generator* dan *Fake TikTok Comment Generator*—ditujukan untuk membantu proses penulisan kreatif (brainstorming) dan pembuatan konten promosi bagi para pelaku affiliate marketing. Pengguna bertanggung jawab penuh atas salinan pemasaran akhir (copywriting) serta aset gambar yang mereka bagikan ke jejaring sosial media.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">2. Penyangalan (Disclaimer)</h2>
              <p>
                Semua materi dan alat di AffiliateKit AI disediakan atas dasar 'sebagaimana adanya'. Kami tidak memberikan jaminan apa pun, baik yang tersurat maupun tersirat, dan dengan ini menolak serta menegasikan semua jaminan lainnya, termasuk namun tidak terbatas pada, jaminan tersirat tentang kelayakan jual, atau kesesuaian untuk tujuan tertentu.
              </p>

              <h2 className="text-lg font-bold text-slate-100 mt-4">3. Batasan Tanggung Jawab</h2>
              <p>
                Dalam hal apa pun, AffiliateKit AI atau pemiliknya tidak bertanggung jawab atas kerugian apa pun (termasuk, tanpa batasan, kerugian atas hilangnya data atau keuntungan, atau akibat gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan alat di situs web ini.
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
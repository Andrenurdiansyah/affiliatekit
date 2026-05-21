'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Download, MessageSquare, Copy, Check, Heart, HelpCircle, BookOpen, Globe } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import Link from 'next/link';


export default function Home() {
  const [lang, setLang] = useState('id');

  // Caption state
  const [productName, setProductName] = useState('');
  const [captionResult, setCaptionResult] = useState('');
  const [loadingCaption, setLoadingCaption] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Comment Box state
  const [platform, setPlatform] = useState('tiktok');
  const [username, setUsername] = useState('pencari_diskon');
  const [commentText, setCommentText] = useState('Kak, spill dong beneran produk ini sebagus itu? Mau beli tapi ragu bgt..');
  const [isDownloading, setIsDownloading] = useState(false);
  const commentRef = useRef(null);
  const [countdown, setCountdown] = useState(5);

  // Fake Chat state
  const [chatPlatform, setChatPlatform] = useState('wa');
  const [contactName, setContactName] = useState('Nadia Aulia');
  const [myName, setMyName] = useState('Aku');
  const [chatMessages, setChatMessages] = useState([
    { who: 'them', text: 'Kak, produk ini beneran bagus atau lebay reviewnya? 😅' },
    { who: 'me', text: 'Beneran bagus banget! Gue udah 3 bulan pakai, gak nyesel sama sekali 💯' },
    { who: 'them', text: 'Oke deh, langsung order sekarang! Link-nya boleh dong?' },
    { who: 'me', text: 'Ini ya, udah gue sisipin link di bio juga!' },
  ]);
  const [isChatDownloading, setIsChatDownloading] = useState(false);
  const [chatCountdown, setChatCountdown] = useState(5);
  const chatRef = useRef(null);

  const dict = {
    id: {
      freeTools: "100% Free Tools",
      captionTitle: "AI TikTok , Instagram & Shopee Caption Generator",
      labelProduct: "Nama Produk / Topik Jualan",
      placeholderProduct: "Contoh: Parfum Pria Wangi Vanilla Kalem Tahan 12 Jam",
      btnLoadingCaption: "Memikirkan Copywriting Terbaik...",
      btnGenerateCaption: "Generate Caption FYP",
      errAI: "Waduh, ada masalah koneksi dengan AI. Coba lagi, bro.",
      errRequest: "Gagal memproses request.",
      errDownload: "Waduh, gagal download gambar. Coba lagi, bro.",
      tipTitle: "Tips Konten FYP Material",
      tipDesc: "Gunakan hasil AI Caption Generator di atas bersamaan dengan template visual komentar. Kombinasi copywriting formula AIDA dan visual hook terbukti meningkatkan retensi penonton hingga 40% lebih lama!",
      commentTitle: "Fake Comment Box To PNG Transparan",
      labelUsername: "Username Samaran",
      labelComment: "Isi Komentar",
      placeholderComment: "Tulis komentar...",
      previewTitle: "PREVIEW RENDER (PNG TRANSPARAN)",
      commentTime: "1j lalu",
      commentReply: "Balas",
      commentTranslate: "Lihat terjemahan",
      labelPlatform: "Pilih Platform Mockup",
      tipDownload: "Tips: Klik \"Download PNG Transparan\", timer 5 detik berjalan untuk memastikan seluruh font termuat sempurna demi hasil render HD.",
      btnDownloading: "Menyiapkan Gambar",
      btnDownload: "Download PNG Transparan",
      // Fake Chat
      chatTitle: "Fake Chat WA, IG & TikTok DM To PNG",
      chatLabelPlatform: "Pilih Platform Chat",
      chatLabelContact: "Nama Kontak / Akun Lawan",
      chatLabelMyName: "Nama Kamu",
      chatLabelMessages: "Pesan",
      chatBtnAdd: "+ Tambah Pesan",
      chatSideMe: "Aku (kanan)",
      chatSideThem: "Mereka (kiri)",
      chatPreviewTitle: "PREVIEW RENDER (PNG TRANSPARAN)",
      chatTipDownload: "Tips: Klik download, timer 5 detik untuk memastikan render sempurna.",
      chatBtnDownload: "Download PNG Transparan",
      chatBtnDownloading: "Menyiapkan Gambar",
      guideTitle: "Panduan Optimasi Konten TikTok Affiliate",
      guideP1: "Menggunakan generator caption TikTok berbasis AI membantu Anda menyusun struktur promosi yang terbukti menaikkan rasio konversi klik keranjang kuning. Kerangka tulisan yang dihasilkan otomatis mengadopsi formula AIDA (Attention, Interest, Desire, Action) yang disukai oleh algoritma FYP.",
      guideQ1: "Mengapa Harus Memakai Komentar Tiruan PNG?",
      guideP2: "Dalam dunia konten video affiliate (baik TikTok Shorts maupun Reels), trik visual memegang peranan besar. Menempelkan asset gambar komentar TikTok transparan di awal video berperan sebagai pancingan psikologis (hook konten) agar penonton tidak langsung melakukan swipe dalam 3 detik pertama.",
      faqTitle: "Frequently Asked Questions",
      faqQ1: "Apakah tools ini benar-benar gratis?",
      faqA1: "Yes! 100% gratis tanpa perlu daftar akun atau langganan apa pun.",
      faqQ2: "Kenapa hasil download gambarnya transparan?",
      faqA2: "Agar Anda bisa langsung menempelkannya di atas video capcut/premiere sebagai visual hook tanpa perlu proses masking lagi.",
      faqQ3: "Bagaimana cara kerja AI Caption?",
      faqA3: "AI menganalisis nama produk lu dan menyusun kalimat copywriting berbasis tren FYP terkini.",
      footerDesc: "Membantu pejuang komisi affiliate tanpa ribet mikir.",
      articleTitle: "Artikel Edukasi Affiliate",
      art1: "Cara Membuat Visual Hook TikTok yang Bikin Penonton Berhenti Swipe",
      art2: "Mengenal Formula AIDA: Rahasia Copywriting Caption Jualan Tinggi Konversi"
    },
    en: {
      freeTools: "100% Free Tools",
      captionTitle: "AI TikTok , Instagram & Shopee Caption Generator",
      labelProduct: "Product Name / Sales Topic",
      placeholderProduct: "E.g., Long-lasting Warm Vanilla Men's Perfume 12 Hours",
      btnLoadingCaption: "Thinking of the Best Copywriting...",
      btnGenerateCaption: "Generate FYP Caption",
      errAI: "Oops, there's a connection issue with the AI. Try again, bro.",
      errRequest: "Failed to process request.",
      errDownload: "Oops, failed to download image. Please try again.",
      tipTitle: "FYP Material Content Tips",
      tipDesc: "Use the AI Caption Generator results above together with the visual comment template. The combination of the AIDA copywriting formula and visual hooks is proven to increase viewer retention by up to 40% longer!",
      commentTitle: "Fake Comment Box to Transparent PNG Generator",
      labelUsername: "Fake Username",
      labelComment: "Comment Content",
      placeholderComment: "Write a comment...",
      previewTitle: "PREVIEW RENDER (TRANSPARENT PNG)",
      commentTime: "1h ago",
      commentReply: "Reply",
      commentTranslate: "See translation",
      labelPlatform: "Select Mockup Platform",
      tipDownload: "Tips: Click \"Download Transparent PNG\", a 5-second timer runs to ensure all fonts are fully loaded for HD rendering results.",
      btnDownloading: "Preparing Image",
      btnDownload: "Download Transparent PNG",
      // Fake Chat
      chatTitle: "Fake Chat Generator WA, IG & TikTok DM To PNG",
      chatLabelPlatform: "Select Chat Platform",
      chatLabelContact: "Contact / Account Name",
      chatLabelMyName: "Your Name",
      chatLabelMessages: "Messages",
      chatBtnAdd: "+ Add Message",
      chatSideMe: "Me (right)",
      chatSideThem: "Them (left)",
      chatPreviewTitle: "PREVIEW RENDER (TRANSPARENT PNG)",
      chatTipDownload: "Tips: Click download, 5-second timer ensures perfect render.",
      chatBtnDownload: "Download Transparent PNG",
      chatBtnDownloading: "Preparing Image",
      guideTitle: "TikTok Affiliate Content Optimization Guide",
      guideP1: "Using an AI-powered TikTok caption generator helps you structure promotional content that is proven to boost yellow basket click conversion rates. The generated copy automatically adopts the AIDA (Attention, Interest, Desire, Action) framework favored by the FYP algorithm.",
      guideQ1: "Why Use Mockup PNG Comments?",
      guideP2: "In the world of affiliate video content (both TikTok Shorts and Reels), visual tricks play a massive role. Overlaying a transparent TikTok comment image asset at the beginning of your video acts as a psychological trigger (content hook) so viewers don't instantly swipe away in the first 3 seconds.",
      faqTitle: "Frequently Asked Questions",
      faqQ1: "Is this tool completely free?",
      faqA1: "Yes! 100% free with no account registration or subscription required.",
      faqQ2: "Why is the downloaded image transparent?",
      faqA2: "So you can directly overlay it on top of your CapCut/Premiere videos as a visual hook without needing any masking process.",
      faqQ3: "How does the AI Caption work?",
      faqA3: "The AI analyzes your product name and crafts copywriting lines based on the latest FYP trends.",
      footerDesc: "Helping affiliate commission warriors without the brain-drain.",
      articleTitle: "Affiliate Education Articles",
      art1: "How to Create TikTok Visual Hooks That Stop the Swipe",
      art2: "Understanding the AIDA Formula: Secrets to High-Conversion Sales Captions"
    }
  };

  const t = dict[lang];

  // ─── Caption Generator ───────────────────────────────────────────────────────
  const handleGenerateCaption = async (e) => {
    e.preventDefault();
    if (!productName) return;
    setLoadingCaption(true);
    setCaptionResult('');
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName, language: lang }),
      });
      const data = await response.json();
      setCaptionResult(data.result || t.errAI);
    } catch {
      setCaptionResult(t.errRequest);
    } finally {
      setLoadingCaption(false);
    }
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // ─── Comment Box Download ────────────────────────────────────────────────────
  const downloadCommentAsPNG = async () => {
    const element = commentRef.current;
    if (!element || isDownloading) return;
    setIsDownloading(true);
    let currentSeconds = 5;
    setCountdown(currentSeconds);
    const timer = setInterval(async () => {
      currentSeconds--;
      setCountdown(currentSeconds);
      if (currentSeconds <= 0) {
        clearInterval(timer);
        try {
          const dataUrl = await htmlToImage.toPng(element, {
            quality: 1.0, pixelRatio: 3, skipFonts: true,
            style: { colorScheme: 'normal', transform: 'scale(1)' }
          });
          const link = document.createElement('a');
          link.download = `komentar-${platform}-${username}-${Date.now()}.png`;
          link.href = dataUrl;
          link.click();
        } catch {
          alert(t.errDownload);
        } finally {
          setIsDownloading(false);
        }
      }
    }, 1000);
  };

  // ─── Fake Chat Helpers ───────────────────────────────────────────────────────
  const getTime = (i) => {
    const base = 14 * 60 + 20 + i * 2;
    const h = Math.floor(base / 60) % 24;
    const min = base % 60;
    return `${String(h).padStart(2, '0')}.${String(min).padStart(2, '0')}`;
  };

  const addChatMessage = () => {
    setChatMessages(prev => [...prev, { who: 'them', text: '' }]);
  };

  const updateChatMessage = (index, field, value) => {
    setChatMessages(prev => prev.map((m, i) => i === index ? { ...m, [field]: value } : m));
  };

  const deleteChatMessage = (index) => {
    setChatMessages(prev => prev.filter((_, i) => i !== index));
  };

  // ─── Fake Chat Download ──────────────────────────────────────────────────────
  const downloadChatAsPNG = async () => {
    const element = chatRef.current;
    if (!element || isChatDownloading) return;
    setIsChatDownloading(true);
    let currentSeconds = 5;
    setChatCountdown(currentSeconds);
    const timer = setInterval(async () => {
      currentSeconds--;
      setChatCountdown(currentSeconds);
      if (currentSeconds <= 0) {
        clearInterval(timer);
        try {
          const dataUrl = await htmlToImage.toPng(element, {
            quality: 1.0, pixelRatio: 3, skipFonts: true,
            style: { colorScheme: 'normal', transform: 'scale(1)' }
          });
          const link = document.createElement('a');
          link.download = `fake-chat-${chatPlatform}-${Date.now()}.png`;
          link.href = dataUrl;
          link.click();
        } catch {
          alert(t.errDownload);
        } finally {
          setIsChatDownloading(false);
        }
      }
    }, 1000);
  };

  // ─── WhatsApp Render ─────────────────────────────────────────────────────────
  const WAChatBubble = ({ msg, index }) => {
    const isMe = msg.who === 'me';
    return (
      <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-1 px-2`}>
        <div
          style={{
            background: isMe ? '#d9fdd3' : '#ffffff',
            borderRadius: isMe ? '10px 2px 10px 10px' : '2px 10px 10px 10px',
            boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)',
            maxWidth: '72%',
            minWidth: '80px',
            padding: '6px 9px 20px 9px',
            position: 'relative',
          }}
        >
          <p style={{ fontSize: '13.6px', color: '#111', lineHeight: '1.45', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
            {msg.text || '...'}
          </p>
          <div style={{ position: 'absolute', bottom: '4px', right: '8px', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <span style={{ fontSize: '10px', color: '#667781' }}>{getTime(index)}</span>
            {isMe && (
              <svg width="15" height="11" viewBox="0 0 16 11" fill="none">
                <path d="M1.5 5.5L5.5 9.5L14.5 1.5" stroke="#53bdeb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 9.5L10 5M4 5.5L8 9.5" stroke="#53bdeb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
      </div>
    );
  };

  const WAChat = () => (
    <div style={{ background: '#e5ddd5', fontFamily: "-apple-system, 'Helvetica Neue', sans-serif", width: '100%' }}>
      {/* Header */}
      <div style={{ background: '#128c7e', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, color: '#fff', flexShrink: 0 }}>
          {contactName[0]?.toUpperCase() || 'A'}
        </div>
        <div>
          <div style={{ fontSize: 15, color: '#fff', fontWeight: 500 }}>{contactName}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)' }}>online</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 18 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2"><circle cx="12" cy="5" r="1" fill="rgba(255,255,255,0.85)"/><circle cx="12" cy="12" r="1" fill="rgba(255,255,255,0.85)"/><circle cx="12" cy="19" r="1" fill="rgba(255,255,255,0.85)"/></svg>
        </div>
      </div>
      {/* Date badge */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
        <span style={{ background: 'rgba(255,255,255,0.75)', borderRadius: 8, padding: '3px 10px', fontSize: 11, color: '#667781' }}>Hari ini</span>
      </div>
      {/* Messages */}
      <div style={{ paddingBottom: 12 }}>
        {chatMessages.map((msg, i) => (
          <WAChatBubble key={i} msg={msg} index={i} />
        ))}
      </div>
      {/* Input bar */}
      <div style={{ background: '#f0f2f5', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 22, padding: '9px 14px', fontSize: 13, color: '#aaa' }}>
          {lang === 'id' ? 'Ketik pesan' : 'Type a message'}
        </div>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#128c7e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  );

  // ─── Instagram DM Render ─────────────────────────────────────────────────────
  const IGChat = () => (
    <div style={{ background: '#fff', fontFamily: "-apple-system, 'Helvetica Neue', sans-serif", width: '100%' }}>
      <div style={{ borderBottom: '0.5px solid #dbdbdb', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, color: '#fff', flexShrink: 0 }}>
          {contactName[0]?.toUpperCase() || 'A'}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, color: '#000', fontWeight: 600 }}>{contactName}</div>
          <div style={{ fontSize: 11, color: '#8e8e8e' }}>Active now</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.21 9.11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>
      <div style={{ padding: '12px 0 14px' }}>
        {chatMessages.map((msg, i) => {
          const isMe = msg.who === 'me';
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-end', gap: 8, justifyContent: isMe ? 'flex-end' : 'flex-start', marginBottom: 4, padding: '0 12px' }}>
              {!isMe && (
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {contactName[0]?.toUpperCase() || 'A'}
                </div>
              )}
              <div style={{
                background: isMe ? '#3797f0' : '#efefef',
                color: isMe ? '#fff' : '#000',
                borderRadius: isMe ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                padding: '9px 14px',
                maxWidth: '68%',
                fontSize: 14,
                lineHeight: 1.45,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}>
                {msg.text || '...'}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ borderTop: '0.5px solid #dbdbdb', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        <div style={{ flex: 1, background: '#efefef', borderRadius: 22, padding: '8px 14px', fontSize: 13, color: '#8e8e8e' }}>
          {lang === 'id' ? 'Kirim pesan...' : 'Message...'}
        </div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#3797f0"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
      </div>
    </div>
  );

  // ─── TikTok DM Render ────────────────────────────────────────────────────────
  const TTChat = () => (
    <div style={{ background: '#161823', fontFamily: "-apple-system, 'Helvetica Neue', sans-serif", width: '100%' }}>
      <div style={{ borderBottom: '0.5px solid #2f3040', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2f3040', border: '1.5px solid #fe2c55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, color: '#fe2c55', flexShrink: 0 }}>
          {contactName[0]?.toUpperCase() || 'A'}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, color: '#fff', fontWeight: 600 }}>{contactName}</div>
          <div style={{ fontSize: 11, color: '#8e8e8e' }}>@{contactName.toLowerCase().replace(/\s+/g, '_')}</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
      </div>
      <div style={{ padding: '14px 0' }}>
        {chatMessages.map((msg, i) => {
          const isMe = msg.who === 'me';
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-end', gap: 8, justifyContent: isMe ? 'flex-end' : 'flex-start', marginBottom: 4, padding: '0 12px' }}>
              {!isMe && (
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#2f3040', border: '1.5px solid #fe2c55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fe2c55', flexShrink: 0 }}>
                  {contactName[0]?.toUpperCase() || 'A'}
                </div>
              )}
              <div style={{
                background: isMe ? '#fe2c55' : '#2f3040',
                color: '#fff',
                borderRadius: isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                padding: '9px 14px',
                maxWidth: '68%',
                fontSize: 14,
                lineHeight: 1.45,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}>
                {msg.text || '...'}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ borderTop: '0.5px solid #2f3040', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, background: '#2f3040', borderRadius: 22, padding: '8px 14px', fontSize: 13, color: '#555' }}>
          {lang === 'id' ? 'Kirim pesan...' : 'Send a message...'}
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fe2c55"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-teal-500 to-emerald-500 p-2 rounded-xl text-slate-950 font-bold tracking-wider text-sm shadow-lg shadow-teal-500/20">
              ⚡ AFF
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              AffiliateKit AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-teal-400 px-3 py-1.5 rounded-xl border border-slate-700 transition-colors font-semibold"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <span className="hidden sm:inline text-xs bg-slate-800 text-slate-400 px-3 py-1.5 rounded-full border border-slate-700 font-medium">
              {t.freeTools}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ── KOLOM KIRI & TENGAH ─────────────────────────────────────────── */}
        <div className="md:col-span-2 space-y-8">

          {/* ── FITUR 1: CAPTION GENERATOR ─────────────────────────────────── */}
          <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-800 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-teal-400" />
              <h1 className="text-lg font-bold">{t.captionTitle}</h1>
            </div>
            <form onSubmit={handleGenerateCaption} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{t.labelProduct}</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder={t.placeholderProduct}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loadingCaption}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg shadow-teal-500/10 active:scale-[0.99] transition-all disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {loadingCaption ? t.btnLoadingCaption : t.btnGenerateCaption}
              </button>
            </form>
            {captionResult && (
              <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800 divide-y divide-slate-800">
                {captionResult.split(/\n(?=\d\.)/).map((item, index) => (
                  <div key={index} className="py-4 first:pt-0 last:pb-0 flex justify-between items-start gap-4 group">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-slate-300 leading-relaxed flex-1">{item.trim()}</pre>
                    <button
                      onClick={() => copyToClipboard(item.trim(), index)}
                      className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-400 transition-colors shrink-0"
                    >
                      {copiedIndex === index ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── BANNER INFO ─────────────────────────────────────────────────── */}
          <div className="bg-gradient-to-r from-slate-850 to-slate-800 p-5 border border-slate-800 rounded-xl flex items-center gap-4 shadow-inner">
            <div className="hidden sm:flex bg-teal-500/10 p-3 rounded-lg text-teal-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">{t.tipTitle}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.tipDesc}</p>
            </div>
          </div>

          {/* ── FITUR 2: COMMENT BOX GENERATOR ─────────────────────────────── */}
          <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-800 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold">{t.commentTitle}</h2>
            </div>

            {/* Platform tabs */}
            <div className="mb-6">
              <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{t.labelPlatform}</label>
              <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                <button type="button" onClick={() => { setPlatform('tiktok'); setUsername('pencari_diskon'); }}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${platform === 'tiktok' ? 'bg-zinc-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200'}`}>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.02 1.59 4.23.95 1.2 2.27 2 3.75 2.28v3.91c-1.39-.06-2.74-.61-3.83-1.49-1.01-.82-1.72-1.97-2.02-3.24v8.28c.07 1.94-.49 3.87-1.58 5.43-1.42 2.03-3.79 3.19-6.26 3.1-2.4-.08-4.63-1.33-5.83-3.41-1.35-2.34-1.35-5.26 0-7.6 1.2-2.08 3.43-3.33 5.83-3.41.34-.01.68.01 1.02.04v3.97c-.36-.05-.73-.06-1.09-.02-1.12.12-2.12.77-2.67 1.76-.66 1.18-.58 2.68.21 3.78.71.99 1.89 1.52 3.11 1.4 1.26-.13 2.33-1.07 2.58-2.31.06-.34.08-.69.08-1.04V.02z"/></svg>
                  TikTok
                </button>
                <button type="button" onClick={() => { setPlatform('instagram'); setUsername('racun.aesthetic'); }}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${platform === 'instagram' ? 'bg-zinc-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200'}`}>
                  <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </button>
                <button type="button" onClick={() => { setPlatform('shopee'); setUsername('shopee_haul_id'); }}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${platform === 'shopee' ? 'bg-zinc-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200'}`}>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.782 8.932a.669.669 0 00-.543-.28h-3.328a4.137 4.137 0 00-7.822 0H4.763a.669.669 0 00-.544.28.694.694 0 00-.083.606l1.967 7.7a2.766 2.766 0 002.684 2.08h6.426a2.766 2.766 0 002.684-2.08l1.968-7.7a.695.695 0 00-.082-.606zM12 6.136a2.148 2.148 0 012.046 1.516H9.954A2.148 2.148 0 0112 6.136z"/></svg>
                  Shopee
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{t.labelUsername}</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{t.labelComment}</label>
                  <textarea rows={3} value={commentText} onChange={(e) => setCommentText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all text-sm resize-none" />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-600 font-mono mb-2">{t.previewTitle}</p>
                <div ref={commentRef} className="p-4 bg-black text-white rounded-lg max-w-[340px] w-full flex items-start gap-3 select-none"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-bold text-xs text-zinc-300 uppercase ${
                    platform === 'tiktok' ? 'bg-zinc-850 border border-zinc-700' :
                    platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600' : 'bg-orange-600'
                  }`}>
                    {username[0] || 'A'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {platform === 'tiktok' && (<><span className="text-xs font-semibold text-zinc-400 truncate">@{username}</span><span className="text-[10px] text-zinc-600 shrink-0">· {t.commentTime}</span></>)}
                      {platform === 'instagram' && (<><span className="text-xs font-semibold text-zinc-200 truncate">{username}</span><span className="text-[10px] text-zinc-500 shrink-0">{lang === 'id' ? '1 jam' : '1h'}</span></>)}
                      {platform === 'shopee' && (<><span className="text-xs font-semibold text-orange-400 truncate">{username}</span><span className="text-[9px] bg-orange-500/20 text-orange-400 px-1 rounded border border-orange-500/30 shrink-0 scale-90">Pembeli</span></>)}
                    </div>
                    <p className="text-sm text-zinc-100 leading-snug mt-0.5 break-words font-normal">{commentText || t.placeholderComment}</p>
                    <div className="flex items-center gap-4 mt-2 text-[11px] text-zinc-500 font-medium">
                      <span>{t.commentReply}</span>
                      {platform === 'tiktok' && <span>{t.commentTranslate}</span>}
                      {platform === 'instagram' && <span>{lang === 'id' ? 'Kirim' : 'Send'}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-zinc-600 pt-1">
                    <Heart className={`w-3.5 h-3.5 ${platform === 'shopee' ? 'hidden' : 'block'} fill-none stroke-[2.5]`} />
                    <span className={`text-[10px] mt-0.5 ${platform === 'shopee' ? 'hidden' : 'block'}`}>12</span>
                  </div>
                </div>
                <p className="w-full mt-4 text-[11px] text-slate-500 text-center leading-normal bg-slate-900/50 py-2 px-3 rounded-lg border border-slate-800/60">{t.tipDownload}</p>
                <button onClick={downloadCommentAsPNG} disabled={isDownloading}
                  className="mt-2 w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform disabled:opacity-50">
                  <Download className="w-4 h-4" />
                  {isDownloading ? `${t.btnDownloading} (${countdown}s)...` : t.btnDownload}
                </button>
              </div>
            </div>
          </section>

          {/* ── FITUR 3: FAKE CHAT GENERATOR ───────────────────────────────── */}
          <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-800 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-pink-400" />
              <h2 className="text-lg font-bold">{t.chatTitle}</h2>
            </div>

            {/* Platform Tabs */}
            <div className="mb-5">
              <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{t.chatLabelPlatform}</label>
              <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                {/* WhatsApp */}
                <button type="button" onClick={() => setChatPlatform('wa')}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${chatPlatform === 'wa' ? 'bg-zinc-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200'}`}>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.37A9.963 9.963 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.313 14.547c-.234.656-1.37 1.258-1.867 1.305-.48.047-.97.234-3.243-.676-2.734-1.094-4.492-3.886-4.625-4.07-.133-.183-1.078-1.43-1.078-2.73 0-1.3.68-1.937.93-2.2.25-.265.546-.33.73-.33.183 0 .366 0 .526.008.17.008.398-.064.625.477.234.555.796 1.926.867 2.063.07.14.117.305.023.488-.094.184-.14.305-.28.46-.14.156-.296.35-.422.47-.14.133-.285.277-.122.543.164.266.726 1.196 1.557 1.937 1.07.953 1.976 1.25 2.242 1.39.265.14.421.117.578-.07.156-.188.672-.78.852-1.05.18-.268.36-.22.602-.132.24.086 1.528.72 1.793.852.265.133.44.196.507.305.07.11.07.633-.164 1.29z"/></svg>
                  WhatsApp
                </button>
                {/* Instagram */}
                <button type="button" onClick={() => setChatPlatform('ig')}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${chatPlatform === 'ig' ? 'bg-zinc-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200'}`}>
                  <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </button>
                {/* TikTok */}
                <button type="button" onClick={() => setChatPlatform('tt')}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${chatPlatform === 'tt' ? 'bg-zinc-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200'}`}>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.02 1.59 4.23.95 1.2 2.27 2 3.75 2.28v3.91c-1.39-.06-2.74-.61-3.83-1.49-1.01-.82-1.72-1.97-2.02-3.24v8.28c.07 1.94-.49 3.87-1.58 5.43-1.42 2.03-3.79 3.19-6.26 3.1-2.4-.08-4.63-1.33-5.83-3.41-1.35-2.34-1.35-5.26 0-7.6 1.2-2.08 3.43-3.33 5.83-3.41.34-.01.68.01 1.02.04v3.97c-.36-.05-.73-.06-1.09-.02-1.12.12-2.12.77-2.67 1.76-.66 1.18-.58 2.68.21 3.78.71.99 1.89 1.52 3.11 1.4 1.26-.13 2.33-1.07 2.58-2.31.06-.34.08-.69.08-1.04V.02z"/></svg>
                  TikTok
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{t.chatLabelContact}</label>
                  <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all text-sm" />
                </div>
                {chatPlatform === 'wa' && (
                  <div>
                    <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{t.chatLabelMyName}</label>
                    <input type="text" value={myName} onChange={(e) => setMyName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all text-sm" />
                  </div>
                )}

                {/* Message list */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">{t.chatLabelMessages}</label>
                    <button type="button" onClick={addChatMessage}
                      className="text-xs bg-slate-700 hover:bg-slate-600 text-teal-400 px-3 py-1 rounded-lg border border-slate-700 transition-colors font-semibold">
                      {t.chatBtnAdd}
                    </button>
                  </div>
                  <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <select value={msg.who} onChange={(e) => updateChatMessage(i, 'who', e.target.value)}
                            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-slate-200 focus:outline-none">
                            <option value="them">{t.chatSideThem}</option>
                            <option value="me">{t.chatSideMe}</option>
                          </select>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${msg.who === 'me' ? 'bg-teal-500/20 text-teal-400' : 'bg-slate-700 text-slate-400'}`}>
                            {msg.who === 'me' ? '→' : '←'}
                          </span>
                          <button type="button" onClick={() => deleteChatMessage(i)}
                            className="text-slate-600 hover:text-red-400 transition-colors text-xs px-1.5 py-1 rounded-lg hover:bg-red-500/10">
                            ✕
                          </button>
                        </div>
                        <textarea rows={2} value={msg.text}
                          onChange={(e) => updateChatMessage(i, 'text', e.target.value)}
                          placeholder={`Pesan ${i + 1}...`}
                          className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500/50 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none resize-none transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="flex flex-col items-center bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-600 font-mono mb-3">{t.chatPreviewTitle}</p>
                <div ref={chatRef} className="w-full rounded-xl overflow-hidden" style={{ maxWidth: 340 }}>
                  {chatPlatform === 'wa' && <WAChat />}
                  {chatPlatform === 'ig' && <IGChat />}
                  {chatPlatform === 'tt' && <TTChat />}
                </div>
                <p className="w-full mt-4 text-[11px] text-slate-500 text-center leading-normal bg-slate-900/50 py-2 px-3 rounded-lg border border-slate-800/60">{t.chatTipDownload}</p>
                <button onClick={downloadChatAsPNG} disabled={isChatDownloading}
                  className="mt-2 w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform disabled:opacity-50">
                  <Download className="w-4 h-4" />
                  {isChatDownloading ? `${t.chatBtnDownloading} (${chatCountdown}s)...` : t.chatBtnDownload}
                </button>
              </div>
            </div>
          </section>

          {/* ── SEO ARTICLES ────────────────────────────────────────────────── */}
          <section className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-5 h-5 text-teal-400" />
              <h2 className="text-base font-bold tracking-wide">{t.guideTitle}</h2>
            </div>
            <div className="text-sm text-slate-300 space-y-4 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.guideP1 }} />
              <h3 className="font-bold text-teal-300 text-sm flex items-center gap-1.5 pt-2">
                <HelpCircle className="w-4 h-4" /> {t.guideQ1}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.guideP2 }} />
            </div>
          </section>

        </div>

        {/* ── KOLOM KANAN: SIDEBAR ─────────────────────────────────────────── */}
        <div className="space-y-6">
          <div className="bg-slate-800/30 border border-slate-800 p-4 rounded-2xl space-y-4">

            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">{t.faqTitle}</h4>
              <div className="space-y-3 text-xs">
                <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800/40">
                  <p className="font-semibold text-teal-400 mb-1">{t.faqQ1}</p>
                  <p className="text-slate-400">{t.faqA1}</p>
                </div>
                <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800/40">
                  <p className="font-semibold text-teal-400 mb-1">{t.faqQ2}</p>
                  <p className="text-slate-400">{t.faqA2}</p>
                </div>
                <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800/40">
                  <p className="font-semibold text-teal-400 mb-1">{t.faqQ3}</p>
                  <p className="text-slate-400">{t.faqA3}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">{t.articleTitle}</h4>
              <div className="space-y-2">
                <Link href="/blog/cara-buat-visual-hook-tiktok"
                  className="block p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-800/60 text-slate-300 hover:text-teal-400 transition-all hover:border-teal-500/30 text-xs font-medium leading-snug">
                  💡 {t.art1}
                </Link>
                <Link href="/blog/formula-copywriting-aida-affiliate"
                  className="block p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-800/60 text-slate-300 hover:text-teal-400 transition-all hover:border-teal-500/30 text-xs font-medium leading-snug">
                  📖 {t.art2}
                </Link>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="bg-slate-800/10 p-6 rounded-xl text-center border border-slate-800/50 space-y-3">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-teal-400 transition-colors">Contact & About</Link>
            </div>
            <p className="text-xs text-slate-600">© 2026 AffiliateKit AI. {t.footerDesc}</p>
          </div>
        </div>

      </div>
    </main>
  );
}
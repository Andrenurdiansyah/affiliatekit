import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Inisialisasi SDK baru Gemini
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

export async function POST(request) {
  try {
    // Tangkap productName dan language dari request body frontend
    const { productName, language } = await request.json();

    if (!productName) {
      return NextResponse.json(
        { error: language === 'en' ? "Product name is required" : "Nama produk harus diisi" }, 
        { status: 400 }
      );
    }

    // Cabangkan prompt berdasarkan bahasa yang dipilih user ('id' atau 'en')
    let prompt = "";

    if (language === 'en') {
      prompt = `Act as a professional TikTok & Shopee Affiliate expert copywriter.
Create 3 variants of persuasive, engaging, and curiosity-inducing video captions based on this product name: "${productName}".

Use a casual, trendy social media netizen tone of voice, and include relevant emojis.
Each variant must incorporate the AIDA formula (Catchy hook at the start, benefit explanation, call to action to click the yellow basket/link in bio) and provide 5-8 creative and relevant hashtags at the end of each variant.

The output format must be clean using numbering 1, 2, and 3. Separate each variant clearly.

CRITICAL AND MANDATORY COMPLIANCE:
Do NOT provide any opening remarks or pleasantries at the beginning (such as "Sure!", "Here is the result", or "Below are...").
Do NOT provide any closing remarks or summaries at the end.
The response MUST START DIRECTLY with "1. [First Caption Content]" and so on. Do not include any extra text outside of the sales captions!`;
    } else {
      prompt = `Bertindaklah sebagai ahli Copywriter TikTok & Shopee Affiliate professional di Indonesia. 
Buat 3 variasi caption jualan yang persuasif, menarik (FYP material), dan bikin penasaran berdasarkan nama produk ini: "${productName}".

Gunakan gaya bahasa anak muda/netizen sosmed yang kasual, tidak kaku, dan beri emoji yang relevan. 
Setiap variasi harus menyertakan formula AIDA (Hook menarik di awal, penjelas benefit, ajakan klik keranjang kuning/link bio) dan berikan 5-8 hashtag kreatif yang relevan di akhir setiap variasi.

Format jawaban harus rapi menggunakan penomoran 1, 2, dan 3. Pisahkan antar variasi dengan jelas.

PENTING DAN WAJIB DIPATUHI:
Jangan berikan kalimat pembuka atau basa-basi apa pun di awal (seperti "Siap!", "Tentu, ini hasilnya", atau "Berikut adalah..."). 
Jangan berikan kalimat penutup atau kesimpulan di akhir. 
Jawabannya harus LANGSUNG dimulai dengan "1. [Isi Caption Pertama]" dan seterusnya. Jangan ada teks tambahan di luar teks caption jualan!`;
    }

    // Panggil model Gemini-2.5-flash menggunakan SDK terbaru
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: prompt,
    });

    return NextResponse.json({ result: response.text });
  } catch (error) {
    console.error("Gemini SDK Baru Error:", error);
    return NextResponse.json({ error: "Gagal memproses data dari AI" }, { status: 500 });
  }
}
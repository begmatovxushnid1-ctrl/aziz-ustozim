import { NextResponse } from "next/server";

// Telegram sozlamalari
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, course, experience, time, comment } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Ism va telefon raqami talab qilinadi" },
        { status: 400 }
      );
    }

    const messageText = `🇰🇷 <b>YANGI O'QUVCHI RO'YXATDAN O'TDI!</b> 🇰🇷\n\n` +
      `👤 <b>Ismi:</b> ${name}\n` +
      `📞 <b>Telefon:</b> ${phone}\n` +
      `📚 <b>Kurs yo'nalishi:</b> ${course || "Tanlanmagan"}\n` +
      `📊 <b>Boshlang'ich darajasi:</b> ${experience || "Nol daraja"}\n` +
      `⏰ <b>Qulay vaqt:</b> ${time || "Istalgan"}\n` +
      (comment ? `💬 <b>Izoh:</b> ${comment}\n\n` : `\n`) +
      `📅 <i>Yuborilgan vaqt:</i> ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`;

    let sentViaBot = false;

    // Agar Telegram Bot Token va Chat ID bor bo'lsa, to'g'ridan-to'g'ri Bot orqali jo'natadi
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      try {
        const response = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: messageText,
              parse_mode: "HTML",
            }),
          }
        );
        const result = await response.json();
        sentViaBot = result.ok;
      } catch (err) {
        console.error("Bot orqali yuborishda xatolik:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Ariza qabul qilindi!",
      sentViaBot,
      rawMessage: messageText
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: "Serverda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}

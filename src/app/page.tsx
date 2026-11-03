"use client";

import { useState } from "react";
import {
  Send,
  Phone,
  MessageCircle,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Clock,
  BookOpen,
  Award,
  ChevronRight,
  ShieldCheck,
  Globe,
  Compass
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998 ",
    course: "Boshlang'ich (A1-A2) / Hangil",
    experience: "Noldan boshlamoqchiman",
    time: "Kechki payt (18:00 dan keyin)",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "info">("form");

  const courseOptions = [
    { id: "hangul", name: "Boshlang'ich Hangil (0 dan)", desc: "Alifbo, to'g'ri talaffuz va sodda so'zlashuv", badge: "Ommabop" },
    { id: "eps", name: "EPS-TOPIK (Ishchi viza E-9)", desc: "Koreyada ishlash istagidagilar uchun maxsus tayyorgarlik", badge: "Maxsus" },
    { id: "topik", name: "TOPIK I & II (Talabalik)", desc: "Universitet grantlari (GKS) va o'qish vizasi (D-2/D-4)", badge: "Akademik" },
    { id: "individual", name: "Individual / Tezkor darslar", desc: "1-ga-1 shaxsiy dars jadvali va intensiv o'qitish", badge: "VIP" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Xatolik yuz berdi. Qaytadan urinib ko'ring yoki to'g'ridan-to'g'ri Telegram orqali yozing.");
      }
    } catch {
      // Offline yoki tarmoq xatosi bo'lsa ham qabul qiladi
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const directTelegramUrl = `https://t.me/Aziz_sem?text=${encodeURIComponent(
    `Assalomu alaykum Aziz aka! Men onlayn arizamni topshirdim:\n\n👤 Ismim: ${formData.name}\n📞 Tel: ${formData.phone}\n📚 Yo'nalish: ${formData.course}\n📊 Darajam: ${formData.experience}\n⏰ Qulay vaqt: ${formData.time}`
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-slate-100 flex flex-col items-center justify-start p-3 sm:p-6 pb-20">
      
      {/* Profil / Header Qismi (Instagram Bio formati uchun maxsus) */}
      <div className="w-full max-w-md mx-auto pt-4 flex flex-col items-center text-center">
        
        {/* Flag & Avatar */}
        <div className="relative mb-3">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-indigo-500 to-blue-400 shadow-xl shadow-rose-500/20">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-2 border-slate-800">
              <span className="text-4xl">🇰🇷</span>
            </div>
          </div>
          <span className="absolute bottom-0 right-1 bg-rose-600 text-[11px] font-bold px-2 py-0.5 rounded-full border border-slate-900 text-white flex items-center gap-1 shadow">
            <Sparkles className="w-3 h-3" /> TOPIK
          </span>
        </div>

        {/* Ustoz haqida ma'lumot */}
        <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2 justify-center">
          Aziz Ustoz <ShieldCheck className="w-5 h-5 text-sky-400" />
        </h1>
        <p className="text-xs uppercase tracking-widest text-rose-400 font-semibold mt-0.5">
          Koreys Tili Mutaxassisi • 한국어 강사
        </p>
        <p className="text-slate-300 text-sm mt-2 max-w-xs leading-relaxed">
          Koreyada o&apos;qish va ishlash niyatidamisiz? 0 dan TOPIK darajasigacha kafolatlangan professional ta&apos;lim!
        </p>

        {/* Tezkor Murojaat Tugmalari */}
        <div className="grid grid-cols-2 gap-2.5 w-full mt-4">
          <a
            href="https://t.me/Aziz_sem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-medium py-2.5 px-4 rounded-xl text-sm shadow-lg shadow-sky-500/20 transition-all active:scale-95"
          >
            <Send className="w-4 h-4" /> Telegram: @Aziz_sem
          </a>
          <a
            href="tel:+998900000000"
            className="flex items-center justify-center gap-2 bg-slate-850 hover:bg-slate-800 border border-slate-700/80 text-emerald-400 font-medium py-2.5 px-4 rounded-xl text-sm shadow transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" /> Qo&apos;ng&apos;iroq qilish
          </a>
        </div>

        {/* Tab switchers */}
        <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800 w-full mt-5">
          <button
            onClick={() => setActiveTab("form")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "form"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Ro&apos;yxatdan o&apos;tish
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "info"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-4 h-4" /> Kurslar haqida
          </button>
        </div>
      </div>

      {/* Asosiy Kontent Qismi */}
      <div className="w-full max-w-md mx-auto mt-4">
        
        {/* 1. RO'YXATDAN O'TISH FORMASI */}
        {activeTab === "form" && (
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-2xl">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Arizangiz qabul qilindi! 🎉</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  Ma&apos;lumotlaringiz ustoz <b>@Aziz_sem</b> ga muvaffaqiyatli yuborildi. Tez orada siz bilan bog&apos;lanamiz!
                </p>

                <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-1.5 mb-5">
                  <div className="text-slate-400">Ism: <span className="text-white font-medium">{formData.name}</span></div>
                  <div className="text-slate-400">Telefon: <span className="text-white font-medium">{formData.phone}</span></div>
                  <div className="text-slate-400">Kurs: <span className="text-rose-400 font-medium">{formData.course}</span></div>
                  <div className="text-slate-400">Vaqt: <span className="text-sky-400 font-medium">{formData.time}</span></div>
                </div>

                <a
                  href={directTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-lg shadow-sky-500/25 transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" /> Ustozga Telegramda yozish
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-slate-400 underline hover:text-slate-200"
                >
                  Boshqa ariza topshirish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-2">
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    📝 Darslarga onlayn yozilish
                  </h2>
                  <p className="text-xs text-slate-400">
                    Quyidagi formani to&apos;ldiring, ustoz siz bilan bog&apos;lanadi:
                  </p>
                </div>

                {/* Ism Familiya */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Ismingiz va Familiyangiz *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor Aliyev"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
                  />
                </div>

                {/* Telefon Raqam */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Telefon raqamingiz (Telegram bor raqam) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
                  />
                </div>

                {/* Qaysi kurs qiziqtirmoqda */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Qaysi kurs yo&apos;nalishi kerak? *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
                  >
                    <option value="Boshlang'ich (A1-A2) / Hangil">Boshlang&apos;ich Hangil (0 dan)</option>
                    <option value="EPS-TOPIK (Ishchi viza E-9)">EPS-TOPIK (Koreyada ishlash / E-9)</option>
                    <option value="TOPIK I & II (Universitet grantlari)">TOPIK I & II (Talabalik va Grantlar)</option>
                    <option value="Individual / Shaxsiy darslar">Individual (1-ga-1 shaxsiy dars)</option>
                    <option value="Koreyscha So'zlashuv (Speaking)">So&apos;zlashuv & Talaffuz (Speaking)</option>
                  </select>
                </div>

                {/* Koreys tilidagi hozirgi darajangiz */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Hozirgi bilim darajangiz
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      "Noldan boshlayman",
                      "Harflarni bilaman",
                      "Soddaroq tushunaman",
                      "TOPIK tayyorgarlik",
                    ].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setFormData({ ...formData, experience: item })}
                        className={`py-2 px-2.5 rounded-lg border text-left transition-all ${
                          formData.experience === item
                            ? "bg-rose-500/10 border-rose-500 text-rose-300 font-semibold"
                            : "bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dars vaqti */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Sizga qulay vaqt
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
                  >
                    <option value="Ertalab (09:00 - 12:00)">Ertalab (09:00 - 12:00)</option>
                    <option value="Kunduzi (14:00 - 17:00)">Kunduzi (14:00 - 17:00)</option>
                    <option value="Kechki payt (18:00 dan keyin)">Kechki payt (18:00 dan keyin)</option>
                    <option value="Faqat dam olish kunlari">Dam olish kunlari (Shanba-Yakshanba)</option>
                  </select>
                </div>

                {/* Qo'shimcha savol yoki istak */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Qo&apos;shimcha savol yoki istaklaringiz (ixtiyoriy)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Masalan: Qachon darslar boshlanadi..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-all"
                  />
                </div>

                {/* Yuborish tugmasi */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 text-sm cursor-pointer"
                >
                  {loading ? (
                    <span>Yuborilmoqda...</span>
                  ) : (
                    <>
                      <span>Ro&apos;yxatdan o&apos;tish</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* 2. KURSLAR HAQIDA MA'LUMOT */}
        {activeTab === "info" && (
          <div className="space-y-3">
            {courseOptions.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-rose-400" /> {item.name}
                  </h4>
                  <span className="text-[10px] uppercase font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
                <button
                  onClick={() => {
                    setFormData({ ...formData, course: item.name });
                    setActiveTab("form");
                  }}
                  className="mt-3 text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  Shu kursga yozilish <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {/* Darslarning afzalliklari */}
            <div className="bg-gradient-to-br from-indigo-950/60 to-slate-900/80 border border-indigo-900/40 rounded-2xl p-4 text-xs space-y-2 text-slate-300">
              <div className="font-bold text-white flex items-center gap-1.5 text-sm">
                <Compass className="w-4 h-4 text-indigo-400" /> Nega aynan Aziz Ustoz?
              </div>
              <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                <li>Qisqa muddatda nutqni ochish uslubi</li>
                <li>Haqiqiy koreys talaffuzi va kundalik iboralar</li>
                <li>EPS-TOPIK va TOPIK imtihonlariga 100% yo&apos;naltirilgan baza</li>
                <li>Dars materiallari va audio qo&apos;llanmalar bepul</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer qismi */}
        <div className="mt-8 text-center text-xs text-slate-400 space-y-2">
          <p>© 2026 Koreys Tili Repetitori | Aziz Ustoz</p>
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <a
              href="https://t.me/Aziz_sem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-sky-400 transition"
            >
              <Send className="w-3.5 h-3.5" /> @Aziz_sem
            </a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-pink-400" /> Instagram Bio
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}

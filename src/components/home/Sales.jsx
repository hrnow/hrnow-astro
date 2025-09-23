import { useEffect, useMemo, useRef, useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";

const candidate = {
  tabLabel: "Kandidat",
  heading: "Alur Proses Aplikasi Kami Tinggal Daftar, Test, Dapat Kerja Segera",
  subtext:
    "Tidak perlu pusing terkait jadwal bentrok, sekali kirim link, biarkan AI yang bekerja sampai mendapatkan hasil terbaik.",
  steps: [
    {
      key: "apply",
      title: "Kandidat Mendaftar",
      desc: "Kandidat yang menginginkan kerja bisa masuk atau mendaftar lewat aplikasi kami",
    },
    {
      key: "cv",
      title: "CV Screening",
      desc: "CV yang diinput kandidat akan di-scan dan dimasukkan ke input data",
    },
    {
      key: "ai-interview",
      title: "Wawancara AI",
      desc: "Sesi interview otomatis dengan AI untuk menilai hard/soft skills",
    },
    {
      key: "tech-test",
      title: "Technical / Self Assessment",
      desc: "Tes domain/technical dengan bank soal adaptif",
    },
    {
      key: "matching",
      title: "Job Matching",
      desc: "Kandidat dipasangkan ke lowongan yang relevan",
    },
    {
      key: "call",
      title: "Kandidat Mendapat Panggilan",
      desc: "Perusahaan menghubungi kandidat terpilih dengan cepat",
    },
  ],
  pricing: [
    {
      plan: "Light",
      badge: "",
      price: "49K",
      period: "/month",
      features: [
        "2x latihan AI Interview/bulan (max 20 menit/sesi)",
        "4x Domain/Technical Test ringan/bulan",
        "Ringkasan feedback & rekomendasi belajar",
        "Trial tak tetap berlaku (jika luar kuota)",
        "Akses AI Badge kalau skor ≥ ambang (level Bronze)",
      ],
      cta: "Daftar Sekarang",
      popular: false,
    },
    {
      plan: "Pro",
      badge: "Popular",
      price: "149K",
      period: "/month",
      features: [
        "6x latihan AI Interview/bulan (max 25 menit/sesi)",
        "4x Domain/Technical Test ringan/bulan",
        "Psych/Workstyle Test 2x/bulan",
        "Review rubrik detail + replay transcript/video",
        "AI Badge (Bronze/Silver/Gold) + public badge URL",
      ],
      cta: "Daftar Sekarang",
      popular: true,
    },
  ],
};

const company = {
  tabLabel: "Perusahaan",
  heading: ["Alur Proses Perusahaan Screening Massal Hasil Lebih Cepat"],
  subtext:
    "Sekali share link lowongan, kandidat masuk funnel otomatis. AI bantu screening, scoring, dan shortlist.",
  steps: [
    {
      key: "post",
      title: "Posting Lowongan",
      desc: "Buat job, pilih pipeline, dan publish",
    },
    {
      key: "funnel",
      title: "Kandidat Masuk Funnel",
      desc: "Semua lamaran otomatis terstruktur dan dapat diurutkan",
    },
    {
      key: "screen",
      title: "AI Screening + Badge",
      desc: "AI menilai CV, interview, test; badge memudahkan shortlist",
    },
    {
      key: "interview",
      title: "Interview Tim",
      desc: "Opsional interview manual/hiring manager dengan catatan AI",
    },
    {
      key: "offer",
      title: "Offer & Onboard",
      desc: "Kandidat terpilih diproses hingga onboarding",
    },
    {
      key: "api",
      title: "Integrasi API",
      desc: "Sinkron ke ATS/HRIS agar data rapi dan realtime",
    },
  ],
  pricing: [
    {
      plan: "Starter",
      badge: "",
      price: "799K",
      period: "/month",
      features: [
        "2 job aktif",
        "200 AI minutes/bulan (CV screen + robot interview)",
        "3 collaborator seats (job_members)",
        "10 candidate unlock credits/bln (marketplace)",
        "Template pipeline standar + override per job",
      ],
      cta: "Daftar Sekarang",
      popular: false,
    },
    {
      plan: "Growth",
      badge: "Popular",
      price: "2,490K",
      period: "/month",
      features: [
        "10 job aktif",
        "1000 AI minutes/bulan (CV screen + robot interview)",
        "10 collaborator seats (job_members)",
        "50 candidate unlock credits/bln (marketplace)",
        "Template pipeline standar + custom pipeline",
        "Integrasi API (job, candidate, interview, test)",
      ],
      cta: "Daftar Sekarang",
      popular: true,
    },
    {
      plan: "Scale",
      badge: "",
      price: "5,990K",
      period: "/month",
      features: [
        "30 job aktif",
        "3000 AI minutes/bulan (CV screen + robot interview)",
        "30 collaborator seats (job_members)",
        "150 candidate unlock credits/bln (marketplace)",
        "Template pipeline standar + custom pipeline",
        "Integrasi API (job, candidate, interview, test)",
        "Dedicated account manager",
        "Onboarding & training",
      ],
      cta: "Daftar Sekarang",
      popular: false,
    },
  ],
};

// --- UI helpers ---
const CircleButton = ({ label, active, onClick, compact, className = "" }) => (
  <button
    onClick={onClick}
    className={`rounded-xl border text-left shadow-sm backdrop-blur ${
      compact ? "px-2 py-2 text-xs w-28" : "px-3 py-3 text-sm w-32 md:w-auto"
    } ${
      active
        ? "bg-primary/10 text-primary font-semibold"
        : "border bg-base-100/70 text-base-content/70"
    } ${className}`}
  >
    {label}
  </button>
);

export default function SalesFlow() {
  const [tab, setTab] = useState("candidate");
  const data = tab === "candidate" ? candidate : company;

  const [activeKey, setActiveKey] = useState(data.steps[0].key);

  const active = useMemo(() => {
    const found = data.steps.find((s) => s.key === activeKey);
    return found ?? data.steps[0];
  }, [data, activeKey]);

  if (
    active.key !== activeKey &&
    !data.steps.some((s) => s.key === activeKey)
  ) {
    setActiveKey(data.steps[0].key);
  }
  const circleRef = useRef(null);
  const [size, setSize] = useState(400);

  useEffect(() => {
    if (!circleRef.current) return;
    const el = circleRef.current;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setSize(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const center = size / 2;
  const compact = size < 360;
  const r = Math.max(100, center - (compact ? 30 : 10));

  return (
    <section className="mx-auto container px-8 md:px-16 py-12">
      <div className="mb-12 flex justify-center gap-2">
        <button
          onClick={() => setTab("candidate")}
          className={`rounded-full px-4 py-2 text-sm ${
            tab === "candidate"
              ? "bg-primary text-white font-semibold"
              : "bg-base-100 border border-base-300"
          }`}
        >
          {candidate.tabLabel}
        </button>
        <button
          onClick={() => setTab("company")}
          className={`rounded-full px-4 py-2 text-sm ${
            tab === "company"
              ? "bg-primary text-white font-semibold"
              : "bg-base-100 border border-base-300"
          }`}
        >
          {company.tabLabel}
        </button>
      </div>

      <div className=" max-w-2xl mx-auto text-center">
        <h2 className="text-center text-2xl font-extrabold md:text-3xl">
          {data.heading}
        </h2>
        <p className="mx-auto mt-5 text-center text-sm text-base-content/70">
          {data.subtext}
        </p>
      </div>

      <div className="mt-20 md:mt-10 grid items-center gap-8 md:grid-cols-2">
        <div
          ref={circleRef}
          className="relative mx-auto aspect-square w-full max-w-[380px] sm:max-w-[410px]"
        >
          <div className="absolute inset-0 rounded-full border-2 border-base-300/80" />
          <div
            className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border bg-base-100 shadow-2xl"
            style={{ width: compact ? 84 : 112, height: compact ? 84 : 112 }}
          >
            <img
              src="/logo_hrnow.svg"
              alt="HRNow Logo"
              width={80}
              height={46}
            />
          </div>

          {/* Nodes around the circle */}
          {data.steps.map((s, i) => {
            const total = data.steps.length;
            const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
            const x = center + r * Math.cos(angle);
            const y = center + r * Math.sin(angle);
            return (
              <div
                key={s.key}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <CircleButton
                  label={s.title}
                  active={active.key === s.key}
                  onClick={() => setActiveKey(s.key)}
                  compact={compact}
                />
              </div>
            );
          })}
        </div>

        {/* Side panel */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-base-100/70 p-4 text-base-content/60 shadow-sm">
            <div className="h-10 w-full rounded-md bg-base-200" />
          </div>
          <div className="rounded-2xl bg-base-100 p-5 shadow-sm">
            <div className="mb-2 text-5xl font-extrabold text-primary/80">
              {data.steps.findIndex((s) => s.key === active.key) + 1}.
            </div>
            <h3 className="text-lg font-bold">{active.title}</h3>
            <p className="mt-1 text-sm text-base-content/70">{active.desc}</p>
          </div>
          <div className="rounded-2xl bg-base-100/70 p-4 text-base-content/60 shadow-sm">
            <div className="h-10 w-2/3 rounded-md bg-base-200" />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-extrabold">Harga & Paket</h3>
        <p className="mx-auto mt-1 max-w-lg text-sm text-base-content/70">
          Omnichannel AI tercanggih dengan harga terbaik
        </p>

        <div
          className={`mx-auto mt-8 flex flex-col md:flex-row ${
            data.pricing.length > 3 ? "flex-wrap" : "justify-center"
          } gap-12 `}
        >
          {data.pricing.map((p) => (
            <div
              key={p.plan}
              className={`relative rounded-2xl border p-6 text-left shadow-sm ${
                p.popular ? "border-amber-600" : "border-base-300"
              }`}
            >
              {p.badge && (
                <span className="rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#FF3C00] to-[#FCA93D] px-2 py-0.5 text-sm text-white font-semibold">
                  {p.badge}
                </span>
              )}

              <h4
                className={`text-lg text-center mb-2 ${
                  p.popular ? "text-amber-600" : "text-base-content"
                }`}
              >
                {p.plan}
              </h4>
              <div className="mb-4 text-center">
                <span className="text-2xl font-extrabold">Rp. {p.price}</span>
                <span className="text-sm text-base-content/60">{p.period}</span>
              </div>
              <ul className="mb-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <IoCheckmarkDone size={20} />
                    <span className="text-base-content/80">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`btn w-full rounded-full ${
                  p.popular ? "btn-primary" : "btn-outline"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

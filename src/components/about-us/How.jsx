"use client";

import { FaRegObjectUngroup } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuLayers } from "react-icons/lu";
import { motion } from "motion/react";

const items = [
  {
    icon: <HiOutlineBolt className="w-8 h-8" />,
    title: "Cepat",
    desc: "Dari apply hingga keputusan awal dalam jam, bukan minggu. Proses otomatis screening CV, robot interview, dan tes teknis berjalan paralel dengan notifikasi real-time, jadi tim cukup memantau lalu memutuskan.",
  },
  {
    icon: <FaRegObjectUngroup className="w-8 h-8" />,
    title: "Objektif",
    desc: "Penilaian AI berbasis rubrik & bobot yang konsisten untuk semua kandidat. Skor dan ambang lulus jelas, meminimalkan bias dan memastikan keputusan dapat dipertanggungjawabkan.",
  },
  {
    icon: <LuLayers className="w-8 h-8" />,
    title: "Transparan",
    desc: "Skor, rekaman, dan transcript tiap tahap bisa ditinjau; alasan pass/fail terlihat. Bobot penilaian per stage ditampilkan, lengkap dengan jejak keputusan (audit trail).",
  },
  {
    icon: <GoArchive className="w-8 h-8" />,
    title: "Aman",
    desc: "Data dilindungi dengan enkripsi & akses berbasis peran; file sensitif punya retensi terkontrol. Kepatuhan jadi standar (privacy-first), sehingga perusahaan dan kandidat tetap tenang.",
  },
];

export default function How() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-2xl font-bold md:text-3xl"
      >
        Bagaimana Kami Mengisi Kekosongan Pekerjaan?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {items.map((it, index) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gray-200 p-6 shadow-sm md:p-8"
          >
            <div className="mb-3 text-base-content">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-base-80 text-base-content">
                {it.icon}
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold">{it.title}</h3>
            <p className="text-sm leading-relaxed text-base-content/70 md:text-base">
              {it.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

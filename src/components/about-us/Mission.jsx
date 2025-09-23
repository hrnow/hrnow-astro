import { HiRefresh } from "react-icons/hi";
import { motion } from "motion/react";

export const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const pills = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.15, duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
};

export const textBlock = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const mission = {
  title: "Misi Kami",
  subtitle: "Masa depan rekrutmen dan pencari kerja tanpa perantara",
  description:
    "Pekerjaan selalu ada di situlah kami percaya rekrutmen harus terjadi cepat, tepat, dan manusiawi. HRNow menghubungkan perusahaan dan kandidat secara langsung lewat AI yang menyaring CV, mewawancarai, dan menilai secara objektif, dalam hitungan jam, bukan minggu.",
};

export default function Mission() {
  return (
    <section className="pt-36 md:pt-44 px-4 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-3xl rounded-2xl bg-primary shadow-md p-6 md:p-8 xl:p-16 relative overflow-hidden"
      >
        {/* pattern kiri */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute -top-6 md:-top-12 left-0"
        >
          <img
            src="/pattern-batik.svg"
            height={500}
            width={500}
            alt="pattern-batik"
            className="w-32 md:w-56 xl:w-88 rotate-180 h-auto"
          />
        </motion.div>

        {/* pills */}
        <motion.div
          variants={pills}
          className="z-10 w-full relative flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <motion.span
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 md:gap-3 rounded-full bg-base-100 px-3 md:px-4 py-2 text-lg md:text-2xl font-semibold text-base-content shadow-sm"
          >
            <span className="p-1.5 md:p-2 bg-black text-white rounded-full">
              <HiRefresh className="w-4 h-4 md:w-5 md:h-5" />
            </span>
            Hire in hours
          </motion.span>

          <motion.span
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-neutral px-3 md:px-4 py-2 md:py-3 text-lg md:text-2xl font-semibold text-white shadow-sm"
          >
            Not weeks
          </motion.span>
        </motion.div>

        {/* pattern kanan */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.3, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-6 md:-bottom-12 right-0"
        >
          <img
            src="/pattern-batik.svg"
            height={500}
            width={500}
            alt="pattern-batik"
            className="w-32 md:w-56 xl:w-88 h-auto"
          />
        </motion.div>
      </motion.div>

      {/* text block */}
      <div className="pt-12 md:pt-16 container px-4 md:px-8 xl:px-16 mx-auto text-center">
        <motion.h2
          custom={0}
          variants={textBlock}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl md:text-4xl font-bold"
        >
          {mission.title}
        </motion.h2>
        <motion.p
          custom={1}
          variants={textBlock}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="my-8 text-xl font-semibold"
        >
          {mission.subtitle}
        </motion.p>
        <motion.p
          custom={2}
          variants={textBlock}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-4 leading-relaxed text-base-content/70 max-w-3xl"
        >
          {mission.description}
        </motion.p>
      </div>
    </section>
  );
}

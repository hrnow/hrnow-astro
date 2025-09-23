import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 24, stiffness: 240 },
  },
};

const revealClip = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  show: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* radial glow */}
      <div className="container relative mx-auto ">
        <div className="pointer-events-none absolute -right-20 -top-56  h-[500px] w-[600px] rounded-full bg-gradient-to-bl from-primary/100 to-transparent blur-3xl z-[-1] overflow-hidden"></div>
      </div>

      <div className="mx-auto container px-8 md:px-16">
        {/* Main grid */}
        <motion.div
          className="grid items-center gap-10 py-10 md:grid-cols-2 md:gap-12 md:py-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div>
            <motion.h1
              variants={revealClip}
              className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight"
            >
              Tingkatkan Pencarian
              <br />
              <span className="inline-flex items-baseline gap-2">
                <TypeAnimation
                  sequence={["Kandidat", 2000, "Kerja", 2000, "Peluang", 2000]}
                  wrapper="span"
                  className="rounded-md bg-base-200/60 md:bg-primary/20 px-2 py-1"
                  repeat={Infinity}
                />
                <span>Kamu,</span>
              </span>
              <br />
              <span> dengan solusi end-to-end</span>
              <br />
              <span> screening sampai interview</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base text-base-content/70"
            >
              Cari Kerjaan, Latih Interview, Talent ready, No HR!. Temukan
              talenta dan juga pekerjaaan yang sesuai; dapatkan AI Badge, hemat
              biaya HR puluhan juta dan hemat waktu perekrutan.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#"
                className="btn btn-primary rounded-full px-6"
                whileHover={{
                  y: -2,
                  boxShadow:
                    "0 12px 30px -10px rgba(0,0,0,0.35), 0 6px 12px -8px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                Konsultasi dengan kami
              </motion.a>

              <motion.a
                href="#"
                className="btn btn-outline rounded-full px-6"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                Bergabung sekarang
              </motion.a>
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="relative">
            {/* grid board */}
            <div className="relative overflow-hidden rounded-2xl border border-base-300 bg-base-100/60 p-6 shadow-lg backdrop-blur">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-transparent"
              />

              {/* background grid */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.05)_1px,transparent_1px)] bg-[size:48px_48px]"
              />

              {/* scribble */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 h-10 w-40 rounded-xl"
              >
                <img
                  src="/pattern.png"
                  alt="Scribble"
                  width={160}
                  height={100}
                  className="h-20 w-auto"
                />
              </motion.div>

              {/* Contract card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative mx-auto w-full max-w-md rounded-xl border border-base-300 bg-base-100 p-4 shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-content">
                    Contract
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      src="/avatars/elica.png"
                      alt="User Avatar"
                      width={500}
                      height={500}
                      className="rounded-full bg-base-200 w-10 h-10"
                    />
                    <div>
                      <div className="text-sm font-semibold">
                        Elica Sabathini
                      </div>
                      <div className="text-[10px] text-base-content/60">
                        QA Engineer
                      </div>
                    </div>
                  </div>
                </div>

                {/* progress dots with connecting lines */}
                <div className="mt-2 flex items-start justify-between gap-3 relative">
                  {[
                    { label: "Lamar", date: "Jul 13" },
                    { label: "Screening CV", date: "Jul 14" },
                    { label: "Interview", date: "" },
                    { label: "Bekerja", date: "" },
                  ].map((s, i, arr) => (
                    <motion.div
                      key={s.label}
                      className="flex flex-1 flex-col items-center text-center relative"
                      initial={{ opacity: 0, y: 20, scale: 0.5 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.4 + i * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.div
                        className={`h-3 w-3 rounded-full z-10 ${
                          i < 3 ? "bg-primary" : "bg-base-300"
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5 + i * 0.15,
                          duration: 0.6,
                          type: i < 3 ? "keyframes" : "spring",
                          ease: i < 3 ? [0.175, 0.885, 0.32, 1.275] : "easeOut",
                        }}
                        style={{
                          animation:
                            i < 3
                              ? `bounceScale 0.6s ease-out ${
                                  0.5 + i * 0.15
                                }s forwards`
                              : "none",
                        }}
                        whileHover={{
                          scale: 1.5,
                          rotate: 360,
                          transition: {
                            duration: 0.3,
                            type: "spring",
                            stiffness: 400,
                          },
                        }}
                      />
                      <motion.div
                        className="mt-2 text-[11px] font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        {s.label}
                      </motion.div>
                      {s.date && (
                        <motion.div
                          className="text-[10px] text-base-content/60"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          {s.date}
                        </motion.div>
                      )}
                      {/* Connecting line */}
                      {i < arr.length - 1 && (
                        <motion.div
                          className={`absolute top-1.5 left-full h-[2px] w-full -translate-x-1/2 ${
                            i < 2 ? "bg-primary" : "bg-base-300"
                          }`}
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            delay: 0.6 + i * 0.2,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* note bubble */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 w-64 rounded-xl -rotate-5 border border-base-300 bg-base-100 p-4 shadow-sm"
              >
                <div className="mb-2 flex items-center gap-2">
                  <img
                    src="/avatars/jody.jpeg"
                    alt="User Avatar"
                    width={100}
                    height={100}
                    className="rounded-full bg-base-200 w-10 h-10"
                  />

                  <div className="text-sm font-semibold">Jody Ritonga</div>
                </div>
                <p className="text-xs text-base-content/70">
                  Tinggal fokus ke growth aja karena screening-interview
                  di-handle HRNow.
                </p>
                <div className="mt-2 text-[10px] text-base-content/50">
                  11:26 AM
                </div>
              </motion.div>

              {/* floating avatars */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 }}
                className="absolute right-6 top-6 flex items-center gap-3"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-warning text-base-100">
                  DR
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-info text-base-100">
                  ER
                </div>
              </motion.div>

              {/* small actions */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 right-6 flex items-center gap-3"
              >
                <button className="grid h-9 w-9 place-items-center rounded-full border border-base-300 bg-base-100 shadow-sm">
                  {/* users icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
                    <path d="M2 21v-1a6 6 0 0 1 6-6h4" />
                    <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-base-300 bg-base-100 shadow-sm">
                  {/* search icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

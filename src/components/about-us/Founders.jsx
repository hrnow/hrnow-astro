import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const founders = [
  {
    name: "Christian Miracle",
    role: "Co-Founder & CEO",
    avatar: "/avatars/miracle.png",
    linkedin: "https://www.linkedin.com/in/christianmiracle/",
    instagram: "https://www.instagram.com/christianmiracle/",
    bullets: [
      "S.Kom (Bachelor of Computer Science) — Universitas Advent Indonesia.",
      "AI Engineer/Full-stack Developer\nBerpengalaman 5 Tahun",
    ],
  },
  {
    name: "Peter Shaan",
    role: "Co-Founder & CTO",
    avatar: "/avatars/peter.jpg",
    linkedin: "https://www.linkedin.com/in/petershaan/",
    instagram: "https://www.instagram.com/petershaan_/",
    bullets: [
      "S.Kom (Bachelor of Computer Science) — Universitas Advent Indonesia.",
      "Backend/Full-stack Developer\nBerpengalaman 5 Tahun",
    ],
  },
];

export default function Founders() {
  return (
    <section className="mx-auto container px-8 md:px-16">
      <h2 className="text-center text-2xl font-extrabold md:text-3xl">
        Founders
      </h2>
      <p className="mt-2 text-center text-sm text-base-content/70 md:text-base">
        Kami sedikit tapi kami brani memulai
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 mx-auto">
        {founders.map((f) => (
          <article
            key={f.name}
            className="rounded-2xl bg-gray-200 p-6 shadow-sm md:p-8"
          >
            <header className="mb-5 flex items-start justify-between ">
              <div className="flex items-center gap-4 ">
                <img
                  src={f.avatar}
                  alt={f.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-top size-24 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold md:text-xl">{f.name}</h3>
                  <div className="text-sm text-base-content/70">{f.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaInstagram
                  size={20}
                  className="text-base-content/70 hover:text-primary cursor-pointer"
                  onClick={() => window.open(f.instagram, "_blank")}
                />
                <FaLinkedin
                  size={20}
                  className="text-base-content/70 hover:text-primary cursor-pointer"
                  onClick={() => window.open(f.linkedin, "_blank")}
                />
              </div>
            </header>

            <div className="space-y-3">
              {f.bullets.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-base-100 p-4 text-sm text-base-content/80 whitespace-pre-line"
                >
                  {b}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <a
          href="/contact"
          className="btn btn-primary md:btn-lg rounded-full px-8"
        >
          Bergabung hrnow Sekarang Gratis
        </a>
      </motion.div>
    </section>
  );
}

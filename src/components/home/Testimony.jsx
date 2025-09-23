import { motion } from "motion/react";

const quotes = [
  {
    quote:
      "Tidak Perlu Penjadwalan Ribet, yang memakan waktu berbulan-bulan sehingga, perusahaan dan kandidat diuntungkan",
    author: "John Deo.",
    authorTitle: "Client of hrnow",
    img: "https://avatar.iran.liara.run/public/6",
    url: "",
  },
  {
    quote:
      "Aku suka hrnow, aku bisa berlatih interview dengan AI dan mendapat feedback yang jujur serta badge hasil interview.",
    author: "Jane Smith.",
    authorTitle: "Client of hrnow",
    img: "https://avatar.iran.liara.run/public/girl",
    url: "",
  },
  {
    quote: "Dengan hrnow, aku bisa mendapatkan kandidat terbaik dengan cepat.",
    author: "Alice Johnson.",
    authorTitle: "Client of hrnow",
    img: "https://avatar.iran.liara.run/public/1",
    url: "",
  },
  {
    quote:
      "Semua berbasis AI sehingga cukup satu rekrutmen bisa mencari kandidat sebanyak mungkin tanpa perlu sewa HR lagi dan hemat biaya.",
    author: "Christian Miracle.",
    authorTitle: "CEO of HRNOW",
    img: "/avatars/miracle.png",
    url: "https://example.com/testimonial4",
  },
];

export default function Testimony() {
  return (
    <section
      className="container mx-auto px-8 md:px-16 rounded-3xl bg-gradient-to-b from-base-100 to-primary/100 py-20 mt-20 overflow-hidden"
      style={{ touchAction: "manipulation" }}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-3 font-bold text-2xl md:text-3xl text-right"
      >
        Persingkat waktu proses rekrut <br className="hidden md:block" />
        Tanpa mengurangi kualitas perekrutan
      </motion.div>

      <motion.div
        className="flex items-center justify-center bg-white border shadow rounded-full h-10 w-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        %
      </motion.div>

      <motion.p
        className="mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Bagi perusahaan mencari kandidat dari para talenta terbaik, dengan tidak
        mengurangi kualitas pencarian melalui berbagai tahap screening.
      </motion.p>

      <div className="space-y-5">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="max-w-2xl rounded-tr-xl rounded-b-xl bg-base-100 p-5 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="mb-4 text-sm text-base-content/80">{quote.quote}</p>
            <div className="flex items-center gap-3">
              <img
                src={quote.img}
                alt={quote.author}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover object-top"
              />
              <div className="text-xs font-medium text-base-content/60">
                {quote.author} / {quote.authorTitle}
              </div>
            </div>

            {quote.url && (
              <div className="mt-4">
                <button className="btn btn-primary rounded-full px-6">
                  Watch The Video
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

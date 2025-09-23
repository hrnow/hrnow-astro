import { toast, Toaster } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async ({ name, email, phone, message }) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      return data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({ name, email, phone, message });
      toast.success("Pesan berhasil dikirim!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      toast.error("Gagal mengirim pesan!");
    }
  };

  return (
    <div className="rounded-xl md:rounded-4xl bg-gray-200 p-5 md:p-6 lg:p-8 shadow-md">
      <Toaster richColors position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium" for="name">
            <span className="text-error">*</span> Nama
          </label>
          <input
            name="name"
            required
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="input w-full border-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" for="email">
            <span className="text-error">*</span> Email
          </label>
          <input
            name="email"
            required
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="input w-full border-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" for="phone">
            <span className="text-error">*</span> Nomor Telepon
          </label>
          <input
            name="phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+62 812-3456-7890"
            className="input w-full border-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" for="message">
            <span className="text-error">*</span> Deskripsi
          </label>
          <textarea
            name="message"
            required
            value={message}
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi! aku mau bertanya apakah aku bisa bergabung dengan hrnow"
            className="textarea border-none w-full"
          />
        </div>
        <div className="pt-2">
          <button
            className="btn btn-primary min-w-28 rounded-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending && (
              <span className="loading loading-spinner loading-sm mr-2" />
            )}
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

export default function BlogSearch() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Mulai loading setiap perubahan query
    window.dispatchEvent(new CustomEvent("blog:search:start"));
    setLoading(true);
    const id = setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("blog:search", { detail: { query: q } })
      );
      window.dispatchEvent(new CustomEvent("blog:search:end"));
      setLoading(false);
    }, 300); // debounce 300ms
    return () => clearTimeout(id);
  }, [q]);

  return (
    <div className="space-y-3 mb-10">
      <div className="border-l-5 pl-3">
        <h2 className="text-lg font-bold">Search</h2>
      </div>
      <div className="relative">
        <input
          ref={ref}
          type="text"
          value={q}
          placeholder="Cari artikel..."
          onChange={(e) => setQ(e.target.value)}
          className="input input-bordered w-full pr-11"
          data-search-input
        />
        {loading && (
          <span
            className="loading loading-spinner loading-sm text-primary absolute right-3 top-1/2 -translate-y-1/2"
            aria-label="Loading"
          />
        )}
      </div>
    </div>
  );
}

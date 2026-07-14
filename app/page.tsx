"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    router.push(`/watch?u=${encodeURIComponent(trimmed)}`);
  }

  return (
    <main style={{ background: "#fff", minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 740, padding: "48px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#e31f27", fontSize: 32, marginBottom: 20 }}>
          Paste your Terabox / Mdisk / Pdisk link and watch instantly.
        </h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, width: "100%", marginBottom: 20 }}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Paste Terabox, Mdisk, or Pdisk link here"
            style={{ flex: 1, padding: "16px 18px", borderRadius: 12, border: "1px solid #ddd", fontSize: 16 }}
          />
          <button
            type="submit"
            style={{ padding: "16px 22px", borderRadius: 12, background: "#111", color: "#fff", border: "none", fontSize: 16 }}
          >
            Watch
          </button>
        </form>

        <p style={{ color: "#555", fontSize: 16, lineHeight: 1.7 }}>
          Paste your Terabox, Mdisk, or Pdisk video URL and open it directly. No extra buttons, no extra steps — just paste the link and play.
        </p>
      </div>
    </main>
  );
}

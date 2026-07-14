"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value) return;
    const url = encodeURIComponent(value.trim());
    router.push(`/watch?u=${url}`);
  }

  return (
    <main style={{ background: "#fff", color: "#111", minHeight: "100vh" }}>
      <header style={{ padding: 28, textAlign: "center" }}>
        <h1 style={{ color: "#e33", margin: 0, fontSize: 26 }}>
          <span
            style={{
              display: "inline-block",
              width: 36,
              height: 36,
              borderRadius: 18,
              background: "#e33",
              color: "#fff",
              lineHeight: "36px",
              marginRight: 10,
              fontWeight: 700,
            }}
          >
            M
          </span>
          Watch Mdisk, Terabox, and Pdisk Videos Online.
        </h1>
      </header>

      <section style={{ maxWidth: 920, margin: "20px auto", padding: "0 20px" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}
        >
          <button
            type="button"
            aria-hidden
            style={{ background: "#fff", border: "1px solid #ccc", padding: 12, borderRadius: 6 }}
          >
            📋
          </button>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Paste Terabox Link to Watch"
            style={{ flex: 1, padding: 12, borderRadius: 6, border: "1px solid #ccc" }}
          />
          <button
            type="submit"
            style={{ padding: "10px 14px", borderRadius: 6, background: "#111", color: "#fff", border: "none" }}
          >
            🔍
          </button>
        </form>

        <div style={{ marginTop: 6, background: "#f3f3f3", padding: 18, borderRadius: 6, color: "#333" }}>
          Watch Mdisk, Terabox and Pdisk videos online without any player. Just paste the Mdisk or Terabox or Pdisk link to play the video online without any external player. Also download the videos, save them locally, share them, and play them on your favorite player.
        </div>

        <div style={{ marginTop: 18 }}>
          <button style={{ width: "100%", padding: 14, background: "#07104a", color: "#fff", border: "none", borderRadius: 6 }}>
            Chat With Stranger
          </button>
        </div>

        <div style={{ marginTop: 22, background: "#9ef1d6", padding: 18, borderRadius: 6 }}>
          We are looking for companies and organizations interested in promoting their products and services on our website. Start the discussion at: <strong>mdiskplay@gmail.com</strong>.
        </div>

        <footer style={{ marginTop: 80, padding: "18px 0" }}>
          <nav style={{ display: "flex", gap: 12, justifyContent: "center", background: "#eee", padding: 10, borderRadius: 6 }}>
            <a href="#">Play Mdisk Videos Online</a>
            <a href="#">Play Pdisk Videos Online</a>
            <a href="#">Play Terabox Videos Online</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}

"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function WatchPlayer() {
  const searchParams = useSearchParams();
  const u = searchParams.get("u") ?? "";
  const [decoded, setDecoded] = useState<string | null>(null);

  useEffect(() => {
    if (!u) {
      setDecoded(null);
      return;
    }
    try {
      setDecoded(decodeURIComponent(u));
    } catch {
      setDecoded(null);
    }
  }, [u]);

  return (
    <div>
      <h2>Player</h2>
      {!decoded && <p>No link provided.</p>}
      {decoded && (
        <div>
          <p style={{ wordBreak: "break-all" }}>Playing: {decoded}</p>
          <div style={{ marginTop: 12 }}>
            <iframe
              src={decoded}
              style={{ width: "100%", height: 600, border: "1px solid #ddd" }}
              title="player"
            />
          </div>
        </div>
      )}
    </div>
  );
}

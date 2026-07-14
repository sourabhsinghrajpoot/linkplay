import { Suspense } from "react";
import WatchPlayer from "./WatchPlayer";

export default function WatchPage() {
  return (
    <main style={{ padding: 24, minHeight: "100vh", background: "#fafafa" }}>
      <div style={{ maxWidth: 1000, margin: "32px auto" }}>
        <Suspense fallback={<p>Loading player…</p>}>
          <WatchPlayer />
        </Suspense>
      </div>
    </main>
  );
}

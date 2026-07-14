import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: { default: "LinkPlay — Play your cloud videos anywhere", template: "%s | LinkPlay" },
  description: "Securely organize and play cloud videos you are authorized to access.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: { type: "website", siteName: "LinkPlay" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

import type { Metadata } from "next";
import { headers } from "next/headers";
import { ScrollReveal } from "./_components/scroll-reveal";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Anuradhapura Guidance | Private Heritage Tours in Sri Lanka";
  const description = "Private, English-speaking journeys through Anuradhapura's sacred city, Mihintale, and Wilpattu National Park.";

  return {
    metadataBase: base,
    title: { default: title, template: "%s | Anuradhapura Guidance" },
    description,
    icons: { icon: "/anuradhapura-guidance-logo.png", shortcut: "/anuradhapura-guidance-logo.png" },
    openGraph: { title, description, type: "website", locale: "en_US", images: [{ url: "/og.png", width: 1536, height: 909, alt: "Anuradhapura Guidance — Private Heritage Journeys" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

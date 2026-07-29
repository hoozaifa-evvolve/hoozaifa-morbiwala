import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: "Hoozaifa Morbiwala | AI Solutions Engineer",
    description: "AI Solutions Engineer connecting discovery, architecture, automation, and enterprise delivery. 10+ years in SaaS, $1.5M+ ARR influenced, and Voice AI at scale.",
    applicationName: "Hoozaifa Morbiwala Portfolio",
    alternates: { canonical: "/" },
    openGraph: {
      title: "AI systems that make it to launch.",
      description: "Solutions Engineering, AI automation, and enterprise delivery—built for production.",
      type: "profile",
      locale: "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hoozaifa Morbiwala — AI systems that make it to launch." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI systems that make it to launch.",
      description: "Hoozaifa Morbiwala — AI Solutions Engineer.",
      images: ["/og.png"],
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hoozaifa Morbiwala",
  jobTitle: "AI Solutions Engineer",
  email: "mailto:mhoozaifa@gmail.com",
  telephone: "+55 11 99925-6971",
  address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
  knowsLanguage: ["English", "Portuguese", "Spanish", "Hindi", "Marathi"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}

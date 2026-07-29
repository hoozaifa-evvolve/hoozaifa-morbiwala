import type { Metadata } from "next";
import "./globals.css";

const publicOrigin = "https://hoozaifa-evvolve.github.io/hoozaifa-morbiwala";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const description = "Hoozaifa Morbiwala — AI Solutions Engineer. 10+ years taking enterprise customers from discovery to production across Voice AI, APIs, and automation.";

export const metadata: Metadata = {
  metadataBase: new URL(publicOrigin),
  title: "Hoozaifa Morbiwala | AI Solutions Engineer",
  description,
  applicationName: "Hoozaifa Morbiwala Portfolio",
  alternates: { canonical: publicOrigin },
  icons: { icon: `${publicBasePath}/favicon.svg`, shortcut: `${publicBasePath}/favicon.svg` },
  openGraph: {
    title: "Hoozaifa Morbiwala | AI Solutions Engineer",
    description,
    type: "profile",
    locale: "en_US",
    url: publicOrigin,
    images: [{ url: `${publicOrigin}/og.png`, width: 1200, height: 630, alt: "Hoozaifa Morbiwala — AI Solutions Engineer." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoozaifa Morbiwala | AI Solutions Engineer",
    description,
    images: [`${publicOrigin}/og.png`],
  },
};

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
  return <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,400..800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
    </head>
    <body>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </body>
  </html>;
}

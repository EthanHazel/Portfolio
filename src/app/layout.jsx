import { Analytics } from "@vercel/analytics/next";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

import "@/style/master.css";

const TITLE = "Ethan Hazel";
const DESCRIPTION = "Web Designer & Developer";
const URL = "https://www.ehazel.com";

export const viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 0.8,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: URL,
    siteName: TITLE,
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: "/images/meta.png",
    creator: "@EthanHazelGD",
  },
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: [
      "/favicon/x96.png",
      "/favicon/x192.png",
      "/favicon/x512.png",
      "/favicon/favicon.ico",
    ],
    apple: "/favicon/apple.png",
  },
  manifest: "/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    template: "%s ▸ " + TITLE,
    default: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://ehazel.com/",
    languages: {
      "en-US": "https://ehazel.com/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

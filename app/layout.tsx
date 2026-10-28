import type { Metadata } from "next";
import { Zilla_Slab, Spectral, Archivo } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spectral = Spectral({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Hartley & Sedge — Garden & Landscape Design, Cotswolds";
const description =
  "Hartley & Sedge is a garden and landscape design studio based in Cirencester, designing gardens for period houses across the Cotswolds that read as though they have always been there.";
const ogImage =
  "https://images.unsplash.com/photo-1696279976107-4d80eb0a7d82?q=80&fm=jpg&fit=crop&w=1200&h=630";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_GB",
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export const viewport = {
  themeColor: "#24331f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${zilla.variable} ${spectral.variable} ${archivo.variable} scroll-smooth`}
    >
      <body className="bg-paper text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000");

export const metadata = {
  title: "Wildan Andalaluna · Portfolio",
  description:
    "Portfolio of Wildan Rahmantya Andalaluna – Machine Learning & Web Developer building impactful digital products.",
  authors: [{ name: "Wildan Rahmantya Andalaluna" }],
  metadataBase: siteUrl,
  openGraph: {
    title: "Wildan Andalaluna – Portfolio",
    description:
      "Machine learning & web developer crafting intuitive experiences and data-driven solutions.",
    type: "website",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  const themeInitScript = `(() => {
  try {
    const key = "wildan-theme";
    const stored = window.localStorage.getItem(key);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("theme-dark", isDark);
  } catch (_) {}
})();`;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

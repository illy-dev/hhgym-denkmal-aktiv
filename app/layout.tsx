import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HHGYM Denkmal Aktiv",
  description: "Mauerprojekt des Heinrich-Hertz-Gymnasiums",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSans.className} antialiased`}>
            <SiteHeader />
          {children}
      </body>
    </html>
  );
}
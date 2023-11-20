import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MoveToTop from "@/components/MoveToTop";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hcd.hn - Hacker News client.",
  description: "Alternative Hacker News client.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-w-[1024px] w-full mx-auto">
          <Header />
          <div className="py-4">{children}</div>
          <MoveToTop />
        </div>
      </body>
    </html>
  );
}

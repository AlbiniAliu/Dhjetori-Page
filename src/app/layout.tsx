import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhjetori",
  description: "Landing page concept for Dhjetori.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OutoVox - Modern Software Solutions",
  description: "Cutting-edge software development and IT solutions. Transform your business with innovative technology.",
  keywords: ["software development", "IT solutions", "web development", "mobile apps", "cloud services"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}


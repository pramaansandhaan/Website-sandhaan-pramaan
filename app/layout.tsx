import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandhaan Pramaan | Legal Strategy & Compliance",
  description:
    "Sandhaan Pramaan offers legal strategy, tax advisory, and compliance solutions grounded in integrity and evidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

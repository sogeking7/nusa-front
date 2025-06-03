import type { Metadata } from "next";
import { Providers } from "./provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Резерв 1С",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

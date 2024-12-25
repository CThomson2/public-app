import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Provider } from "@/theme/theme";
import { Provider as UIProvider } from "@/components/ui/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rathburn Chemicals",
  description: "Rathburn Chemicals Ltd. - Public Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}

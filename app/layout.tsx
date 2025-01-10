import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { DarkModeToggle } from "../components/DarkModeToggle";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gonzalo Gonzalez",
  description: "Senior Software Engineer's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="grid place-items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-2 top-2">
            <DarkModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

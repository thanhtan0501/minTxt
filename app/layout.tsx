import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppProvider from "./context";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mintxt",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AppProvider>
        <body className={inter.className}>
          <ThemeProvider defaultTheme="default">
            <div className="h-screen flex flex-col items-center justify-between">
              <Header />
              <main className="flex-1 h-full w-full">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </AppProvider>
    </html>
  );
}

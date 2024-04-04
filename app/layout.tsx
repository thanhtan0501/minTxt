import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppProvider from "./context";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "MinTxt",
  title: {
    default: "MinTxt",
    template: "MinTxt",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MinTxt",
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "MinTxt",
    title: {
      default: "MinTxt",
      template: "MinTxt",
    },
  },
  twitter: {
    card: "summary",
    title: {
      default: "MinTxt",
      template: "MinTxt",
    },
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
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

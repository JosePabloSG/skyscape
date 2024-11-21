import { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { calistoga, poppins } from "@/lib/fonts";
import { ThemeProvider } from "./provider";
import Navbar from "@/components/layout/nav/nav";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s",
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    locale: "es",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.className,
          calistoga.variable,
          "bg-gray-400 antialiased dark:bg-dark-950 mx-4"
        )}
      >
        <ThemeProvider attribute='class' enableSystem={true}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

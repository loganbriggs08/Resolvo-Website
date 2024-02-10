import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import styles from "./layout.module.css";

import NavBar from "./components/navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solvio - Problems Made Easy.",
  description: "Crafting tailored software solutions to meet the end users needs.",
  themeColor: "#DD1546",

  openGraph: {
    siteName: "Resolvo",
    
    title: "Resolvo - Resolve Today, Innovate Tomorrow.",
    description: "Crafting tailored software solutions to meet the end users needs.",
    images: ["app_icon.png"]
  }
}

export const viewport = {
  "width=device-width, initial-scale=1, shrink-to-fit=no": "",
  "theme-color": "#DD1546"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta name="theme-color" content="#DD1546"></meta>

        <meta property="og:site_name" content="Solvio"></meta>
        <meta property="og:title" content="Solvio - Problems Made Easy."></meta>
        <meta property="og:description" content="Why should Problems have to be difficult? Don't struggle, use Solvio to remove the complexity from your homework."></meta>
        <meta property="og:image" content="https://solvio.app/website_screenshot.png"></meta>

        <title>Solvio - Problems Made Easy.</title>
      </head>
      <body className={`${styles.body} ${rubik.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

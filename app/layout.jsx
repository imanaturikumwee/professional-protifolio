import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "ie.together",
  description: "ie.together is a community of developers, designers, and creators who are passionate about building and creating things together.",
  icons: {
        icon: [
            {
                url: "/ie.ico", // /public path
                href: "/ie.ico/", // /public path
            },
        ],
    favIcon: "/favicon.ico", // /public path
      },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        
      </Head>
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

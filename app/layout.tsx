import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sairam Gurram - Software Engineer | Full Stack Developer",
  description: "Explore the professional world of Sairam Gurram, a Master’s student at SUNY Buffalo with expertise in backend development, API integration, and scalable solutions. Discover projects, skills, and more.",
  keywords: "Sairam Gurram, Software Engineer, Full Stack Developer, Backend Development, API Integration, React, Node.js, SUNY Buffalo, Programmer, Developer",
  author: "Sairam Gurram",
  robots: "index, follow",
  charset: "utf-8",
  language: "English",
  ogType: "website",
  ogUrl: "https://linktr.ee/sairamgu",
  ogTitle: "Sairam Gurram - Software Engineer | Full Stack Developer",
  ogDescription: "Discover Sairam Gurram's innovative software solutions and projects. Specializing in backend development, API integration, and full stack frameworks like React and Node.js.",
  ogImage: "https://ugc.production.linktr.ee/a39ac52b-e903-4367-be96-576fbb0ed77f_cropped-20240412-101342--3-.jpeg?io=true&size=avatar-v3_0",
  twitterCard: "summary_large_image",
  twitterUrl: "https://linktr.ee/sairamgu",
  twitterTitle: "Sairam Gurram - Software Engineer | Full Stack Developer",
  twitterDescription: "Explore the portfolio of Sairam Gurram, a master’s student and software engineer specializing in cutting-edge backend and full stack development. Check out my work and connect!",
  twitterImage: "https://ugc.production.linktr.ee/a39ac52b-e903-4367-be96-576fbb0ed77f_cropped-20240412-101342--3-.jpeg?io=true&size=avatar-v3_0"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata1 = {
  title: "LinkedAuto",
  description: "Manage your LinkedIn posts with ease",
  image: "/logo.png",
  type: "website",
};
export const metadata = {
  metadataBase: new URL("https://shashanknathe.vercel.app/"),
  title: {
    default: "Shashank Nathe",
    template: "%s | Shashank Nathe",
  },
  description: "Developer",
  site_name: "Shashank Nathe Portfolio",
  locale: "en_US",
  keywords: "Shashank, Shashank Nathe, blogs, portfolio",
  openGraph: {
    title: "Shashank Nathe",
    description: "Developer",
    url: "https://shashanknathe.vercel.app/",
    siteName: "Shashank Nathe",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 32,
        height: 32,
        alt: "Shashank Nathe Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Shashank Nathe",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased mb-10 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto max-w-4xl`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

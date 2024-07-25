import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: {
    default: "Shashank Nathe",
    template: "%s | Shashank Nathe",
  },
  description: "Developer",
  openGraph: {
    title: "Shashank Nathe",
    description: "Developer",
    url: "https://localhost:3000",
    siteName: "Shashank Nathe",
    locale: "en_US",
    type: "website",
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
      <body className={`${inter.className} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

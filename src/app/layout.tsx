import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { SessionProvider } from "@/app/components/SessionProvider";
import "./globals.css";
import UserButton from "./components/UserButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS ChatGPT App",
  description: "ChatGPT brought to you by NextJS",
};

export default function RootLayout({
  children,
  chats,
}: Readonly<{
  children: React.ReactNode;
  chats: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${inter.className} px-2 md:px-5`}>
          <header className="text-white font-bold bg-green-900 text-2xl p-2 mb-3 rounded-b-lg shadow-gray-700 shadow-lg flex">
            <div className="flex flex-grow">
              <Link href="/">GPT Chat</Link>
              <Link href="/about" className="ml-5 font-light">
                About
              </Link>
            </div>
            <div>
              <UserButton />
            </div>
          </header>
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
              <div className="flex">
                {chats}
                <div className="flex-1">{children}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}

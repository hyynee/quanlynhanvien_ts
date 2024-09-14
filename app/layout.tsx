import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AuthContext from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";






const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HRM",
  description: "Phần mềm quản lý nhân sự",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={inter.className}>
        <AuthContext>
          <Toaster/>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}

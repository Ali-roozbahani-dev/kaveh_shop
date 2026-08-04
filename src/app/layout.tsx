import type { Metadata } from "next";
import "./globals.css";
import { vazir } from "./fonts";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { DirectionProvider } from "@radix-ui/react-direction";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import { Toaster } from "@/components/ui/sonner"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "کاوه شاپ | فروشگاه اینترنتی لوازم خانگی",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("h-full", "antialiased", vazir.variable, "font-sans", geist.variable)}
    >
      <body className={vazir.className}>
        <DirectionProvider dir="rtl">
          <ReactQueryProvider>                                       
            {children}                        
          </ReactQueryProvider>
          <Toaster />          
        </DirectionProvider>
      </body>
    </html>
  );
}

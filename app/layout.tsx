import type { Metadata } from "next";
import { Figtree, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {  Home, MapPin, Search, Settings, DoorOpen } from "lucide-react"

// const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

// Components
import Header from '@/components/local/partials/header'
import Footer from '@/components/local/partials/footer'

export const metadata: Metadata = {
  title: process.env.SITENAME,
  description: "Munch up them tickets!",
};

export default function Layout({ children }: { 
  children: React.ReactNode }) {
  return (
    <html lang="en" className="main">
       <body className={figtree.className}>
        <div className="h-screen flex flex-col">
          <Header></Header>
          <div className="grow">
            {children}
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}

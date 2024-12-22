import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {  Home, MapPin, Search, Settings, DoorOpen } from "lucide-react"

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Venues",
    url: "/venues/create",
    icon: MapPin,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "/auth/logout",
    icon: DoorOpen,
  },
]

export const metadata: Metadata = {
  title: process.env.SITENAME,
  description: "Munch up them tickets!",
};

export default function Layout({ children }: { 
  children: React.ReactNode }) {
  return (
    <html lang="en" className="main">
       <body className={figtree.className}>
          <SidebarProvider>
            <AppSidebar items={items}/>
              <SidebarTrigger />
              {children}
          </SidebarProvider>
      </body>
    </html>
  )
}

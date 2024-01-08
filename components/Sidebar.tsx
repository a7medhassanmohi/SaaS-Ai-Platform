"use client"
import { cn } from '@/lib/utils'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import { Inter, Poppins,Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const montserrat = Montserrat({ subsets: ['latin'],weight:"600" })
type Props = {}
 type RouteType={
    label:string,
    icon: React.ElementType,
    href: string,
    color: string
}
const routes:RouteType[] = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: "text-sky-500"
    },
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: "text-orange-700",
      href: '/video',
    },
    {
      label: 'Music Generation',
      icon: Music,
      color: "text-emerald-500",
      href: '/music',
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: "text-green-700",
      href: '/code',
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/settings',
      color: "",

    },
  ];
  

const Sidebar = (props: Props) => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
         <div className="px-3 py-2 flex-1">
        {/* logo */}
         <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Genius
          </h1>
        </Link>
        {/* all routes */}
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
         </div>
    </div>
  )
}

export default Sidebar
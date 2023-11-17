'use client';
import { cn } from '@/lib/utils';
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });
const routes = [
  {
    lable: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    lable: 'Conversation',
    icon: MessageSquare,
    href: '/dashboard',
    color: 'text-violet-500',
  },
  {
    lable: 'Image Generation',
    icon: ImageIcon,
    href: '/dashboard',
    color: 'text-pink-700',
  },
  {
    lable: 'Video Generation',
    icon: VideoIcon,
    href: '/dashboard',
    color: 'text-orange-700',
  },
  {
    lable: 'Music Generation',
    icon: Music,
    href: '/dashboard',
    color: 'text-emerald-500',
  },
  {
    lable: 'Code Generation',
    icon: Code,
    href: '/dashboard',
    color: 'text-green-700',
  },
  {
    lable: 'Settings',
    icon: Settings,
    href: '/dashboard',
  },
];
const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill src="/logo.png" alt="logo" />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.lable}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

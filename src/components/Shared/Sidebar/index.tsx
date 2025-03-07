"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  Folder,
  CheckSquare,
  Settings,
  User,
  Shield,
  Link as LinkIcon,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={cn("h-screen w-16 flex flex-col bg-white dark:bg-black border-r p-2")}>
      <div className="flex items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
      </div>

      <nav className="flex-1 mt-4">
        <ul className="space-y-2 flex flex-col items-center">
          {[
            { href: "/", icon: Home },
            { href: "/dashboard", icon: LayoutDashboard },
            { href: "/projects", icon: Folder },
            { href: "/tasks", icon: CheckSquare },
            { href: "/settings", icon: Settings },
            { href: "/profile", icon: User },
            { href: "/security", icon: Shield },
            { href: "/integrations", icon: LinkIcon },
          ].map(({ href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-800",
                  pathname === href ? "bg-gray-300 dark:bg-gray-700" : ""
                )}
              >
                <Icon size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-center space-y-2 mt-auto">
        {[
          { href: "/billing", icon: CreditCard },
          { href: "/messages", icon: MessageSquare },
        ].map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-800",
              pathname === href ? "bg-gray-300 dark:bg-gray-700" : ""
            )}
          >
            <Icon size={18} />
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center p-2 relative">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4974/4974985.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-2 right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-black"></span>
      </div>
    </aside>
  );
};

export default Sidebar;

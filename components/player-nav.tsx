"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { players } from "@/lib/players";

const fontWeight = "font-semibold";

export const PlayerNav = () => {
  return (
    <NavigationMenu
      className={`max-w-full p-4 grow-0 bg-blue-100 ${fontWeight}`}
    >
      <NavigationMenuList className="justify-start ml-4">
        <NavigationMenuItem>
          <Link
            href="/"
            className={`${navigationMenuTriggerStyle()} ${fontWeight}`}
          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={fontWeight}>
            Players
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-48 p-1">
              {players.slice(0, -1).map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-muted">
                    <span className={fontWeight}>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

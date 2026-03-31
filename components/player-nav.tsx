"use client";

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
          <NavigationMenuLink
            href="/"
            className={`${navigationMenuTriggerStyle()} ${fontWeight}`}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={fontWeight}>
            Players
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-48 p-1">
              {players.map(({ label, href }) => (
                <li key={href}>
                  <NavigationMenuLink href={href}>
                    <span className={fontWeight}>{label}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

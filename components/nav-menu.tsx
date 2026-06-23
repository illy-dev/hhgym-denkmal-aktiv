"use client"

import * as React from "react"
import Link from "next/link"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projekte</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-65">
              <ListItem href="/twine-geschichten" title="Interaktive Geschichten">
                Point-and-Click-Abenteuer <br />zur
                DDR-Geschichte
              </ListItem>
              <ListItem href="/kunstwerke" title="Kunstwerke">
                Neu-Interpretierte Versionen der<br />Kunstwerke der East-Side-Gallery
              </ListItem>
              <ListItem href="/dokumentation" title="Dokumentationen">
                Erklärtexte zur <br /> Berliner Mauer
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

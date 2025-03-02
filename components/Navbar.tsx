"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const navigation = [
  { name: "School Life", href: "/school-life" },
  { name: "News & Events", href: "/news-events" },
  { name: "Alumni", href: "/alumni" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const schoolDropdownItems = [
  {
    name: "About Us",
    href: "/our-school/about-us",
    description: "Learn about our history, mission, and values",
  },
  {
    name: "Our Campuses",
    href: "/our-campuses",
    description: "Explore our world-class facilities",
  },
  {
    name: "Admissions",
    href: "/admissions",
    description: "Join our vibrant learning community",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/Kenton-College-Prep-School-Logo.avif"
              alt="Kenton Schools Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">
                Kenton College Preparatory
              </span>
              <span className="text-sm text-primary">School</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation with Dropdown */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "transition-colors hover:text-foreground/80 bg-transparent",
                    pathname.startsWith("/our-school") ||
                      pathname === "/our-campuses" ||
                      pathname === "/admissions"
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  Our School
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {schoolDropdownItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              pathname === item.href
                                ? "bg-accent text-accent-foreground"
                                : "transparent"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className={cn(
                      "block text-lg transition-colors hover:text-foreground/80",
                      pathname === "/"
                        ? "text-foreground font-medium"
                        : "text-foreground/60"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  {/* Our School section in mobile menu */}
                  <div className="space-y-3">
                    <div className="font-medium text-lg">Our School</div>
                    {schoolDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block text-base transition-colors hover:text-foreground/80 pl-4",
                          pathname === item.href
                            ? "text-foreground font-medium"
                            : "text-foreground/60"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block text-lg transition-colors hover:text-foreground/80",
                        pathname === item.href
                          ? "text-foreground font-medium"
                          : "text-foreground/60"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

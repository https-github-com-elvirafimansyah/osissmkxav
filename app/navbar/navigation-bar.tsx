"use client"

import * as React from "react"
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from "next-themes"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NavigationBar = () => {
  const { setTheme } = useTheme()
  if (window.localStorage.getItem("theme") === undefined) {
    window.localStorage.setItem("theme", "dark")
  }
  const [position, setPosition] = React.useState(window.localStorage.getItem("theme"))

  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger><IoMenu size="32px" /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg mt-10 text-foreground">
                  <Link href="/" className="font-medium  ">Beranda</Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="font-medium flex items-center gap-2">Organisasi <FaChevronDown /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Tentang</DropdownMenuItem>
                      <DropdownMenuItem>Kata Sambutan</DropdownMenuItem>
                      <DropdownMenuItem>Struktur Organisasi</DropdownMenuItem>
                      <DropdownMenuItem>MPK</DropdownMenuItem>
                      <DropdownMenuItem>Pengurus Harian</DropdownMenuItem>
                      <DropdownMenuItem>Seksi Bidang</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link href="/galeri" className="font-medium  ">Galeri</Link>
                  <Link href="/shop" className="font-medium  ">Shop</Link>
                  <Link href="/blog" className="font-medium  ">Blog</Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="rounded-xl w-10 h-10">
                        <IoIosSunny className="absolute w-[1rem] h-[1rem] transition-all text-primary rotate-90 scale-100 dark:rotate-0 dark:scale-100" />
                        <FaMoon className="absolute w-[1rem] h-[1rem] text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="light" onClick={() => setTheme("light")}>Light</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>Dark</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system" onClick={() => setTheme("system")}>System</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex">
        <div className="flex items-center text-foreground space-x-7">
          <Link href="/" className="font-medium  ">Beranda</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium flex items-center gap-2">Organisasi <FaChevronDown /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Tentang</DropdownMenuItem>
              <DropdownMenuItem>Kata Sambutan</DropdownMenuItem>
              <DropdownMenuItem>Struktur Organisasi</DropdownMenuItem>
              <DropdownMenuItem>MPK</DropdownMenuItem>
              <DropdownMenuItem>Pengurus Harian</DropdownMenuItem>
              <DropdownMenuItem>Seksi Bidang</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/galeri" className="font-medium  ">Galeri</Link>
          <Link href="/shop" className="font-medium  ">Shop</Link>
          <Link href="/blog" className="font-medium  ">Blog</Link>
          <DropdownMenu>
            <DropdownMenuTrigger  asChild>
              <Button variant="outline" className="rounded-xl w-10 h-10">
                <IoIosSunny className="absolute w-[1rem] h-[1rem] transition-all text-primary rotate-90 scale-100 dark:rotate-0 dark:scale-100" />
                <FaMoon className="absolute w-[1rem] h-[1rem] text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="light" onClick={() => setTheme("light")}>Light</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>Dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system" onClick={() => setTheme("system")}>System</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
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
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NavigationBar = () => {
  const { setTheme } = useTheme()

  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger><IoMenu size="32px" /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/" className="font-medium  ">Home</Link>
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
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex">
        <div className="flex items-center space-x-7">
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
              <Button variant="outline" size="icon">
                <IoIosSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
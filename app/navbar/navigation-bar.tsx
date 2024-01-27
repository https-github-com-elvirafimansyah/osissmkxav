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


import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NavigationBar = () => {
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
        <div className="flex space-x-7">
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
      </div>
    </div>
  );
}

export default NavigationBar;
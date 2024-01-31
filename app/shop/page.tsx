"use client"
import { useState, useEffect } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from 'next/link';
import produkdata from '../../data/produk.json';
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"
interface ProdukData {
  id?: number;
  title?: string;
  categori?: string;
  gambar?: string;
  harga?: number;
}

const produk_data = produkdata as ProdukData[]

const Shop = () => {
  const [chat, setChat] = useState(false)
  const scrollChat = () => {
    if (window.scrollY > 11) {
      setChat(true)
    } else {
      setChat(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollChat)
    return () => {
      window.addEventListener("scroll", scrollChat)
    }
  })
  
  return (
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl lg:text-[40px] font-black">Jelajahi Produk Kami</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Produk-produk berkualitas dari OSIS/OSISKA SMK Xaverius Palembang</p>
            </div>
            <div>
              <input placeholder="Cari berdasarkan kategori" className="w-full p-3 px-3.5 rounded-xl bg-transparent dark:bg-secondary border text-decs focus:outline-primary focus:border-primary focus:ring-primary"  />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-2xl">Kaos Sablon</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {produk_data && produk_data.map((_, idx) => (
                  <div className="bg-transparant dark:bg-secondary shadow-card dark:shadow-none rounded-xl border border-1 border-decs relative p-5 " key={idx}>
                    <Image
                      className="rounded-xl w-full h-[240px] object-cover"
                      src="/assets/osiska.png"
                      width={100}
                      height={100}
                      alt="Product"
                    />
                    <div className="space-y-2">
                      <p className="bg-pastel text-primary w-fit uppercase py-[7.5px] px-[14px] text-sm font-semibold rounded-full mt-3">kaos</p>
                      <div className="space-y-1">
                        <h4 className=" font-semibold">Kaos Sablon Desain Populer Kekinian</h4>
                        <h1 className="text-lg font-black">Rp. 20.000</h1>
                      </div>
                      <Button variant={"default"} className="w-full" asChild size={"lg"}>
                        <Link href="/">Beli Sekarang</Link>
                      </Button> 
                    </div>
                  </div>
                ))}
                
              </div>
          </div>
        </div>
        <Link
          href="https://wa.me/62089636406145?text=Selamat pagi/siang/malam, saya ingin mendapatkan informasi lebih lanjut mengenai shop osis smk xaverius?"
          className={`${chat ? `bg-white text-primary border dark:border-none dark:bg-primary dark:text-primary-foreground` : `bg-primary text-primary-foreground`} rounded-2xl px-5 py-3.5 fixed right-5 bottom-5 md:right-10 md:bottom-10 flex items-center font-medium space-x-2 `}
          target="_blank"
        >
          <FaWhatsapp size="24px"/>
          <span>Chat Kami</span>
        </Link>
      </section>
    </Container>
  );
}

export default Shop;
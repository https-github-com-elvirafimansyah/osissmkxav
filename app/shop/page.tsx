import Container from "@/components/container";
import Image from "next/image";
import Link from 'next/link';
import produkdata from '../../data/produk.json';

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
  return (
    <Container>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl lg:text-[40px] font-black">Jelajahi Produk Kami</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Produk-produk berkualitas dari OSIS/OSISKA SMK Xaverius Palembang</p>
            </div>
            <div>
              <input placeholder="Cari berdasarkan kategori" className="w-full p-3 px-3.5 rounded-xl bg-transparent dark:bg-secondary border  text-decs focus:outline-primary focus:border-primary outline-none"  />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-2xl">Kaos Sablon</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {produk_data && produk_data.map((_, idx) => (
                  <div className="bg-transparant dark:bg-secondary shadow-card dark:shadow-none rounded-xl border border-1 border-decs relative p-5 space-y-3" key={idx}>
                    <Image
                      className="rounded-xl w-full h-[240px] object-cover"
                      src="/assets/osiska.png"
                      width={100}
                      height={100}
                      alt="Product"
                    />
                    <p className="bg-pastel text-primary w-fit uppercase py-[7.5px] px-[14px] text-sm font-semibold rounded-full">kaos</p>
                    <h4 className="text-lg font-semibold">Kaos Sablon Desain Populer Kekinian</h4>
                    <h1 className="text-2xl font-black">Rp. 20.000</h1>
                    <Button variant={"default"} className="w-full" asChild size={"lg"}>
                      <Link href="/">Beli Sekarang</Link>
                    </Button> 
                  </div>
                ))}
                
              </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Shop;
import Image from "next/image";
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "@/components/container";
import { Button } from "@/components/ui/button"
import { MdOutlineShoppingCart } from "react-icons/md";

const Home = () => {
  const sourceImages = [
    {
      name: "foto bersama osis",
      width: 516,
      height: 341,
      src: "/assets/osiska.png"
    },
    {
      name: "logo osis",
      width: 100,
      height: 100,
      src: "/assets/logo.png"
    }
  ]

  return ( 
    <Container>
      <section className="py-10 md:py-16 lg:py-10 overflow-hidden">
        <div className="flex flex-col md:flex-row lg:items-center justify-between md:space-x-2 space-y-4 md:space-y-0">
          <div className="md:w-3/4 lg:w-1/2 space-y-3">
            <h1 className="font-black text-5xl md:text-4xl lg:text-5xl ">OSIS SMK Xaverius Palembang</h1>
            <p className="text-darkgray_light text-base md:text-sm lg:text-base font-medium">Selamat datang di website resmi OSIS/OSISKA SMK Xaverius Palembang. Website ini berisi informasi tentang OSISKA SMK  Xaverius Palembang masa bakti 2024.</p>
            <div className="flex space-x-2 pt-3">
              <Button variant={"default"} asChild size={"lg"}>
                <Link href="/shop"><MdOutlineShoppingCart size="20px" />&nbsp;Produk Kami</Link>
              </Button>
              <Button variant={"outline"} asChild size={"lg"}>
                <a href="#globalcases">Tentang Kami </a>
              </Button>
            </div>
          </div>
          <Carousel className="w-full sm:max-w-xs md:max-w-sm lg:max-w-lg  "
          >
            <CarouselContent>
              {sourceImages.map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex aspect-square items-center justify-center md:p-6">
                    <Image
                      src={_.src}
                      width={_.width}
                      height={_.height}
                      alt={_.name}
                    />
                  </div>
                </CarouselItem>
              ))}

            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </Container>
  );
}

export default Home;
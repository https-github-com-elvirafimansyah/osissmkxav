import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const HomePage = () => {
  return (
    <Container>
      <section className="py-10 md:py-16 lg:py-16 overflow-hidden">
        <div className="flex flex-col md:flex-row lg:items-center justify-between md:space-x-2 space-y-4 md:space-y-0">
          <div className="md:w-3/4 lg:w-1/2 space-y-3">
            <h1 className="font-black text-5xl md:text-4xl lg:text-5xl ">OSIS SMK Xaverius Palembang</h1>
            <p className="text-darkgray_light text-base md:text-sm lg:text-base font-medium">Selamat datang di website resmi OSIS/OSISKA SMK Xaverius Palembang. Website ini berisi informasi tentang OSISKA SMK  Xaverius Palembang masa bakti 2024.</p>
            <div className="flex space-x-2 pt-3">

            </div>
          </div>
          <Carousel className="w-full max-w-xs   " opts={{
            align: "start",
          }}>
              <CarouselContent>
                <CarouselItem >
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">1</span>
                  </div>
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          <span></span>
        </div>
      </section>
      
    </Container>
    
  );
}

export default HomePage;
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { Dot } from 'lucide-react';

const BlogTerbaru = () => {
  return (
    <Container>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl  lg:text-[40px] font-black">Blog Terbaru</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">Berikut ini adalah blog terbaru OSIS/OSISKA SMK Xaverius 2024</p>
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-6 ">
          <div className="border bg-transparant dark:bg-secondary flex flex-col md:flex-row md:space-x-5 p-5 md:p-6 rounded-xl relative space-y-4 md:space-y-0">
            <Image  
              src="/assets/upacara.png"
              width={309}
              height={231}
              alt="upacara"
              className="w-full md:w-[309px] md:h-[231px] roundede-xl"
            />
            <div className="space-y-3" >
              <div className="space-y-2">
                <p className="bg-card dark:bg-card text-primary w-fit uppercase py-[9px] px-[18px] text-xs font-bold rounded-full">kegiatan osis</p>
                <div className="space-y-1">
                  <h2 className="text-lg lg:text-xl font-extrabold hover:underline hover:decoration-primary underline-offset-4 line-clamp-2 text-ellipsis "><Link href="/">Upacara Pengibaran Sang Merah Putih Sekaligus Pelantikan Pengurus MPK dan OSIS/OSISKA SMK Xaverius Palembang Masa Bakti 2024.</Link></h2>
                  <p className="text-desc line-clamp-3 text-ellipsis text-sm lg:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book jdada dadadaidiwjdiwj </p>
                </div>
              </div>
              <div className="md:absolute md:bottom-6 right-6">
                <div className="flex items-center text-sm md:text-base" >
                  <p>Oleh: <span className="font-semibold">Amelia</span></p>
                  <Dot />
                  <p>17 Januari 2024</p>
                </div>
              </div>  
            </div>

            
          </div>
          
        </div>
      </section>
    </Container>

  );
}


export default BlogTerbaru;
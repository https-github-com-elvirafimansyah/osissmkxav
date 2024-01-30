import Container from "@/components/container";
import Image from "next/image";

const Motto = () => {
  return (
    <Container>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="rounded-xl border border-1 border-decs p-10 md:p-16">
          <div className="flex justify-center items-center flex-col space-y-4">
            <p className="bg-pastel text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">motto</p>
            <h1 className="text-3xl lg:text-[40px]  leading-[3.1rem] font-black text-center w-full md:w-3/4">“Bersama OSIS, Satukan Semangat, Wujudkan Prestasi Terbaik! “</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium text-center w-full md:w-3/4">Ayo satukan langkah menghadapi tantangan, wujudkan prestasi luar biasa dalam setiap aspek kehidupan sekolah kita bersama.</p>
          </div>
        </div>
      </section>
    </Container>
  )
}
export default Motto;

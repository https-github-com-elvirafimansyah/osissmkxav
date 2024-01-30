import Container from "@/components/container";
import Image from "next/image";

const Motto = () => {
  return (
    <Container>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="rounded-xl border border-1 border-decs p-6">
          <div className="flex justify-center items-center flex-col space-y-3">
            <p className="bg-pastel text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">tentang kami</p>
            <h1 className="text-4xl  lg:text-[40px] font-black">Siapa Kami?</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium text-center">OSIS merupakan kependekan dari Organisasi Siswa Intra Sekolah. Organisasi ini berada di tingkat sekolah dan dibentuk di sekolah menengah yaitu SMP dan SMA. Organisasi ini menjadi wadah berkumpulnya para siswa untuk mencapai tujuan tertentu. Organisasi ini terdiri dari susunan kepengurusan yang terdiri dari Ketua, Wakil Ketua, Sekretaris, Bendahara, kemudian Seksi-Seksi lainnya.  Kami OSIS SMK Xaverius Palembang masa bakti 2024 yang beranggotakan 40 orang diketuai oleh Febri Florensia Regitha Aprilianty</p>
            </div>
        </div>
      </section>
    </Container>
  )
}
export default Motto;

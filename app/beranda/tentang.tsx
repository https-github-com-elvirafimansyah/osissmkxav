import Container from "@/components/container";
import Image from "next/image";
const TentangKami = () => {
  return ( 
    <section className="bg-secondary dark:bg-background py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex justify-between flex-col md:flex-row items-center gap-y-10 md:gap-y-0">
          <div className="flex flex-col space-y-3 w-full md:w-4/6">
              <p className="bg-white dark:bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">tentang kami</p>
              <h1 className="text-4xl  lg:text-[40px] font-black">Siapa Kami?</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">OSIS merupakan kependekan dari Organisasi Siswa Intra Sekolah. Organisasi ini berada di tingkat sekolah dan dibentuk di sekolah menengah yaitu SMP dan SMA. Organisasi ini menjadi wadah berkumpulnya para siswa untuk mencapai tujuan tertentu. Organisasi ini terdiri dari susunan kepengurusan yang terdiri dari Ketua, Wakil Ketua, Sekretaris, Bendahara, kemudian Seksi-Seksi lainnya.  Kami OSIS SMK Xaverius Palembang masa bakti 2024 yang beranggotakan 40 orang diketuai oleh Febri Florensia Regitha Aprilianty</p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/4">
            <div className="bg-primary px-[70px] py-[65px] border-8 border-white rounded-full outline outline-[10px] outline-offset-1 outline-primary">
              <Image
                src="/assets/logo.png"
                width={120}
                height={120}
                alt="Logo OSIS/OSISKA"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
 
export default TentangKami;
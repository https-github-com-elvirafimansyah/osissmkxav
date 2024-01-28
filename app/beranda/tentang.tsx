import Container from "@/components/container";
import Image from "next/image";

const TentangKami = () => {
  return ( 
    <section className="bg-lightbg py-10 md:py-16 lg:py-16">
      <Container>
          <div className="flex justify-between flex-col md:flex-row items-center">
              <div className="flex flex-col space-y-3 w-full md:w-1/2">
                  <p className="bg-white text-primaryblue w-fit uppercase py-[13px] px-[20px] text-sm font-semibold rounded-full">tentang kami</p>
                  <h1 className="text-5xl md:text-4xl lg:text-5xl font-black">Siapa Kami?</h1>
                  <p className="text-darkgray_light text-base md:text-sm lg:text-base font-medium">OSIS merupakan kependekan dari Organisasi Siswa Intra Sekolah. Organisasi ini berada di tingkat sekolah dan dibentuk di sekolah menengah yaitu SMP dan SMA. Organisasi ini menjadi wadah berkumpulnya para siswa untuk mencapai tujuan tertentu. Organisasi ini terdiri dari susunan kepengurusan yang terdiri dari Ketua, Wakil Ketua, Sekretaris, Bendahara, kemudian Seksi-Seksi lainnya.  Kami OSIS SMK Xaverius Palembang masa bakti 2024 yang beranggotakan 40 orang diketuai oleh Febri Florensia Regitha Aprilianty</p>
              </div>
              <div className="flex justify-center items-center w-full md:w-1/2">
                <div className="bg-primaryblue px-[70px] py-[65px] border border-3 border-white rounded-full outline outline-[10px] border border-8 border-white outline-offset-1 outline-primaryblue">
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
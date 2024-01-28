import Container from "@/components/container";
import Image from "next/image";
import { promises as fs } from 'fs';

const PengurusHarian = async () => {
  const file = await fs.readFile(process.cwd() + '/data/pengurus.json', 'utf8');
  const data = JSON.parse(file)
  console.log(data)
  return ( 
    <Container>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-5xl md:text-4xl lg:text-[40px] font-black">Pengurus Harian</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">Mengenal lebih dalam tentang Pengurus Harian OSIS/OSISKA SMK Xaverius Palembang</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h1>{data.title}</h1>
            <p>{data.content}</p>
{/*             
            <div>
              <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none">
                <div className="flex space-x-3 items-center">
                  <div>
                    <Image
                      className="rounded-full w-[58px] h-[58px] object-cover "
                      src="/assets/osiska.png"
                      width={100}
                      height={100}
                      alt="Profile"
                    />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-lg md:text-base lg:text-lg">Florensia Regitha. A</h5>
                    <p className="font-medium text-desc">Ketua</p>
                  </div>
                </div>
              </div>
            </div>
             */}

          </div>
        </div>
      </section>
    </Container>

  );
}

export default PengurusHarian;
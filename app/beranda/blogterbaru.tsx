import Container from "@/components/container";

const BlogTerbaru = () => {
  return (
    <Container>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl  lg:text-[40px] font-black">Pengurus Harian</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">Mengenal lebih dalam tentang Pengurus Harian OSIS/OSISKA SMK Xaverius Palembang</p>
          </div>
        </div>
      </section>
    </Container>

  );
}


export default BlogTerbaru;
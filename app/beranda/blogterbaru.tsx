import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { Dot } from 'lucide-react';

import blogdata from "../../data/blog.json"

interface BlogData {
  id?: number;
  title?: string;
  category?: string;
  subCategory?: object;
  description?: string[];
  subDesc?: object;
  authorName?: string;
  authorAvatar?: string;
  createdAt?: string;
  estimated?: string;
  cover?: string;
}

const blog_data = blogdata as BlogData[]

const linkPath = (path: any) => {
  return path.replace(/\s+/g, '-');
}

const blog_1 = blog_data[0];
const blog_2 = blog_data[1];


const BlogTerbaru = () => {
  return (
    <Container>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl  lg:text-[40px] font-black">Blog Terbaru</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">Berikut ini adalah blog terbaru OSIS/OSISKA SMK Xaverius 2024</p>
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-6 ">
          <div className="border bg-transparant dark:bg-secondary flex flex-col md:flex-row md:space-x-5 p-5 md:p-6 rounded-xl relative space-y-4 md:space-y-0  dark:shadow-none">
            <Image
              src={blog_1.cover ? blog_1.cover : ''}
              width={309}
              height={231}
              alt="upacara"
              className="w-full md:w-[309px] md:h-[231px] rounded-xl"
            />
            <div className="space-y-3" >
              <div className="space-y-2">
                <p className="bg-card text-primary w-fit uppercase py-[9px] px-[18px] text-xs font-bold rounded-full">{blog_1.category}</p>
                <div className="space-y-1">
                  <h2 className="text-lg lg:text-xl font-extrabold hover:underline hover:decoration-primary underline-offset-4 line-clamp-2 text-ellipsis "><Link href={`/blog/${linkPath(blog_1.title?.toLocaleLowerCase())}`}>{blog_1.title}</Link></h2>
                  <p className="text-desc line-clamp-3 text-ellipsis text-sm lg:text-base">{blog_1.description}</p>
                </div>
              </div>
              <div >
                <div className="md:absolute md:bottom-6 ">
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base" >
                    <p>Oleh: <span className="font-semibold">{blog_1.authorName}</span></p>
                    <Dot className="hidden sm:block" />
                    <p>{blog_1.createdAt}</p>
                  </div>
                </div>
                <div className="absolute text-xs md:text-sm right-6 bottom-6 text-desc">{blog_1.estimated}</div>
              </div>
            </div>
          </div>
          <div className="border bg-transparant dark:bg-secondary flex flex-col md:flex-row md:space-x-5 p-5 md:p-6 rounded-xl relative space-y-4 md:space-y-0  dark:shadow-none">
            <Image
              src={blog_2.cover ? blog_2.cover : ''}
              width={309}
              height={231}
              alt="upacara"
              className="w-full md:w-[309px] md:h-[231px] rounded-xl"
            />
            <div className="space-y-3" >
              <div className="space-y-2">
                <p className="bg-card text-primary w-fit uppercase py-[9px] px-[18px] text-xs font-bold rounded-full">{blog_2.category}</p>
                <div className="space-y-1">
                  <h2 className="text-lg lg:text-xl font-extrabold hover:underline hover:decoration-primary underline-offset-4 line-clamp-2 text-ellipsis "><Link href={`/blog/${linkPath(blog_2.title?.toLocaleLowerCase())}`}>{blog_2.title}</Link></h2>
                  <p className="text-desc line-clamp-3 text-ellipsis text-sm lg:text-base">{blog_1.description}</p>
                </div>
              </div>
              <div >
                <div className="md:absolute md:bottom-6 ">
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base" >
                    <p>Oleh: <span className="font-semibold">{blog_2.authorName}</span></p>
                    <Dot className="hidden sm:block" />
                    <p>{blog_2.createdAt}</p>
                  </div>
                </div>
                <div className="absolute text-xs md:text-sm right-6 bottom-6 text-desc">{blog_2.estimated}</div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/blog"
          className="bg-white text-primary border dark:border-none dark:bg-primary dark:text-primary-foreground"
          target="_blank"
        >
          <span className="hidden md:block">Chat Kami</span>
        </Link>
      </section>
    </Container>

  );
}


export default BlogTerbaru;
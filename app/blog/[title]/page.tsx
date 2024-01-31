'use client'

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

import { useParams } from 'next/navigation'
import { FC } from "react";

import { Dot } from 'lucide-react';


import blogdata from "../../../data/blog.json"

interface BlogData {
  id?: number;
  title?: string;
  category?: string;
  subCategory?: object;
  description?: string;
  subDesc?: object;
  authorName?: string;
  authorAvatar?: string;
  createdAt?: string;
  estimated?: string;
  cover?: string;
}

const blog_data = blogdata as BlogData[]

interface detailProps{
  params: {title: string};
}


const BlogDetail: FC<detailProps> = ({params}) => {
    const linkPath = (path: any) => {
      return path.replace(/-/g, ' ');
    }
    const blogdetail = blog_data.find((data) => data.title === linkPath(params.title));

    return (
    <Container>
        <section className="py-8 md:py-10 lg:py-12">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-3">
                  <div className="flex flex-col space-y-4">
                  <h1 className="text-4xl lg:text-[40px] font-black">Blog</h1>
                  <p className="text-desc text-base md:text-sm lg:text-base font-medium">Berikut ini adalah blog OSIS/OSISKA SMK Xaverius 2024</p>
                  </div>
                  <div>
                  <input placeholder="Cari Blog" className="w-full p-3 px-4 rounded-xl bg-transparent dark:bg-secondary border text-decs focus:outline-primary  focus:border-primary focus:ring-primary"
                  />
                  </div>
              </div>
              <div className="flex flex-col space-y-5 mt-6 ">
                <h1 className="capitalize">{linkPath(params.title)}</h1>

              </div>
            </div>
        </section>
      </Container>
    );
}
 
export default BlogDetail;
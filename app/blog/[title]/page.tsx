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
  description?: string[];
  authorName?: string;
  authorAvatar?: string;
  createdAt?: string;
  estimated?: string;
  cover?: string;
}

const blog_data = blogdata as BlogData[]

interface detailProps {
  params: { title: string };
}

const BlogDetail: FC<detailProps> = ({ params }) => {

  const stripPath = (path: any) => {
    return path.replace(/\s+/g, '-');
  }


  const blogdetail = blog_data.find((data) => stripPath(data?.title).toLocaleLowerCase() === params.title);

  return (
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-5 mt-6 ">
            <p className="bg-pastel text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">{blogdetail?.category}</p>
            <h1 className="text-2xl lg:text-3xl font-black leading-[3.1rem]">{blogdetail?.title}</h1>
            <div className="flex items-center text-sm md:text-base" >
              <p>Oleh: <span className="font-semibold">{blogdetail?.authorName}</span></p>
              <Dot />
              <p>{blogdetail?.createdAt}</p>
            </div>
            <Image
              src={blogdetail?.cover ? blogdetail?.cover : ''}
              width={309}
              height={231}
              alt="upacara"
              className="w-full md:w-full md:h-[231px] object-cover rounded-xl"
            />
            <div className="flex flex-col space-y-1">
              {blogdetail?.description?.map((des, idx) => <p key={idx}>{des}</p>)}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default BlogDetail;
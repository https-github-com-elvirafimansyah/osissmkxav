"use client"

import React, { useState, useEffect } from "react";
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

const Blog = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<BlogData[]>([])

  const filterData = (searchValue: string): void => {
    setInput(searchValue);

    const filteredData: BlogData[] = blog_data.filter((blog) => {
      const titleMatch = typeof blog.title === 'string' && blog.title.toLowerCase().includes(searchValue.toLowerCase());
      const descriptionMatch = Array.isArray(blog.description) && typeof blog.description[0] === 'string' && blog.description[0].toLowerCase().includes(searchValue.toLowerCase());

      return titleMatch || descriptionMatch;
    });

    setOutput(filteredData);
  };


  console.log(blog_data[0])
  
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
              onChange={(e) => filterData(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-5 mt-6 ">
          {input ? (
            <>
              {output.length >= 1 ? (
                output.map((hasil, idx) => (
                  <div key={idx} className="border bg-transparant dark:bg-secondary flex flex-col md:flex-row md:space-x-5 p-5 md:p-6 rounded-xl relative space-y-4 md:space-y-0  dark:shadow-none">
                    <Image
                      src={hasil.cover ? hasil.cover : ''}
                      width={309}
                      height={231}
                      alt="upacara"
                      className="w-full md:w-[309px] md:h-[231px] rounded-xl"
                    />
                    <div className="space-y-3" >
                      <div className="space-y-2">
                        <p className="bg-card text-primary w-fit uppercase py-[9px] px-[18px] text-xs font-bold rounded-full">{hasil.category}</p>
                        <div className="space-y-1">
                          <h2 className="text-lg lg:text-xl font-extrabold hover:underline hover:decoration-primary underline-offset-4 line-clamp-2 text-ellipsis "><Link href={`/blog/${linkPath(hasil.title?.toLocaleLowerCase())}`}>{hasil.title}</Link></h2>
                          <p className="text-desc line-clamp-3 text-ellipsis text-sm lg:text-base">{hasil.description}</p>
                        </div>
                      </div>
                      <div >
                        <div className="md:absolute md:bottom-6 ">
                          <div className="flex items-center text-sm md:text-base" >
                            <p>Oleh: <span className="font-semibold">{hasil.authorName}</span></p>
                            <Dot />
                            <p>{hasil.createdAt}</p>
                          </div>
                        </div>
                        <div className="absolute text-xs md:text-sm right-6 bottom-6 text-desc">{hasil.estimated}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-red-500">Maaf, Pencarian anda tidak ditemukan</h1>
              )}
            </>
            ) : (
              (blog_data.map((_, idx) => (
                <div key={idx} className="border bg-transparant dark:bg-secondary flex flex-col md:flex-row md:space-x-5 p-5 md:p-6 rounded-xl relative space-y-4 md:space-y-0  dark:shadow-none">
                  <Image
                    src={_.cover ? _.cover : ''}
                    width={309}
                    height={231}
                    alt="upacara"
                    className="w-full md:w-[309px] md:h-[231px] rounded-xl"
                  />
                  <div className="space-y-3" >
                    <div className="space-y-2">
                      <p className="bg-card text-primary w-fit uppercase py-[9px] px-[18px] text-xs font-bold rounded-full">{_.category}</p>
                      <div className="space-y-1">
                        <h2 className="text-lg lg:text-xl font-extrabold hover:underline hover:decoration-primary underline-offset-4 line-clamp-2 text-ellipsis "><Link href={`/blog/${linkPath(_.title?.toLocaleLowerCase())}`}>{_.title}</Link></h2>
                        <p className="text-desc line-clamp-3 text-ellipsis text-sm lg:text-base">{_.description}</p>
                      </div>
                    </div>
                    <div >
                      <div className="md:absolute md:bottom-6 ">
                        <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base" >
                          <p>Oleh: <span className="font-semibold">{_.authorName}</span></p>
                          <Dot className="hidden sm:block" />
                          <p>{_.createdAt}</p>
                        </div>
                      </div>
                      <div className="absolute text-xs md:text-sm right-6 bottom-6 text-desc">{_.estimated}</div>
                    </div>
                  </div>
                </div>
              )))
            )}
            

          </div>
        </div>
      </section>
    </Container>
  );
}

export default Blog;
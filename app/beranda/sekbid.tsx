"use client"
import Container from "@/components/container";
import Image from "next/image";
import { FaPray } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";
import { useEffect, useState } from "react";
import Jesus from "./icons/Jesus";
import SekbidData from "../../data/sekbid_data";

const Sekbid = () => {

  return(
    <Container>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl lg:text-[40px] font-black">Seksi Bidang</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">Mengenal lebih dalam tentang Seksi Bidang OSIS SMK Xaverius Palembang</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">                       
              {SekbidData.map((_, idx) => (
                <div key={idx} className="md:h-[300px] bg-transparant dark:bg-secondary shadow-card dark:shadow-none rounded-xl border border-1 border-decs relative ">
                  <div className="">
                      <div className="p-6 flex flex-col space-y-5">
                        <div className="bg-primary w-fit p-4 rounded-xl text-white">
                            {_.icon}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="font-bold">Seksi Bidang {_.no}</p>
                            <h3 className="font-extrabold text-xl">{_.title}</h3>
                        </div>
                      </div>
                      <div className="md:absolute md:bottom-0 p-6 w-full">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex space-x-2">
                              <div>
                                  <Image 
                                      className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                      src={_.profile}
                                      width={100}
                                      height={95}
                                      alt="Profile"
                                  />
                              </div>
                              <div>
                                <h5 className="font-extrabold">{_.koordinator}</h5>
                                <p className="text-sm text-desc font-medium">Koordinator</p>
                              </div>
                            </div>
                            <div className="items-center flex py-3 md:py-0">
                              {_.member.map((anggota, id) => (
                                  <div className={`relative ${anggota.class}`} key={id}>
                                    <Image 
                                      className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                                      src="/assets/osiska.png"
                                      width={100}
                                      height={95}
                                      alt="Profile"
                                    />
                                  </div>
                              ))}
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
              ))}

              <div className="md:h-[300px] bg-transparant dark:bg-secondary shadow-card dark:shadow-none rounded-xl border border-1 border-decs relative ">
                  <div className="">
                      <div className="p-6 flex flex-col space-y-5">
                        <div className="bg-primary w-fit p-4 rounded-xl text-white">
                            <Jesus />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="font-bold">Seksi Bidang 1</p>
                            <h3 className="font-extrabold text-xl">Ketuhanan</h3>
                        </div>
                      </div>
                      <div className="md:absolute md:bottom-0 p-6 w-full">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex space-x-2">
                              <div>
                                  <Image 
                                      className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                      src="/assets/osiska"
                                      width={100}
                                      height={95}
                                      alt="Profile"
                                  />
                              </div>
                              <div>
                                <h5 className="font-extrabold">Cindy</h5>
                                <p className="text-sm text-desc font-medium">Koordinator</p>
                              </div>
                            </div>
                            <div className="items-center flex">
                              <div className="relative z-0 md:left-[12px]">
                                <Image 
                                  className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                                />
                              </div>
                              <div className="relative z-0 right-[6px] md:left-[6px]">
                                <Image 
                                  className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                                />
                              </div>
                              <div className="relative z-10 right-[12px] md:right-0">
                                <Image 
                                  className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                                />
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
 
export default Sekbid;
"use client"
import Container from "@/components/container";
import Image from "next/image";
import { FaPray } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";
import { useEffect, useState } from "react";
import Jesus from "./icons/Jesus";

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

              {/* {data.map((_, idx) => (
                <div>

                </div>
              ))} */}
              
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 1</p>
                          <h3 className="font-extrabold text-xl">Keimanan & Kecintaan terhadap Tuhan Yang Maha Esa</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Margaretha Cindy</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 2</p>
                          <h3 className="font-extrabold text-xl">Wawasan Kebangsaan dan Nasionalisme</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Tiara Angelica</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 3</p>
                          <h3 className="font-extrabold text-xl">Wawasan Keilmuan & IPTEK</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Peter King</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
            {/* Rows 2 */}
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10 ">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 4</p>
                          <h3 className="font-extrabold text-xl">Kepribadian, Budi Pekerti, & Kehidupan Berbangsa</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Unknown</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                <div className="flex flex-col space-y-10 ">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 5</p>
                          <h3 className="font-extrabold text-xl">Keterampilan & Kewirausahaan</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Unknown</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 6</p>
                          <h3 className="font-extrabold text-xl">Kepemimpinan & Demokrasi</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Unknown</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
              {/* Row 3 */}
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 7</p>
                          <h3 className="font-extrabold text-xl">Apresiasi Seni Budaya & Daya Kreasi</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Unknown</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 8</p>
                          <h3 className="font-extrabold text-xl">Olahraga & Kesehatan</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Ryu Fernandez</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
              <div>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-6 rounded-xl bg-transparant dark:bg-secondary shadow-card dark:shadow-none h-[300px]">
                    <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        <Jesus />
                    </div>
                    <div className="flex flex-col space-y-10">
                      <div className="flex flex-col space-y-1">
                          <p className="font-bold">Seksi Bidang 9</p>
                          <h3 className="font-extrabold text-xl">Lingkungan Hidup</h3>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                              <Image 
                                  className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                                  src="/assets/osiska.png"
                                  width={100}
                                  height={95}
                                  alt="Profile"
                              />
                          </div>
                          <div>
                            <h5 className="font-extrabold">Meisy</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="items-center flex">
                          <div className="relative z-0 left-[12px]">
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10 left-[6px]" >
                            <Image 
                              className="rounded-full w-[30px] h-[30px] object-cover border-2 border-decs"
                              src="/assets/osiska.png"
                              width={100}
                              height={95}
                              alt="Profile"
                            />
                          </div>
                          <div className="relative z-10" >
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
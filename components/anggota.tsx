import React from "react";
import Container from "./container";
import Image from "next/image";

interface User {
  profile?: string;
  name?: string;
  role?: string;
}

interface UserListProps {
  data?: User[];
  title?: string;
  description?: string;
  type?: string;
}

const Anggota: React.FC<UserListProps> = ({data, title, description, type}) => {
  return (
    <Container>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl  lg:text-[40px] font-black">{title}</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">{description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data && data.map((user, index) => (
              <div key={index}>
                <div className="flex flex-col space-y-5 border border-1 border-decs p-5 rounded-xl bg-transparant dark:bg-secondary  dark:shadow-none">
                  <div className="flex space-x-4 items-center">
                    <div>
                      <Image
                        className="rounded-full w-[58px] h-[58px] object-cover "
                        src={user.profile ? user.profile : "/assets/rgb.jpg"}
                        width={100}
                        height={100}
                        alt="Profile"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg md:text-base lg:text-lg capitalize">{user.name}</h5>
                      <p className="font-medium text-base md:text-sm lg:text-base text-desc capitalize">{user.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}


export default Anggota;
import Image from 'next/image'
const Logo = () => {
  return ( 
    <div className='flex items-center gap-2.5'>
      <Image
        src="/assets/logo.png"
        width={38}
        height={38}
        alt="logo"
      />
      <div className='flex flex-col mt-1.5'>
        <span className='text-xs'>Organisasi Siswa Intra Sekolah</span>
        <span className='text-lg font-bold'>SMK Xaverius Palembang</span>
      </div>
    </div>
  );
}

export default Logo;
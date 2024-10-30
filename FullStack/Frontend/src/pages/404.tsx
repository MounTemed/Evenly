// pages/404.tsx
import React from 'react'
import Image from 'next/image'
import Error from '../../public/error.png'
import Error404 from '../../public/error-bg.png'
import Logo from '../../public/logoerror.svg'
import Burger from '../../public/burger.png'

const Custom404: React.FC = () => {
  return (
    <div className='bg-[#13111A] font-roboto h-screen flex flex-col'>
      <header className='mt-9 px-5 md:px-16'>
        <div className='flex items-center justify-between w-full max-w-[1180px] mx-auto'>
          <div className='flex items-center'>
            <Image src={Logo} alt='Logo' width={30} height={30} />
            <div className='ml-2 font-poppins'>
              <h1 className='text-lg md:text-xl font-bold'>Evenly</h1>
              <p className='font-light text-xs md:text-sm pl-8 tracking-wide'>
                TESTING
              </p>
            </div>
          </div>
          <div className='hidden md:flex space-x-4'>
            {['Error ', 'Support', ' Error'].map(text => (
              <button
                key={text}
                className='bg-transparent border border-[#9A9A9A] rounded-lg h-9 w-24 transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] hover:border-none'
              >
                <span className='text-sm font-medium'>{text}</span>
              </button>
            ))}
          </div>
          <div className='md:hidden'>
            <button className='text-lg'>
              <Image
                src={Burger}
                alt='Menu'
                width={35}
                height={35}
                placeholder='blur'
              />
            </button>
          </div>
        </div>
      </header>
      <main className='h-screen flex flex-col md:flex-row justify-center items-center text-center mt-10'>
        <div className='w-full max-w-[569px] mx-4'>
          <h1 className='text-[35px] md:text-[80px] font-bold tracking-[15px]'>
            <span className='text-[#527EFB]'>404</span>-error
          </h1>
          <p className='font-semibold text-[25px] md:text-[40px] tracking-[3px] mt-4'>
            PAGE NOT <span className='text-[#6953CD]'> FOUND</span>
          </p>
          <p className='text-[16px] md:text-[18px] text-gray-400 mt-2'>
            Your search has ventured beyond the known universe.
          </p>
          <div className='flex justify-center mt-6'>
            <button className='h-[50px] border border-transparent rounded-[59px] flex bg-gradient-to-r from-[#6ddcff] to-[#7f60f9]'>
              <a
                href='http://localhost:3000/'
                className='text-white w-[156px] h-[48px] rounded-[60px] bg-[#13111A] flex justify-center items-center text-center transition duration-300 hover:bg-gradient-to-r from-[#6DDCFF]  to-[#7F60F9]'
              >
                Back To Home
              </a>
            </button>
          </div>
        </div>
        <div className='relative mt-10 md:mt-0 md:ml-10 flex justify-center'>
          <div className='max-w-[200px] w-[300px]'>
            <Image
              src={Error}
              alt='kosmonavvt'
              className='z-10 w-[300px] rounded-md'
              layout='responsive'
            />
            <Image
              src={Error404}
              alt='bg'
              className='absolute top-0 left-0 z-0 w-full opacity-100 rounded-full blur-[5em]'
              layout='responsive'
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Custom404

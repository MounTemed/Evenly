// src/components/layout/Header.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Burger from '../../../public/burger.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`px-5 md:px-16 ${isOpen ? 'mt-0' : 'mt-9'}`}>
      <div className='flex items-center justify-between w-full max-w-[1180px] mx-auto'>
        <div className='flex items-center'>
          <Image src={Logo} alt='Logo' width={30} height={30} />
          <div className='ml-2'>
            <h1 className='text-lg md:text-xl font-bold'>Evenly</h1>
            <p className='font-light text-xs md:text-sm pl-8 tracking-wide'>
              TESTING
            </p>
          </div>
        </div>
        <div className='hidden md:flex space-x-4'>
          {['About me', 'Contact'].map(text => (
            <button
              key={text}
              className='bg-transparent border border-[#9A9A9A] rounded-lg h-9 w-24 transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#CE4DA4] to-[#7353E5] hover:border-none hover:scale-105 hover:animate-gradient'
            >
              <span className='text-sm font-medium'>{text}</span>
            </button>
          ))}
        </div>

        <div className='md:hidden'>
          <button className='text-lg' onClick={toggleMenu}>
            <Image
              src={Burger}
              alt='Menu'
              width={35}
              height={35}
            />
          </button>
        </div>
      </div>


      {isOpen && (
        <>
          <div
            className='fixed inset-0 z-40 bg-black opacity-50'
            onClick={toggleMenu}
          />
          <div className='fixed top-0 left-0 w-full h-full z-50 bg-black'>
            <div className='flex flex-col space-y-2 p-4'>
              {['About me', 'Contact'].map(text => (
                <button
                  key={text}
                  className='w-full text-left bg-transparent border border-[#9A9A9A] rounded-lg h-9 transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#CE4DA4] to-[#7353E5] hover:border-none hover:scale-105 hover:animate-gradient'
                  onClick={toggleMenu}
                >
                  <span className='text-sm font-medium text-white'>{text}</span>
                </button>
              ))}
            </div>

            <button
              className='absolute top-[120px] right-[35px] text-white'
              onClick={toggleMenu}
            >
              <Image
                src={Burger}
                alt='Close Menu'
                width={35}
                height={35}
              />
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

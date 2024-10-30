// src/components/layout/Header.tsx
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Burger from '../../../public/burger.png';

const Header: React.FC = () => {
  return (
    <header className='mt-9 px-5 md:px-16'>
      <div className='flex items-center justify-between w-full max-w-[1180px] mx-auto'>
        <div className='flex items-center'>
          <Image src={Logo} alt='Logo' width={30} height={30}/>
          <div className='ml-2'>
            <h1 className='text-lg md:text-xl font-bold'>Evenly</h1>
            <p className='font-light text-xs md:text-sm pl-8 tracking-wide'>TESTING</p>
          </div>
        </div>
        <div className='hidden md:flex space-x-4'>
          {['About me', 'Contact'].map(text => (
            <button
              key={text}
              className='bg-transparent border border-[#9A9A9A] rounded-lg h-9 w-24 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#CE4DA4] hover:to-[#7353E5] hover:border-none'
            >
              <span className='text-sm font-medium'>{text}</span>
            </button>
          ))}
        </div>
        <div className='md:hidden'>
          <button className='text-lg'>
            <Image src={Burger} alt='Menu' width={35} height={35} placeholder="blur"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// src/components/sections/MainContent.tsx
import Image from 'next/image'
import Avatars from '../../../public/avatar.gif'
import PinkImage from '../../../public/pink.png'
import PurpleImage from '../../../public/purples.svg'

const MainContent: React.FC = () => {
  return (
    <main className='mt-14'>
      <div className='relative flex items-center justify-center'>
        <div className='absolute'>
          <Image
            src={PinkImage}
            alt='Pink'
            width={190}
            height={190}
            className='rounded-full'
          />
          <div className='absolute inset-0 bg-[#CE4DA4] bottom-[41px] left-[41px] opacity-75 rounded-full blur-[5em]' />
        </div>
        <div className='absolute'>
          <Image
            src={PurpleImage}
            alt='Purple'
            width={190}
            height={190}
            className='rounded-full'
          />
          <div className='absolute inset-0 bg-[#7353E5] top-[41px] right-[41px] opacity-75 rounded-full blur-[5em]' />
        </div>
        <div className='relative w-[231px] h-[231px] rounded-full overflow-hidden flex items-center justify-center'>
          <Image
            src={Avatars}
            alt='Avatar'
            fill={true}
            className='object-cover rounded-full'
            unoptimized
          />
        </div>
      </div>
      <div className='mt-9 px-4'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center'>
          LaiMicK Developer
        </h1>
        <h4 className='flex justify-center text-lg md:text-xl font-semibold text-[#878787]'>
          I do Code &&nbsp;
          <span className='bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] text-transparent bg-clip-text'>
            DevOps
          </span>
          <span className='ml-1'>🍿</span>
        </h4>
        <div className='mt-10 flex justify-center'>
          <p className='text-[16px] text-center w-full max-w-[706px] h-auto text-lg font-medium text-[#E1E1E1] relative'>
            The key to making this transition to continuous delivery is waiting
            for the situation to get worse before you can improve it.
          </p>
        </div>

        <div className='flex justify-center mt-12'>
          <button className='relative w-full max-w-[187px] h-[55px] border-[#585858] border rounded-full hover:bg-gradient-to-r hover:from-[#CE4DA4] hover:to-[#7353E5] hover:border-none'>
            <span className='absolute inset-0 bg-black opacity-20 rounded-full'></span>
            <span className='relative z-10 text-white font-medium'>
              Contact Me
            </span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default MainContent

import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Avatars from '../../public/avatar.gif'
import PurpleImage from '../../public/purples.svg'
import PinkImage from '../../public/pink.png'
import Burger from '../../public/burger.png'

export default function Home () {
  return (
    <div className='font-poppins'>
      <header className='mt-[35px] px-[20px] md:px-[146px]'>
        <div className='flex items-center justify-between w-full max-w-[1180px] mx-auto'>
          <div className='flex items-center'>
            <Image src={Logo} alt='Logo' width={30} height={30} />
            <div className='ml-2'>
              <h1 className='text-[20px] md:text-[22px] font-bold'>Evenly</h1>
              <p className='font-light text-[10px] md:text-[12px] pl-[32px] tracking-[0.4em]'>
                TESTING
              </p>
            </div>
          </div>
          <div className='hidden md:flex space-x-4'>
            <button
              className='bg-transparent border-[1px] border-[#9A9A9A] rounded-[8px] h-[35px] w-[96px] 
            transition-all duration-300 ease-in-out hover:bg-gradient-to-r 
            hover:from-[#CE4DA4] hover:to-[#7353E5] hover:border-none'
            >
              <span className='text-[13px] font-medium'>About me</span>
            </button>
            <button
              className='bg-transparent border-[1px] border-[#9A9A9A] rounded-[8px] h-[35px] w-[96px] 
            transition-all duration-300 ease-in-out hover:bg-gradient-to-r 
            hover:from-[#CE4DA4] hover:to-[#7353E5] hover:border-none'
            >
              <span className='text-[13px] font-medium'>Contact</span>
            </button>
          </div>
          <div className='md:hidden'>
            <button className='text-lg'>
              <Image src={Burger} alt='Menu' width={35} height={35}></Image>
            </button>
          </div>
        </div>
      </header>

      <main className='mt-[54px]'>
        <div>
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
                fill
                className='object-cover rounded-full'
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className='mt-[36px]'>
          <div className='flex justify-center'>
            <h1 className='font-bold text-[32px] md:text-[63px] text-white text-center'>
              LaiMicK Developer
            </h1>
          </div>
          <div className='flex justify-center text-[18px] md:text-[26px] font-semibold'>
            <h4 className='text-[#878787] text-center'>
              I do Code &{' '}
              <code className='bg-gradient-to-r from-[#CE4DA4] to-[#7353E5] text-transparent bg-clip-text'>
                DevOps
              </code>
              <span className='ml-1'>🍿</span>{' '}
            </h4>
          </div>
        </div>
      </main>
    </div>
  )
}

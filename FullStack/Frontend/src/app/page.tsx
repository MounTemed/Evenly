import Image from 'next/image'
import Logo from '../../public/Logo.png'
import Avatar from '../../public/Avatar.gif'
import Background from '../../public/Background.png'

const Home: React.FC = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${Background.src})`,
          width: '100%',
          height: '100vh'
        }}
      />

      <header className='flex justify-between items-center w-full max-w-[1173px] p-4 relative z-10'>
        <div className='flex items-center text-center md:text-left justify-between'>
          <Image src={Logo} width={23} height={26} alt='Logo' />
          <div className='flex flex-col items-start pl-[15px]'>
            <h1 className='text-[22px] font-bold text-white'>Evenly</h1>
            <p className='-mt-2 ml-[33px] text-[9px] tracking-[0.6em] text-sm text-white'>
              TESTING
            </p>
          </div>
        </div>
        <div className='flex space-x-2'>
          <button className='rounded-lg white-space: nowrapw-24 h-9 border-[1px] mb-2 md:mb-0 md:mr-2 transition duration-200 ease-in-out hover:bg-white'>
            <h1 className='font-popins px-4 py-2 text-[#E1E1E1] text-[13px] font-medium hover:text-black'>
              About me
            </h1>
          </button>
          <button className='rounded-lg w-24 h-9 border-[1px] transition duration-200 ease-in-out hover:bg-white'>
            <h1 className='font-popins px-4 py-2 text-[#E1E1E1] text-[13px] font-medium hover:text-black'>
              Contact
            </h1>
          </button>
        </div>
      </header>
      <main className='relative z-10'>
        <div className='mt-[198px] flex justify-center'>
          <div className='relative w-[175px] h-[175px] overflow-hidden rounded-full'>
            <Image src={Avatar} layout='fill' objectFit='cover' alt='Avatar' />
          </div>
        </div>
        <div className='flex justify-center mt-8 md:mt-10 lg:mt-12'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center'>
            <span className='gradient-text'>LaiMicK</span> DevOps-Engineer
          </h1>
        </div>
      </main>
    </div>
  )
}

export default Home

import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Avatars from '../../public/avatar.gif'
import PurpleImage from '../../public/purples.svg'
import PinkImage from '../../public/pink.png'
import Burger from '../../public/burger.png'
import Poluwhite from '../../public/polywhite.png'

export default function Home () {
  return (
    <div className='font-poppins'>
      <header className='mt-[35px] px-[20px] md:px-[70px]'>
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
        <div className='mt-[36px] px-4'>
          <div className='flex justify-center'>
            <h1 className='font-bold text-[36px] md:text-[48px] lg:text-[63px] text-white text-center'>
              LaiMicK Developer
            </h1>
          </div>
          <div className='flex justify-center text-[18px] md:text-[26px] font-semibold'>
            <h4 className='text-[#878787] text-center'>
              I do Code &{' '}
              <span className='bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] text-transparent bg-clip-text'>
                DevOps
              </span>
              <span className='ml-1'>🍿</span>
            </h4>
          </div>
          <div className='flex justify-center text-center mt-[14px]'>
            <p className='max-w-[776px] text-[16px] font-medium text-[#E1E1E1]'>
              A novice DevOps-engineer with a focus on process automation and
              infrastructure optimization dedicated to creating effective and
              reliable solutions to ensure stable operation of applications.
            </p>
          </div>
          <div className='flex justify-center mt-[50px]'>
            <button
              className='relative w-full max-w-[187px] h-[55px] border-[#585858] border-[1px] rounded-[75px] hover:bg-gradient-to-r 
            hover:from-[#CE4DA4] hover:to-[#7353E5] hover:border-none '
            >
              <span className='absolute inset-0 bg-black opacity-20 rounded-[75px]'></span>
              <span className='relative z-10 text-white font-medium'>
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </main>
      <section className='mt-[100px]'>
        <div className='flex justify-center text-center'>
          <div className='h-[54px] w-[233px]'>
            <h1 className='tracking-tight font-extrabold text-[45px] font-inter bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] text-transparent bg-clip-text'>
              ABOUT ME
            </h1>
          </div>
        </div>

        <div className='mt-10 flex justify-center'>
          <div className='text-center w-full max-w-[706px] h-auto text-[18px] font-medium text-[#E1E1E1] relative'>
            <h1>
              I started my way into{' '}
              <span className='bg-gradient-to-r from-[#C0BEFF] to-[#CE4DA4] text-transparent bg-clip-text'>
                DevOps
              </span>{' '}
              when, in my second year of system administration, I became
              interested in the principles and practices of this field.
              <span className='inline-block mt-1' />{' '}
              <span className='absolute left-[20px] md:left-[20px] top-[-40px]'>
                <Image
                  src={PinkImage}
                  alt='Pink'
                  width={200}
                  height={200}
                  className=' rounded-full'
                />
                <div className='absolute inset-0 bg-[#CE4DA4] bottom-[41px] left-[41px] opacity-35 rounded-full blur-[10em]' />
              </span>
            </h1>
            <h1 className='relative pt-4'>
              Previously, I was exclusively engaged in front-end development,
              but now I am striving to deepen my knowledge in{' '}
              <span className='bg-gradient-to-r from-[#C0BEFF] to-[#CE4DA4] text-transparent bg-clip-text'>
                DevOps
              </span>
              <span className='inline-block mt-1' /> and apply it to optimize
              processes and improve development efficiency.
              <span className='absolute right-[50px] md:right-[20px] top-[-40px]'>
                <Image
                  src={PurpleImage}
                  alt='Purple'
                  width={200}
                  height={200}
                  className='rounded-full'
                />
                <div className='absolute inset-0 bg-[#7353E5] top-[41px] right-[41px] opacity-35 rounded-full blur-[10em]' />
              </span>
            </h1>
          </div>
        </div>
      </section>
      <article className='mt-[100px]'>
        <div className='flex justify-center text-center'>
          <h1 className='h-[54px] w-[150px] text-[45px] font-extrabold font-inter tracking-tight bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] text-transparent bg-clip-text'>
            STACK
          </h1>
        </div>
        <div className='mt-[61px]'>
          <div className='flex justify-center'>
            <ul className='flex flex-wrap justify-center w-full max-w-[690px]'>
              {[
                'Docker',
                'Ansible',
                'Python',
                'Kubernetes',
                'Compose',
                'Github Actions',
                'Bash',
                'HyperDX'
              ].map((item, index) => (
                <li
                  key={index}
                  className='bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] bg-clip-border border border-transparent w-[165px] h-[90px] rounded-lg mx-[5px] mb-[22px] relative flex-shrink-0'
                >
                  <Image
                    src={Poluwhite}
                    alt='Purple'
                    width={165}
                    height={90}
                    className='rounded-full absolute top-[-40px] left-[40px] z-[-1]'
                  />
                  <div className='absolute inset-0 bg-[#7353E5] top-[41px] right-[41px] opacity-65 rounded-full blur-[4em]' />
                  <button className='bg-[#0d0a0e] rounded-lg w-full h-full z-10'>
                    <h1 className='font-inter text-[20px]'>{item}</h1>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <style jsx>{`
          @media (min-width: 820px) {
            li {
              flex: 0 0 21%; /* 2 elements per row */
            }
          }
          @media (max-width: 819px) {
            ul {
              max-width: calc(2 * 165px + 30px); /* 2 elements with margin */
            }
          }
        `}</style>
      </article>
    </div>
  )
}

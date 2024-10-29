import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Avatars from '../../public/avatar.gif'
import PurpleImage from '../../public/purples.svg'
import PinkImage from '../../public/pink.png'
import Burger from '../../public/burger.png'
import Poluwhite from '../../public/polywhite.png'
import Profile from '../../public/profile.png'
import Chatgpt from '../../public/chatgpt.png'
import Github from '../../public/github.svg'

const Home: React.FC = () => {
  const techStack = [
    'Docker',
    'Ansible',
    'Python',
    'Kubernetes',
    'Compose',
    'Github Actions',
    'Bash',
    'HyperDX'
  ]

  return (
    <div className='font-poppins'>
      <header className='mt-9 px-5 md:px-16'>
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
                className='bg-transparent border border-[#9A9A9A] rounded-lg h-9 w-24 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#CE4DA4] hover:to-[#7353E5] hover:border-none'
              >
                <span className='text-sm font-medium'>{text}</span>
              </button>
            ))}
          </div>
          <div className='md:hidden'>
            <button className='text-lg'>
              <Image src={Burger} alt='Menu' width={35} height={35} />
            </button>
          </div>
        </div>
      </header>

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
              The key to making this transition to continuous delivery is
              waiting for the situation to get worse before you can improve it.
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

      <section className='mt-[120px]'>
        <div className='flex justify-center text-center'>
          <h1 className='tracking-tight font-extrabold text-5xl font-inter bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] text-transparent bg-clip-text'>
            ABOUT ME
          </h1>
        </div>

        <div className='mt-10 flex justify-center'>
          <div className='text-center w-full max-w-[706px] h-auto text-lg font-medium text-[#E1E1E1] relative'>
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
                  className='rounded-full'
                />
                <div className='z-[-1] absolute inset-0 bg-[#CE4DA4] bottom-[41px] left-[41px] opacity-65 rounded-full blur-[10em]' />
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
                <div className='z-[-1] absolute inset-0 bg-[#7353E5] top-[41px] right-[41px] opacity-75 rounded-full blur-[10em]' />
              </span>
            </h1>
          </div>
        </div>
      </section>

      <article className='mt-[120px]'>
        <div className='flex justify-center text-center'>
          <h1 className='text-5xl font-extrabold font-inter tracking-tight bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] text-transparent bg-clip-text'>
            STACK
          </h1>
        </div>
        <div className='mt-16'>
          <div className='flex justify-center'>
            <ul className='flex flex-wrap justify-center w-full max-w-[690px]'>
              {techStack.map((item, index) => (
                <li
                  key={index}
                  className='bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] bg-clip-border border border-transparent w-[165px] h-[90px] rounded-lg mx-[5px] mb-[22px] relative flex-shrink-0'
                >
                  <Image
                    src={Poluwhite}
                    alt='Stack'
                    width={165}
                    height={90}
                    className='rounded-full absolute top-[-40px] left-[40px] z-[-1]'
                  />
                  <div className='z-[-1] absolute inset-0 bg-[#7353E5] top-[41px] right-[41px] opacity-65 rounded-full blur-[4em]' />
                  <button className='bg-[#13111A] rounded-lg w-full h-full z-10'>
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

      <aside className='mt-30 mx-auto max-w-[1180px]'>
        <div className='flex flex-col mx-[57px] md:flex-row justify-between'>
          <div className='mt-[133px] ml-[21px] w-full md:w-[320px] h-auto'>
            <h1 className='font-inter text-3xl font-bold bg-gradient-to-r from-[#9C83FF] to-[#CE4DA4] text-transparent bg-clip-text'>
              PROJECTS
            </h1>
          </div>
          <div className='rounded-[17px] mt-[20px] md:mt-[87px] w-full md:w-[700px] flex bg-[#1D1A27] shadow-lg flex-col md:flex-row relative overflow-hidden'>
            <div className='flex-1 ml-[5%] mt-[28px]'>
              <div className='w-[76px] h-[62px] rounded-[17px] bg-[#5E5B71] flex justify-center items-center'>
                <h1 className='text-[34px] font-semibold'>1</h1>
              </div>
              <h2 className='text-xl font-medium mt-[23px] text-white'>
                LiteMessage
              </h2>
              <p className='mt-[7px] text-white opacity-50'>
                Chat with each other and create beautiful profiles!
              </p>
            </div>
            <div className='flex-shrink-0 w-full md:w-[288px] flex items-center justify-center relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#8A79FF] to-[#CE4DA4] rounded-r-xl' />
              <Image
                src={Profile}
                alt='LiteMessage Profile'
                className='object-cover relative z-10'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mx-[57px] mt-[20px]'>
          <div className='rounded-[17px] mt-[20px] md:mt-[87px] w-full md:w-[700px] flex bg-[#1D1A27] shadow-lg flex-col md:flex-row relative overflow-hidden'>
            <div className='flex-1 ml-[5%] mt-[28px]'>
              <div className='w-[76px] h-[62px] rounded-[17px] bg-[#5E5B71] flex justify-center items-center'>
                <h1 className='text-[34px] font-semibold'>2</h1>
              </div>
              <h2 className='text-xl font-medium mt-[23px] text-white'>
                LiteMessage
              </h2>
              <p className='mt-[7px] text-white opacity-50'>
                Chat with each other and create beautiful profiles!
              </p>
            </div>
            <div className='flex-shrink-0 w-full md:w-[288px] flex items-center justify-center relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#8A79FF] to-[#CE4DA4] rounded-r-xl' />
              <Image
                src={Chatgpt}
                alt='ChatGPT Profile'
                className='pt-[35px] object-cover relative z-10'
              />
            </div>
          </div>
          <div className='mt-[55px] md:mt-[87px] ml-[0] md:ml-[115px] text-center md:text-left'>
            <h1 className='w-[166px] h-[70px] font-semibold text-[45px]'>
              Soon...
            </h1>
          </div>
        </div>
      </aside>
      <footer className='mt-[125px] mb-[35px]'>
        <div className='flex justify-center'>
          <div className='w-[50px] h-[50px]'>
            <Image src={Github} alt='GitHub Icon' />
          </div>
        </div>
        <div className='flex text-center justify-center mt-[15px]'>
          <p>This site was made using Next.js, React.js, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

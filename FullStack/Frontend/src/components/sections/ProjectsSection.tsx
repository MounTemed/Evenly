// src/components/sections/ProjectsSection.tsx
import Image from 'next/image'
import Profile from '../../../public/profile.png'
import Chatgpt from '../../../public/chatgpt.png'
import Github from '../../../public/github.svg'

const ProjectsSection: React.FC = () => {
  return (
    <aside className='mt-30 mx-auto max-w-[1180px] h-[633px]'>
      <div className=' z-1 flex flex-col mx-[57px] md:flex-row justify-between'>
        <div className='flex items-center text-center md:mr-[78px] mt-[120px] w-full md:w-[320px] justify-center h-auto'>
          <h1 className='font-inter text-3xl font-bold bg-gradient-to-r from-[#9C83FF] to-[#CE4DA4] text-transparent bg-clip-text'>
            PROJECTS
          </h1>
        </div>

        <div className='ml-2 w-full max-w-[700px] md:h-[300px] rounded-[17px] mt-[60px] md:mt-[87px] flex bg-[#1D1A27] shadow-lg flex-col md:flex-row relative overflow-hidden'>
          <div className='flex-1 ml-4 mt-[28px]'>
            <div className='w-[76px] h-[62px] rounded-[17px] bg-[#5E5B71] flex justify-center items-center'>
              <h1 className='text-[34px] font-semibold'>1</h1>
            </div>
            <h2 className='text-xl font-medium mt-[23px] text-white'>
              LiteMessage
            </h2>
            <p className='mt-[7px] text-white opacity-50 w-[286px]'>
              Chat with each other and create beautiful profiles!
            </p>
          </div>
          <div className='flex-shrink-0 w-full md:w-[288px] flex items-center justify-center relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#8A79FF] to-[#CE4DA4] rounded-r-xl' />
            <Image
              src={Profile}
              alt='Profile image of a user on LiteMessage'
              className='object-cover relative z-10 mt-[1px]'
              placeholder='blur'
            />
          </div>
        </div>
      </div>

      <div className='flex mx-[57px]'>
        <div className='ml-2 w-full max-w-[700px] md:h-[300px] rounded-[17px] mt-[60px] md:mt-[87px] flex bg-[#1D1A27] shadow-lg flex-col md:flex-row relative overflow-hidden'>
          <div className='flex-1 ml-4 mt-[28px]'>
            <div className='w-[76px] h-[62px] rounded-[17px] bg-[#5E5B71] flex justify-center items-center'>
              <h1 className='text-[34px] font-semibold'>2</h1>
            </div>
            <h2 className='text-xl font-medium mt-[23px] text-white'>
              LiteMessage
            </h2>
            <p className='mt-[7px] text-white opacity-50 w-[286px]'>
              Chat with each other and create beautiful profiles!
            </p>
          </div>
          <div className='flex-shrink-0 w-full md:w-[288px] flex items-center justify-center relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#8A79FF] to-[#CE4DA4] rounded-r-xl' />
            <Image
              src={Chatgpt}
              alt='Profile image of a user on LiteMessage'
              className='object-cover relative z-10 mt-[35px]'
              placeholder='blur'
            />
          </div>
        </div>
      </div>
      <div className='mt-[55px] justify-center md:mt-[87px] flex items-center text-center md:ml-[78px] md:text-left '>
        <h1 className='w-[166px] h-[70px] font-semibold text-[45px] md:mt-[20px]'>
          Soon...
        </h1>
      </div>

      <footer className='mt-[64px] mb-[35px]'>
        <div className='flex justify-center'>
          <div className='w-[50px] h-[50px]'>
            <Image src={Github} alt='GitHub Icon' />
          </div>
        </div>
        <div className='flex text-center justify-center mt-[15px]'>
          <p>This site was made using Next.js, React.js, and Tailwind CSS</p>
        </div>
      </footer>
    </aside>
  )
}

export default ProjectsSection

// src/components/sections/StackSection.tsx
import Image from 'next/image';
import Poluwhite from '../../../public/polywhite.png';

const StackSection: React.FC = () => {
  const techStack = [
    'Docker',
    'Ansible',
    'Terraform',
    'Golang',
    'K8s',
    'Compose',
    'Jenkins',
    'Bash',
  ];

  return (
    <article className='mt-[120px]'>
      <div className='flex justify-center text-center'>
        <h1 className='text-5xl font-extrabold font-inter tracking-tight bg-gradient-to-r from-[#A45DBA] to-[#F25D92] text-transparent bg-clip-text'>
          SKILLS
        </h1>
      </div>
      
      <div className='mt-16'>
        <div className='flex justify-center'>
          <ul className='flex flex-wrap justify-center w-full max-w-[690px]'>
            {techStack.map((item, index) => (
              <li
                key={index}
                className='bg-gradient-to-r from-[#A45DBA] to-[#F25D92] bg-clip-border border border-transparent w-[165px] h-[90px] rounded-lg mx-[5px] mb-[22px] relative flex-shrink-0'
              >
                <Image
                  src={Poluwhite}
                  alt='Stack'
                  width={165}
                  height={90}
                  className='rounded-full absolute top-[-40px] left-[40px] z-[-1]'
                />
                <div className='z-[-1] absolute inset-0 bg-[#A45DBA] top-[41px] right-[41px] opacity-65 rounded-full blur-[4em]' />
                <button className='bg-[#181019] rounded-lg w-full h-full z-10 transform transition-transform duration-300 hover:bg-gradient-to-r from-[#A45DBA] to-[#F25D92] hover:scale-105 hover:animate-gradient'>
                  <h1 className='font-inter text-[20px] text-white'>{item}</h1>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          li {
            flex: 0 0 21%; /* 4 elements per row */
          }
        }
        @media (min-width: 791px) and (max-width: 1023px) {
          li {
            flex: 0 0 30%;
          }
        }
        @media (max-width: 800px) and (max-width: 790px) {
          ul {
            max-width: calc(3 * 165px + 20px); 
          }
        }
        @media (max-width: 799px) {
          ul {
            max-width: calc(2 * 165px + 30px);
          }
        }
      `}</style>
    </article>
  );
};

export default StackSection;

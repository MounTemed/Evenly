// src/components/sections/AboutMeSection.tsx
import Image from 'next/image';
import PinkImage from '../../../public/pink.png';
import PurpleImage from '../../../public/purples.svg';

const AboutMeSection: React.FC = () => {
  return (
    <section className='mt-[120px] font-inter'>
      <div className='flex justify-center text-center'>
        <h1 className='tracking-tight font-extrabold text-5xl bg-gradient-to-r from-[#7353E5] to-[#CE4DA4] text-transparent bg-clip-text'>
          ABOUT ME
        </h1>
      </div>

      <div className='mt-10 flex justify-center'>
        <div className='text-center w-full max-w-[706px] h-auto text-lg font-medium text-[#E1E1E1] relative'>
          <h1>
            I started my way into{' '}
            <span className='bg-gradient-to-r from-[#C0BEFF] to-[#CE4DA4] font-bold text-transparent bg-clip-text'>
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
            <span className='bg-gradient-to-r from-[#C0BEFF] font-bold to-[#CE4DA4] text-transparent bg-clip-text'>
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
  );
};

export default AboutMeSection;

// src/pages/index.tsx
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'

const Header = dynamic(() => import('../components/layout/Header'))
const MainContent = dynamic(() => import('../components/sections/MainContent'))
const AboutMeSection = dynamic(
  () => import('../components/sections/AboutMeSection')
)
const StackSection = dynamic(() => import('../components/sections/Skill'))
const ProjectsSection = dynamic(
  () => import('../components/sections/ProjectsSection')
)

const fetchData = async () => {
  return {
    title: 'Evenly',
    description: 'Это главная страница вашего приложения.'
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData()

  return {
    props: {
      data
    }
  }
}

const Home: React.FC<{ data: { title: string; description: string } }> = ({
  data
}) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content={data.description} />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <div className='font-poppins h-[2700px]'>
        <Header />
        <MainContent />
        <AboutMeSection />
        <StackSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default Home

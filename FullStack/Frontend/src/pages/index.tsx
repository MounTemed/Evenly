// src/pages/index.tsx
import Header from '../components/layout/Header'
import MainContent from '../components/sections/MainContent'
import AboutMeSection from '../components/sections/AboutMeSection'
import StackSection from '../components/sections/Skill'
import ProjectsSection from '../components/sections/ProjectsSection'
import { Suspense } from 'react'

const Home: React.FC = () => {
  return (
    <div className='font-poppins'>
      <Suspense fallback={<p>Loading Header...</p>}>
        <Header />
      </Suspense>

      <Suspense fallback={<p>Loading Me...</p>}>
        <MainContent />
      </Suspense>

      <Suspense fallback={<p>Loading About...</p>}>
        <AboutMeSection />
      </Suspense>

      <Suspense fallback={<p>Loading Skill...</p>}>
        <StackSection />
      </Suspense>

      <Suspense fallback={<p>Loading Projects...</p>}>
        <ProjectsSection />
      </Suspense>
      
    </div>
  )
}

export default Home

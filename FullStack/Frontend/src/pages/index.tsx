// src/pages/index.tsx
import Header from '../components/layout/Header';
import MainContent from '../components/sections/MainContent';
import AboutMeSection from '../components/sections/AboutMeSection';
import StackSection from '../components/sections/StackSection';
import ProjectsSection from '../components/sections/ProjectsSection';
// import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <div className='font-poppins'>
      <Header />
      <MainContent />
      <AboutMeSection />
      <StackSection />
      <ProjectsSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import Experiences from '../components/Experience/Experiences'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      {/* <Section grid> */}
        <Hero />
      <Experiences />

        {/* <BgAnimation /> */}
      {/* </Section> */}
      <Projects />
      <Technologies />
      {/* <Experience /> */}
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;

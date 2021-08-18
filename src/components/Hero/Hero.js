import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
      A passionate FrontEnd developer seeking a career in the IT industry. 
      My studies have helped me to gain relevant technical skills in the IT industry, 
      and my working experience has helped me to extend my soft skills in multitasking, 
      problem-solving, and communication. 
      I have the full capability to investigate programs quickly and solve them professionally. 
      </SectionText>
      <Button onClick={()=> window.location = "#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
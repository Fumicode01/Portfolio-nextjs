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
        Front end developer specialising in JavaScript and React.
      </SectionText>
      <Button onClick={()=> window.location = "#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
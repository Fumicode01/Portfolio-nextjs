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
      A highly reliable, passionate and self-motivated web developer seeking a tech role in the IT industry. I have proven abilities and professional experience from multiple projects. I understand the development of web applications using React, JavaScript, HTML, and CSS as well as object Oriented Programming. Most importantly, I am very good at collaborating and communicating with others, especially in Agile/Scrum teams.
      </SectionText>
      <Button onClick={()=> window.location = "#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
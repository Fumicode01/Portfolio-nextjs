import React from 'react';
import { DiFirebase, DiReact} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="Skill">
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      Skill Section Text
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          React, React Hooks, Redux, Angular<br />Styled-Components, Next.js, TypeScript, Javascripts(ES6+), Material UI, HTML5, CSS3, Sass, Less, Bootstrap, Grid, Flexbox, Responsive Web Design, Npm, Yarn, Webpack, ESlint, WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Node.js, Express, Python, Django, Java, SpringBoot
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MongoDB, PostgreSQL, MySQL, GCP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Methodologies</ListTitle>
          <ListParagraph>
           Agile, Scrum, Kanban, TDD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Jest
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            AWS, RESTful API, Google APIs, JSON, Swagger, Postman, JWT, Oauth, Git, GitHub, BitBucket, Slack, Docker, localStorage, SessionStorage, Cookies
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;

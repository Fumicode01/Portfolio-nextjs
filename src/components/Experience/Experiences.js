import React from 'react'
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { JobTitle } from './ExperienceStyles';


const Experiences = () => {
    return (
        <Section id="experience">
            <SectionTitle>Work Experience</SectionTitle>
            <JobTitle>
                FrontEnd Developer
            </JobTitle>
            <div className="company">
                TasksTech(Code.Sydney)
            </div>
            <div className="date">
                04/2021 - Present
            </div>
            <div className="projectDescription">
            Engineering tradespersom's Work Diary and Inventory Management APP
            </div>
            <div className="achievement">
                <div className="achievementTitle">
                    Achievement/Responsibilities:
                </div>
                <div className="achievementList">
                    This app allows tradesperson to create new jobs, view job histories and inventories, and create customer profiles. Also, customers can request quote, approve work, and check work status.
                </div>
                <div className="achievementList">
                    Sucessfully built tradesperson's sign up, log in, user profile, and inventory management pages. Implemented protected routes and user authentication with JWT.
                </div>
                <div className="achievementList">
                    Reviewed code, debugged problems and corrected issues.
                </div>
            </div>
        </Section>
    )
}

export default Experiences

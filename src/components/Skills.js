import { forwardRef } from "react";
import styled from "styled-components";
import Skill from "./Skill";

const SkillsContainer = styled.div`
  padding: 3rem;
  height: 100vh;
  /* border: 1px solid red; */
  > h2 {
    font-size: xx-large;
    font-weight: 600;
  }
`;

const SkillsIconContainer = styled.div`
  margin-left: 1rem;
  > h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 2rem;
  }
`;

const FrontEndContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Skills = forwardRef((props, ref) => {
  return (
    <SkillsContainer ref={(skills) => (ref.current[3] = skills)}>
      <h2>Skills</h2>
      <SkillsIconContainer>
        <h3>FrontEnd</h3>
        <FrontEndContainer>
          <Skill>React</Skill>
          <Skill>JS</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>TypeScript</Skill>
          <Skill>Next.js</Skill>
          <Skill>Styled-components</Skill>
          <Skill>Recoil</Skill>
          <Skill>TailWindCSS</Skill>
          <Skill>Vercel</Skill>
          <Skill>Firebase</Skill>
        </FrontEndContainer>
        <h3>Tools</h3>
        <ToolsContainer>
          <Skill>Git</Skill>
          <Skill>GitHub</Skill>
          <Skill>Notion</Skill>
          <Skill>Discord</Skill>
          <Skill>Slack</Skill>
        </ToolsContainer>
      </SkillsIconContainer>
    </SkillsContainer>
  );
});

export default Skills;

import { forwardRef } from "react";
import styled from "styled-components";
import Skill from "./Skill";

const SkillsContainer = styled.div`
  padding: 5rem;
  height: fit-content;
  > h2 {
    font-size: xx-large;
    font-weight: 600;
  }
`;

const SkillsIconContainer = styled.div`
  margin-left: 1rem;
  margin-top: 3rem;
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
  const frontSkills = [
    "JS",
    "TypeScript",
    "React",
    "Recoil",
    "HTML",
    "CSS",
    "Styled-components",
    "TailWindCSS",
    "Vercel",
    "Firebase",
  ];

  const tools = ["Git", "GitHub", "Notion", "Discord", "Slack"];
  return (
    <SkillsContainer ref={(skills) => (ref.current[3] = skills)}>
      <h2>Skills</h2>
      <SkillsIconContainer>
        <h3>FrontEnd</h3>
        <FrontEndContainer>
          {frontSkills.map((frontSkill) => (
            <Skill key={frontSkill}>{frontSkill}</Skill>
          ))}
        </FrontEndContainer>
        <h3>Tools</h3>
        <ToolsContainer>
          {tools.map((tool) => (
            <Skill key={tool}>{tool}</Skill>
          ))}
        </ToolsContainer>
      </SkillsIconContainer>
    </SkillsContainer>
  );
});

export default Skills;

import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiNotion,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BsGit, BsGithub, BsDiscord, BsSlack } from "react-icons/bs";

const SkillContainer = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border: 1px solid #ecf2ff;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.2rem;
  > h4 {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
    text-align: center;
  }
  > div {
    font-size: 2.7rem;
    color: #bface2;
  }
  :hover {
    /* cursor: pointer; */
    > div {
      color: #655dbb;
      transition: 0.7s;
    }
  }
`;

const Skill = ({ children }) => {
  const selectedIcon = (children) => {
    if (children === "React") return <FaReact />;
    if (children === "JS") return <SiJavascript />;
    if (children === "HTML") return <AiFillHtml5 />;
    if (children === "CSS") return <DiCss3 />;
    if (children === "TypeScript") return <SiTypescript />;
    if (children === "Next.js") return <SiNextdotjs />;
    if (children === "Styled-components") return <SiStyledcomponents />;
    if (children === "Recoil") return <FaReact />;
    if (children === "TailWindCSS") return <SiTailwindcss />;
    if (children === "Vercel") return <IoLogoVercel />;
    if (children === "Firebase") return <SiFirebase />;
    if (children === "Git") return <BsGit />;
    if (children === "GitHub") return <BsGithub />;
    if (children === "Notion") return <SiNotion />;
    if (children === "Discord") return <BsDiscord />;
    if (children === "Slack") return <BsSlack />;
  };

  return (
    <SkillContainer>
      <h4>{children}</h4>
      <div>{selectedIcon(children)}</div>
    </SkillContainer>
  );
};

export default Skill;

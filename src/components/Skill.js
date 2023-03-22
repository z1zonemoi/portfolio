import React from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  background-color: gray;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h4 {
    text-align: center;
  }
`;

const Skill = ({ children }) => {
  return (
    <SkillContainer>
      <h4>{children}</h4>
      <div>icon</div>
    </SkillContainer>
  );
};

export default Skill;

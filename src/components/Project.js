import { forwardRef } from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  padding: 3rem;
  height: fit-content;
  /* border: 1px solid red; */
  > h2 {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  > div {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  .firstProject {
    align-self: flex-end;
  }
`;

const ProjectInformation = styled.div`
  width: 600px;
  height: 800px;
  margin: 5px;
  background-color: gray;
`;

const Project = forwardRef((props, ref) => {
  return (
    <>
      <ProjectContainer ref={(project) => (ref.current[4] = project)}>
        <h2>Project</h2>
        <div>
          <ProjectInformation>코인네버다이</ProjectInformation>
          <ProjectInformation className="firstProject">
            대여가대여
          </ProjectInformation>
        </div>
      </ProjectContainer>
    </>
  );
});

export default Project;

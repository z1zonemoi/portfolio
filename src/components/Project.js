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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const ProjectInformation = styled.div`
  width: 600px;
  height: 800px;
  margin: 5px;
  background-color: gray;
`;

const Project = () => {
  return (
    <ProjectContainer>
      <h2>Project</h2>
      <div>
        <ProjectInformation>코인네버다이</ProjectInformation>
        <ProjectInformation>대여가대여</ProjectInformation>
      </div>
    </ProjectContainer>
  );
};

export default Project;

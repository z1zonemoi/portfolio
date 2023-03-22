import styled from "styled-components";

const AboutMeContainer = styled.div`
  padding: 3rem;
  height: fit-content;
  /* border: 1px solid red; */
  > h2 {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .informationContainer {
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
  }
  .profileImage {
    width: 15rem;
    height: 15rem;
    background-color: gray;
  }
  .aboutMeSubTitle {
    height: 8rem;
    font-size: larger;
    margin-left: 2rem;
    margin-top: 0.2rem;
    font-weight: 500;
    > h3 {
      margin-bottom: 2rem;
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2>About Me</h2>
      <div className="informationContainer">
        <div className="profileImage">오리</div>
        <div className="aboutMeSubTitle">
          <h3>성장 의지가 강하고, 실천하는 개발자</h3>
          <h3>기록하여 회고하는 걸 즐기는 개발자</h3>
          <h3>정보 공유를 좋아하는 개발자</h3>
        </div>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;

import styled from "styled-components";

const MainContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  > h1 {
    margin: auto;
    font-size: 5rem;
    color: white;
  }
`;

const Title = () => {
  return (
    <MainContainer>
      {/* <div className="information">
        <div className="navLinkContainer">
          <h2 className="portfolioNav">Portfolio</h2>
          <h2 className="ContactNav navRight">Contact</h2>
          <h2 className="AboutMeNav navRight">About Me</h2>
          <h2 className="SkillsNav navRight">Skills</h2>
          <h2 className="ProjectNav navRight">Project</h2>
        </div>
        <div className="title">
          <h1>프론트엔드 개발자</h1>
          <h1>최유정</h1>
        </div>
      </div> */}
      <h1>
        안녕하세요
        <br />
        프론트엔드 개발자 최유정입니다
      </h1>
    </MainContainer>
  );
};

export default Title;

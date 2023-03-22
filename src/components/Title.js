import { useEffect, useState } from "react";
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

const IntroduceMe = "안녕하세요\n 프론트엔드 개발자 최유정입니다";

const Title = () => {
  const [myName, setMyName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyName((prev) => prev + IntroduceMe[count]);
      setCount((prev) => prev + 1);
    }, 200);
    if (count === IntroduceMe.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [myName, count]);

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
      <h1>{myName}</h1>
    </MainContainer>
  );
};

export default Title;

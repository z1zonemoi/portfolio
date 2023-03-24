import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 5rem;
    color: white;
  }
`;

const Introduce = "안녕하세요";
const IntroduceMe = "프론트엔드 개발자 최유정입니다";

const Title = forwardRef((props, ref) => {
  const [myName, setMyName] = useState("");
  const [count, setCount] = useState(0);
  const [introduceName, setIntroduceName] = useState("");
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyName((prev) => prev + Introduce[count]);
      setCount((prev) => prev + 1);
    }, 100);
    if (count === Introduce.length) {
      clearInterval(interval);

      const intervalName = setInterval(() => {
        setIntroduceName((prev) => prev + IntroduceMe[count2]);
        setCount2((prev) => prev + 1);
      }, 100);

      if (count2 === IntroduceMe.length) {
        clearInterval(intervalName);
      }
      return () => clearInterval(intervalName);
    }
    return () => clearInterval(interval);
  });

  return (
    <MainContainer ref={(title) => (ref.current[0] = title)}>
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
      <h1 className="hi">{myName}</h1>
      <br />
      <h1>{introduceName}</h1>
    </MainContainer>
  );
});

export default Title;

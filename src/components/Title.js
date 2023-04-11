import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Title = forwardRef((props, ref) => {
  const [myName, setMyName] = useState("");
  const [count, setCount] = useState(0);
  const [introduceName, setIntroduceName] = useState("");
  const [count2, setCount2] = useState(0);

  const Introduce = "안녕하세요";
  const IntroduceMe = "프론트엔드 개발자 최유정입니다";

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
      <h1 className="hi">{myName}</h1>
      <br />
      <h1 className="hi">{introduceName}</h1>
      <div>
        scroll
        <MdKeyboardDoubleArrowDown />
      </div>
    </MainContainer>
  );
});

export default Title;

const MainContainer = styled.div`
  animation: main 17s infinite;
  background-position: center 170%;
  background-size: 100% 70%;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 1rem;
    color: black;
  }

  @media (min-width: 500px) {
    .hi {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 800px) {
    .hi {
      font-size: 2rem;
    }
  }

  > div {
    animation: scroll 5s infinite;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 20px;
    color: rgba(0, 0, 0, 0.9);
  }

  @keyframes scroll {
    0% {
      color: rgba(0, 0, 0, 0.2);

      bottom: 30px;
    }
    50% {
      bottom: 20px;
    }
    100% {
      bottom: 30px;
    }
  }
`;

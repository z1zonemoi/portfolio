import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const MainContainer = styled.div`
  animation: main 17s infinite;
  background-position: center 170%;

  background-size: 100% 70%;
  width: 100vw;
  height: 100vh;
  /* background-image: url("tree.png"); */
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url(${process.env.PUBLIC_URL}feathers.jpg); */
  > h1 {
    font-size: 2rem;
    color: black;
  }
  > div {
    animation: scroll 5s infinite;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 20px;
    color: rgba(255, 255, 255, 0.9);
  }

  @keyframes scroll {
    0% {
      color: rgba(255, 255, 255, 0.5);

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
      <h1 className="hi">{myName}</h1>
      <br />
      <h1>{introduceName}</h1>
      <div>
        scroll
        <MdKeyboardDoubleArrowDown />
      </div>
    </MainContainer>
  );
});

export default Title;

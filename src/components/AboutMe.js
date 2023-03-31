import { forwardRef } from "react";
import styled from "styled-components";
import Example from "./Scene";

const AboutMeContainer = styled.div`
  padding: 5rem;
  /* height: 100vh; */
  height: fit-content;

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
    font-size: 1.2rem;
    margin-left: 2.5rem;
    margin-top: 2.7rem;
    font-weight: 500;
    > h3 {
      animation: sub 7s infinite;
      margin-bottom: 2rem;
    }
  }
  /* @keyframes sub {
    0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  } */
`;

const AboutMe = forwardRef((props, ref) => {
  return (
    <AboutMeContainer ref={(about) => (ref.current[2] = about)}>
      <h2>About Me</h2>
      <div className="informationContainer">
        <Example />
        <div className="aboutMeSubTitle">
          <h3>기록하여 회고하는 걸 즐기는 개발자</h3>
          <h3>항상 실천하며, 성장의지가 강한 개발자</h3>
          <h3>정보 공유를 좋아하는 개발자</h3>
        </div>
      </div>
    </AboutMeContainer>
  );
});

export default AboutMe;

import { forwardRef } from "react";
import styled from "styled-components";

import Computer from "./Scene";

const AboutMe = forwardRef((props, ref) => {
  return (
    <AboutMeContainer ref={(about) => (ref.current[2] = about)}>
      <h2>About Me</h2>
      <div className="informationContainer">
        <Computer />
        <div className="aboutMeSubTitle">
          <h3>기록하여 회고하는 걸 즐기는 개발자</h3>
          <h3>항상 실천하며, 성장의지가 강한 개발자</h3>
          <h3>정보 공유를 좋아하는 개발자</h3>
        </div>
      </div>
    </AboutMeContainer>
  );
});

const AboutMeContainer = styled.div`
  padding: 5rem;
  height: fit-content;

  > h2 {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .informationContainer {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  .aboutMeSubTitle {
    height: 8rem;
    font-size: 0.9rem;
    margin-left: 2.5rem;
    margin-top: 2.7rem;
    font-weight: 500;
    > h3 {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 600px) {
    .aboutMeSubTitle {
      font-size: 1rem;
    }
  }

  @media (min-width: 860px) {
    .informationContainer {
      flex-direction: row;
    }
    .aboutMeSubTitle {
      font-size: 1.2rem;
    }
  }
`;

export default AboutMe;

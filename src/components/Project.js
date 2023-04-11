import { forwardRef, useState } from "react";
import styled from "styled-components";

import useBodyOverflowScroll from "../useBodyOverflowScroll";
import Modal from "./Modal";

const Project = forwardRef((props, ref) => {
  const [coinsModal, setCoinsModal] = useState(false);
  const [daeyeoModal, setDaeyeoModal] = useState(false);

  const { lockBodyScroll } = useBodyOverflowScroll();

  const showModal2 = () => {
    setCoinsModal(!coinsModal);
    lockBodyScroll();
  };

  const showModal3 = () => {
    setDaeyeoModal(!daeyeoModal);
    lockBodyScroll();
  };

  return (
    <ProjectContainer ref={(project) => (ref.current[4] = project)}>
      <h2>Project</h2>
      <div>
        <ProjectInformation onClick={showModal2}>
          코인네버다이
          <img
            alt="코인네버다이 메인 이미지"
            src={process.env.PUBLIC_URL + "cnd/cnd-메인-페이지네이션.gif"}
          ></img>
        </ProjectInformation>
        <ProjectInformation className="rightProject" onClick={showModal3}>
          대여가대여
          <img
            alt="대여가대여 메인 이미지"
            src={process.env.PUBLIC_URL + "daeyeo/메인페이지.gif"}
          ></img>
        </ProjectInformation>
      </div>
      {coinsModal ? (
        <Modal modal={coinsModal} setModal={setCoinsModal} content={"coins"} />
      ) : null}
      {daeyeoModal ? (
        <Modal
          modal={daeyeoModal}
          setModal={setDaeyeoModal}
          content={"share"}
        />
      ) : null}
    </ProjectContainer>
  );
});

export default Project;

const ProjectContainer = styled.div`
  padding: 5rem;
  height: fit-content;

  > h2 {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 3rem;
  }

  @media (min-width: 800px) {
    .rightProject {
      align-self: flex-end;
    }
  }
`;

const ProjectInformation = styled.div`
  width: 30rem;
  height: 20rem;
  margin: 5px;
  background-color: #ffffff;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 1rem;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 1rem;
    width: 70%;
    height: 70%;
    border-radius: 0.7rem;
  }

  :hover {
    cursor: pointer;
    background: linear-gradient(#ecf2ff 79%, white);
    transition: 0.7s;
  }
`;

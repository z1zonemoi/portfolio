import { forwardRef, useState } from "react";
import styled from "styled-components";
import useBodyOverflowScroll from "../useBodyOverflowScroll";
import Modal from "./Modal";

const ProjectContainer = styled.div`
  padding: 3rem;
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
  }
  .firstProject {
    align-self: flex-end;
  }
`;

const ProjectInformation = styled.div`
  width: 30rem;
  height: 20rem;
  margin: 5px;
  /* background-color: #ecf2ff; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  /* border: 1px solid #ecf2ff; */
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
    /* background: linear-gradient(#bface2, #ecf2ff); */
    /* background-color: #ecf2ff; */

    background: linear-gradient(#ecf2ff 79%, white);
    transition: 0.7s;
  }
`;

const Project = forwardRef((props, ref) => {
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [coinsModal, setCoinsModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const { lockBodyScroll, unLockBodyScroll } = useBodyOverflowScroll();

  const showModal1 = () => {
    setPortfolioModal(!portfolioModal);
    lockBodyScroll();
  };

  const showModal2 = () => {
    setCoinsModal(!coinsModal);
    lockBodyScroll();
  };

  const showModal3 = () => {
    setShareModal(!shareModal);
    lockBodyScroll();
  };

  return (
    <>
      <ProjectContainer ref={(project) => (ref.current[4] = project)}>
        <h2>Project</h2>
        <div>
          <ProjectInformation onClick={showModal1}>
            Portfolio
            <img
              alt="포트폴리오 메인 이미지"
              src={process.env.PUBLIC_URL + "cyjportfolio/portfolio_예비.gif"}
            ></img>
          </ProjectInformation>
          <ProjectInformation className="firstProject" onClick={showModal2}>
            코인네버다이
            <img
              alt="코인네버다이 메인 이미지"
              src={process.env.PUBLIC_URL + "cnd/cnd-메인-페이지네이션.gif"}
            ></img>
          </ProjectInformation>
          <ProjectInformation onClick={showModal3}>
            대여가대여
            <img
              alt="대여가대여 메인 이미지"
              src={process.env.PUBLIC_URL + "daeyeo/메인페이지.gif"}
            ></img>
          </ProjectInformation>
        </div>
        {portfolioModal ? (
          <Modal
            coinsModal={portfolioModal}
            setCoinsModal={setPortfolioModal}
            content={"portfolio"}
          />
        ) : null}
        {coinsModal ? (
          <Modal
            coinsModal={coinsModal}
            setCoinsModal={setCoinsModal}
            content={"coins"}
          />
        ) : null}
        {shareModal ? (
          <Modal
            coinsModal={shareModal}
            setCoinsModal={setShareModal}
            content={"share"}
          />
        ) : null}
      </ProjectContainer>
    </>
  );
});

export default Project;

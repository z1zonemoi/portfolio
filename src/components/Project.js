import { forwardRef, useState } from "react";
import styled from "styled-components";
import useBodyOverflowScroll from "../useBodyOverflowScroll";
import Modal from "./Modal";

const ProjectContainer = styled.div`
  padding: 3rem;
  height: fit-content;
  /* border: 1px solid red; */
  > h2 {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  > div {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  .firstProject {
    align-self: flex-end;
  }
`;

const ProjectInformation = styled.div`
  width: 600px;
  height: 800px;
  margin: 5px;
  background-color: gray;
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
          </ProjectInformation>
          <ProjectInformation className="firstProject" onClick={showModal2}>
            코인네버다이
          </ProjectInformation>
          <ProjectInformation onClick={showModal3}>
            대여가대여
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

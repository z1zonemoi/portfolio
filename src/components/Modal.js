import React from "react";
import styled from "styled-components";
import useBodyOverflowScroll from "../useBodyOverflowScroll";
import CoinsNeverDie from "./CoinsNeverDie";
import Daeyeo4U from "./Daeyeo4U";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  > div {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    border-radius: 0.1rem;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: scroll;
  }
`;

const Modal = ({ coinsModal, setCoinsModal, content }) => {
  const { lockBodyScroll, unLockBodyScroll } = useBodyOverflowScroll();
  if (!coinsModal) return;

  const onClickModal = () => {
    setCoinsModal(!coinsModal);
    unLockBodyScroll();
  };

  const getProject = (content) => {
    if (content === "portfolio") {
      return;
    }
    if (content === "coins") {
      return <CoinsNeverDie />;
    }
    if (content === "share") {
      return <Daeyeo4U />;
    }
  };
  if (coinsModal) {
    return (
      <ModalContainer>
        <div onClick={onClickModal}>x</div>
        <div>{getProject(content)}</div>
      </ModalContainer>
    );
  }
};

export default Modal;

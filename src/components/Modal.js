import React from "react";
import styled from "styled-components";
import useBodyOverflowScroll from "../useBodyOverflowScroll";
import CoinsNeverDie from "./CoinsNeverDie";
import Daeyeo4U from "./Daeyeo4U";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 990;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  > div {
    /* border: 1px solid red; */
    z-index: 999;
    width: 80%;
    height: 90%;
    margin: auto;
    border-radius: 0.2rem;
    background: linear-gradient(#a29bfe 1%, #ffeaa7);
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

  const stopEventPropagation = (event) => {
    event.stopPropagation();
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
      <ModalContainer onClick={onClickModal}>
        <div onClick={stopEventPropagation}>
          <button onClick={onClickModal}>x</button>
          {getProject(content)}
        </div>
      </ModalContainer>
    );
  }
};

export default Modal;

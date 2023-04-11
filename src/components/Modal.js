import React from "react";
import styled from "styled-components";

import useBodyOverflowScroll from "../useBodyOverflowScroll";
import CoinsNeverDie from "./CoinsNeverDie";
import Daeyeo4U from "./Daeyeo4U";

const Modal = ({ modal, setModal, content }) => {
  const { unLockBodyScroll } = useBodyOverflowScroll();
  if (!modal) return;

  const onClickModal = () => {
    setModal(!modal);
    unLockBodyScroll();
  };

  const stopEventPropagation = (event) => {
    event.stopPropagation();
  };

  const getProject = (content) => {
    if (content === "coins") {
      return <CoinsNeverDie />;
    }
    if (content === "share") {
      return <Daeyeo4U />;
    }
  };

  if (modal) {
    return (
      <ModalContainer onClick={onClickModal}>
        <div onClick={stopEventPropagation}>
          <button onClick={onClickModal}>X</button>
          {getProject(content)}
        </div>
      </ModalContainer>
    );
  }
};

export default Modal;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 990;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  > div {
    padding: 1rem;
    z-index: 999;
    width: 80%;
    height: 90%;
    margin: auto;
    border-radius: 0.2rem;
    background-color: white;
    animation: modal-show 0.3s;
    overflow: scroll;
    > button {
      text-align: center;
      font-size: 1.2rem;
      width: 2rem;
      height: 2rem;
      border-radius: 70%;
      background-color: #bface2;
      color: white;
      border: 0;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

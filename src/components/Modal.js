import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
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
    overflow: hidden;
  }
`;

const Modal = ({ coinsModal, setCoinsModal, content }) => {
  if (!coinsModal) return;
  const onClickModal = () => {
    setCoinsModal(!coinsModal);
  };

  if (coinsModal) {
    return (
      <ModalContainer onClick={onClickModal}>
        <div>{content}</div>
      </ModalContainer>
    );
  }
};

export default Modal;

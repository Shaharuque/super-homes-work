import React from "react";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { ModalContext } from "./modal_context";

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  color: white;
`;
const ModalCloseIcon = styled.div`
  top: 10px;
  right: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 5px;
`;

const Modal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <ModalWrapper>
        <ModalCloseIcon onClick={() => handleModal()}>
          <GrClose style={{ fontSize: "1.5em" }} />
        </ModalCloseIcon>

        {modalContent}
      </ModalWrapper>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;

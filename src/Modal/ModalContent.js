import React from "react";
import ReactDOM from "react-dom";

import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const modalContentStyle = css(`
  //needed for the modal
  .modal-lock-scroll {
    height: 100%;
    overflow: hidden;
  }
`);

const ButtonBottomContainer = styled("div")`
  bottom: 0;
  position: sticky;
  text-align: center;
  background: #fff;
`;

const Button = styled("button")`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  line-height: 1;
  background: #f6f6f7;
  border: 0;
  box-shadow: 0;
  cursor: pointer;
`;
const Modal = styled("div")`
  position: absolute;
  right: 0;
  box-sizing: border-box;
  top: 0;
  font-family: "zona-regular";
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.73;
  letter-spacing: normal;
  color: #004078;
  height: auto;
  background-color: #ffffff;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  /* ${({ width }) => (width ? `max-width:${width};` : "max-width:400px;")} */
  max-height: 100%;
  height:100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;



  @media screen and (min-width: 600px) { 
     right: 0;
     top: 0;
     ${({ width }) => (width ? `max-width:${width};` : "max-width:600px;")} 
     max-height: 100%;
      height:100%;
   }

  &.modal-open {
    transform: translateX(0%);
    -webkit-transform: translateX(0%);
  }

  &.modal-closed {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }
`;

const ModalBody = styled("div")`
  padding-top: 0.25em;
`;

const HiddenText = styled("div")`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;
const HeaderButton = styled("div")`
  top: 0;
  right: 0;
  position: sticky;
  padding: 5px 15px;
  background: #fff;
`;

const ModalCover = styled("div")`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; // This must be at a higher index to the rest of your page content
  transform: translateZ(0);
  background-color: rgba(#000, 0.15);
  background: rgba(0, 0, 0, 0.4);
  transition: all 2.5s ease;
`;

const ModalContent = ({
  ariaLabel,
  buttonRef,
  content,
  modalRef,
  isOpen,
  ModalContentSlot,
  ModalTitelSlot,
  onClose,
  role = "dialog",
  optional
}) =>
  ReactDOM.createPortal(
    <ModalCover>
      <Global
        styles={css`
          ${modalContentStyle}
        `}
      />
      <Modal ref={modalRef} width={optional.width} data-role={role}>
        <HeaderButton>
          <div
            style={{
              display: "inline-block"
            }}
          >
            {ModalTitelSlot}
          </div>
          <Button
            aria-labelledby="close-modal"
            onClick={onClose}
            ref={buttonRef}
          >
            <HiddenText id="close-modal" className="u-hide-visually">
              Close Modal
            </HiddenText>
            x
          </Button>
        </HeaderButton>
        <ModalBody>
          <div style={{ padding: "5px 15px" }}>{ModalContentSlot}</div>

          <ButtonBottomContainer>
            <hr />
            <button onClick={onClose}>Sluiten</button>
          </ButtonBottomContainer>
        </ModalBody>
      </Modal>
    </ModalCover>,
    document.body
  );

export default ModalContent;

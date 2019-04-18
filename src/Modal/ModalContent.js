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
  padding: 5px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
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
  position: fixed;
  box-sizing: border-box;
  top: 0;
  right: 0;
  font-family: "zona-regular";
  font-size: 15px;
  line-height: 1.73;
  letter-spacing: normal;
  color: #004078;
  height: auto;
  background-color: #ffffff;

  -webkit-overflow-scrolling: touch;
  max-height: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  overflow-y: hidden;

  @media screen and (min-width: 600px) {
    ${({ width }) => (width ? `max-width:${width};` : "max-width:600px;")}
    max-height: 100%;
    height: 100%;

    &.modal-open {
      animation: open 0.5s;
    }

    @keyframes open {
      from {
        right: -600px;
      }
      to {
        right: 0;
      }
    }
  }
`;

const ModalBody = styled("div")`
  padding-top: 0.25em;
  overflow: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
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
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
`;

const ModalCover = styled("div")`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; // This must be at a higher index to the rest of your page content
  background-color: rgba(#000, 0.15);
  background: rgba(0, 0, 0, 0.4);
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
      <Modal
        ref={modalRef}
        width={optional.width}
        data-role={role}
        className={isOpen ? "modal-open" : "modal-closed"}
      >
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
        </ModalBody>
        <ButtonBottomContainer>
          <button onClick={onClose}>Sluiten</button>
        </ButtonBottomContainer>
      </Modal>
    </ModalCover>,
    document.body
  );

export default ModalContent;

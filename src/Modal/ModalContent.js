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
  display: block;
  text-align: center;
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
  position: relative;
  left: 50%;
  top: 50%;
  font-family: "zona-regular";
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.73;
  letter-spacing: normal;
  color: #004078;
  height: auto;
  padding: 15px;
  background-color: #ffffff;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transform: translate(-50%, -50%);
  ${({ width }) => (width ? `max-width:${width};` : "max-width:400px;")}
  max-height: calc(100% - 1em);
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 500px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ${({ width }) => (width ? `max-width:${width};` : "max-width:400px;")}
    max-height: calc(100% - 1em);
    border-radius: 5px;
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

const ModalCover = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; // This must be at a higher index to the rest of your page content
  transform: translateZ(0);
  background-color: rgba(#000, 0.15);
  background: rgba(0, 0, 0, 0.4);
`;

const ModalContent = ({
  ariaLabel,
  buttonRef,
  content,
  modalRef,
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
        <Button aria-labelledby="close-modal" onClick={onClose} ref={buttonRef}>
          <HiddenText id="close-modal" className="u-hide-visually">
            Close Modal
          </HiddenText>
          x
        </Button>
        <ModalBody>
          {content}
          <ButtonBottomContainer>
            <hr />
            <button name="Sluiten" onClick={onClose} />
          </ButtonBottomContainer>
        </ModalBody>
      </Modal>
    </ModalCover>,
    document.body
  );

export default ModalContent;

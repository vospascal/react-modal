import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Button = styled("button")`
  background: transparent;
  border: 0;
  padding: 0;
`;

const ModalTrigger = ({ buttonRef, onOpen }) => (
  <Button type="button" onClick={onOpen} ref={buttonRef}>
    open
  </Button>
);

ModalTrigger.propTypes = {
  buttonRef: PropTypes.func,
  onOpen: PropTypes.func
};

export default ModalTrigger;

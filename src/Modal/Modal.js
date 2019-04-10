import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

class Modal extends Component {
  state = { isOpen: false };

  async componentDidMount() {
    const { isOpen } = this.props;
    this.setState({ isOpen: isOpen || false });
  }

  componentWillReceiveProps(nextProps) {
    const { isOpen } = this.state;
    if (nextProps.isOpen !== isOpen) {
      if (nextProps.isOpen) {
        this.onOpen();
      } else {
        this.onClose();
      }
    }
  }

  onOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus();
    });
    document.querySelector("html").classList.add("modal-lock-scroll");
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus();
    document.querySelector("html").classList.remove("modal-lock-scroll");
  };

  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose();
  };

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, role, width, closeOnCover } = this.props;

    const optional = {};

    if (closeOnCover) {
      optional.onClick = this.onClickAway;
    }
    if (width) {
      optional.width = width;
    }

    return (
      <Fragment>
        <ModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => {
            this.openButtonNode = n;
          }}
        />
        {isOpen && (
          <ModalContent
            ariaLabel={ariaLabel}
            buttonRef={n => {
              this.closeButtonNode = n;
            }}
            modalRef={n => {
              this.modalNode = n;
            }}
            content={children}
            onClose={this.onClose}
            role={role}
            optional={optional}
          />
        )}
      </Fragment>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  ariaLabel: PropTypes.string,
  children: PropTypes.any,
  role: PropTypes.string,
  width: PropTypes.string,
  closeOnCover: PropTypes.bool
};

export default Modal;

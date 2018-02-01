import React from 'react';
import { Modal } from 'react-bootstrap';
class ContactModal extends React.Component {
  render() {
    return (
      <Modal
        aria-labelledby='modal-label'
        show={this.props.modalOpen}
        onHide={this.props.onModalClose}
        style={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.currentCandidate.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="phone">
            <span>{'P: '}</span>
            <span>{this.props.currentCandidate.phone}</span>
          </div>
          <div className="cell">
            <span>{'C: '}</span>
            <span>{this.props.currentCandidate.cell}</span>
          </div>
          <div className="email">
            <span>{'E: '}</span>
            <span>{this.props.currentCandidate.email}</span>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ContactModal;

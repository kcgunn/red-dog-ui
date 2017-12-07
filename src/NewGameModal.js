import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import PlayerSelector from './PlayerSelector.js';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class NewGameModal extends Component {

  render() {
    return (
      <div className="NewGameModal">
        <Modal show={this.props.showModal} onHide={this.props.onModalClose}>
          <Modal.Header >
            <Modal.Title>New Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <PlayerSelector onPlayerChange={this.props.onPlayerCountChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onModalClose}>Start Game</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default NewGameModal;
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './VillagerModal.css';


type VillagerModalProps = {
  cardToggle: () => void;
  image: string;
}

type VillagerModalState = {
  modal: boolean,
}

class VillagerModal extends React.PureComponent<VillagerModalProps, 
VillagerModalState> {
  constructor(props: VillagerModalProps) {
    super(props);
    this.state = {
      modal: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.cardToggle();
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} 
            className="villager-modal">
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody className="text-center">
              <img src={this.props.image} alt="bigger version 
              of villager"></img>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default VillagerModal;
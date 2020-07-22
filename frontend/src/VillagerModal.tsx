import React from 'react';
import { MouseEvent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';


type VillagerModalProps = {
  openSpecies: boolean,
  handleToggle: (menu: string, toggle: string) => void,
  addSpecies: (species: string) => void,
  removeSpecies: (species: string) => void,
  handleMenuFilter: (evt: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

type VillagerModalState = {
  modal: boolean,
}

class VillagerModal extends React.PureComponent<{}, VillagerModalState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      modal: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="villager-modal">
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default VillagerModal;
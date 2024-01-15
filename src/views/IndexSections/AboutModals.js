import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";

class Modals extends React.Component {
  state = {};

  toggleModal = (state, person) => {
    this.setState({
      [state]: !this.state[state],
      selectedPerson: person,
    });
  };

  render() {
    const { selectedPerson } = this.state;
  
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal("defaultModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-default" style={{ fontWeight: 'bold' }}>
              {selectedPerson ? selectedPerson.name : ""}
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
          {selectedPerson && (
              <div className="avatar-container">
                <img src={selectedPerson.avatar} alt={`${selectedPerson.name}'s Avatar`} style={{width:"30%", borderRadius:"25%", float:"left", padding:"2%"}}/>
              </div>
            )}
            <p style={{textAlign:"justify"}}>
              {selectedPerson
                ? selectedPerson.desc
                : "Sorry! Failed to load content."}
            </p>
            {/* Additional content based on the selected person */}
          </div>
          <div className="modal-footer">
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Modals;

import React from "react";
import classnames from "classnames";
import {
  Button,
  Modal,
} from "reactstrap";

class Modals extends React.Component {
  state = {};

  toggleModal = (state, content) => {
    this.setState((prevState) => ({
      [state]: !prevState[state],
      selectedContent: content,
    }));
  };

  render() {
    const { selectedContent } = this.state;

    return (
      <>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal("defaultModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-default" style={{ fontWeight: 'bold' }}>
              {selectedContent ? selectedContent.title : ""}
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
            <div
              style={{ textAlign: "justify" }}
              dangerouslySetInnerHTML={{
                __html: selectedContent ? selectedContent.desc : "Sorry! Failed to load content.",
              }}
            />
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



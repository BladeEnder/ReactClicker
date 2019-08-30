import React, { Component } from "react";

class RemoveButton extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-danger">
          Remove
        </button>
      </React.Fragment>
    );
  }
}

export default RemoveButton;

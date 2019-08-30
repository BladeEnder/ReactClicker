import React, { Component } from "react";

class ResetButton extends Component {
  state = {
    nombre: 1
  };
  resetValue = () => {
    this.setState({ nombre: 0 });
    this.props.ceciReset(this.state.nombre, true);
    //console.log("cc: " + this.state.nombre);
  };
  render() {
    return (
      <button
        onClick={this.resetValue}
        type="button"
        className="btn btn-lg btn-warning"
      >
        Reset
      </button>
    );
  }
}

export default ResetButton;

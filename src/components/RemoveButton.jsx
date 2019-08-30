import React, { Component } from "react";

class RemoveButton extends Component {
  state = {
    nombre: 0
  };
  UpValue = () => {
    if (this.props.reset) {
      this.setState({ nombre: 0 });
      this.props.ceci(this.state.nombre, false);
    } else {
      this.setState({ nombre: this.state.nombre - 1 });
      this.props.ceci(this.state.nombre);
    }
    //console.log("cc: " + this.state.nombre);
  };
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.UpValue}
          type="button"
          className="btn btn-lg btn-danger"
        >
          -
        </button>
      </React.Fragment>
    );
  }
}

export default RemoveButton;

import React, { Component } from "react";

class ButtonAdd extends Component {
  state = {
    nombre: 0
  };
  UpValue = () => {
    console.log(this.props.reset);
    if (this.props.reset) {
      this.setState({ nombre: 0 });
      this.props.ceci(this.state.nombre, false);
    } else {
      this.setState({ nombre: this.state.nombre + 1 });
      this.props.ceci(this.state.nombre);
    }
    //console.log("cc: " + this.state.nombre);
  };

  render() {
    return (
      <React.Fragment>
        <button
          type="submit"
          onClick={this.UpValue}
          className="btn btn-lg btn-success"
          text="sdqd"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default ButtonAdd;

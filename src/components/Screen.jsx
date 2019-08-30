import React, { Component } from "react";

class Screen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={divScreenStyle} className="m-5 border">
          <div className="mx-auto display-1">{this.props.valeur}</div>
        </div>
      </React.Fragment>
    );
  }
}

const divScreenStyle = {
  paddingRight: 50
};
export default Screen;

import React from "react";
import logo from "./logo.svg";
import ButtonAdd from "./components/ButtonAdd";
import Screen from "./components/Screen";
import RemoveButton from "./components/RemoveButton";
import ResetButton from "./components/ResetButton";
import "./App.css";

class App extends React.Component {
  state = {
    chiffre: 0,
    reset: false
  };
  ceci = (nombre, resetV) => {
    this.setState({ reset: resetV });
    if (!this.state.reset) this.setState({ chiffre: nombre });
    console.log(nombre);
  };

  ceciReset = (nombre, reset) => {
    this.setState({ reset: true });
    this.setState({ chiffre: nombre });
    console.log(nombre);
  };
  render() {
    return (
      <React.Fragment>
        <Screen valeur={this.state.chiffre} />
        <ButtonAdd reset={this.state.reset} ceci={this.ceci} />
        <ResetButton ceciReset={this.ceciReset} />
        <RemoveButton />
      </React.Fragment>
    );
  }
}

export default App;

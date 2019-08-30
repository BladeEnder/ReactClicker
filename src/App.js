import React from "react";
import logo from "./logo.svg";
import ButtonAdd from "./components/ButtonAdd";
import Screen from "./components/Screen";
import RemoveButton from "./components/RemoveButton";
import ResetButton from "./components/ResetButton";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  state = {
    chiffre: 0,
    reset: false
  };
  ceci = (nombre, resetV) => {
    this.setState({ reset: resetV });
    if (!this.state.reset) this.setState({ chiffre: nombre });
    /*if (this.state.reset) {
      this.setState({ chiffre: this.state.chiffre + 1 });
    }*/
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
        <Header />
        <center>
          <Screen valeur={this.state.chiffre} />
        </center>
        <div className="d-flex justify-content-center">
          <ButtonAdd reset={this.state.reset} ceci={this.ceci} />
          <ResetButton ceciReset={this.ceciReset} />
          <RemoveButton valeur={this.state.chiffre} ceci={this.ceci} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

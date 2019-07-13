import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: ""
    };
  }

  onInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <br />
        <input name="nome" placeholder="nome" onChange={this.onInputChange} />
        <br />
        <br />
        <input
          name="sobrenome"
          placeholder="sobrenome"
          onChange={this.onInputChange}
        />

        <div>
          Seu nome é: {this.state.nome} {this.state.sobrenome}
        </div>
      </div>
    );
  }
}

export default Form;
//Databind

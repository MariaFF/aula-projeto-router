import React, { Component } from "react";

import { Prompt } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <Prompt when={true} message="Deseja sair desta pagina?" />
        About
      </div>
    );
  }
}

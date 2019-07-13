import React from "react";
import "./App.css";

import { Alert } from "reactstrap";

import Relogio from "./Relogio";
import Form from "./Form";
import MainLayout from "./layout/MainLayout";

class App extends React.Component {
  // state = {
  //   dateTime: new Date()
  // };

  // componentDidMount() {
  //   // sem parenteses = passando a função e não executando ela
  //   //quem vai chamar a funcao para atualizar o relogio
  //   //é o setInterval que executa a cada 1 seg a partir da
  //   //criacao do componente
  //   setInterval(this.atualizarRelogio, 1000);
  // }

  // atualizarRelogio = () => {
  //   // const newState = {dateTime: new Date()}
  //   // this.setState(newState)
  //   this.setState({ dateTime: new Date() });
  // };

  render() {
    return (
      <div className="App">
        <MainLayout />
        {/* <Relogio interval={400} />
        <Relogio interval={1000} />
        <Relogio interval={1250} />
        <Alert color="primary">Alert de teste</Alert>
        <Alert color="success">Alert de teste</Alert>
        <Alert color="danger">Alert de teste</Alert> */}
        {/* <button onClick={this.atualizarRelogio} /> */}
      </div>
    );
  }
}

export default App;

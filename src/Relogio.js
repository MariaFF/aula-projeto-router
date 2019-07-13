import React from "react";

class Relogio extends React.Component {
  state = {
    dateTime: new Date()
  };

  componentDidMount() {
    // sem parenteses = passando a função e não executando ela
    //quem vai chamar a funcao para atualizar o relogio
    //é o setInterval que executa a cada 1 seg a partir da
    //criacao do componente
    this.relogioInterval = setInterval(
      this.atualizarRelogio,
      this.props.interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.relogioInterval);
  }

  atualizarRelogio = () => {
    // const newState = {dateTime: new Date()}
    // this.setState(newState)
    this.setState({ dateTime: new Date() });
  };
  render() {
    return (
      <div className="relogio">
        <span>Hora atual</span>
        <span>{this.state.dateTime.toISOString()}</span>
      </div>
    );
  }
}

export default Relogio;

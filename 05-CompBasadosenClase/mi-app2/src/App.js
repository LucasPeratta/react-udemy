import { Component } from "react";

class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevPropd, prevState) {
    console.log("component did update", prevPropd, prevState);
  }

  componentWillUnmount() {
    console.log("desmontado componente", this.props, this.setState);
  }

  render() {
    console.log("ejecutando metodo render de button");
    return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
  }
}

class App extends Component {
  state = { valor: 3 };
  render() {
    console.log("this.state");
    return (
      <div>
        <p>Hola Mundo</p>
        {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
        <button
          className={"${this.state.valor}"}
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;

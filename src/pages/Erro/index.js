import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Erro.css';

class Erro extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="Erro404">
        <div className="card">
          <h1>404</h1>
          <h3>Ops! Pagina não encontrada.</h3>
          <Link to="/">Voltar ao início</Link>
        </div>
      </div>
    );
  }
}

export default Erro;
import React, { Component } from 'react';
import api from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import './filme.css';

class Filme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: [],
      loading: false
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    const res = await api.get(url)
      .then(function (response) {
        return response.data;
      });
    this.setState({ filme: res, loading: true });
  }

  render() {
    const { filme, loading } = this.state;
    return (
      <div className="filme">
        {
          !loading ?
            <Loading />
            :
            <div className="playerCard">
              <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                light={filme.foto}
                playing
                width="auto"
                height="360px"
                controls={true}
              />
              <h3 className="titulo">{filme.nome}</h3>
              <p>{filme.sinopse}</p>
              <Link to="/" className="btnVoltar">Voltar ao início</Link>
            </div>
        }
      </div>
    );
  }
}

export default Filme;
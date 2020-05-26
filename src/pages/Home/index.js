import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import FadeIn from 'react-fade-in';
import api from 'axios';
import EllipsisText from "react-ellipsis-text";
import './home.css';

class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: false
    }
    this.carregarFilmes = this.carregarFilmes.bind(this);
  }

  componentDidMount() {
    this.carregarFilmes();
  }

  async carregarFilmes() {
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
    const res = await api.get(url)
      .then(function (response) {
        return response.data;
      });
    console.log(res);
    this.setState({ filmes: res, loading: true });
  }

  render() {
    const { filmes, loading } = this.state;
    return (
      <div className="home">
        {
          !loading ?
            <Loading />
            :
            filmes.map((filme) => {
              return (
                <div key={filme.id}>
                  <FadeIn>
                    <article className="card">
                      <img src={filme.foto} alt="capa filme" />
                      <h3 className="titulo">{filme.nome}</h3>
                      <p className="sinopse">
                        <EllipsisText text={filme.sinopse} length={200} />
                      </p>
                      <Link to={`/filme/${filme.id}`} className="btnDetalhe">Detalhes</Link>
                    </article>
                  </FadeIn>
                </div>
              );
            })
        }
      </div>
    );
  }
}

export default Home;
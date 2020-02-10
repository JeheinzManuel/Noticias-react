import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticia from './components/ListaNoticia';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias: []
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async  (categoria = 'general') => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=7e0bf04d395a47c89813deee2dfcd20c`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      this.setState({
        noticias : noticias.articles
      })
  }

  render() {
    return (
        <Fragment>
            <Header
                titulo='React Noticias'
            />

            <div className="container white contenedor-noticias ">
                <Formulario
                  consultarNoticias={this.consultarNoticias}/>

                <ListaNoticia
                    noticias={this.state.noticias}
                />
            </div>


        </Fragment>
    );
  }
}

export default App;

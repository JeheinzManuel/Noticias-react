import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListaNoticia = ({noticias}) =>  (
    <div className="row">
        {noticias.map(noticia => (
            <Noticia
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
);

ListaNoticia.propTypes = {
    noticias : PropTypes.array.isRequired
}

export default ListaNoticia;

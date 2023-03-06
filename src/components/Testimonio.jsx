import React from 'react';
import PropTypes from 'prop-types';
import '../estilos/Testimonio.css'



const Testimonio = (props) => {
    return (
        <div className='container-testimonio'>

          <img 
          className='imagen'
          src={require(`../imagenes/testimonio-${props.imagen}.png`)}
          alt= {props.alt}
          />

          <div className='container-info'>

            <p className='nombre'> <strong>{props.nombre}</strong>   en {props.pais}</p>

            <p className='cargo'>{props.cargo} en <strong>{props.empresa}</strong></p>

            <p className='testimonio'>{props.testimonio}</p>


          </div>
               
        </div>
    );
};


Testimonio.propTypes = {
  nombre: PropTypes.string,
  pais: PropTypes.string,
  cargo: PropTypes.string,
  testimonio: PropTypes.string


};


export default Testimonio;


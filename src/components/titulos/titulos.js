//importo react//
import React from "react";
import './titulos.css'


function Titulos( props){           //asigno nombre a la funcion , se coloca un valor para dar una asignacion entre ()
   
    return(  //lo asigno para escribir el codigo

        <div className="tituloCentral">
  
            <h3 className="Titulogeneral"> {  props.name } </h3>  
            <h3 className="subtitulo"> {  props.segundotitulo } </h3>
            
            
            </div>

            
    )
}

export default Titulos;
import React, {Fragment}from'react';

const Statistic =(props)=>  {
    
    return(
        <Fragment>
    <p style={estilos.Texto}>{props.text}: {props.value}</p>
    </Fragment>
    );
    }
const estilos = {
        Texto:{
          fontSize:'20px',
          color:'green',
          textAlign: 'left',
          marginLeft:'45%',
        },
      }
export default Statistic;


 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react';
import Statistic from './components/Statics/Statics'



const App = () => {
  const estilos = {
    boton:{
      borderRadius: '8px',
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      marginLeft:'5px',
      marginRight:'5px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      transitionDuration: '0.4s',
      fontSize:'25px',
    },
    textAd:{
      color:'red',
    }
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = () => {
    return(
      <div>
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="all" value ={bad+good+neutral} />
        <Statistic text="average" value ={(bad+good+neutral)/3} />
        <Statistic text="positive" value ={(good*100)/(bad+good+neutral)} />
      </div>
    )
  }

  return(
    <center >
  <div >
  <h1>Give feedback</h1>
  <br/>
  <button onClick={()=>{setGood(good+1)}} style={estilos.boton}>Good </button>
  <button onClick={()=>{setNeutral(neutral+1)}} style={estilos.boton}>neutral</button>
  <button onClick={()=>{setBad(bad+1)}} style={estilos.boton}>bad</button>
  <br/>
  {(good<=0||bad<=0||neutral<=0)? (<h5 style={estilos.textAd}>No hay votos registrados<p>vote por los 3 tipos</p></h5>):(Statistics())}
  </div>
  </center>
  )};
  
  




ReactDOM.render( <App />, document.getElementById('root') )


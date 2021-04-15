import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const App = (props) => {
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
      fontSize:'15px',
    },
    AnecDia:{
      color:'blue',
      fontSize:'25px',
    },
    AnecVotada:{
      color:'darkblue',
      fontSize:'30px',
    },
    AnecVotadaV:{
      color:'darkblue',
      fontSize:'20px',
    }
  }
  
  const [selected, setSelected] = useState(0)
  const [vote, setVote]= useState(1)
  const [votado, setVotado]= useState({
    anec:'',
    vote:0,
  },)

  return (
    <center>
    <div>
    <h1> Anecdota del dia</h1>
    <p style={estilos.AnecDia}> {props.anecdotes[selected]}</p>
    <p> tiene {vote-1}</p>
    <button onClick={()=>
    {
    setVote(vote+1);
    (vote>=votado.vote)?(
      setVotado({
        ... votado,
      anec:props.anecdotes[selected],
      vote: vote,
    })):(console.log(vote))
    
    }} style={estilos.boton}>Votar </button>
    <button onClick={()=>{setSelected(selected+1);setVote(1)}} style={estilos.boton}>NEXT </button>
    <h1> Anecdota con mas votos</h1>
    <p style={estilos.AnecVotada}> {votado.anec}</p>
    <p style={estilos.AnecVotadaV}> tiene {votado.vote}</p>
    </div>
    </center>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)


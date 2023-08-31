import { useState } from 'react'
import './App.css'
import Logo from "./assets/Logo.png"
import Renan from "./assets/Renan.jpg"
import Iago from "./assets/Iago.jpg"

export default function App() {
  const [counterR, setCounterR] = useState(0)
  const [counterI, setCounterI] = useState(0)

  function incrementoRenan() {
    setCounterR((prevState) => prevState + 1);
  }

  function decrementoRenan() {
    setCounterR((prevState) => prevState - 1);
  }

  function incrementoIago() {
    setCounterI((prevState) => prevState + 1);
  }

  function decrementoIago() {
    setCounterI((prevState) => prevState - 1);
  }

  return (
    <>
      <div className='logo'>
        <img className="logoimg" src={Logo}/>
      </div>
      <div className="titulo">
        <h1>Aposta da heineken</h1>
      </div>
      <div className='participantes'>
        <div className='containerImg'>
          <img className='partcipantesImg' src={Renan}/>
          <h2>Total: {counterR}</h2>
          <button className='positive' onClick={incrementoRenan}> + </button>
          <button className='negative' onClick={decrementoRenan}> - </button>
        </div>
        <div className='containerImg'>
          <img className='partcipantesImg' src={Iago}/>
          <h2>Total: {counterI}</h2>
          <button className='positive' onClick={incrementoIago}> + </button>
          <button className='negative' onClick={decrementoIago}> - </button>
        </div>
       
      </div>
      <div className='containerBtn'>
          <button>
            Salvar
          </button>
        </div>
    </>
  )
}



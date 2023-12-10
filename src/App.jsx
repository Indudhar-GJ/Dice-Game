import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

function App() {
  const [isGame,setisGame]=useState(false)

  const toggleGame=()=>{
    setisGame(!isGame)
  }

  return (
    <>
    {isGame ? <GamePlay/> : <StartGame toggle={toggleGame} />}
    </>
  )
}

export default App


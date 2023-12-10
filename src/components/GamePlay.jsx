import React from 'react'
import TotalScore from './TotalScore'
import NumberSel from './NumberSel'
import styled from 'styled-components'
import Roledice from './Roledice'
import { useState } from 'react'


const GamePlay = () => {

  const [selNum,setselNum]=useState()
  const [diceNum,setdiceNum]=useState('/images/dice_1.png')
  const [score,setscore]=useState(0)
  const [err,seterr]=useState("")

  const changedice=()=>{

    if(!selNum)
    {
      seterr("You have not selected a number")
      return
    }
    seterr("")

    let n=Math.floor( Math.random()*6)+1
    setdiceNum(`/images/dice_${n}.png`)
    
    if(selNum===n)
    {
      setscore(score+n)
    }
    else
    {
      setscore(score-2)
    }
    setselNum(undefined)
  }
  const resetscore=()=>{
    setscore(0)
  }  

  return (
    <MainContainer>
      <Top>
        <TotalScore score={score} />
        <NumberSel selNum={selNum} setselNum={setselNum} err={err} />
      </Top>
      <Roledice diceNum={diceNum} changedice={changedice} />
      <div className="btn">
        <Button className='first' onClick={resetscore}>Reset</Button>
        <Button className='second'>Show Rules</Button>
      </div>
    </MainContainer>
  )
}

export default GamePlay

const Top=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`
const MainContainer=styled.main`
max-width: 1100px;
margin: 0 auto;
.btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 50px;
  :hover{
    cursor: pointer;
  }
  .first{
    background-color: white;
    color: black; 
  }
  .second{
    background-color: black;
    color: white;
  }
  .second:hover{
    background-color: white;
    color: black; 
    transition: 0.3s ease-in-out;
  }
  .first:hover{
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }

}
`
const Button=styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  padding: 8px;
  font-size: 15px;
  border-radius: 8px;
  
`




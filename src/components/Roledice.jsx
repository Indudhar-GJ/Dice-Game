import React, { useState } from 'react'
import styled from 'styled-components'

const Roledice = ({diceNum,changedice}) => {

  return (
    <Container>
      <img onClick={changedice} src={diceNum} alt="dice 1" />
      <p>Click on dice to roll</p>
    </Container>
  )
}

export default Roledice

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 35px;
img{
  cursor: pointer;
}
  
`

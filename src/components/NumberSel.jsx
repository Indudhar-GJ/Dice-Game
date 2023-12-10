import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSel = ({selNum,setselNum,err}) => {
    const arr=[1,2,3,4,5,6]
    // console.log(selNum);
  return (
    <Container>
            <p className='errcls'>{err}</p>
            <div className="flex">
                {arr.map((value,i)=>(
                    <Box key={i}
                    issel={(value===selNum)}
                    onClick={()=>setselNum(value)}
                    ><p>{value}</p></Box>
                ))}
            </div>
        <p>Select number</p>
    </Container>
  )
}

export default NumberSel

const Container=styled.div`
.flex{
    display: flex;
    gap: 5px;
}
.flex:hover{
    cursor: pointer;
}
.errcls{
    color: red;
    display: flex;
    justify-content: end;
}
`
const Box =styled.div`
    height: 50px;
    width: 50px;
    border: 2px solid black;
    p{
        padding: 0px 20px;
    }
    background-color: ${(props)=> props.issel ? "black" : "white"};
    color: ${(props)=> !props.issel ? "black" : "white"};
`

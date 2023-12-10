import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
      <Score>
        <h1>{score}</h1>
        <p>Total Score</p>
      </Score>
  )
}

export default TotalScore

const Score = styled.div`
  h1{
    font-size: 70px;
    display: flex;
    justify-content: center;
  }
  p{
    font-weight: 500;
  }
  margin: 30px;
  margin-left: 50px;
  display: inline-flex;
  flex-direction: column;
  line-height: 0px;
`

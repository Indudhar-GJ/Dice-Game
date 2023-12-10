import React from "react";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dice-start-page.png" alt="" />
      </div>
      <Btn>
        <h1>Dice Game</h1>
        <button onClick={toggle} type="submit">
          Play Now
        </button>
      </Btn>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 12px;
  h1 {
    font-size: 450%;
  }
  button {
    margin: 0 80px;
    background-color: black;
    color: white;
    padding: 8px 25px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s ease-in;
  }
  button:hover{
    border: 2px black solid;
    background-color: white;
    color: black;
    transition: 0.2s ease-out;
  }
`;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .button {
    --bg: #000;
    --hover-bg: #ff90e8;
    --hover-text: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid var(--bg);
    border-radius: 4px;
    padding: 0.8em 2em;
    background: var(--bg);
    transition: 0.2s;
  }

  .button:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
  }

  .button:active {
    transform: translate(0);
    box-shadow: none;
  }
`;

function Workout1() {
  const [Workout1, setWorkout1] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/Workout/1') // Update with your backend URL
      .then((response) => {
        setWorkout1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <StyledWrapper>
      <h1 className=' text-white'>WORKOUT1</h1>
      {Workout1.map((Workout1) => (
        <div key={Workout1.id}>
          <h2   className=' text-white'>{Workout1.title}</h2>
          <p   className=' text-white'>{Workout1.content}</p>
        </div>
      ))}
    </StyledWrapper>
  );
}

export default Workout1;

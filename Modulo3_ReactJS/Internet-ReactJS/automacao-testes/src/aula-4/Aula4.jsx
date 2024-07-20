import React, { useState } from 'react';
import styled from 'styled-components';
import { Topico2 } from './parte-2/Topico2';
import Counter from './parte-1/components/Counter/Counter';


const ClassRoom = styled.div`
	display: flex;
	flex-direction: column;
`;

const ClassRoomControls = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 10px 0;
`;

const ClassRoomBoard = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;

const Aula4 = () => {

  const goBack = () => {
    setCurrentPage('home');
  };

  const [topic, setTopic] = useState(2);
  const [currentPage, setCurrentPage] = useState('home');
  
  switch (currentPage) {
    case 'counter':
      return <Counter goBack={goBack} />; 
    default:
      return (
        <ClassRoom>
        <ClassRoomControls>
          <button onClick={() => setTopic(2)}>Topico 2</button>
          <button onClick={() => setCurrentPage('counter')}>Counter</button>
        </ClassRoomControls>
        <ClassRoomBoard>
          {topic === 2 && <Topico2 />}
        </ClassRoomBoard>
      </ClassRoom>
      );
  }
}

export default Aula4;
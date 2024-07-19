import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

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

const App = () => {
  return (
    <ClassRoom>
      <ClassRoomControls>
        Tópico único ;)
      </ClassRoomControls>
      <ClassRoomBoard>
        <Counter />
      </ClassRoomBoard>
    </ClassRoom>
  );
}

export default App;
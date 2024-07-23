import './App.css';
import React from 'react';
import PetShop from './PetShop';

function App() {
  const handleClick = () => {
    console.log('Iniciando o banho...')
  }
  return (
    <PetShop 
      dogs={2}
      customerName='Paulo Eduardo'
      onClick={handleClick}
    />
  );
}

export default App;

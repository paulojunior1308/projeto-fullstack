import './App.css';
import React, { useState } from 'react';
import Button from './Component/Button';
import Calc from './Component/Calc';

function App() {

  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(30)

  const handleClick = () => {
    setMin(10)
  }

  const handleCalc = ( { target }) => {
    const value = target.value
    setValue(min + max)
  }

  return (
    <div className="App">
      <div>
        <h1>Valor calculado: {value}</h1>
        <Calc
          min={min}
          max={max}
          onChange={handleCalc}
        />
      </div>
      <br />
      <Button
        onClick = {handleClick}
      >
        Adicionar no carrinho
      </Button>
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import './Counter.css'

export default function Counter() 
{
  const [value, setValue] = useState(1)
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    
    /*
    document.getElementById('moeda').innerHTML = 2.00 * value
  }, [value])*/


  function down()
  {
    if (value <= 1)
      {
        setButtonStyle('counter-button-minus-desactive')
      }

    if (value > 0)
      {
        setValue(value - 1)
      }
  }

  function up()
  {
    setValue(value + 1)
    setButtonStyle('counter-button-minus-active')
  }

  return (
    <div className='container'>
      <div className='text-wrapper'>
        <h1>Counter baseado no Ifood </h1>
      </div>
      <div className='countex-wrapper'>
        <p>Quantidade produto</p>
      </div>
      <div className='button-wrapper'>
        <button 
          className={buttonStyle}
          onClick={down}
        >
          -
        </button>
        <p>{value}</p>
        <button 
          className='counter-button-plus-active'
          onClick={up}
        >
          +
        </button>
      </div>
    </div>
  )
}

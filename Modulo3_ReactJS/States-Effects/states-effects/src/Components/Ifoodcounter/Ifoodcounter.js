import React, {useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() 
{
  const [value, setValue] = useState(1)
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')
  const [money, setMoney] = useState(2.00)

  useEffect(() => {
    setMoney(2.00*value);
  },[value]);
    
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
    <div className='countex-wrapper'>
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
      <button id='money'>{money.toFixed(2)}</button>
      {/*<button id='moeda'>12,00</button>*/}
    </div>
  )
}

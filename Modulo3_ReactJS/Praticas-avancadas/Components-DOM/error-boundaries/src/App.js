import React, { Fragment } from "react";

const store =
[
  {
  type:'Roupa'
  },
  {
  type:'Calçado'
  },
  {
  type:'Camiseta'
  }
]

function Column({ type })
{
  return(
    <tr>
      <td>{type}</td>
    </tr>
  )
}

function App()
{
  const renderColumns = (element, key) => 
    (
      <Fragment key={`column-${key}`}>
        <Column type={element.type} />
      </Fragment>
    )

  return(
    <table>
      <tbody>
        {store.map(renderColumns)}
      </tbody>
    </table>
  )
}

export default App
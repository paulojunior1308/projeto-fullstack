import React from "react"

function ComponentA(props)
{
  return (
    <div> Componente A
      <div>{props.children}</div>
    </div>
  )
}

export default ComponentA
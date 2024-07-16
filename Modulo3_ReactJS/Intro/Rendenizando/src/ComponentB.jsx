import React from "react";

function ComponentB(props)
{
  return (
    <div>
      <div>Componente B{props.children}</div>
    </div>
  )
}

export default ComponentB
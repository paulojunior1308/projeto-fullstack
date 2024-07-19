// ----- STATELESS -----
// Não possui gerenciamento de estados no componente
// Construidos usando funções em JS
import React from 'react';

const TodoListStateless = ({items}) => (
  <div className='bloco-lista'>
    <p>Stateless</p>
    <ul className='lista-estilizada'>
      {items.map(item => <li>{item}</li>)}
    </ul>
  </div>
);

export default TodoListStateless;
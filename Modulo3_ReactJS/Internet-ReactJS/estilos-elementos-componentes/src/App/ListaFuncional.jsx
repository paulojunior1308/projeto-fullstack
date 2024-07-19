import React, { useState } from "react";
import TodoListStatefull from "./TodoListStatefull";

const ListaFuncional = () => {
  const [items, setItems] = useState(['Tomate', 'Alface', 'Melancia']);
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = () => {
    setItems([...items.slice(1)]);
  };
  const goBack = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'statefull':
        return <TodoListStatefull goBack={goBack} />;
      default:
        return (
          <div className="bloco-lista">
            <p>Minha lista</p>
            <ul className="lista-estilizada">
              {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={() => addItem('Abobora')}>Add Item</button>
            <button onClick={() => removeItem()}>Remove Item</button>
            <button onClick={() => setCurrentPage('statefull')}>Lista Statefull</button>
            <button onClick={goBack}>Voltar</button>
          </div>
        );
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default ListaFuncional;

import React, { useState } from "react";
import TodoListStatefull from "./TodoListStatefull";
import './App.css';
import Formularios from "./NameForm";
import SorveteForm from "./SorveteForm";
import FileInput from "./FileInput";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  const goBack = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'statefull':
        return <TodoListStatefull goBack={goBack} />;
      case 'formularios':
        return <Formularios goBack={goBack} />;  
      case 'sorvete':
        return <SorveteForm goBack={goBack} />;  
      case 'file':
        return <FileInput goBack={goBack} />;  
      default:
        return (
          <div className="bloco-lista">
            <h1>Minha página inicial</h1>
            <button onClick={() => setCurrentPage('statefull')}>Lista Statefull</button>
            <button onClick={() => setCurrentPage('formularios')}>Formularios</button>
            <button onClick={() => setCurrentPage('sorvete')}>Formulario de Sorvete</button>
            <button onClick={() => setCurrentPage('file')}>Formulario de Envio</button>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

export default App;

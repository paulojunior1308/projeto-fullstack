import React from "react";
import Button from './Button.js'

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

  const renderShowHistory = () => (
    <div>
      Clique no botão abaixo para visualizar o histórico dos Clientes
      <br />
      {buttonA}
    </div>
  )

  const renderAddCustomer = () => (
    <div>
      Clique abaixo para cadastrar o cliente
      <br />
      {buttonB}
    </div>
  )

  const showCustomer = () => 
    {
      if (!hasCustomer) return null

      return (
        <div>
          <h1>Nome do Cliente: Paulo Eduardo</h1>
        </div>
      )
    }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula</p>
      {hasCustomer ? renderShowHistory() : renderAddCustomer()}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
};

export default App;




// OUTRA FORMA DE SER FEITO A CONDIÇÃO

  {/* {hasCustomer && ( Verifica se existe um cliente antes de renderizar a página
      {hasCustomer ? ( //Verifica se existe um cliente antes de renderizar a página, caso não tenha, habilita o botão de cadastro
        <div>
          Clique no botão abaixo para visualizar o histórico dos Clientes
          <br />
          {buttonA}
        </div>
      ) : (
        <div>
          Clique abaixo para cadastrar o cliente
          <br />
          {buttonB}
        </div>
      )}*/}
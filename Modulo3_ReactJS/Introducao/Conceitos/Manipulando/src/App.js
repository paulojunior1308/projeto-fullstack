import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Paulo Eduardo',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Eduardo Souza',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Paulo Junior',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'Souza Junior',
    skills: ['Reason']
  }
]

const App = () => {

  const handleClick = (e, id) => 
    {
      console.log('deletar cliente')
      alert(`Id do cliente: ${id}`)
    }
  const renderCustomers = (customer, index) => 
    {
      return (
        <div  key={`customer-${customer.id}`}>
          <li>{customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar cliente x</button></li>
          {customer.skills.map(renderSkills)}
        </div>
      )
    }

  const renderSkills = (skill, index) => 
    {
      return (
        <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
          <li>{skill}</li>
        </div>
      )
    }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula</p> 
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};

export default App;
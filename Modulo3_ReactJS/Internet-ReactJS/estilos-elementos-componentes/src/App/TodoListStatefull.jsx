// ----- STATEFUL -----
// Possui gerenciamento de estados no componente.
// Construídos usando classes em JS

import React, {Component} from 'react';




class TodoListStatefull extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      items: [
        'Tomate',
        'Alface',
        'Melancia'
      ]
    }
  }

  addItem = (item) => 
    {
      this.setState({items: [...this.state.items, item]});
    }


  removeItem = () => 
    {
      this.setState({ items: [...this.state.items.slice(1)]})
    }  
  
  render()
  {
    
    const { items } = this.state;
    const { goBack } = this.props;
    return(
      <div className='bloco-lista'>
        <p>Statefull</p>
        <ul className='lista-estilizada'>
          {items.map(item => <li>{item}</li>)}
        </ul>
        <button onClick={() => this.addItem('Abóbora')}> Adicionar item</button>
        <button onClick={() => this.removeItem()}> Remover item</button>
        <button onClick={goBack}>Voltar</button>
      </div>
    )
  }
}

export default TodoListStatefull;
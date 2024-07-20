import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <p>Olá! Selecione uma aula abaixo :D</p>
    <Link to="/aula-4">Aula 4</Link>
  </>
)

export default Home;
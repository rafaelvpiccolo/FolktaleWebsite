// Navigation.js - Componente de Navegação
//Eu nao estou vendo utilidade que importa o Link, e eu passei a utilizar o Link diretamente na Home, por exemplo.

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

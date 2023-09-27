// Navigation.js - Componente de Navegação

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

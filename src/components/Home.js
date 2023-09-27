import { useState } from 'react';
import './Home.css';
import logo from '../assets/folktale_logo.png'

function Home() {
    return (
    <div className="home-container">
      <header>
      <img src={logo} alt="Título do Jogo" className='imagem-logo'/>
      <div className='header-buttons'>
        <button>Cadastro</button>
        <button>Sobre Nós</button>
      </div>
      <div className="login-form">
        <input type="text" placeholder="LOGIN" />
        <input type="password" placeholder="SENHA" />
        <button>LOGAR</button>
      </div>
    </header>
      <main>
        <section className="sinopse">
          <h2>Folk Tale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida orci eget augue luctus,
            nec dignissim elit posuere.
          </p>
        </section>
        <section className="imagem">
          {/* Insira a imagem desejada aqui */}
        </section>
      </main>
    </div>
    );
}

export default Home;


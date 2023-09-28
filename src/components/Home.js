import { useState } from 'react';
import './Home.css';
import logo from '../assets/folktale_logo.png'
import gameImage from '../assets/gameImage.png'

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
      <main className='container'>
      <div class="content">
        <p>FolkTale é um emocionante jogo de aventura em que os jogadores exploram um mundo mágico cheio de criaturas fantásticas, desafios intrigantes e histórias envolventes. O jogo combina elementos de RPG de combate em turnos e exploração para proporcionar uma experiência única e cativante para os jogadores.</p>
        <img src={gameImage} alt="Imagem do Jogo" />
      </div>
      </main>
    </div>
    );
}

export default Home;


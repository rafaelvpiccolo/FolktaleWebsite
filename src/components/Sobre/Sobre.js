import React from "react";
import Header from "../Header/Header";
import arqueiro from "../../assets/arqueiro.png";
import guerreiro from "../../assets/guerreiro.png";
import mago from "../../assets/mago.png";
import gladiador from "../../assets/gladiador.png";
import controleMental from "../../assets/controle_mental.png";
import "./Sobre.css";

export default function Sobre() {
  return (
<div className="home-container">
  <Header />
  <div className="container">
    <div className="sobre">
      <h1 className="titulo">Sobre a Equipe</h1>
    </div>
    <div className="integrante">
      <img src={arqueiro} alt="Título do Jogo" className="imagem-logo" />   
      <h2 className="nomeIntegrante">Piccolo</h2>   
      <p className="sobreIntegrante">
        Um calouro apaixonado por codificação que está explorando várias
        linguagens de programação e já começou a colaborar em projetos de
        desenvolvimento.
      </p>
    </div>
    <div className="integrante">
      <img src={guerreiro} alt="Título do Jogo" className="imagem-logo" />
      <h2 className="nomeIntegrante">Nikholas</h2>
      <p className="sobreIntegrante">
        Texto sobre o integrante
      </p>
    </div>
    <div className="integrante">
      <img src={mago} alt="Título do Jogo" className="imagem-logo" />
      <h2 className="nomeIntegrante">Nathila</h2>
      <p className="sobreIntegrante">
        Texto sobre o integrante
      </p>
    </div>
    <div className="integrante">
      <img src={gladiador} alt="Título do Jogo" className="imagem-logo" />
      <h2 className="nomeIntegrante">Silvestre</h2>
      <p className="sobreIntegrante">
        Texto sobre o integrante
      </p>
    </div>
    <div className="integrante">
      <img
        src={controleMental}
        alt="Título do Jogo"
        className="imagem-logo"
      />
      <h2 className="nomeIntegrante">Sayuri</h2>
      <p className="sobreIntegrante">
        Texto sobre o integrante
      </p>
    </div>
  </div>
</div>
  );
}

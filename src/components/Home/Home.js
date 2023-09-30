import "./Home.css";
import gameImage from "../../assets/gameImage.png";
import Header from "../Header/Header";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="container">
        <div class="content">
          <p>
            FolkTale é um emocionante jogo de aventura em que os jogadores
            exploram um mundo mágico cheio de criaturas fantásticas, desafios
            intrigantes e histórias envolventes. O jogo combina elementos de RPG
            de combate em turnos e exploração para proporcionar uma experiência
            única e cativante para os jogadores.
          </p>
          <img src={gameImage} alt="Imagem do Jogo" />
        </div>
      </main>
    </div>
  );
}

export default Home;

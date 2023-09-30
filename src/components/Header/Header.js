import { Link } from "react-router-dom";
import logo from "../../assets/folktale_logo.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Título do Jogo" className="imagem-logo" />
      </Link>
      <div className="header-buttons">
        <Link to="/cadastro">
          <button className="buttons">Cadastro</button>
        </Link>
        <Link to="/sobre">
          <button className="buttons">Sobre</button>
        </Link>
      </div>
      <div className="login-form">
        <input type="text" placeholder="LOGIN" />
        <input type="password" placeholder="SENHA" />
        <button>LOGAR</button>
      </div>
    </header>
  );
}

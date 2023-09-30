import { useState } from "react";
import "./Cadastro.css";
import logoRodape from "../../assets/folktale_logo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(null);
  // const [idadeMin] = useState(18);
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");

  // const calcularIdade = (dataNasc) => {
  //   const hoje = new Date();
  //   const dataNascimento = new Date(dataNasc);
  //   const idade = hoje.getFullYear() - dataNascimento.getFullYear();
  //   const diferencaMeses = hoje.getMonth() - dataNascimento.getMonth();

  //   if (
  //     diferencaMeses < 0 ||
  //     (diferencaMeses === 0 && hoje.getDate() < dataNascimento.getDate())
  //   ) {
  //     return idade - 1;
  //   }

  //   return idade;
  // };

  const handleDataNascimento = (dataNasc) => {
    setIdade(dataNasc);
  };

  const handleNome = (event) => {
    const novoValor = event.target.value;
    setNome(novoValor);
  };

  const handleEmail = (event) => {
    const novoValor = event.target.value;
    setEmail(novoValor);
  };

  const handleSenha = (event) => {
    const novoValor = event.target.value;
    console.log(novoValor);
    setSenha(novoValor);
  };

  const handleSenhaConfirm = (event) => {
    const novoValor = event.target.value;
    setSenhaConfirm(novoValor);
  };

  // const handleEnviarCadastro = () => {
  //   if(senha !== senhaConfirm) {
  //     alert('As senhas não correspondem. Por favor, verifique e tente novamente.');
  //   }
  //   else if(handleValidarIdade) {

  //   }
  // }

  // const handleValidarIdade = () => {
  //   const age = calcularIdade(idade);
  //   if (age >= idadeMin) {
  //     return true;
  //   } else {
  //     alert('Você deve ter pelo menos ' + idadeMin + ' anos.');
  //     return false;
  //   }
  // };

  return (
    <div className="cadastro-container">
      {/* Banner com imagem e texto */}
      <div id="banner">
        <h1>Cadastro</h1>
      </div>

      {/* Formulário de Cadastro */}
      <div id="form-container">
        <form>
          <div className="form-group">
            <label className="label" htmlFor="nome">
              Nome:
            </label>
            <input
              value={nome}
              onChange={handleNome}
              type="text"
              id="nome"
              name="nome"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="idade">
              Idade:
            </label>
            <DatePicker
              selected={idade}
              onChange={handleDataNascimento}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              id="email"
              name="email"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="senha">
              Senha:
            </label>
            <input
              value={senha}
              onChange={handleSenha}
              type="password"
              id="senha"
              name="senha"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="senhaConfirma">
              Confirmar Senha:
            </label>
            <input
              value={senhaConfirm}
              onChange={handleSenhaConfirm}
              type="password"
              id="senhaConfirma"
              name="senhaConfirma"
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="button">
            Enviar
          </button>
        </form>
      </div>
      <footer>
        <Link to="/">
          <img src={logoRodape} alt="logo" className="imagem-rodape" />
        </Link>
      </footer>
    </div>
  );
}

export default Cadastro;

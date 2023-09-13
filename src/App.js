import './App.css';
import './Cadastro.css';

function App() {
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
            <label className="label" htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" className="input-field" required />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="idade">Idade:</label>
            <input type="number" id="idade" name="Idade" className="input-field" required />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" className="input-field" required />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="senha">Senha:</label>
            <input type="text" id="senha" name="senha" className="input-field" required />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="senhaConfirma">Confirmar Senha:</label>
            <input type="text" id="senhaConfirma" name="senhaConfirma" className="input-field" required />
          </div>

          <button type="submit" className="button">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

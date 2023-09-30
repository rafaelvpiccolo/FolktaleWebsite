import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "../Cadastro/Cadastro";
import Home from "../Home/Home";
import Sobre from "../Sobre/Sobre";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div className="App">
    <h1></h1>

    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={0} max={10} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Componente com Parâmetro">
        <ComParametro titulo="Situação do Aluno" aluno="Eduardo" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

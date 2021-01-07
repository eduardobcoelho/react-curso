import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div id="app">
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Eduardo" nota={9.3} />
    <Primeiro></Primeiro>
    <Aleatorio min={0} max={10} />
  </div>
);

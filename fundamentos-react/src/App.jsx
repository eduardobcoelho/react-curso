import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Eduardo" nota={9.3} />
    <Primeiro></Primeiro>
    <Aleatorio min ="0" max="10" />
  </div>
);

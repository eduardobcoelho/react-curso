import "./ParOuImparExtra.css";
import React from "react";
import numeros from "../../data/numerosExtra";

export default () => {
  const numerosList = numeros.map((numero, i) => {
    let isPar = numero % 2 === 0;
    return (
      <tr key={i} className={i%2 === 0 ? "estiloTR" : ""}>
        <td>{isPar ? <span>Par</span> : <span>Ímpar</span>}</td>
        <td>{numeros[i]}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaNumeroExtra">
      <table border="1">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Numero</th>
          </tr>
        </thead>

        <tbody>{numerosList}</tbody>
      </table>
    </div>
  );
};

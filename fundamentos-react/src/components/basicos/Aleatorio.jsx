import React from "react";

export default (props) => {
  const { min, max } = props;

  const numeroAleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor minimo: </strong>
        {min}
      </p>
      <p>
        <strong>Valor minimo: </strong>
        {max}
      </p>
      <p>
        <strong>Valor escolhido: </strong>{numeroAleatorio}
      </p>
    </>
  );
};

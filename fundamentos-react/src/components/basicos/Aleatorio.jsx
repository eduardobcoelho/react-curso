import React from "react";

export default function Aleatorio(props) {
  let numeroAleatorio = Math.random() * (props.max - props.min) + props.min;
  return (
    <>
      <p>
        Valor Aleatório entre {props.min} e {props.max}: <strong>{numeroAleatorio}</strong>
      </p>
    </>
  );
}

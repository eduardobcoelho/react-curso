import React from "react";

export default (props) => {
  const { titulo, aluno, nota } = props;
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <>
      <h2>{titulo}</h2>
      <p>
        Aluno: <strong>{aluno}</strong>, Nota: <strong>{nota}</strong>,
        Situação: <strong>{status}</strong>
      </p>
    </>
  );
};

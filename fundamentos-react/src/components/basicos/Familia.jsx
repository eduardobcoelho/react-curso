import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  const sobrenome = props.sobrenome;
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={sobrenome} />
      <FamiliaMembro nome="Ana" sobrenome={sobrenome} />
      <FamiliaMembro nome="Gustavo" sobrenome={sobrenome} />
    </div>
  );
};

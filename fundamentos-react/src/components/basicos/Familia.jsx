import React, { cloneElement } from "react";

export default (props) => {
  const filhos = props.children;
  return (
    <div>
      {filhos.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

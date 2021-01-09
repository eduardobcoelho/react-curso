import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const produtosList = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nomeProduto}</td>
        <td>{'R$'}{produto.precoProduto}</td>
      </tr>
    );
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>{produtosList}</tbody>
      </table>
    </div>
  );
};

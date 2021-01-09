import "./TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const produtosList = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
        <td>{produto.id}</td>
        <td>{produto.nomeProduto}</td>
        <td>{'R$'}{produto.precoProduto}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table border="1">
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

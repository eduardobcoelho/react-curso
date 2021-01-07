# Fundamentos React
Branch voltada para a seção 02: Fundamentos React.

# Anotações

## Aula 06 - Introdução do Módulo

## Aula 07 - Criando Projeto

* Usando o npx digite o comando dentro da pasta desejada: npx create-react-app

## Aula 08 - Exibindo String na Tela

#### ReactDOM

* Importar reactDOM: import ReactDOM from 'react-dom';
* Precisamos interagir com a biblioteca reactDOM;
* Utiliza-se para se renderizar um método na tela;
* **render()** --> ReactDOM.render()
    * Recebe dois parâmetros: o que vai ser renderizado e aonde será renderizado
    * const element = document.getElementById('root')
    * ReactDOM.render('Olá React!!!', element);

## Aula 08 - Conhecendo JSX

* A partir da sintaxe JSX é possível simular um elemento HTML no JavaScript
* É necessário importar o react: import React from 'react'
* Exemplo:
    * const strongString = <strong>Olá React!!!</strong>
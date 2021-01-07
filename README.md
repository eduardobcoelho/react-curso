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

## Aula 09 - Conhecendo JSX

* A partir da sintaxe JSX é possível simular um elemento HTML no JavaScript
* É necessário importar o react: import React from 'react'
* Exemplo:
    * const strongString = <strong>Olá React!!!</strong>

## Aula 10 - Carregando CSS

* Importando o CSS no arquivo JavaScript Index: import './index.css'

## Aula 11 - Primeiro Componente #01

* Para uma função ficar disponível externamente ao arquivo escrito, é necessário exportá-la;
* export default function nomeDaFuncao() {}
* É permitido pela sintaxe JSX referenciar um componente importado como se fosse uma tag
* Exemplo:
    * import Primeiro from './components/basicos/Primeiro'
    * ReactDOM.render(
        <div>
            <Primeiro></Primeiro>
        </div>, 
        document.getElementById('root')
    )

## Aula 12 - Primeiro Componente #02

* ATENÇÃO: Se você quiser retornar um elemento JSX identado em uma função, é importante colocar entre ()
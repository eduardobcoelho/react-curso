# Fundamentos React
Branch voltada para a seção 02: Fundamentos React.

# Anotações

## ATENÇÃO!!!

* **Para o arquivo Markdown não entender as anotações HTML como tags HTML, os nomes das tags estão escritas entre aspas simples.**

### Aula 06 - Introdução do Módulo

### Aula 07 - Criando Projeto

* Usando o npx digite o comando dentro da pasta desejada: npx create-react-app

### Aula 08 - Exibindo String na Tela

#### ReactDOM

* Importar reactDOM: import ReactDOM from 'react-dom';
* Precisamos interagir com a biblioteca reactDOM;
* Utiliza-se para se renderizar um método na tela;
* **render()** --> ReactDOM.render()
    * Recebe dois parâmetros: o que vai ser renderizado e aonde será renderizado
    * const element = document.getElementById('root')
    * ReactDOM.render('Olá React!!!', element);

### Aula 09 - Conhecendo JSX

* A partir da sintaxe JSX é possível simular um elemento HTML no JavaScript
* É necessário importar o react: import React from 'react'
* Exemplo:
    * const strongString = <'strong'>Olá React!!!</'strong'>

### Aula 10 - Carregando CSS

* Importando o CSS no arquivo JavaScript Index: import './index.css'

### Aula 11 - Primeiro Componente #01

* Para uma função ficar disponível externamente ao arquivo escrito, é necessário exportá-la;
* export default function nomeDaFuncao() {}
* É permitido pela sintaxe JSX referenciar um componente importado como se fosse uma tag
* Exemplo:
    * import Primeiro from './components/basicos/Primeiro'
    * ReactDOM.render(
        <'div'>
            <'Primeiro'></'Primeiro'>
        </'div'>, 
        document.getElementById('root')
    )

### Aula 12 - Primeiro Componente #02

* **ATENÇÃO!!**: Se você quiser retornar um elemento JSX identado em uma função, é importante colocar entre ()

### Aula 13 - Componente com Propriedade

* **ATENÇÃO!!**: Os componentes criados até então foram os componentes funcionais (baseados em função) - existem também os baseados em classe.
* **ATENÇÃO!!**: extensão .jsx serve para a IDE eventualmente te ajudar a completar o arquivo e não necessariamente faz alguma diferença para o React.
* **ATENÇÃO!!**: o React suporta tanto .js quanto .jsx, a única diferença entre as extensões é o que o React espera que você escreva dentro do arquivo.
* Podemos definir um componente de duas maneiras :
    * <'Primeiro'></'Primeiro'>
    * <'Primeiro' />
* Definir parâmetros pela tag do componente:
    * No index.js: <'Componente' parametroUm = "valorUm" parametroDois = "valorDois" />
    * No arquivo do componente (exemplo: Componente.jsx): 
    function Componente(props) {
        return (
            <'div'>
                <'h1'>{ props.parametroUm }</'h1'>
                <'h2'>{ props.parametroDois }</'h2'>
            </'div'>
        )
    }
* É possível passar o valor de um parâmetro tanto como string quanto como um valor numérico, apenas é necessário colocar o valor entre chaves. Exemplo: nota = {9.3}

### Aula 14 - Propriedades são Somente Leitura

* **ATENÇÃO!!**: quando um conjunto de propriedades são passadas para um componente, estas propriedades são **SOMENTE** leitura, não é possível alterá-las.

### Aula 15 - React Fragment

* Parsing error: componentes adjacentes precisam ser retornados havendo uma tag envolvendo os dois;
* Basicamente, uma maneira de exonerar as divs para resolver esse erro é utilizar o React.Fragment envelopando os elementos;
* Exemplo 01:
    return (
        <'React.Fragment'>
            <'h2'></'h2'>
            <'p'></'p'>
        <'React.Fragment'>
    )
* Exemplo 02:
    return (
        <>
            <'h2'></'h2'>
            <'p'></'p'>
        </>
    )
* **ATENÇÃO!!**: em caso de necessidade de ter alguma propriedade envolvendo os elementos adjacentes, apenas o exemplo 01 funciona.

### Aula 16 - Componente App

* Criando um componente App para importar todos os componentes criados;
* Diminuindo o código da função principal de App para arrow function.

### Aula 17 - Desafio Número Aleatório

* Criar um novo componente aleatorio que vai ser passado um valor máximo e um valor mínimo e sempre que for dado um refresh na página mostrar um numero aleatório entre eles

### Aula 18 - Desafio Número Aleatório (Resposta)

* Destructuring:
    * const { min, max } = props;
    * Onde props = { min: 0, max: 10 }

### Aula 19 - Componente Card #01

* Para definirmos a classe de uma tag na sintaxe JSX não usamos o class="" e sim o className="";
* Para passarmos informações dos "filhos" de um elemento JSX é necessário colocarmos no arquivo do componente, dentro da tag desejada, um { props.children }.
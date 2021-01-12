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

### Aula 20 - Componente Card #02

* Apenas alterações CSS.

### Aula 21 - Componente Card #03

* **Definindo cores por parâmetro**
    * No arquivo App.jsx:
        <'Card' titulo="#04 - Desafio Aleatório" color="#080">
            <'Aleatorio' min={0} max={10} />
        </'Card'>
    * No arquivo do componente Card.jsx:
        const cardStyle = {
            backgroundColor: props.color || "#cf5656",
            borderColor: props.color || "#cf5656",
        }

        return (
            <'div' className="Card" style={ cardStyle }>
            <'div' className="Title">{props.titulo}</'div'>
            <'div' className="Content">
                { props.children }
            </'div'>
            </'div'>
        );
    
### Aula 22 - Componente com filho #01

* O parâmetro do componente pai não é automaticamente passado para o componente filho;
* Maneira mais trivial:
    * Arquivo App.jsx: <'Familia' nomeMae="Barros" nomePai="Coelho" />
    * Arquivo Familia.jsx: <'FamiliaMembro' nome="Luiz Eduardo" nomeMae={props.nomeMae} nomePai={props.nomePai} />
* Operador Spread: {...props}:
    * Todos os atributos serão passados para o componente filho;
    * Exemplo: 
        * Arquivo App.jsx: <'Familia' nomeMae="Barros" nomePai="Coelho" />
        * Arquivo Familia.jsx: <'FamiliaMembro' {...props} />
        * Neste exemplo, com o operador spread, os atributos nomeMae e nomePai serão passados para o componente filho FamiliaMembro.

### Aula 23 - Componente com filho #02

* **React.cloneElement()**:
    * Clona um elemento;
    * Parametros: além de passar o elemento, também se pode passar, como segundo parâmetro, props para este elemento.
    * Exemplo 01 (Com apenas um elemento filho): 
        * **{React.cloneElement(props.children)}** --> Está clonando o elemento que está em props do elemento filho;
        * **{cloneElement(props.children, {...props})}** --> Está passando as propriedades do elemento pai, pro filho que está sendo clonado. 
    * Exemplo 02 (Com vários elementos filho):
        * **{React.Children.map(props.children)}** --> O map() recebe os elementos filhos como primeiro parâmetro;
        * **{React.Children.map(props.children), child => {**
            **return React.cloneElement(child, {...props})**
        **}** --> Como segundo parâmetro, o map() recebe uma função com um elemento child (filho atual/um dos filhos) e esta função retorna um clone deste elemento filho com as propriedades do pai.
    * Exemplo mais enxuto: 
        * Variável com os filhos: let filhos = props.children;
        * **{filhos.map((child, i) => {**
            **return cloneElement(child, {...props, key:i })**
        **})}**

### Aula 24 - Repetição

* Atributo **key**: a partir da chave, o React será capaz de detectar as eventuais mudanças que possam acontecer;
* Supomos que um determinado elemento de uma lista teve sua nota alterada e você quer que isso reflita na interface gráfica, o atributo key facilita para o React conseguir rapidamente encontrar qual elemento foi alterado;
* **ATENÇÃO!!!**O atributo key deve ser único.

### Aula 25 - Desafio Repetição

* Criar, na pasta de dados, um arquivo produtos.js com três atributos (id, nomeProduto e precoProduto) e na pasta repetição um arquivo TabelaProdutos.jsx com uma tabela mostrando todos os produtos. 

### Aula 26 - Desafio Repetição (Resposta)

### Aula 27 - Renderização Condicional #01

*  **OBS(Comparação estrita):** quando usamos "===" queremos comparar não somente o valor como também o tipo.
    const isPar = props.numero % 2 === 0
        return (
            <div>
                { isPar ? 
                    <span>Par</span> : <span>Ímpar</span>
                }
            </div>
        )
* O código acima exemplifica o uso de uma condicional para renderizar um elemento JSX na tela.
var animal = 'dog'
console.log(animal)
  {
    var animal = 'cat'
    console.log(animal)
  }
console.log(animal)

// LET
let Carros = 'Punto'
console.log(Carros)
  {
    let Carros = "Celta"
    console.log(Carros)
  }

// CONST
const celular = {
  marca: 'Apple',
  modelo: 'iphone 7'
}
console.log(celular.marca)
  celular.marca = 'Motorola'
console.log(celular.marca)

// ARROW FUNCTION
const cidade = ['Ferraz','Poá','Suzano']
const love = cidade.map(function (name) {
  return `I love ${name}`
})
const loveArrow = cidade.map((name) => {
  return `I Love ${name}`
})
const loveSingle = cidade.map(name => {
  return `I Love ${name}`
})
const loveOneLinha = cidade.map(name => `I Love ${name}`)
const loveChain = cidade
                        .filter(name => name === 'Poá')
                        .map(name => `I Love ${name}`)
console.log(love, loveArrow, loveSingle, loveOneLinha, loveChain)

//ARROW FUNCTION THIS
const buttonLove = document.querySelector('button')
buttonLove.addEventListener('click', () => {
  console.log(this)
})
buttonLove.addEventListener('click', function() {
  console.log(this)
})

//TEMPLATE LITERALS
const article = {
  title: 'Aprendendo Template Strings',
  intro: 'Uma breve explicação de como se utilizar template strings do ES6 em seu código hoje!',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officia, perspiciatis? Architecto, molestias autem. Repellat, laborum deserunt soluta necessitatibus. Tenetur illo, id magnam numquam neque illum temporibus, in qui eos.',
  tags: ['es6', 'js', 'template-literal'],
  author: ' '
};
function renderAuthor(name){
  return (name) ? name : 'unknonw';
}
console.log(article)
const markup = `
  <article>
    <header>
      <h1>${article.title}</h1>
    </header>
    <section>
      <p>${article.intro}</p>
    </section>
    <footer>
      <ul>
        <p>${article.tags.map((tag => `<li>${tag}</li>`)).join('')}
      </ul>
      <p>Author: ${renderAuthor(article.author)}</p>
    </footer>
  </article>
`
// document.body.innerHTML = markup;

//TAGGED TEMPLATE
const city = "Poá";
const residence = "Casa";
const car = "Punto";
const doisMilvinteUm = ` Esse ano vou morar <strong class="green">${city.toLocaleUpperCase()}</strong> na minha  <strong class="green">${residence.toLocaleUpperCase()}</strong>, mais esperada, com o meu <strong class="green">${car.toLocaleUpperCase()}</strong> na garagem!`
// document.body.innerHTML = doisMilvinteUm;

//MÉTODOS PARA STRING
const paragrafo = 'O nosso Deus é maior!';
console.log(paragrafo.length)
// ele pega apartir do terceiro numero e verifica se existe
console.log(paragrafo.startsWith('osso', 3))
//ele pega a mesmo do acima, mas pensando pelo final
console.log(paragrafo.endsWith('ior!', 21))
//verifica se tem essa palavra?
console.log(paragrafo.includes('nosso'))
console.log('pá '.repeat(10))

//ARRAY.FROM
const list = document.querySelectorAll('#list li');
const listArray = Array.from(list)
console.log(listArray)
//PEGANDO AS PALAVRAS NO NOVOS ARRAY PASSADO PELO MAP
const listados = listArray.map((palavra) => palavra.textContent);
console.log(listados)

//ARRAY.OF
//juntar varios dados e unir de uma forma rapida e simples[ string, number object]
const variosArray = Array.of(1,2,"Silas", {nome: "Amós Silas"});
console.log(variosArray)

//FIND E FINDINDEX
const data =[
    {
    nome:'Amós',
    age: 36,
    city: 'Ferraz'
  },
  {
    nome:'Silas',
    age: 36,
    city: 'Ferraz'
  },
  {
    nome:'Santos',
    age: 36,
    city: 'Ferraz'
  }
]
const amos = data.find(name => name.nome === 'Silas');
const asilas = data.findIndex(name => name.nome === 'Santos');
console.log(amos,asilas)

//ARRAY FILL
//Acrescentar palavras dentro do array e tb no indice que eu escolher
const arr = new Array(50);
arr.fill('bola')
arr.fill('quadrado', 1, 4)
console.log(arr)

//DESTRUCTURING
//Pegando dados dentro de um objeto ou array de forma mais simples
var dados = {
  nome:'Silas',
  age: 36,
    social: {
      insta: 'silinhas',
      face: 'silinhasFace'
    }
}
const {nome, age } = dados;
const {insta, face } = dados.social;
console.log(nome, age, insta, face)

//Podemos mudar o nome da variavel
const {face:fb} = dados.social;
console.log(fb)

//Podemos setar tb um valor que não existe variavel e criala
// const { cidade } = dados;
// console.log(cidade)

//DESTRUCTURING NO ARRAY
//invertendo o processo no array
const desArray = ['casa', 'carro', 36, 'beleza']
const [casa, carro, idd, moda] = desArray;
console.log(casa, carro, idd, moda)

//FAZENDO SWAP DE VARIAVEIS DESTRUCTURING
let arma = 'Fogo';
let bala = '38';
[arma,bala] = [bala,arma]
// console.log(`${arma} e ${bala}`)

//SPREAD OPERATOR
let front = [ 'javascript', 'vue', 'reactjs']
let back = [ 'php', 'laravel', 'java']

//Modo antigo
const fullstack = front.concat(back)
console.log(fullstack)
//Modo Novo
const fullstackDoisMilVinteUm = [...front, ...back]
console.log(fullstackDoisMilVinteUm)
// add no meio do spread operator
const fullstackDoisMilVinteUmMais = [...front, 'mais um',...back]
console.log(fullstackDoisMilVinteUmMais)

//SPREAD OPERATOR
function addItens(livro, caneta, alcool) {
  console.log(`Inicio com ${alcool} passando na caneta ${caneta}, e lendo o ${livro}`)
}
const dia = ['js', 'azul','70']
addItens(...dia)

//REST PARAMS
function mult(mult, ...args){
  return args.map(arg => arg * mult)
}
console.log(mult(10, 1, 2 ,3 ,4))

//INTRO A PROMISES, é uma promesa eu não fiz mas vou fazer alguma coisa.
 var defer = new Promise((resolve, reject) => {
    if(false)
      console.log('Hello!!')
      console.log('Error!!')
 });
 defer
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

//EXEMPLO REAL
/* Temos três status:
pending => está pendente
resolved => está resolvida
rejected => teve problema e não conseguiu se resolver */

// const posts = fetch('https://www.willianjusten.com.br/search.json');
const cars = fetch('https://gitautomarcas.cidautostore.com.br/api/get-veiculos-info');
console.log(cars)

 cars
  .then(data => data.json())
  .then(data => {
    const carros = data.veiculos
    const carresultado = data.veiculos
    console.log(carresultado)
    const automoveis = document.querySelector('.automoveis p')
    var textN = ''
      for(var i = 0;  i < carros.length; i ++){
        // textN += carresultado[i].id + '<br>'
        textN += `<p>ID: ${carresultado[i].id}  MARCA: ${carresultado[i].marca} MODELO: ${carresultado[i].modelo}</p>`
      }
    automoveis.innerHTML = textN
  })

//TEMOS TB A PROMISSE ALL E RACE
// ALL Controla toda as promisses e RACE executa a primeira e elimna as demais

//SYMBOL
//Ele é unico
let livro = Symbol('tech');
let caderno = Symbol('tech')

console.log(livro == caderno, livro === caderno)

let obj = {
  [Symbol('cor')]: 'vermelho',
  [Symbol('idade')]: 24,
  estilo: 'SP'
}
//Pegando as propriedades do Symbol
const symbols = Object.getOwnPropertySymbols(obj)
console.log(symbols)
const dataS = symbols.map((sym => obj[sym]))
console.log(dataS)

//INTERATORS E ITERABLES 41 -11.2
//GENERATORS Ele chama apenas uma vez a função, para chamar mais de uma vez preciso repetir o comando

function* getLivros(){
  yield 'Tech',
  yield 'Saúde',
  yield 'Mente'
}

const resLivros = getLivros()

console.log(resLivros.next())
console.log(resLivros.next())
console.log(resLivros.next())

//GENERATORS para trabalhar com fluxos!

//SET
let notebook = new Set(['LG', 'SAMSUNG', 'APPLE'])
notebook.add('DELL').delete('DELL')
console.log(notebook)
console.log('Existe esse notebook: LG '+ notebook.has('LG'))
console.log(notebook.has('SAMSUNG'))// VERIFICA SE EXISTE O ITEM
for(note of notebook){
  console.log(note)
}
//WEAK SET - Parecido com Set acima,lmebrando que não tem algumas propriedades

//MAP
let tech = new Map();

tech.set('mouse', 'com fio')
tech.set('mesa', 'madeira')
tech.set('monitor', 'game')

console.log(tech.has('monitor'))
console.log(tech)
console.log(tech.add('monitor','escritorio'))
console.log(tech)
//WEAKMAP só aceita objetos



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

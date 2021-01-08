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

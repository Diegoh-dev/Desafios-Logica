/*

DESCRIÇÃO:
Jaden Smith, filho de Will Smith, é estrela de filmes como The Karate Kid (2010) e After Earth (2013). Jaden também é conhecido por algumas de suas filosofias que transmite via Twitter . Ao escrever no Twitter, ele é conhecido por quase sempre colocar cada palavra em maiúscula. Para simplificar, você terá que colocar cada palavra em maiúscula, veja como são esperadas as contrações no exemplo abaixo.

Sua tarefa é converter strings para como seriam escritas por Jaden Smith. As strings são citações reais de Jaden Smith, mas não estão em maiúsculas da mesma forma que ele as digitou originalmente.

Exemplo:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// function toJadenCase(frase) {

//     const arrayFrase = frase.split(' ')

//     const newFrase = arrayFrase.map((palavra)=>{
//         return palavra.charAt(0).toUpperCase() + palavra.slice(1)     
//     })

//     console.log(arrayFrase)

//     return newFrase.join(' ')
//     //...
// };

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

String.prototype.toJadenCase = function () {
  
    // var frase = "How can mirrors be real if our eyes aren't real"
   //   this vai referencia a string que sera passado no toJadenCase
      const arrayFrase = this.split(' ')
  
      const newFrase = arrayFrase.map((palavra)=>{
          return palavra.charAt(0).toUpperCase() + palavra.slice(1)     
      })

      
  
  
      return newFrase.join(' ')
  };

  const frase = "isso é um exemplo de jaden case";
  const jadenCaseFrase = frase.toJadenCase();
  console.log(jadenCaseFrase); // 
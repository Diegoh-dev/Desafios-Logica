
// Dado um conjunto de números, retorne o inverso aditivo de cada um. Cada positivo se torna negativo, e os negativos se tornam positivos.
// Você pode assumir que todos os valores são inteiros. Não altere a matriz/lista de entrada.
// EXEMPLO : invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]

// TESTE CERTO
const array = [1,-2,3,-4,5];

function invert(array) {
  const newArrayNumber = array.map((number) => {
    if(number > 0){
      return Number(-number);
    }else{
      return Math.abs(number)
    }
  })


  return newArrayNumber
}

// invert(array);

///======================

// TODOS OS ANIMAIS ESTÃO TENDO UMA FESTA! CADA ANIMAL ESTÁ TRAZENDO UM PRATO. A REGRA É ÚNICA: O PRATO DEVE COMEÇAR E TERMINAR COM AS MESMAS LETRAS DO NOME DO ANIMAL. POR EXEMPLO, A GRANDE GARÇA AZUL ESTÁ TRAZENDO ALHO NAAN E O CHAPIM ESTÁ TRAZENDO BOLO DE CHOCOLATE.

// ESCREVA UMA FUNÇÃO BANQUETE QUE RECEBA O NOME E O PRATO DO ANIMAL COMO ARGUMENTOS E RETORNE VERDADEIRO OU FALSO PARA INDICAR SE O ANIMAL PODE TRAZER O PRATO PARA O BANQUETE.

// SUPONHA QUE BESTA E PRATO SEJAM SEMPRE STRINGS EM LETRAS MINÚSCULAS E QUE CADA UMA TENHA PELO MENOS DUAS LETRAS. BESTA E PRATO PODEM CONTER HÍFENS E ESPAÇOS, MAS ESTES NÃO APARECERÃO NO INÍCIO OU NO FINAL DA STRING. ELES NÃO CONTERÃO NUMERAIS.


// beast = fera | animal
// dish = prato

function feast(beast, dish) {
  console.log({
    beast,
    dish
  })
}

// feast('great blue heron','garlic naan')


// O Western Suburbs Croquet Club tem duas categorias de membros, Sênior e Aberto. Eles gostariam de sua ajuda com um formulário de inscrição que informará aos possíveis associados em qual categoria eles serão colocados.

// Para ser sénior, o sócio deve ter pelo menos 55 anos e ter um handicap superior a 7. Neste clube de croquet os handicaps variam entre -2 e +26; quanto melhor for o jogador, menor será o handicap.

// Entrada
// A entrada consistirá em uma lista de pares. Cada par contém informações para um único membro potencial. As informações consistem em um número inteiro para a idade da pessoa e um número inteiro para o handicap da pessoa.

// Saída
// A saída consistirá em uma lista de valores de string (em Haskell e C: Openou Senior) informando se o respectivo membro será colocado na categoria sênior ou aberta.

// Exemplo
const listInputsCategores =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const ex1 = [[45, 12],[55,21],[19, -2],[104, 20]];
const ex2 = [[3, 12],[55,1],[91, -2],[53, 23]]
const ex3 = [[59, 12],[55,-1],[12, -2],[12, 12]]

function openOrSenior(data){
  return categoes = data.map((item,inde) => {
    if(item[0] >= 55 && item[1] > 7){
      return 'Senior'
    }else{
      return 'Open'

    }
  
    // if(item[0] >= 55){
    //   return true
    // }

    // const idades = item[0];
    // console.log(idades);

  })

  console.log('categoes',categoes)


  // const teste = data.map((item,inde) => item[0]).filter((item) => item  >= 55)

  // console.log(teste)
}
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// openOrSenior(listInputsCategores)
openOrSenior(ex1)
openOrSenior(ex2)
openOrSenior(ex3)

/*
Trolls estão atacando sua seção de comentários!

Uma forma comum de lidar com essa situação é remover todas as vogais dos comentários dos trolls, neutralizando a ameaça.

Sua tarefa é escrever uma função que receba uma string e retorne uma nova string com todas as vogais removidas.

Por exemplo, a string "Este site é para perdedores LOL!" se tornaria "st st pr prddrs ll!".

Nota: para este kata y não é considerado vogal.
*/



function disemvowel(str) {
  const arrayFrase = str.split("");
  const vogais = ["a", "e", "i", "o", "u"];

  const newFrase = arrayFrase.filter(
    (letra) =>
      letra.toLowerCase() !== "a" &&
      letra.toLowerCase() !== "e" &&
      letra.toLowerCase() !== "i" &&
      letra.toLowerCase() !== "o" &&
      letra.toLowerCase() !== "u"
  );

  return newFrase.join("");
}


// console.log(disemvowel('This website is for losers LOL!'));


/*
Escreva uma função que pegue um conjunto de palavras e as junte em uma frase e retorne a frase. Você pode ignorar qualquer necessidade de higienizar palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra. Cuidado, não deve haver espaço no início ou no final da frase!

EXEMPLO: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/


function smash (words) {
  
  const newWPhrase = words.reduce((acc,words) => {
    
  return  acc += words + ' ';
    
  }," ")
   return newWPhrase.trim();
};

// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
// console.log(smash(["hello", "world"]));


/*
Implemente uma função que converta o valor booleano fornecido em sua representação de string.

Nota: Somente entradas válidas serão fornecidas.
*/

function booleanToString(b){
  //your code here
  // return b ? 'true' : 'false'

  return b.toString();
}


// booleanToString(true)
// booleanToString(false)


/*
Simples, dada uma sequência de palavras, retorne o comprimento da(s) palavra(s) mais curta(s).

A string nunca estará vazia e você não precisa levar em conta diferentes tipos de dados.
 */

function findShort(s) {
  const arrayPlavras = s.split(" ");
  let lengthPalavra = arrayPlavras[0].length;

 arrayPlavras.forEach((element) => {
  if(lengthPalavra > element.length){
    lengthPalavra = element.length
  }
  // lengthPalavra = element[0];
  // console.log(element[0])
  });

  return lengthPalavra
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("Booom dia"))
console.log(findShort("oi bom dia"))
















// const fibonacci = [];

// fibonacci[1] = 1;
// fibonacci[2] = 1;

// console.log(fibonacci);

// for(let i = 3; i < 20 ;i++){
// //fibonacci[3] = // 3 - 1 =  2 //+  3 -2 = 1
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]

//   // console.log(fibonacci[i - 1] + fibonacci[i - 2])
// }

// for (let i = 1; i < fibonacci.length; i++) {   // {5}
//  console.log(fibonacci[i]); // {6}

// }

 
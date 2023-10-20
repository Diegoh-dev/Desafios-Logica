/*
DESCRIÇÃO:

Crie uma função que retorne a soma dos dois números positivos mais baixos, dada uma matriz de no mínimo 4 números inteiros positivos. Nenhum número flutuante ou inteiro não positivo será passado.

Por exemplo, quando uma matriz é passada como [19, 5, 42, 2, 77], a saída deve ser 7.

[10, 343445353, 3453445, 3453545353453]deveria retornar 3453455.


*/

// Funcionando porem ver uma forma melhor de fazer;

function sumTwoSmallestNumbers(numbers) {
  let arrayMenor = [];
  let menorNumero = Math.min(...numbers);

  numbers.map((item, index, array) => {
    menorNumero = Math.min(...array);
    arrayMenor[0] = menorNumero;

    array
      .filter((item) => item !== menorNumero)
      .map((item2, index, array2) => {
        arrayMenor[1] = Math.min(...array2);
      });
  });

  // console.log({arrayMenor})
  return arrayMenor.reduce((acc, item) => (acc += item), 0);
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));//7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));//3453455


// RESOLUÇÃO CHAT GPT

/*
Nesta versão, os passos são os seguintes:

1. Copiamos o array numbers para evitar modificar o array original.
2. Classificamos o array copiado em ordem crescente.
3. Pegamos os dois números menores do array classificado usando slice(0, 2).
4. Somamos esses dois números e retornamos o resultado.
*/
function sumTwoSmallestNumbers(numbers) {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const [smallest1, smallest2] = sortedNumbers.slice(0, 2);
  return smallest1 + smallest2;
}
/*
      DESCRIÇÃO:

 Dado um conjunto de números, retorne o inverso aditivo de cada um. Cada positivo se torna negativo, e os negativos se tornam positivos.
 Você pode assumir que todos os valores são inteiros. Não altere a matriz/lista de entrada.

 EXEMPLO : invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]

*/

const array = [1, -2, 3, -4, 5];

function invert(array) {
  const newArrayNumber = array.map((number) => {
    if (number > 0) {
      return Number(-number);
    } else {
      return Math.abs(number);
    }
  });

  return newArrayNumber;
}

invert(array);

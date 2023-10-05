/**
 * DIFERENÇA DIAGONAL
 * 
 * Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.
Por exemplo, a matriz quadradaé mostrado abaixo:

1 2 3
4 5 6
9 8 9 

A diagonal da esquerda para a direita = 1+5+9=15.
 A diagonal da direita para a esquerda = 3+5+9= 17.
  Sua diferença absoluta é |15-17| = 2
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const matrix2 = [

  [3],
  [11, 2, 4],
  [4, 5, 6],
  [10,8,-12],
];

function diagonalDifference(arr) {
  let diagonalEsquedaDireita = 0;
  let diagonalDireitaEsquerda = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    diagonalEsquedaDireita += element[index];
    diagonalDireitaEsquerda += element[arr.length - index - 1];
  }

  return Math.abs(diagonalEsquedaDireita - diagonalDireitaEsquerda);
}

console.log(diagonalDifference(matrix));
console.log(diagonalDifference(matrix2));

// console.table( [
//   [1,2,3],
//   [4,5,6],
//   [9,8,9]
// ])

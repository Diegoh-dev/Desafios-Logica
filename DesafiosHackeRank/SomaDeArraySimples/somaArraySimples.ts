/*
 SOMA DE ARRAY

 DESCRIÇÃO:
  Dado um array de inteiros, encontre a soma de seus elementos.
  Por exemplo, se a matriz = [1,2,3],1+2+3 = 6, então retorne 6.

 */

  function simpleArraySum(array: number[]): number {
    const somaNumero = array.reduce((acc,numero) => acc += numero,0)
    return somaNumero;
  }

// console.log(simpleArraySum([1,2,3]))
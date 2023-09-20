/*
DESCRIÇÃO:
Escreva uma função para dividir uma string e convertê-la em um array de palavras.
EXEMPLO: "Robin Singh" ==> ["Robin", "Singh"]

*/

function stringToArray(string){
  return string.split(" ");
}


console.log(stringToArray("Robin Singh"))
console.log(stringToArray("I love arrays they are my favorite"))

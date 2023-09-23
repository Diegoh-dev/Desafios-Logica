/*
DESCRIÇÃO :
Escreva uma função que pegue um conjunto de palavras e as junte em uma frase e retorne a frase. Você pode ignorar qualquer necessidade de higienizar palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra. Cuidado, não deve haver espaço no início ou no final da frase!

EXEMPLO: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash(words) {
  const newWPhrase = words.reduce((acc, words) => {
    return (acc += words + " ");
  }, " ");
  return newWPhrase.trim();
}

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
console.log(smash(["hello", "world"]));

/*
Conclua a função que aceita um parâmetro de string e inverte cada palavra da string. Todos os espaços na string devem ser mantidos.

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
  console.log(str)
  const wordsReverse = str.split('').reverse().join('').split(' ').reverse().join(' ');
  return wordsReverse
}

console.log(reverseWords('This is an example'))


// COMO O CHAT GPT RESOLVEU:

function reverseWordsChatGPT(str) {
  // Divide a string em palavras
  const words = str.split(' ');

  // Mapeia cada palavra e inverte-a
  const reversedWords = words.map(word => {
    // Verifica se a palavra contém letras maiúsculas
    const isUpperCase = word.match(/[A-Z]/);

    // Inverte a palavra
    const reversedWord = word.split('').reverse().join('');

    // Mantém a capitalização se necessário
    return isUpperCase ? reversedWord.toUpperCase() : reversedWord;
  });

  // Reconstrói a string com espaços mantidos
  const reversedStr = reversedWords.join(' ');

  return reversedStr;
}

console.log(reverseWordsChatGPT('This is an example!')); // Output: "sihT si na !elpmaxe"
console.log(reverseWordsChatGPT('double  spaces')); // Output: "elbuod  secaps"

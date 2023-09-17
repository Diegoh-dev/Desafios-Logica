/*
   DESCRIÇÃO :
   
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

console.log(disemvowel("This website is for losers LOL!"));

/*
DESCRIÇÃO :
  Simples, dada uma sequência de palavras, retorne o comprimento da(s) palavra(s) mais curta(s).

  A string nunca estará vazia e você não precisa levar em conta diferentes tipos de dados.
 */

function findShort(s) {
  const arrayPlavras = s.split(" ");
  let lengthPalavra = arrayPlavras[0].length;

  arrayPlavras.forEach((element) => {
    if (lengthPalavra > element.length) {
      lengthPalavra = element.length;
    }
  });

  return lengthPalavra;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("Booom dia"));
console.log(findShort("oi bom dia"));

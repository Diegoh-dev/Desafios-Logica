/*
    DESCRIÇÃO:

    
 O Western Suburbs Croquet Club tem duas categorias de membros, Sênior e Aberto. Eles gostariam de sua ajuda com um formulário de inscrição que informará aos possíveis associados em qual categoria eles serão colocados.

 Para ser sénior, o sócio deve ter pelo menos 55 anos e ter um handicap superior a 7. Neste clube de croquet os handicaps variam entre -2 e +26; quanto melhor for o jogador, menor será o handicap.

 Entrada
 A entrada consistirá em uma lista de pares. Cada par contém informações para um único membro potencial. As informações consistem em um número inteiro para a idade da pessoa e um número inteiro para o handicap da pessoa.

 Saída
 A saída consistirá em uma lista de valores de string (em Haskell e C: Openou Senior) informando se o respectivo membro será colocado na categoria sênior ou aberta.

 Exemplo :

  const listInputsCategores =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
 output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

const ex1 = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];

const ex2 = [
  [3, 12],
  [55, 1],
  [91, -2],
  [53, 23],
];

const ex3 = [
  [59, 12],
  [55, -1],
  [12, -2],
  [12, 12],
];

function openOrSenior(data) {
  return (categoes = data.map((item, inde) => {
    if (item[0] >= 55 && item[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  }));
}

openOrSenior(ex1);
openOrSenior(ex2);
openOrSenior(ex3);

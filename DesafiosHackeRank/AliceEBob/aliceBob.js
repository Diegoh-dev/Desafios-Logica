/*
DESCRIÇÃO :
Alice e Bob criaram, cada um, um problema para o HackerRank. Um revisor avalia os dois desafios, atribuindo pontos em uma escala de 1 a 100 para três categorias: clareza do problema , originalidade e dificuldade .

A classificação para o desafio de Alice é o trigêmeo a = (a[0], a[1], a[2]) e a classificação para o desafio de Bob é o trigêmeo b = (b[0], b[1], b [2]) .

A tarefa é encontrar seus pontos de comparação comparando a[0] com b[0] , a[1] com b[1] e a[2] com b[2] .

Se a[i] > b[i] , então Alice recebe 1 ponto.
Se a[i] < b[i] , então Bob recebe 1 ponto.
Se a[i] = b[i] , então nenhuma pessoa recebe um ponto.
Os pontos de comparação são o total de pontos que uma pessoa ganhou.

Dados a e b , determine seus respectivos pontos de comparação.

Exemplo

uma = [1, 2, 3]
b = [3, 2, 1]
Para elementos *0*, Bob recebe um ponto porque a[0] .
Para os elementos iguais a[1] e b[1] , nenhum ponto é ganho.
Finalmente, para elementos 2 , a[2] > b[2] então Alice recebe um ponto.
A matriz de retorno é [1, 1] com a pontuação de Alice primeiro e a de Bob em segundo.
*/
const alice = [17, 28, 30];
const bob = [99, 16, 8];

function compareTriplets(alice, bob) {
  const pontos = alice.reduce(
    function (acc, numero, index, arrayAlice) {
      // outra opção de resolução
      arrayAlice[index] > bob[index]
        ? (acc[0] += 1)
        : arrayAlice[index] < bob[index]
        ? (acc[1] += 1)
        : acc;

      // uma opção de resolução
      //   if (arrayAlice[index] > bob[index]) {
      //     acc[0] += 1;
      //   }
      //   if (arrayAlice[index] < bob[index]) {
      //     acc[1] += 1;
      //   } else {
      //     return acc;
      //   }
      return acc;
    },
    [0, 0]
  );
  return pontos;
}
console.log("retorno função:", compareTriplets(alice, bob));

// essa seria a forma como a chat gpt resolveu o exercicio
function compareTripletsGPT(alice, bob) {
    let aliceScore = 0;
    let bobScore = 0;
  
    for (let i = 0; i < alice.length; i++) {
      if (alice[i] > bob[i]) {
        aliceScore++;
      } else if (alice[i] < bob[i]) {
        bobScore++;
      }
    }
  
    return [aliceScore, bobScore];
  }
  
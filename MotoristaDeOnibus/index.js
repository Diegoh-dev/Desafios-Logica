/*
A história:
Bob está trabalhando como motorista de ônibus. No entanto, ele se tornou extremamente popular entre os moradores da cidade. 
Com tantos passageiros querendo embarcar em seu ônibus, ele às vezes tem que enfrentar o problema de não haver espaço suficiente no ônibus! 
Ele quer que você escreva um programa simples dizendo se ele conseguirá acomodar todos os passageiros.

Visão geral da tarefa:
Você tem que escrever uma função que aceite três parâmetros:

CAP: é a quantidade de pessoas que o ônibus pode acomodar, excluindo o motorista.
ON: é o número de pessoas no ônibus, excluindo o motorista.
WAIT: é o número de pessoas esperando para entrar no ônibus, excluindo o motorista.

SE HOUVER ESPAÇO SUFICIENTE, RETORNE 0, E SE NÃO HOUVER, RETORNE O NÚMERO DE PASSAGEIROS QUE ELE NÃO PODE LEVAR.

  Exemplos de uso:
  cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
  cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

function enough(cap, on, wait) {
  let quantidadeVagaSoprando = 0;
  let pessoasEsperando = 0;

  if (on < cap) {
    quantidadeVagaSoprando = cap - on;
  }

  if (wait > quantidadeVagaSoprando) {
    pessoasEsperando = wait - quantidadeVagaSoprando;
  }

  return pessoasEsperando;
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));

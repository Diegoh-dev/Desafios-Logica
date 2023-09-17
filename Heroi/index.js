/*
    DESCRIÇÃO:
    Um herói está a caminho do castelo para completar sua missão. No entanto, ele foi informado de que o castelo está cercado por alguns dragões poderosos! cada dragão leva 2 balas para ser derrotado, nosso herói não tem ideia de quantas balas ele deve carregar. Supondo que ele pegue um número específico de balas e siga em frente para lutar contra outro número específico de dragões, ele sobreviverá?

Retorne verdadeiro se sim, falso caso contrário :)
*/


function hero(bullets, dragons) {
  const quantidade =  bullets / dragons;
  // console.log(quantidade)

  if(quantidade >= 2){
    return true
  }else{
    return false
  }
  // const quantidade = bullets * 2;
  // if(quantidade == 0){
  //   return false
  // }

  // if (quantidade % dragons === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

  console.log(hero(10, 5));//true
  console.log(hero(7, 4));//false
  console.log(hero(4, 5));//false
  console.log(hero(100, 40));//true
  console.log(hero(1500, 751));//false
  console.log(hero(0, 1));//false
  
  console.log(hero(129, 58));//true
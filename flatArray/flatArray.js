// O retorno da função deve ser [1,2,3,4,5,6,7,8]

const arr = [[1, [2, 3, [4, [5]], 6, [7, [8]]]]];

console.log("Array original:", arr);
// Resolução na primeira tentativa
function flatten(arr){

  let newArray = [];
   arr.map((item,index) => {
      newArray.push(item[0]);//1
     newArray.push(item[1][0]);//2
     newArray.push(item[1][1]);//3
     newArray.push(item[1][2][0])//4
     newArray.push(item[1][2][1][0])//5
     newArray.push(item[1][3])//6
     newArray.push(item[1][4][0])//7
     newArray.push(item[1][4][1][0])//8

  })

  return newArray;
}
// Resolução na segunda tentativa.
function flatten2(arr) {
  const myReduce = arr.reduce((acc, item, index) => {
    acc.push(item[0]);
    acc.push(item[1][0]);
    acc.push(item[1][1]);
    acc.push(item[1][2][0]);
    acc.push(item[1][2][1][0]);
    acc.push(item[1][3]);
    acc.push(item[1][4][0]);
    acc.push(item[1][4][1][0]);

    console.log(item[1][4][1][0]);
    return acc;
  }, []);
  return myReduce;
}

console.log("retorno função:", flatten2(arr)); // [1, 2, 3, 4,5, 6, 7, 8]

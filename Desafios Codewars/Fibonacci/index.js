
const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

console.log(fibonacci);

for(let i = 3; i < 20 ;i++){
//fibonacci[3] = // 3 - 1 =  2 //+  3 -2 = 1
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]

  // console.log(fibonacci[i - 1] + fibonacci[i - 2])
}

for (let i = 1; i < fibonacci.length; i++) {   // {5}
 console.log(fibonacci[i]); // {6}

}

 
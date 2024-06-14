// 1-masala

// REGULAR KO'RINISHI

// let massiv = ["apple", "banana", "orange", "grape", "kiwi"];

// let kattaHarf = (word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };

// let natija = massiv.filter((word) => {
//   return word.length >= 5;
// }).map((word) => {
//   return word.replace(/^./, kattaHarf);
// });

// console.log(natija);


// 2-masala

// let students =[
// {name : "Alice" , Age :19},
// {name : "Bob" , Age :39},
// {name : "Sarvar" , Age :29},
// {name : "Nozim" , Age :49},
// {name : "david" , Age :9},
// ];


// let test = function(arr){
// let result = arr.find((value) => value.age > 20);

// return result.name.toUpperCase();
// };

// console.log(test(students));


// 3-masala

// let prices = [3000, 5000, 7000, 1000];

// let sum = 0;
// prices.forEach( el =>{
//     if (el>100) {
//         sum += el
//     }
  

// })

// console.log(sum);


// 4-masala

// function isPositive (arr){
// let result = arr.every(function(value) {
// return value>0
// })
// }

// let isExistOverHundered arr.some(function(value){
// return value>100
// })

// if (isExistOverHundered) {
//     console.log();
// }

// if (result) {
//  return "Barcha sonlar musbat"   
// } else{
// return "Musbat bo'lmagan sonlar bor"
// }

// console.log(isPositive([4, 6, 10, 200, 5]));

// 5-masala

// let arr = [1, 2, 3, 4, 5]

// function sqrtArray(arg){
// let result = arg.map(function(value){
// return value**2
// })

// console.log(result);
// }

// sqrtArray(arr);

// 6-masala

// let arr = [1400, 5000, 3000, 1000];

// function salary (arr){
// let result = arr.filter(function(value){
// return value>=2000
// })

// result = result.map(function(value){
//     return Math.floor(value*1.1)
//     })

//     return result;
// }

// console.log(salary(arr));


// 7-masala

// let students = [
// {name:"Okifxon", yoshi:12, ball:10},
// {name:"Ozodbek", yoshi:32, ball:30},
// {name:"Shuxratbek", yoshi:22, ball:40},
// {name:"Javohirboy", yoshi:15, ball:95},
// {name:"Saydullo", yoshi:42, ball:80},
// ];

// function findStudent(arr){
// let result =arr.find(function(value) {
// return value.ball >=80
// })

//  let success = arr.filter(function(value){
//     return value.ball >=80
// })

// console.log(success);
// return[result.name, result.yoshi]
// }

// console.log(findStudent(students));

1-masala

function filterWord(str){
    let filteredWord = str.filter(word => word.length >= 5)

    let result = filteredWord.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    return result
}

console.log(filterWord(["bmw m5 cs", "mercedez benz", 'audi', 'porsche']));

// 2-masala

// function findStudent(students) {
//   let newStudent = students.filter((student) => student.age >= 20);

//   if (newStudent) {
//     return newStudent
//   } else {
//     return null;
//   }
// }

// const students = [
//   { name: "Alice", age: 19 },
//   { name: "Bob", age: 21 },
//   { name: "Charlie", age: 18 },
//   { name: "David", age: 22 },
// ];

// console.log(findStudent(students));

// 3-masala

// function narxHisobla(narxlar) {
//   let yuzDanKatta = narxlar.filter((narx) => narx > 100);

//   let umumiyNarx = yuzDanKatta.reduce((acc, price) => acc + price, 0);

//   return umumiyNarx;
// }

// console.log(narxHisobla([50, 150, 200, 80, 120, 90, 300]));

// 4-masala

// function numberTest(numbers){
//     let musbat = numbers.every(num => num > 0)

//     let kattaSon = numbers.some(num => num > 100)

//     if(musbat){
//         console.log("barcha sonlar musbat");
//     } else{
//         console.log("musbat bo'lmagan sonlar bor");
//     }

//     if(kattaSon){
//         console.log("Katta son bor");
//     }
// }

// console.log(numberTest([10, 20, 130, 40, 50]));

// 5-masala

// function kvadratNumber(numbers) {
//   return numbers.map((num) => num * num);
// }

// function runArr(arr) {
//   arr.forEach((element) => console.log(element));
// }

// let num = [1, 2, 3, 4, 5];

// let kvadratNum = kvadratNumber(num)

// runArr(kvadratNum)

// 6-masala

// function oylikHisobla(oylik){

//     let filterOylik = oylik.filter(maosh => maosh >= 2000)

//     let newOylik = filterOylik.map(pul => pul * 1.10)

//     let totalPul = newOylik.reduce((acc, salary) => acc + salary, 0)

//     return totalPul
// }

// console.log(oylikHisobla([1500, 2100, 1800, 2400, 3000]));

// 7-masala

// const students = [
//     { name: "Alice", age: 22, grade: 75 },
//     { name: "Bob", age: 20, grade: 85 },
//     { name: "Charlie", age: 23, grade: 90 },
//     { name: "David", age: 21, grade: 65 },
//     { name: "Eve", age: 19, grade: 95 }
// ];

// function processStudents(students) {

//     const firstHighScorer = students.find(student => student.grade >= 80);

//     const highScorers = students.filter(student => student.grade >= 80);

//     const highScorerNames = highScorers.map(student => student.name.toUpperCase());

//     return {
//         firstHighScorer: firstHighScorer ? { name: firstHighScorer.name, age: firstHighScorer.age } : null,
//         highScorerNames: highScorerNames
//     };
// }

// const result = processStudents(students);
// console.log("Kamida 80 ball olgan birinchi talaba:", result.firstHighScorer);
// console.log("80 dan yuqori ball olgan barcha talabalar ismlari:", result.highScorerNames);




// 8-masala

// function upperStr(str){
//     return str.toUpperCase()
// }

// console.log(upperStr("Umidjon"));

// 9-masala

// function substringTop(inputString, substring){
//     return inputString.includes(substring)
// }

// console.log(substringTop("Umidjon", "U"));

// 10-masala

// function replaceWord(str) {
//     return str.replace(/JavaScript/g, "JS");
// }

// console.log(replaceWord("I am learning JavaScript"));

// 11-masala

// function reverseWords(str) {
//   const wordsArray = str.split(" ");

//   const reversedWordsArray = wordsArray.reverse();

//   const reversedString = reversedWordsArray.join(" ");

//   return reversedString;
// }

// console.log(reverseWords("n o j d i m U"));

// 12-masala

// function trimString(str) {
//     return str.trim();
// }

// console.log(trimString("   Salom   "));
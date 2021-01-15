//1. 10 ზე ნაკლები

let num = [2, 5, 7, 8, 8, 11, 29]

function getnum (num) {
console.log(num.filter (item => item < 10));
}

getnum (num);

//2. მასივის ჯამებს შორის მაქსიმუმი

let number = [1, 3, 4, 7]
let number1 = [2, 4, 5, 8]

function getMax(number, number1) {
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i]
} 

let sum1=0
for (let i = 0; i < number1.length; i++) {
  sum1 += number1[i]
} 

console.log(Math.max (sum, sum1));
}

getMax(number, number1)

//3. n-ის ანალოგიური რიცხვების მასივი

let numbers = [2, 4, 5, 8, 5]

function getUniquesElements(numbers, n) {
  console.log(numbers.filter (item => item === n));
}

getUniquesElements(numbers, 5);

//4. n-ის არაანალოგიური რიცხვების მასივი

let numb = [2, 4, 5, 8,10, 11, 5]

function getElements(numb, n) {
 console.log(numb.filter (item => item !== n));
}

getElements(numb, 5);

//5 ?
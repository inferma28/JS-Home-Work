"use strict";

const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];;
console.log (vegetables.join (" | "));

console.log ("===========");

let name = "Вася;Петя;Вова;Олег";
const newArr = name.split(";");
console.log(newArr);

console.log ("===========");

function hello2 (name) {
   if (name == undefined) {
    console.log("Привет, гость");
   }
   else {
     console.log("Привет, " + name);  
   }
}
hello2("Василий");
hello2 ();

console.log ("===========");


const fruits = ["яблоко", "ананас", "груша"];
const fruitsToUpperCase = fruits.join(', ').toUpperCase().split();
console.log(fruitsToUpperCase);

console.log ("===========");

function addOneForAll(...args) {
  let arr = args.map(i => i + 1);
  console.log(arr);
  return arr;
}
addOneForAll (1, 2, 3, 4);

console.log ("===========");

function getSum(...args) {
  let val = 0;
  for(let i = 0; i < args.length; i++) {
      val += args[i];
  }
  console.log(val);
}
getSum(1, 2, 3, 4);

console.log ("===========");


const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
let numberArray = arr.filter(function(elem) {
  return typeof elem == "number";
});
console.log(numberArray);

console.log ("===========");

function arrayTesting (arr) {
  let result = false

result = arr.some((item) => {
  return item;
});
return result ? "Нашли true значение" : "Ничего нет";
}
const haveTrueValue = arrayTesting([0, false, null, 1]);
console.log (haveTrueValue);
const dontHaveTrueValue = arrayTesting([0, false, null, 0]);
console.log (dontHaveTrueValue);

console.log ("===========");

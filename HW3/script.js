"use strict";

function divider() {
  console.log("=========================")
}

const userNumber = prompt("Введите число");
function calcularUserNumber(userNumber) {
   let sum = 0;
   for (let i = 0; i <= userNumber; i++) {
      sum += i ** 2;
   } console.log(sum);
}
calcularUserNumber(userNumber)

divider();

const array = [3, 5, 12, 9, 23, 93, 17];
let sumResult = 0;
    for(let i = 0; i < array.length; i++) {
    if(array[i] > 2 && array[i] < 20) {
    sumResult += array[i];
  }
}
console.log(sumResult);

divider();

const nunbers = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let sumNunbers = 0;
const newNunbers = [].concat(...nunbers);
for(let i = 0; i < newNunbers.length; i++) {
    if((newNunbers[i] % 2) === 0 && typeof(newNunbers[i]) === 'number') {
    sumNunbers += newNunbers[i]; 
  }
}
console.log(sumNunbers);  

divider();

let newObj ={
  name: "Vova",
  age: undefined,
}
let key = prompt("Введите, пожалуйста, ключ:");
let value = prompt("Введите, пожалуйста, значение:");
function newProperty(key, value, object){
if (object[key] === undefined){
  object[key] = value;
} else{
  console.error("Уже есть, извините пожалуйста")
}
}
newProperty(key, value, newObj);
console.log(newObj);

divider();

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    console.log("FizBuz");
  } else if (i % 2 == 0) {
    console.log("Fiz");
  } else {
    console.log("Buz");
  }
}

divider();

const numberTen = prompt("Введите, пожалуйста, число");
let factorial = 1;
for (let i = 1; i <= numberTen; i++) {
  factorial *= i;
}
console.log(factorial);

divider();

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let documentFunction = function (sheets, sheetsPerWeek, weeks) {
  let amount = weeks * (sheetsPerWeek / sheets);
  let i = 0;
  do {
    i++;
  } while (i <= amount);
  console.log({ i });
};
documentFunction(sheetsInReamPaper, consumptionPerWeek, weeksAmount);


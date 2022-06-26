"use strict";

function divider() {
  console.log("=========================")
}

function bindFunc(someFunc, ctx, ...arg){

  return function(){
      someFunc.apply(ctx,arg)
  }
}

function func (a,b,c){
  console.log(a,b,c);
  console.log(`тебе ${2022 - this.year} лет `);
}
const contecst = {
  name: 'Volodymyr',
  year: 1994,
}
const returnedFunction = bindFunc (func,contecst,1,2,3)

returnedFunction()

divider();

const objectA = {
  a: 1,
  b: 2,
  c: 3,
  d: 7,
};

let funcSum =  fn.bind(objectA);

function fn() {
  let out = 0;
  Object.values(this).forEach((item)=> {
      if(item > 0) {
          out += item;
      }
  });
  console.log(out);
}

funcSum();

divider();

const valObject0 = {
  values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

let val = function() {
  return this.values    
}

function getNewArray(arr){
  if (val.call(arr) === undefined ){
      return "Не найдено"
  } else {
  arr = val.call(arr).filter(item =>{
  if (typeof item == "number" && item % 2 ==0 && item > 2 && item < 10) {
      return true
          }
      });
  return arr
  }
}
console.log (getNewArray(valObject0));

divider();

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

function getCity(object) {
    let result = []; 
    for (const [key, value] of Object.entries(object)) {
    result.push(`${key} - это ${value}`);
    }
    return result
    }

console.log(getCity(citiesAndCountries));

divider();

const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'],
};

function getNameOfDay(lang, day) {
  if(day <= 0) {
      console.log("Неверные данные");
  }
  if(day > 7) {
      let outDay = parseInt(day % 7);
      return namesOfDays[lang][outDay - 1];
  }
  return namesOfDays[lang][day - 1];
}

console.log(getNameOfDay('en', 3)); 
console.log(getNameOfDay('ru', 6)); 

divider();

const UserOne = {
  name: 'Volodymyr'
};
const UserTwo = {
  age: 1
};

function setProto(currentObj, protoObj) {
  currentObj.__proto__= protoObj;
}
setProto(UserTwo, UserOne);
console.log(UserTwo);
console.log(UserTwo.name);

divider();

const person = {
  setName(personName) {
     this.name = personName;
  },
  setAge(personAge) {
     this.age = personAge;
  },
  getName() {
     console.log(this.name);
  },
  getAge() {
     let thisAge = this.age;
     function ageValidation(thisAge) {
        if (thisAge < 18) {
           console.log("Validation Error",);
        } else {
           console.log(thisAge);
        };
     };
     return ageValidation(thisAge);
  },
}
let person1 = {
  surname: "Linoi"
};
person1.__proto__ = person;
person1.setName("Volodymyr");
person1.getName();
person1.setAge(15);
person1.getAge();
person1.setAge(28);
person1.getAge();

divider();
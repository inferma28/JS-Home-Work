"use strict";

function divider() {
  console.log("=========================")
}
let arr = [1, 1, 2, 2, 3];

function getUnique(arr) {
   let result = [];

   for (let item of arr) {
      if (!result.includes(item)) {
         result.push(item);
      }
   }

   return result;
}

console.log(getUnique(arr));

divider()

const obj = {
  a: 1, 
  b: 2, 
  c: 3, 
  d: false, 
  e: 0,
};

Object.prototype.getKeySum = function() {
  if(Object.values(this)) {
      return Object.values(this).reduce((acc, item)=> acc + item);
  }       
};

Object.prototype.reversKey = function() {
  const result = {};
  Object.entries(this).forEach(([key, value]) => {
    result[value] = key;
  });
  return result;
};

console.log(obj.getKeySum());
console.log(obj.reversKey());

 divider()

let div1 = document.createElement("div");
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');
div1.classList.add('item');
div2.classList.add('item');
div3.classList.add('item');
div4.classList.add('item');
div5.classList.add('item');
div1.innerText = '1';
div2.innerText = '2';
div3.innerText = '3';
div4.innerText = '4';
div5.innerText = '5';
let elem = document.querySelector('div.holder');
elem.append(div1, div2, div3, div4, div5, );
elem.style.display = 'flex';
elem.style.flexWrap = 'wrap';
elem.style.width = '100vh';
elem.style.height = '40vh';
elem.style.marginRight = 'auto';
elem.style.marginLeft = 'auto';
elem.style.border = '2px solid black';
elem.style.borderRadius = '20px 20px 0 0';

div1.style.width = '50%';
div1.style.background = '#f00';
div1.style.order = '1';
div1.style.textAlign = 'center';
div1.style.borderRadius = '20px 0 0 0';
div1.style.fontSize = '36px';

div2.style.background = '#afeeee';
div2.style.order = '4';
div2.style.flexGrow = '1';
div2.style.textAlign = 'center';
div2.style.fontSize = '36px';

div3.style.background = '#00f';
div3.style.order = '3';
div3.style.flexGrow = '1';
div3.style.textAlign = 'center';
div3.style.fontSize = '36px';

div4.style.background = '#0f0';
div4.style.order = '5';
div4.style.flexGrow = '1';
div4.style.textAlign = 'center';
div4.style.fontSize = '36px';

div5.style.width = '50%';
div5.style.order = '2';
div5.style.background = '#ffa500';
div5.style.textAlign = 'center';
div5.style.borderRadius = '0 15px 0 0';
div5.style.fontSize = '36px';



 
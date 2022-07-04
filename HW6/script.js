"use strict";



let element = document.createElement("p");
element.innerText = "Click and the picture will appear";
document.body.append(element);
element.style.fontSize = "36px";
element.style.cursor = "pointer";

let picture = document.createElement("img");
picture.style.width = "100px";
picture.src = "https://www.cointribune.com/app/uploads/2021/12/DyWpxB5WwAArWfK.jpg"; 

element.addEventListener("click", (event) => {
    document.body.appendChild(picture);
    if(picture.style.display == "none") {
        picture.style.display = "block";
        picture.style.width = "100px";
    }
});

picture.addEventListener("mouseover", (event) => {
    picture.style.width = "200px";
    picture.style.transition = "width 4s";
});

picture.addEventListener("click", (event) => {
    picture.style.display = "none";
});

// "==========================================================================="

let arr = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let result = arr.reduceRight(function (sum, elem) {
  if (elem == 0) {
    answer = sum;
  } else {
    return sum + elem;
  }
});
if (answer == undefined) {
  answer = result;
}
console.log(answer);

// "==========================================================================="

const arr2 = [1, 4, 5, 1, 0, 9, 3];

function numberOfArr(arr) {
    let i = 0;
    for(let result = 0;result <= 10;){
        result += arr[i];
        i ++;
    }
    return i;
}
console.log(numberOfArr(arr2));

// "==========================================================================="

let input = document.createElement('input');
input.id = 'Text';
let btn = document.createElement('button');
btn.className = 'btn';
btn.innerText = 'sending text';
document.body.append(input,btn);

btn.onclick = () => {
    let val = document.getElementById('Text').value;
    console.log(val);
};

// "==========================================================================="

const link = document.getElementsByTagName('a');

    for (var i = 0; i < link.length; i++) {
	link[i].addEventListener('mouseover',addText);
}

function addText() {
    this.innerHTML = this.innerHTML + ' (' + this.href + ')';
	this.removeEventListener('mouseover', addText);
}

// "==========================================================================="

const button = document.createElement('button');
button.innerText = 'Click me';
button.className = 'button';
document.body.append(button);
button.style.display = "block";
button.style.marginTop = "25px";
button.onclick = () => {
    button.setAttribute('style','display:none;')
}

// "==========================================================================="

function logDataAttr(event) { 
  let el = Object.entries(event.target.dataset); 
  
  if(el.length === 0) {
      console.log('У этого элемента 0 дата аттрибутов');
  } 
  else { 
      console.log(`У этого элемента ${el.length} дата атрибутов)}`); 
      el.forEach(item => console.log(`Аттрибут ${item[0]} - ${item[1]}`)); 
  } 
} 

// (ЗАДАНИЕ № 7 не смог сделать, еще разберусь, если что докину)
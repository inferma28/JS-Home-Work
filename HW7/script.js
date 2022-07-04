"use strict";


const input = document.getElementById('newToDo');
const btn = document.getElementById('AddToDo');
const list = document.getElementById('toDoList');


btn.addEventListener('click',function(){
    createItem()
})


function createItem (){
    let li = document.createElement('li');
    li.className = 'listItem';
    let checkbox = document.createElement('input');
    checkbox.className = 'DoneCheckbox';
    checkbox.setAttribute('type','checkbox');
    let span = document.createElement('span');
    span.className = 'TodoText';
    span.innerText = input.value;
    let remove = document.createElement('button');
    remove.id = 'removeButton';
    remove.innerText = 'Remove';
    li.append(checkbox, span, remove);
    list.append(li)

    checkbox.addEventListener('click', function(){
        if (this.checked == true){
            span.classList.add('done')
        } else {
            span.classList.remove('done')
        }
    } )

    remove.addEventListener('click', function(){
        li.remove()
    })

}
// ----------------------------------------------

// Вариант №1

function sumCycle(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

sumCycle(5);

// Вариант № 2

function sumRecursion(n) {
    if (n == 1) {
        return 1;
    }
    return n + sumRecursion(n - 1);
}

console.log(sumRecursion(5));

// ----------------------------------------------

// ВАРИАНТ № 1

function printNumbersInterval(from,to){
    let counter = from;
    
    let time = setInterval(() => {
        console.log(counter);
        if(counter == to) {
            clearInterval(time);
        }
        counter++
    }, 1000);
}
console.log(printNumbersInterval(5,7))

// ВАРИАНТ № 2


function printNumbersTimeout(from,to){
    if (from == to){
        return console.log(from)
    }else {
        setTimeout(() => {
            console.log(from)
            return printNumbersTimeout(from + 1, to)
        }, 1000);
    }
}
console.log(printNumbersTimeout(3,8))

// ----------------------------------------------

let result = 1 ;

let counter = setInterval(() => {
    console.log(`Прошло ${result} сек`);
    if(result >= 5) {
        clearInterval(counter);
    }
    result++
}, 1000);

console.log(counter)
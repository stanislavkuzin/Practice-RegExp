'use strict';

let body = document.body;

//-2
function arr(num1, num2) {
    let arrNumb = [];
    for(let i = num1; i < num2 + num1; i += 1) {
        arrNumb.push(i);
    }
    return arrNumb;
}

function arrToo(num1, num2) {
    let arrNumbToo = [];
    for(let i = num1; i < num2 + num1; i += 1) {
        arrNumbToo = (arrNumbToo.concat(new Array([i]))).flat();
    }
    return arrNumbToo;
}

//0
let text = document.getElementById('text');
let input = document.getElementById('input');
let sect = document.getElementById('sect');
text.textContent = 'I want to become a developer';

function search11(event) {
    if ( event.target.tagName === 'BUTTON') {
        let inp = new RegExp(`${input.value}`);
        if (inp.test(text.value) === true) {
            text.style.borderColor = 'lime';
        } else {
            text.style.borderColor = 'orange';
        }
    }
}

sect.addEventListener('click', search11);

//2
let text4 = document.getElementById('text4');
let sect4 = document.getElementById('sect4');
text4.textContent = 'Now😂😂😂we😂will😂😂double😂😂all😂😂😂😂the😂emoticons😂😂😂that😂😂😂😂are😂😂here';

function search4(event) {
    if ( event.target.tagName === 'BUTTON') {
        let regE = new RegExp('😂', 'gu');
        text4.textContent = text4.value.replace(regE, '$&$&');
    }
}

sect4.addEventListener('click', search4);

//3
let text6 = document.getElementById('text6');
let sect6 = document.getElementById('sect6');
text6.textContent = 'I150263242343love378954548to48324157569play3698085675405football617124667023';
let buttonPlus = document.getElementById('button-search6');
let buttonSearch = document.getElementById('button-searchToo6');
let arrInput = [];

function plus() {
    let inputAdd = document.createElement('input');
    inputAdd.classList.add('input');
    sect6.insertBefore(inputAdd, buttonPlus);
    arrInput.push(inputAdd);

    function delinput() {
        inputAdd.remove();
    }

    inputAdd.addEventListener('dblclick', delinput);
}

buttonPlus.addEventListener('click', plus);

function search() {
    let compare;
    for (let i = 0; i < arrInput.length; i +=1) {
        compare = new RegExp(arrInput[i].value, 'gi');
        text6.textContent = text6.value.replace(compare, ('*'.repeat(arrInput[i].value.length)));
    }
}

buttonSearch.addEventListener('click', search);


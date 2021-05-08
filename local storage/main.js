'use strict';

const data = document.querySelector('#name');
const sendBtn = document.querySelector('#send');
const readBtn = document.querySelector('#read');
const deleteBtn = document.querySelector('#delete');
const boxId = document.querySelector('#boxId');
const main = document.querySelector('#main');
const hide = document.querySelector('#hide');
// const local = localStorage.getItem('Name');

// let names = [];

// function getData() {
//     localStorage.setItem('Name', local);

//     let name = data.value;
//     names.push(name);
//     localStorage.setItem('Name', JSON.stringify(names));
// }

// function parseData() {
//     let local = localStorage.getItem('Name');
//     var data = JSON.parse(local);
//     data.forEach(item => {
//         let element = document.createElement('li');
//         element.setAttribute('class', 'list');
//         element.innerHTML = item;
//         main.appendChild(element);
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     console.log(local);
// });

// const localStorageContent = localStorage.getItem('names');

// let names;

// if (localStorageContent === null) {
//     names = [];
// } else {
//     names = JSON.parse(localStorageContent);
// }

// localStorage.setItem('names', JSON.stringify(names));

const localStorageData = localStorage.getItem('Name');
let userName;
// hide.disabled = true;
if (localStorageData === null) {
    userName = [];
    readBtn.disabled = true;
} else {
    userName = JSON.parse(localStorageData);
    console.log(userName);
}

function readData() {
    readBtn.disable = false;
    if (readBtn.disable === false) {
        readBtn.disabled = true;

        userName.forEach(item => {
            let users = document.createElement('li');
            users.innerHTML = item;
            users.setAttribute('class', 'list');
            main.append(users);
            main.style.visibility = 'visible';
            // hide.style.visibility = 'visible';
            // hide.disabled = false;
        });
    }
}

function sendData() {
    if (data.value === '') {
        alert('empty field');
    } else {
        userName.push(data.value);
        localStorage.setItem('Name', JSON.stringify(userName));
        readBtn.disabled = false;
        data.select();
        document.execCommand('cut');
        main.innerHTML = '';
    }
}
sendBtn.addEventListener('click', sendData);

readBtn.addEventListener('click', readData);

deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('Name');
    main.style.visibility = 'hidden';

    let userClass = document.querySelectorAll('.list');
    userClass.forEach(list => {
        list.remove();
    });
    readBtn.disabled = true;
});

// hide.addEventListener('click', () => {
//     main.style.visibility = 'hidden';
//     hide.disabled = true;
// });
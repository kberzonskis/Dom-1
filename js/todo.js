import { header } from "./header.js";
header ();
/*
const formDOM = document.forms[0]; 
//console.log(formDOM);
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;

formDOM.addEventListener('submit', event  =>  { 
    event.preventDefault();
   // console.log(event);
          // console.log('kuriama uzduotis');


   listDOM.innerHTML += `
        <div class="item">
        <div class="header"></div>
        <div class="index">${++count}</div>
        <button class="btn" type="button">Delete</button> </div>
        <div class="content">${inputDOM.value}</div>
        </div>`;

inputDOM.value = ''; // Išvalome input laukelį po užduoties sukūrimo
const deleteBtnListDOM = document.querySelectorAll('.btn');
//console.log(deleteBtnListDOM);

for (const btnDOM of deleteBtnListDOM) {  
     btnDOM.addEventListener('click', () => { 
  
    btnDOM.parentNode.parentNode.remove(); 
})
}
})
*/

const h1DOM = document.querySelector('h1');
const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    listDOM.innerHTML += `
        <div class="item">
            <div class="header">
                <div class="index">${++count}</div>
                <button class="btn" type="button">Delete</button>
            </div>
            <div class="content">${inputDOM.value}</div>
        </div>` +listDOM.innerHTML;


    inputDOM.value = ''; // Clear the input field after creating a task
    inputDOM.focus(); // Set focus back to the input field
    const deleteBtnListDOM = document.querySelectorAll('.btn');

 
    for (const btnDOM of deleteBtnListDOM) {
        btnDOM.addEventListener('click', () => {
            btnDOM.parentNode.parentNode.remove();
            deleteCount ++
            h1DOM.textContent = `Task planer (${count - deletedCount})`; // Update the header with the current task count  
        });
    }
    h1DOM.textContent = `Task planer (${count-deletedCount})`; // Update the header with the current task countTAS
}); 




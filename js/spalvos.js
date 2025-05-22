import { header } from "./header.js";
header ();


document.querySelector('title').textContent = 'Spalvos'
const colors =[ 'yellow', 'red', 'green','blue', 'orange', 'aqua']
const ulDOM = document.querySelector('.colors'); 

 ulDOM.innerHTML = '';   

/*
ulDOM.innerHTML = '<li>ddd</li>'; 
ulDOM.innerHTML += '<li>ddd</li>'; 
ulDOM.innerHTML += '<li>ddd</li>'; 
ulDOM.innerHTML += '<li>ddd</li>'; */


for (const color of colors) { ulDOM.innerHTML += `<li style= "background-color: ${color};">Spalva: ${color} </li>`; 

} 


/*
ulDOM.innerHTML = '<li style= "background-color: ${colors[0]};">Spalva : ${colors[0]} }>ddd</li>';   //taisyti
ulDOM.innerHTML = '<li style= "background-color: ${colors[1]};">Spalva : ${colors[0]} }>ddd</li>'; 
ulDOM.innerHTML = '<li style= "background-color: ${colors[2]};">Spalva : ${colors[0]} }>ddd</li>'; 
ulDOM.innerHTML = '<li style= "background-color: ${colors[3]};">Spalva : ${colors[0]} }>ddd</li>'; 
*/


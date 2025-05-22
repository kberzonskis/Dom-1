import { header } from "./header.js";
header ();


const titleDOM = document.querySelector ('title');

const h1DOM = document.querySelector('h1');
const title = 'Zuikio darzas';
/*
const title = 'Zuikio darzas' */

function changeTitle() { TitleDOMitleDOM.textContent = title;

}
// tik javascrip mili sec. 
// setTimeout(changeTitle,2000);
setInterval(changeTitle,2000);  // pastoviai keicia


h1DOM.title.textContent = title; 
h1DOM.style.backgroundColor = 'yellow'
h1DOM.style.fontSize = '2rem'

let time = 0 
function changeTitle (){ 
    time++; 
         
    if (time%2 ===0 ) { titleDOM.textContent = `Document (${time})`}
    else { titleDOM.textContent = `${title} (${time})`};
}

  if (time > 2) { clearInterval(timer);}
const timer = setInterval (changeTitle,1000); 




const liDOM = document.querySelectorAll('li')
const vegetables = ['pomidoras', 'agurkas', 'svogunas', 'bulve', 'dobiliukai'] 

let index = 0;
for(const liDOM of liListDOM) { 
    liDOM.textContent = vegetables[index++] ? vegetables [index++] : 'error'; 
  if (vegetables[index]) { liDOM.classList.add('zuikio-darzove')} else { 
    liDOM.classList.add ('zuikio-darzo-error'); 
  }

    if (vegetables[index]) {
liDOM.style.backgroundColor = 'green';} 

else {liDOM.style.backgroundColor = 'red';}
     
liDOM.style.fontSize = '1.2rem'; 
index++; 
} 


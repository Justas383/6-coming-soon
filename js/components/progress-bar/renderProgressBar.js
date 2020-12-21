import {isValidInput} from './IsValidInput.js';
import { isValidProgressBar } from './isValidProgressBar.js';


function renderProgressBar(selector, data){
  if (!isValidInput(selector, data)){
    return false;
  }

     //generuojame turini
  let HTML = ''
  for (let i=0;i < data.length; i++){
      const bar = data[i];
      if (!isValidProgressBar(bar)){
        continue;
      }

      //validuojame turini

    HTML +=  `<div class="progress-bar">
    <div class="top">
        <div class="label">${bar.title}</div>
         <div class="value">${bar.value}%</div>
    </div>
    <div class="bottom">
        <div  class="progress" style="width:${bar.value}%"> 
     <div class="bar"></div>
    </div>
 </div>
  </div>`;
 
}

//post logic validation
if (HTML=== ''){
  console.log('nerasta tinkamu duomenu');
  return false;
}
  //ieskome vietos ,kur padeti turini
  const DOM = document.querySelector(selector);
if (!DOM){
  return false;
}
DOM.innerHTML +=HTML;
  return true;
}

export{ renderProgressBar }
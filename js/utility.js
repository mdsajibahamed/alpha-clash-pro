function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element =  document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColor(elementId){
    const element  = document.getElementById(elementId);
    element.classList.add('bg-orange-700');
}

function removeBackgroudColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-700');
}
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabels = alphabetString.split('');
    const randNumber = Math.random()* 25;
    const index = Math.round(randNumber);
    const alphabet = alphabels[index];
    return alphabet;
}

function getElementId(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

 function getElementTextById(elementId){
    const element= document.getElementById(elementId);
   const text= element.innerText;
   return text;
 }
// function getRandomAphabet(){
//     // created alphabet array 
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabels = alphabetString.split('');
//     // console.log(alphabels);

//     // get random index between 
//     const randomNumber = Math.random()* 25;
//     const index = Math.round(randomNumber);
//     const alphabel = alphabels[index];
//     console.log(index, alphabel);
//     return alphabel;
    
// }
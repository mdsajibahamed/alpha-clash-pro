// function playnow(){
// step 1  : hide the home screen . to hide the screen add the class hidden to the home section 
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// console.log(homeSection.classList);
// show the playground 
// const playground = document.getElementById('playground');
// playground.classList.remove('hidden');
// }
function continueGame() {
    // step 1 generate a random alphabet
    // const alphabel =  getRandomAphabet();
    const alphabet = getRandomAlphabet();
    console.log('Your Random Alphabet is ', alphabet);

    // set random alphabel to screen show it 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet
    // add addBackgroundColor
    addBackgroundColor(alphabet);
}




function handKeyupEvent(event) {
    const playerPress = event.key;
    // stop the game if pressed Esc 
    if(playerPress === 'Escape'){
        gameOver();
    }

    //  key player is expected to press 
    const currentAlphabetEvent = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetEvent.innerText;
    const expected = currentAlphabet.toLocaleLowerCase();

    // checked right or wrong key press 
    if (playerPress === expected) {
        console.log('You are right click');
        // console.log('You have pressed correctly', expected);

        // use funtionality 
        const currentScore = getElementId('score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementById('score', updatedScore);




        // details ...............................................
        // update score : 
        // 1.get the current score 
        // const currentScore = document.getElementById('score');
        // const currentScoreText = currentScore.innerText;
        // const score =parseInt(currentScoreText);
        // console.log(score);
        // 2. increase the score by 1
        // const newScore = score + 1;
        // 3. show the update score 
        // currentScore.innerText = newScore;

        removeBackgroudColor(expected);
        continueGame();

    }
    else {
        console.log('Durr mia ki click korlen ');
        const currentLife = getElementId('life');
        const updatedLife = currentLife - 1;
        setTextElementById('life', updatedLife);
        if (updatedLife === 0) {
            gameOver();
        }
        // details .........................................
        // step 1 : get the current life score 
        // const currentLifeElement = document.getElementById('life');
        // const currentLifeText = currentLifeElement.innerText;
        // const life = parseInt(currentLifeText);
        // step 2 : reduce the life count 
        // const newLife = life - 1;
        // step 3 : display the updated life count
        // currentLifeElement.innerText = newLife; 

    }
}
document.addEventListener('keyup', handKeyupEvent)


// practice start 
// function handleKeyupEvent(event){
//     const playerPressed = event.key;
//     console.log('player press ', playerPressed);
//     // set expected o press 
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     const expected = currentAlphabet.toLocaleLowerCase();
//     console.log('current press', expected);
//     console.log(playerPressed, expected);
//     // checked matched 
//     if(playerPressed === expected){
//         console.log('You gain a point');
//     }else{
//         console.log('You missed. You lost a life');
//     }
// }
// document.addEventListener('keyup', handleKeyupEvent);
// practice end 

// function eventKeyButtonPress(){
//     console.log('key pressed');
// }
// capture keyboard key press 
// document.addEventListener( 'keyup', eventKeyButtonPress);

//  all function 

function playnow() {
    // hide everything 
    hideElement('home-screen');
    // hideElement('final-score');
    showElementById('playground');

    // reset score 
    setTextElementById('life', 5);
    setTextElementById('score', 0);

    continueGame();

}

function gameOver() {
    hideElement('playground');
    showElementById('final-score');

    // update last score 
    // 1. get the final score 
    const lastScore = document.getElementById('score');
    const lastScoreText = lastScore.innerText;
    console.log(lastScoreText);
    setTextElementById('last-score', lastScoreText);

    // clear the last hilight color element 
    const  currentAlphabet = getElementTextById('current-alphabet');
    // console.log('current alphabet is ', currentAlphabet);
    removeBackgroudColor(currentAlphabet);
} 
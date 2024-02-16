// function play(){
//     // jokon home page e play now a click kora hobe tokon sei page ta hide hoye jabe and second page ta open hoye jabe mane play ground ta on hoye jabe
//     const homeSection = document.getElementById('home-screen');
//     // id dia kuje tarpor oitar moddy hidden naam er ekta class add kore dile section ta hidden hoye jabe
//     homeSection.classList.add('hidden');
//     // same vave jodi second page k hidden class ta k  remove  korate chai tahole add remove korte hobe tahole second page ta show korbe

//     const secondSection = document.getElementById('play-ground');
//     secondSection.classList.remove('hidden');


// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // jodi game over korte chai kelar moddyi tahole nirdisto ekta button e click korle stop hoye jabe game
if(playerPressed === 'Escape'){
    gameOver();
}

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);





// protibar correct key te press korar por ekta kore score barbe seita eikane korbo
// const currentScoreElement = document.getElementById('current-score');
// const currentScoreText = currentScoreElement.innerText;
// // string hisabe score ta k number e convert korte hobe karon ei score ta jog hobe
// const currentScore = parseInt(currentScoreText);
// console.log(currentScoreText);



// // score ta k jog korbo
const newScore = currentScore + 1;

// currentScoreElement.innerText = newScore;

// uporer function ta commment kore raklam  kichota vinno vave same kaj korbo (1)

        // console.log('you have pressed correctly ' , expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        containueGame();
    }
    else{
        console.log('you missed a point and lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life', updatedLife);

        // jodi life  5 tar er theke kom hoye jai tokon game over hoye jave and next page a chole jabe
        if(updatedLife === 0){
            gameOver();
        }
        // jodi vul kore type koro tahole eitar jonno sojog ba life dewa hobe  5 bar
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        
        
        // const newLife = currentLife -1;

        // currentLifeElement.innerText = newLife;
        // // uporer function ta commment kore raklam  kichota vinno vave same kaj korbo (2)

    }
}
document.addEventListener('keyup' , handleKeyboardButtonPress);


function containueGame(){
    const alphabet = getARandomAlphabet();
    // console.log( 'Your random alphabet', alphabet);

    // kono ekta paragraph upadan k array moddy dekanor jonno oi paragraph er id ta k nia aste hobe

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // jei letter ta show korbe seitar background color change korte chai
    addBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

// game over er pore jokon nuton kore game start korte jabo tokon life score abaro 5 add hoye jabe
setTextElementValueById('current-life', 5);
// abaro jokon again game ta start korbo tokon score er maan taw 0 takbe
setTextElementValueById('current-score', 0);

    containueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score and get last page show the score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected key bg color
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
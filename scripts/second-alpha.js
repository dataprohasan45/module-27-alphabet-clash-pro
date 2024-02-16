
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');


}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-500');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-500');
}

// vinno vave score count and life minus korar kaj ta korchi function dia
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
const element = document.getElementById(elementId);
element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    const alphabetString = 'egbeacbdkelmonwnqpritswz';
    // kono ekta string maan k array korar jonno variable ta sathy . dot split kore faka bracket dibo ex: ('')
    const alphabets = alphabetString.split('');
    // console.log(alphabets);


    // get a random index between 
    // Math.random( ) eita use korle array er moddy index number 0-1 er moddy number gula k dekabe and sei sathy jodi 23 dia gon kori tahle 23 ta number takle sei prottekta upadan k amk dekabe 
    const randomNumber = Math.random()*23;
    // Math.round ekti float wala number k purno shongkai convert korte pare 
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    // console.log(index , alphabet);
    return alphabet;
}

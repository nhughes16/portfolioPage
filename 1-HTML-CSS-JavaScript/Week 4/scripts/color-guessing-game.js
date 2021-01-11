const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
const divRadios = document.getElementById('radios');
const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
const TARGET = COLORS_ARRAY[targetIndex];

const header = document.querySelector('h1');
header.addEventListener('click', reload);

let numTries = 0;

console.log(divRadios);

for(color in COLORS_ARRAY){

    const newDiv = document.createElement('div');
    newDiv.id = 'div-' + COLORS_ARRAY[color];

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = COLORS_ARRAY[color];
    radio.name = 'colors';
    radio.className = 'colors';
    radio.value = COLORS_ARRAY[color];
    radio.onchange = colorsSelect;

    let label = document.createElement('label');
    label.htmlFor = COLORS_ARRAY[color];
    label.value = COLORS_ARRAY[color];
    label.textContent = COLORS_ARRAY[color];
    if(COLORS_ARRAY[color] === 'white'){
        label.style.color = 'black';
    } else {
        label.style.color = COLORS_ARRAY[color];
    }
    //label.onchange= runGame;

    divRadios.appendChild(document.createElement('div'))
    divRadios.lastElementChild.appendChild(radio);
    divRadios.lastElementChild.appendChild(label);
}

function runGame(guess){
    let correct = false;
    numTries++;
        
    correct = checkGuess(guess, TARGET, numTries);

    if(guess === TARGET){
        results.innerHTML = 'Congratulations You have guessed the color!\n\nIt took you ' + numTries + ' guesses to finish the game!\n\nClick the title to start a new game, or wait 20 seconds.';
        document.body.style.background = guess;

        setInterval(reults.innerHTML = 'Start a new game!', 20000);
        setInterval('window.location.reload()', 20000);
    }
}

function checkGuess(guess, TARGET, numTries){
    let correct = false;
    const results = document.getElementById('results');

    if (TARGET < guess){
        results.innerHTML = "Sorry, your guess is incorrect.\n\nHint your color is alphabetically higher than mine.\n\nYou have guessed " + numTries + " so far.\n\nPlease try again.";
    } else if (TARGET > guess){
        results.innerHTML = "Sorry, your guess is incorrect.\n\nHint your color is alphabetically lower than mine.\n\nYou have guessed " + numTries + " so far.\n\nlease try again.";
    } else {
        correct = true;
    }

    return correct;
}

function colorsSelect(){
    let guess = this.value;

    console.log('Target = ' + TARGET);
    console.log(guess);

    runGame(guess);
}

function reload(){
    location.reload();
}
function runGame(){
    const target = Math.floor(Math.random() * 100) + 1;
    
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let count = 0;

    do{
        guessString = prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?');
        if (guessString === null){
            return;
        }
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
        count++;
    } while (!correct);

    alert('You got it! The number was ' + target + '.\n\nIt took you ' + count + ' tries to guess correctly.');
}

function checkGuess(guessNumber, target){
    let correct = false;

    switch (true){
        case (isNaN(guessNumber)):
            alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
            break;
        case (guessNumber > 100 || guessNumber < 1):
            alert('Please enter an integer in the 1-100 range.');
            break;
        case (guessNumber > target):
            alert('Your number is too large!');
            break;
        case (guessNumber < target):
            alert('Your Number is too small!');
            break;
        default: //(guessNumber === target):
            correct = true;
    }
    return correct;
}
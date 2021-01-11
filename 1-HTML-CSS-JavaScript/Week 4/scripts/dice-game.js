function rollDice(){
    let goldCoins = 0;

    for(let i = 0; i < 10; i++){
        const roll = Math.floor(Math.random() * 6) + 1;

        alert('You rolled a ' + roll + '.')

        if(roll === 1){
            alert('Game over, no more rolls!');
            break;
        } 

        if (roll === 4 && goldCoins > 0){
            alert('You have lost 1 gold coin!\n\nYou now have ' + --goldCoins + ' gold coins.');
            continue;
        }
        
        if (roll < 5)  {
            
            alert('You have ' + goldCoins + ' gold coins so far!');
            continue;
        }
        
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins!\n\nYou have ' + goldCoins + ' gold coins so far!');
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
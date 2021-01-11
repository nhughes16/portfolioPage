function getName(){
    const userName = prompt('What is your name?');
    returnName(userName);
}

function returnName(value){
    alert('Hello ' + value + '!');
    console.log('Alert sent!')
}

function helloName(){
    const userName = prompt('What is your name?');
    alert('Hello ' + userName + '!');
}

function sayHello(){
    const userName = "Spiderman";
    alert('Hello ' + userName + '!');
}

function ticketPrice(age){
    if (age > 12 && age < 65){
        alert('Ticket price is $20');
    } else {
        alert('Ticket price is $10');
    }
}

function joinBand(sing, play){
    if (sing || play){
        alert('You can join the band');
    } else {
        alert('You can not join the band');
    }
}

function test(){
    let value = '5' > 3;
    alert(value);
}

function test2(){
    let string1 = "some BS";
    string1 += ", some more BS";
    alert(string1);
}

function test3(){
    let num1 = 365;
    let string1 = "";
    string1 = num1.toString();

    let string2 = "Number of Days in the year: ";
    string2 += num1;
    alert(string2);
}

function randomBackgroundColorHex(){
    let hex = "#";
    let randNum = 0;
    let colorsA = ['1', '2', '3', '4', '5', '6', '7','8','9','0','a','b','c','d','e','f'];
    
    console.log(hex);
    console.log(colorsA);

    //loop to fill hex with a the format #ffffff
    do{
        randNum = Math.floor(Math.random()*16);
        hex += colorsA[randNum];
    } while(hex.length < 7);

    console.log(hex);

    document.body.style.backgroundColor = hex;
}
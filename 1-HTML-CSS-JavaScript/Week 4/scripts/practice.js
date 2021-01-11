const num_1 = document.getElementById('num1');
const num_2 = document.getElementById('num2');
const sum_1 = document.getElementById('sum1');

num_1.addEventListener('input', add);
num_2.addEventListener('input', add);

function add(){
    let num1 = parseFloat(num_1.value);
    let num2 = parseFloat(num_2.value);

    if(!isNaN(num1) && !isNaN(num2)){
        sum_1.innerHTML = num1 + num2;
    }
}

function hide(toHide){
    for (items in toHide){
        toHide[items].className = "hide"; 
    }
}

const simon = document.getElementById('simon');
const bruce = document.getElementById('bruce');
const ben = document.getElementById('ben');

simon.addEventListener('click', showHideImages);
bruce.addEventListener('click', showHideImages);
ben.addEventListener('click', showHideImages);

function showHideImages(){
    const allImg = document.querySelectorAll('img');

    hide(allImg);

    var ID = this.attributes["data-img"].value;
    let tagID = document.getElementById(ID);
    
    if (tagID.className === 'hide'){
        tagID.className = "";
    } else {
        tagID.className = 'hide';
    }
}

function removeSpace(string1){
    return string1.replace(/\s/g, '-');
}

function divClass(){
    const divs = document.querySelectorAll('div');

    console.log('start');

    for(item in divs){
        divs[item].className = removeSpace(divs[item].firstElementChild.innerHTML);
    }
}
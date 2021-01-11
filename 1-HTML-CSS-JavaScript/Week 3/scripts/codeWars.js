function spinString(stringToSpin) {
  let index = 0;
  let spinArray = stringToSpin.split(" ");

  while (index < spinArray.length) {
    if (spinArray[index].length >= 5) {
      let reverse = spinArray[index].split("");
      reverse = reverse.reverse();
      spinArray[index] = reverse.join("");
    }
    index++;
  }

  console.log(spinArray.join(" "));
  return spinArray.join(" ");
}

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

//CodeWars.com "Duplicate Encoder"
function dupEncode(word) {
  let textA = word.toLowerCase().split("");

  const count = {};
  const result = [];

  textA.forEach(function (letter) {
    if (count[letter]) {
      count[letter] += 1;
      return;
    }
    count[letter] = 1;
  });

  for (let prop in count) {
    console.log("Prop: " + prop);
    if (count[prop] >= 2) {
      result.push(prop);
    }
  }

  for (let i = 0; i < textA.length; i++) {
    let change = false;
    for (let c = 0; c < result.length; c++) {
      if (textA[i] === result[c]) {
        textA[i] = ")";
        change = true;
        break;
      }
    }
    if (change) {
      textA[i] = "(";
    }
  }

  console.log(textA.join(""));
  return textA.join("");
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

function rangeBitCount(a, b) {
    let rangeA = [];

    let n = 0;
    let char1 = n.toString();
    for(let i = a; i <= b; i++){
        rangeA.push(toBin(i));
    }

    rangeA = rangeA.join("").split("");
    let sum = 0;

    for(let i = 0; i < rangeA.length; i++){
        sum += Number(rangeA[i]);
    }

    return sum;
}

function toBin(num) {
    return (num >>> 0).toString(2);
}

function digitalRoot(n){
    let rangeA = n.toString().split("");
    let sum = 0;

    do{
        sum = 0;
        for(let i = 0; i < rangeA.length; i++){
            sum += Number(rangeA[i]);
        } 
        rangeA = sum.toString().split("");
    } while (sum >= 10);
    
    console.log(sum);
    return sum;
}

function digital_root(n){
    console.log((n-1)%9+1);
    return (n - 1) % 9 + 1;
}

function createPhoneNumber(areaCode){
  if (areaCode === ''){
    console.log(randomAreaCode());
    return randomAreaCode();
  } else {
    console.log(givenAreaCode(areaCode));
    return givenAreaCode(areaCode);
  }
}

function givenAreaCode(areaCode){
  let phoneNum = ['(' + areaCode + ') '];

  while (phoneNum.length < 9){
    if(phoneNum.length === 4) {
      phoneNum.push('-');
    } else{
      phoneNum.push(Math.floor(Math.random() * 10));
    }
  }

  return phoneNum.join("");
}

function randomAreaCode(){
  let phoneNum = ['('];

  while (phoneNum.length < 13){
    if(phoneNum.length === 4){
      phoneNum.push(') ');
    } else if(phoneNum.length === 8) {
      phoneNum.push('-');
    } else{
      phoneNum.push(Math.floor(Math.random() * 10));
    }
  }

  return phoneNum.join("");
}

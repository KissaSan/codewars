function removeChar(str) {
  return str.slice(1, -1);
}

let sre = removeChar('chai');
console.log(sre);

function basicOp(operation, value1, value2) {
  if (operation == '+') {
    res = value1 + value2;
  } else if (operation == '-') {
    res = value1 - value2;
  } else if (operation == '*') {
    res = value1 * value2;
  } else {
    res = value1 / value2;
  }
  return res;
}

res = basicOp('-', 15, 18);
function makeUpperCase(str) {
  // Code here
  res = str.toUpperCase();
  return res;
}

res = makeUpperCase('heloo');
console.log(res);

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  res = Math.abs(dadYearsOld - sonYearsOld * 2);
  return res;
}

const stringToNumber = function (str) {
  return Number(str);
};

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

function hoopCount(n) {
  return n < 10
    ? 'Keep at it until you get it'
    : 'Great, now move on to tricks';
}

function opposite(number) {
  let oppNum = 0 - number;
  return oppNum;
}

function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counter += 1;
  }
  return counter;
}

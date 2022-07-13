'use strict';
const mainArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
console.log('mainArray ===', mainArray);

function doStuffToArray(title, arr, action) {
  console.group(title);
  // skaiciavimai
  const arrCopy = arr.slice();
  const arrLen = arrCopy.length;
  for (let i = 0; i < arrLen; i++) {
    // vietinis kintamasis local variable
    if (action === 'times2') {
      arrCopy[i] = arrCopy[i] * 2;
    } else if (action === 'power') {
      arrCopy[i] = arrCopy[i] ** 2;
    }
  }
  console.log(arrCopy);

  console.groupEnd();
}

doStuffToArray('3. Padauginti masyvo narius iš 2', mainArray, 'times2');
doStuffToArray('4. Pakelti masyvo narius kvadratu', mainArray, 'power');

// {
//   console.group('3. Padauginti masyvo narius iš 2');
//   const arrCopy = mainArray.slice();

//   const arrLen = arrCopy.length;
//   for (let i = 0; i < arrLen; i++) {
//     // vietinis kintamasis local variable
//     const valueTime2 = arrCopy[i] * 2;
//     arrCopy[i] = valueTime2;
//   }
//   console.log(arrCopy);

//   console.groupEnd();
// }

// {
//   console.group('4. Pakelti masyvo narius kvadratu');

//   const arrCopy = mainArray.slice();

//   const arrLen = arrCopy.length;
//   for (let i = 0; i < arrLen; i++) {
//     // vietinis kintamasis local variable
//     const valueTime2 = arrCopy[i] ** 2;
//     arrCopy[i] = valueTime2;
//   }
//   console.log(arrCopy);

//   console.groupEnd();
// }
// let x = 5;
// if (x === 5) {
//   const vardas = 'james';
//   console.log('vardas ===', vardas);
// }
// vardas = 'bond';
// console.log('name ===', vardas.toString());
// console.log('valueTime2 ===', valueTime2);
'use strict';
console.log('formLarge');

const cardEl = document.getElementById('card');
const h1El = document.querySelector('h1');
const veskInputEl = document.getElementById('ivesk');
const colorBlockEl = document.getElementById('colors');
const maleEl = document.getElementById('male');
const femaleEl = document.getElementById('female');
// const formEl = document.getElementById('userForm');
const formEl = document.forms.radioForm;
// const inner = document.body.innerHTML;
console.log('formEl ===', formEl);
// veskInputEl.value = 'Hello';

veskInputEl.addEventListener('input', (event) => {
  console.log('input ivyko');
  h1El.textContent = event.target.value;
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Js is in control');

  const genderPasirinkimas = maleEl.checked ? 'Male' : 'Female';
  console.log('genderPasirinkimas ===', genderPasirinkimas);
  // spalvos
  const colorsSelectedArrLike = colorBlockEl.querySelectorAll('input:checked');
  const len = colorsSelectedArrLike.length;
  const selectedColors = [];
  for (let i = 0; i < len; i++) {
    const el = colorsSelectedArrLike[i].value;
    selectedColors.push(el);
  }
  console.log('selectedColors ===', selectedColors);

  const obj = {
    email: 'email@example.com',
    pass: 'pass@example.com',
    gender: genderPasirinkimas,
    town: 'kaunas',
    favColor: selectedColors,
  };
  console.log('obj ===', obj);

  outputColors(obj.favColor);
});

function outputColors(arr) {
  // i textContent paduoti reikia stringa
  // Array.join(skirtukas) - sujungia array i stringa
  cardEl.textContent = arr.join(', ');
  console.log('{ items: arr } ===', { items: arr });
}

// nusitaikyti i terms input
// nusitaikyti i submit button
const htmlEls = {
  terms: document.getElementById('terms'),
  submitBtn: document.getElementById('sub'),
};

//  terms input uzdeti eventa (change)
htmlEls.terms.addEventListener('change', (event) => {
  console.log('CHange ', htmlEls.terms.checked);
  console.log('CHange ', event.target.checked);
  htmlEls.submitBtn.disabled = event.target.checked ? false : true;
});

// ivykus eventui mes tikrinam ar checked yra true
// jei yra tai nuimam nuo mygtuko disabled
// jei ne uzdedam
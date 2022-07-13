'use strict';
console.log('formLarge');

const cardEl = document.getElementById('card');
const veskInputEl = document.getElementById('ivesk');

// veskInputEl.value = 'Hello';

veskInputEl.addEventListener('input', (event) => {
  console.log('input ivyko');
  cardEl.textContent = event.target.value;
});
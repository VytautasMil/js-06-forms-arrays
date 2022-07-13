'use strict';
console.log('form');

// 1 nusitaikyt i elementus kuriuos naudosim
const userFormEl = document.getElementById('userForm');
console.log('userFormEl ===', userFormEl);
const usernameEl = document.getElementById('username');
const ageEl = document.getElementById('age');
const cardEl = document.getElementById('card');

// uzdeti formai ivykio submit pasiklausyma
userFormEl.addEventListener('submit', handleFormSubmitNoComment);

function handleFormSubmit(event) {
  // 2. nusitaike i forma mes sustabdom josissiuntima su restartu
  // event.preventDefault(); sustabdyti numatytaji veiksma
  event.preventDefault();
  console.log('Submit js is in control');
  // ageEl === <input type="number" id="age" name="age" placeholder="Your age">
  // kas ivesta i ageEl === ageEl.value
  const formAgeValue = ageEl.value;
  console.log('formAgeValue ===', formAgeValue);
  const usernameValue = usernameEl.value;
  console.log('usernameValue ===', usernameValue);
  // pagaminti objekta kuriame butu username ir age su reikmem
}
function handleFormSubmitNoComment(event) {
  event.preventDefault();
  const userInputsObj = {
    username: usernameEl.value,
    age: ageEl.value,
  };
  console.log('userInputsObj ===', userInputsObj);
  // isvalyti inputus
  userFormEl.reset();
  // usernameEl.value = '';
  // ageEl.value = '';

  outputFormDataToHtml(userInputsObj);
}

function outputFormDataToHtml(userData) {
  // sukurti paragrafa
  const pEl = document.createElement('p');
  // irasyti reiksme
  pEl.textContent = `Forma issiusta. Vartotojo vardas: ${userData.username} ir vartojas yra ${userData.age} metu amziaus`;
  // patalpinti cardEL
  cardEl.append(pEl);
}

// 3. pereme formos issiuntimo eventa mes pasiimam ivesetties laukur reiksmes

// Atspausdinti paragrafuose dive us id card ivesta username ir age
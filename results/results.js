import { clearStorage, getUserStorage } from '../localStorageUtils.js';
const div = document.getElementById('result-div');
const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () =>{
    clearStorage();
    window.location = '../';
});

const user = getUserStorage();
if (user.greed < 6){
    div.textContent = `Congrats you have accumulated ${user.money} coins while minimizing greed points to ${user.greed}`;
} else if (user.greed < 76 && user.greed > 5){
    div.textContent = `Your `;
} else div.textContent = 'you file bankruptcy';
import { clearStorage, getUserStorage } from '../localStorageUtils.js';
const div = document.getElementById('result-div');
const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () =>{
    clearStorage();
    window.location = '../';
});

const user = getUserStorage();
if (user.greed < 6){
    div.textContent = 'wealth';
} else if (user.greed < 76 && user.greed > 5){
    div.textContent = 'you are not that greedy';
} else div.textContent = 'you file bankruptcy';
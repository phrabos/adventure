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
    div.textContent = `You made a some greedy decisions and some of them paid off earning you ${user.money} coins while amassing ${user.greed} greed points!`;
} else div.textContent = `Your greed points of ${user.greed} has you on the path towards bankruptcy`;
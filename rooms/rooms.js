import { rooms } from '../data.js';
import { getUserStorage, setUserStorage } from '../localStorageUtils.js';
// import { getUserStorage } from '../localStorageUtils.js';
import { displayStats, findByID, roomVisited } from '../utils.js';

const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const p = document.querySelector('p');
const form = document.querySelector('form');
// const divResult = document.getElementById('results');
const resultSpan = document.getElementById('results-span');

const backToMapButton = document.getElementById('back-to-map');

const webValue = new URLSearchParams(window.location.search);
const roomId = webValue.get('id');



const currentRoom = findByID(roomId, rooms);

displayStats();

h1.textContent = currentRoom.title;
img.src = `../assets/${currentRoom.image}`;
p.textContent = currentRoom.description;
for (let choice of currentRoom.choices){
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');
    span.textContent = choice.description;
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(radio, span);
    form.append(label);
}
const button = document.createElement('button');
button.textContent = 'Submit';
form.append(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    roomVisited(roomId);
    const user = getUserStorage();
    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findByID(selectionId, currentRoom.choices);
    resultSpan.textContent = choice.result;
    user.greed += choice.greed;
    user.money += choice.coin;
    setUserStorage(user);
    displayStats();
    button.disabled = true;

});

backToMapButton.addEventListener('click', () => {
    window.location = '../map';
});
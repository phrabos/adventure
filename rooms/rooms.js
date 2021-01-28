import { rooms } from '../data.js';
import { findByID } from '../utils.js';

const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const p = document.querySelector('p');
const form = document.querySelector('form');

const webValue = new URLSearchParams(window.location.search);
const roomId = webValue.get('id');

// const user = JSON.parse(localStorage.getItem('USER'));


const currentRoom = findByID(roomId, rooms);
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
    window.location = '../map';
});
import { rooms } from '../data.js';
import { getUserStorage } from '../localStorageUtils.js';
import { howManyRoomsVisited, isGameOver } from '../utils.js';
const user = getUserStorage();

const list = document.querySelector('ul');
const numRoomsVisited = howManyRoomsVisited(user);

isGameOver(user, numRoomsVisited);

// const roomsVisitedArray = Object.keys(user.completed);
const section = document.querySelector('section');
for (let room of rooms){
    if (user.completed[room.id] === 1){
        const span = document.createElement('span');
        span.textContent = room.title;
        span.style.textDecoration = 'line-through';
        section.append(span);
    } else {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.value = room.id;
        a.id = room.id;
        a.textContent = room.title;
        a.href = `../rooms/?id=${room.id}`;
        li.append(a);
        list.append(li); 
    }
}


// if (a.value === roomsVisitedArray[1];


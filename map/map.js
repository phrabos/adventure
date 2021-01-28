import { rooms } from '../data.js';
import { getUserStorage } from '../localStorageUtils.js';
import { howManyRoomsVisited, isGameOver } from '../utils.js';
const user = getUserStorage();

const list = document.querySelector('ul');

for (let room of rooms){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.value = room.id;
    a.textContent = room.title;
    a.href = `../rooms/?id=${room.id}`;
    li.append(a);
    list.append(li);   
}

isGameOver(user, howManyRoomsVisited(user));

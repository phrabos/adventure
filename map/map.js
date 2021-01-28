import { rooms } from '../data.js';


const list = document.querySelector('ul');
const user = JSON.parse(localStorage.getItem('USER'));
console.log(user);

for (let room of rooms){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.value = room.id;
    a.textContent = room.title;
    a.href = `../rooms/?id=${room.id}`;
    li.append(a);
    list.append(li);
    
}
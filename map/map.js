import { quests } from '../data.js';

const list = document.querySelector('ul');

for (let quest of quests){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.value = quest.id;
    a.textContent = quest.title;
    a.href = `../rooms/?id=${quest.id}`;
    li.append(a);
    list.append(li);
    
}
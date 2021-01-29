
import { getUserStorage, setUserStorage } from './localStorageUtils.js';

export function findByID(id, array){
    for (let item of array) {
        if (item.id === id) return item;
    }
    return null;
}

export function isGameOver(user, numRooms){
    if (numRooms === 3){
        alert('you have visited all rooms, let\'s check the results... ');
        window.location = '../results';
    } else if (user.greed >= 80) {
        alert('your level of greed has ended your game ');
        window.location = '../results';
    }
    return null;
}
export function howManyRoomsVisited(user){
    const roomsVisited = Object.keys(user.completed).length;
    return roomsVisited;
}

export function roomVisited(roomId){
    const user = getUserStorage();
    user.completed[roomId] = 1; 
    setUserStorage(user);
}

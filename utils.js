
import { getUserStorage, setUserStorage } from './localStorageUtils.js';

export function findByID(id, array){
    for (let item of array) {
        if (item.id === id) return item;
    }
    return null;
}

export function isGameOver(user, numRooms){
    if (user.greed >= 80 || numRooms === 3) {
        alert('your greed as');
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

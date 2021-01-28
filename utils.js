import { rooms } from './data.js';
import { getUserStorage, setUserStorage } from './localStorageUtils.js';


export function findByID(id, array){
    for (let item of array) {
        if (item.id === id) return item;
    }
    return null;
}

export function isGameOver(user, numRooms){
    if (user.greed >= 80 || numRooms === 3) {
        window.location = '../results';
    }
    return null;
}

export function howManyRoomsVisited(user){
    let roomsVisited = 0;
    for (let rooms in user.completed){
        // roomsVisited += user.completed[room.id];
        roomsVisited += user.completed[rooms];
        // console.log(user.completed[room.id]);
    }
    
    console.log(roomsVisited);
    return roomsVisited;
}

export function roomVisited(roomId){

    const user = getUserStorage();
    user.completed[roomId] = 1; 
    setUserStorage(user);
}
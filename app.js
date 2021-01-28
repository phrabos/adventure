// import functions and grab DOM elements
import { setUserStorage } from './localStorageUtils.js';


const form = document.querySelector('form');

// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        money: 25,
        greed: 5,
        completed: {},
    };
    setUserStorage(user);
    window.location = './map';
});

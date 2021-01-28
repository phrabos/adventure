// import functions and grab DOM elements
const form = document.querySelector('form');
export const USER = 'USER';
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
    const stringUser = JSON.stringify(user);
    localStorage.setItem(USER, stringUser);
    window.location = './map';
});
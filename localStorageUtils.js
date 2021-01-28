export const USER = 'USER';

export function getUserStorage(){
    const stringUser = localStorage.getItem(USER);
    const user = JSON.parse(stringUser);

    if (!stringUser){
        localStorage.setItem(USER, '[]');
    }
    return user;
}

export function setUserStorage(array){
    const stringUser = JSON.stringify(array);
    localStorage.setItem(USER, stringUser);
}

export function clearStorage(){
    localStorage.clear();
}
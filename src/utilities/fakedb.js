//use local storage as your db for now
const addToDb = id => {
    const exist = localStorage.getItem(id);
    console.log(exist);
    if (!exist) {
        localStorage.setItem(id, 1);
    }
    else {
        const newCount = parseInt(exist) + 1;
        localStorage.setItem(id, newCount);
    }

}
export { addToDb }
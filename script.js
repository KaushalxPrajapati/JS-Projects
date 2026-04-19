let count = 0;
let savedNum;

const num = document.getElementById('num');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const loadBtn = document.getElementById('loadBtn');
const saveBtn = document.getElementById('saveBtn');
const incrementBtn = document.getElementById('incrementBtn');

function incrementFunc() {
    count++;
    num.innerText = count;
}

function decrementFunc() {
    count--;
    num.innerText = count;
}

function resetFunc() {
    num.innerText = 0;
}

function saveFunc() {
    savedNum = count;
}

function loadFunc() {
    num.innerText = savedNum;
}

incrementBtn.addEventListener('click', () => {
    incrementFunc();
});

decrementBtn.addEventListener('click', () => {
    decrementFunc();
});

resetBtn.addEventListener('click', () => {
    resetFunc();
});

saveBtn.addEventListener('click', () => {
    saveFunc();
});

saveBtn.addEventListener('click', () => {
    loadFunc();
});

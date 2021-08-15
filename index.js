const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector(`body`);
const startBtnRef = document.querySelector(`[data-action="start"]`);
const stopBtnRef = document.querySelector(`[data-action="stop"]`);

startBtnRef.addEventListener("click", onStartChangeColor);
stopBtnRef.addEventListener("click", onStopChangeColor);

let id = null;
let isActive = false;

function onStartChangeColor() {
    if (isActive) {
        return;
    };
    
    isActive = true;
    id = setInterval(changeColor, 1000);
};

function changeColor() {
    const colorId = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.setAttribute("style", `background-color: ${colors[colorId]}`);
};

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStopChangeColor() {
    if (!isActive) {
        return;
    };    
    
    isActive = false;
    clearInterval(id);
};

// Declare variables

const body = document.body;
const color = document.getElementById('color-select');

const keyboard = document.getElementById("keyboard");
const input = document.getElementById("input");
let textarea = "";

const signal = document.getElementById('signal');
const caplock = document.getElementsByClassName('caplock')[0];
const key_elements = document.querySelectorAll(".key");

const selector = document.documentElement;
const elements = document.querySelectorAll('button');

let inputvalue = [];

const backspace = document.getElementsByClassName('backspace')[0];
const space = document.getElementsByClassName('space')[0];
const enter = document.getElementsByClassName('enter')[0];

// Change virtual background color

function changetheme() {
    let index = color.value;
    body.className = "";
    body.classList.add(index);
}

color.addEventListener('change', changetheme);

// display virtual keyboard

let value = input.value;

let iskeyboardclicked = false;

input.addEventListener('click', () => {
    input.classList.add('active');
})

keyboard.addEventListener('click', () => {
    iskeyboardclicked = true;
})


function togglekeyboard() {
    if (input.classList.contains('active')) {
        keyboard.style.opacity = '1';
        keyboard.style.visibility = 'visible';
        input.classList.remove('active');
    } else if (iskeyboardclicked) {
        keyboard.style.opacity = '1';
        keyboard.style.visibility = 'visible';
        iskeyboardclicked = false;
    } else {
        keyboard.style.opacity = '0';
        keyboard.style.visibility = 'hidden';
    }
}

body.addEventListener("click", togglekeyboard);


// key down change

let computedstyle = window.getComputedStyle(selector);
let redhover = computedstyle.getPropertyValue('--red-hover');
let redcolor = computedstyle.getPropertyValue('--red-color');

let yellowhover = computedstyle.getPropertyValue('--yellow-hover');
let yellowcolor = computedstyle.getPropertyValue('--yellow-color');

let bluehover = computedstyle.getPropertyValue('--blue-hover');
let bluecolor = computedstyle.getPropertyValue('--blue-color');

let greenhover = computedstyle.getPropertyValue('--green-hover');
let greencolor = computedstyle.getPropertyValue('--green-color');

let purplehover = computedstyle.getPropertyValue('--purple-hover');
let purplecolor = computedstyle.getPropertyValue('--purple-color');

let whitehover = computedstyle.getPropertyValue('--white-hover');
let whitecolor = computedstyle.getPropertyValue('--white-color');

let blackhover = computedstyle.getPropertyValue('--black-hover');
let blackcolor = computedstyle.getPropertyValue('--black-color');

elements.forEach(item => {
    item.addEventListener('mousedown', () => {
        switch (body.className) {
            case "red":
                item.style.backgroundColor = redhover;
                break;
            case "yellow":
                item.style.backgroundColor = yellowhover;
                break;
            case "blue":
                item.style.backgroundColor = bluehover;
                break;           
            case "green":
                item.style.backgroundColor = greenhover;
                break;           
            case "purple":
                item.style.backgroundColor = purplehover;
                break;           
            case "white":
                item.style.backgroundColor = whitehover;
                break;           
            case "black":
                item.style.backgroundColor = blackhover;
                break;
            default:
                item.style.backgroundColor = '#111111';   
        }
    })
});

elements.forEach(item => {
    item.addEventListener('mouseup', () => {
        switch (body.className) {
            case "red":
                item.style.backgroundColor = redcolor;
                break;
            case "yellow":
                item.style.backgroundColor = yellowcolor;
                break;
            case "blue":
                item.style.backgroundColor = bluecolor;
                break;           
            case "green":
                item.style.backgroundColor = greencolor;
                break;           
            case "purple":
                item.style.backgroundColor = purplecolor;
                break;           
            case "white":
                item.style.backgroundColor = whitecolor;
                break;           
            case "black":
                item.style.backgroundColor = blackcolor;
                break;
            default:
                item.style.backgroundColor = '#36454F';   
        }
    })
});

// reset keyboard when change theme

function resetkeyboard() {
    switch (body.className) {
        case "red":
            signal.style.backgroundColor = redhover;
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = redcolor;
                item.style.textTransform = 'lowercase';
            });
            break;
        case "yellow":
            signal.style.backgroundColor = yellowhover;
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = yellowcolor;
                item.style.textTransform = 'lowercase';
            });
            break;
        case "blue":
            signal.style.backgroundColor = bluehover;
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = bluecolor;
                item.style.textTransform = 'lowercase';
            });
            break;           
        case "green":
            signal.style.backgroundColor = greenhover;
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = greencolor;
                item.style.textTransform = 'lowercase';
            });
            break;           
        case "purple":
            signal.style.backgroundColor = purplehover;
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = purplecolor;
                item.style.textTransform = 'lowercase';
            });
            break;           
        case "white":
            signal.style.backgroundColor = whitehover;
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = whitecolor;
                item.style.textTransform = 'lowercase';
            });
            break;           
        case "black":
            signal.style.backgroundColor = blackhover;
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = blackcolor;
                item.style.textTransform = 'lowercase';
            });
            break;
        default:
            signal.style.backgroundColor = '#111111';
            signal.classList.remove('active');
            elements.forEach(item => {
                item.style.backgroundColor = '#36454F';
                item.style.textTransform = 'lowercase';
            });
    }
}

color.addEventListener('change', resetkeyboard);

// caplock turn green and keys uppercase when keypress

function caplockpress() {
    if (!signal.classList.contains('active')) {
        signal.style.backgroundColor = 'lime';
        signal.classList.add('active');
        key_elements.forEach(item => {
            item.style.textTransform = 'uppercase';
        });
    } else {
        signal.style.backgroundColor = 'grey';
        signal.classList.remove('active');
        key_elements.forEach(item => {
            item.style.textTransform = 'lowercase';
        });
    }
}

caplock.onclick = caplockpress;

// function for keys press

let isccaplockclicked = false;

caplock.addEventListener('click', function() {
    if (!isccaplockclicked) {
        isccaplockclicked = true;
    } else {
        isccaplockclicked = false;
    }
});


function keypress(elem) {
    if (!isccaplockclicked) {
       /*  inputvalue.push(elem.innerHTML);
        input.setAttribute('value', inputvalue.join("")); */
        textarea += elem.innerHTML;
        input.innerHTML = textarea;
    } else {
        textarea = textarea + elem.innerHTML.toUpperCase();
        input.innerHTML = textarea;
    }
}

key_elements.forEach(elem => {
    setTimeout(() => {
        elem.addEventListener('click', () => {
            keypress(elem);
        });
    }, 10)
});

space.onclick = function() {
    textarea += ' ';
    input.innerHTML = textarea;
};

backspace.onclick = function() {
    textarea = textarea.slice(0, -1);
    input.innerHTML = textarea;
};

enter.onclick = function() {
    textarea += '\n';
    input.innerHTML = textarea;
};
const getCoor = (event) => {
    const x = event.x;
    const y = event.y;
    console.log('X:', x, 'Y:', y);
    checkClick();
}

const removeWrapperList = (event) => {
    wrapper.removeEventListener('click', getCoor);
};

const wrapper = document.querySelector('.wrapper');
const firstBtn = document.querySelector('.btn');

wrapper.addEventListener('click', getCoor)
firstBtn.addEventListener('click', removeWrapperList)

let counter = 0;


const checkClick = () => {
    counter++
    if (counter === 10) {
        wrapper.removeEventListener('click', getCoor);
    }
}


// TIMER
// setTimeout
setTimeout(() => {
  console.log("Eccomi!");
}, 3000);

const showMe = () => console.log("Eccomi!");

const afterSec = setTimeout(showMe, 3000);

clearTimeout(afterSec);

// setInterval
setInterval(() => {
  console.log("Eccomi!");
}, 3000);

const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const board = document.querySelector('.board');
const floor = document.querySelector('.floor');
const player = document.querySelector('.player');

let backgroundBoard = 0;
let backgroundFloor = 0;

rightBtn.addEventListener('click', () => rightMove())

leftBtn.addEventListener('click', () => leftMove())

upBtn.addEventListener('click', () => upMove())

document.onkeydown = arrowPress;

function arrowPress(event) {
    switch(event.keyCode) {
        case 39:
            rightMove();
            break;
        case 37:
            leftMove();
            break;
        case 38:
            upMove();
            break;
    }
}

const rightMove = () => {
    player.classList.remove('sx');
    board.style.backgroundPositionX = `${backgroundBoard-=1}px`;
    floor.style.backgroundPositionX = `${backgroundFloor-=20}px`;
    player.classList.toggle('move');
    setTimeout(()=> {
        player.classList.toggle('move');
    }, 300)
}

const leftMove = () => {
    player.classList.add('sx');
    board.style.backgroundPositionX = `${backgroundBoard+=1}px`;
    floor.style.backgroundPositionX = `${backgroundFloor+=20}px`;
    player.classList.toggle('move');
    setTimeout(()=> {
        player.classList.toggle('move');
    }, 300)
}

const upMove = () => {
    player.classList.toggle('animate__bounce');
    setTimeout(()=> {
        player.classList.toggle('animate__bounce');
    }, 1000)
}


// CONTROLLER //

const anyButtonPressedChangeListener = {
    listeners: [],
    addListener(cb) {
      this.listeners.push(cb);
    },
    signal(state) {
      for (const cb of this.listeners) {
        cb(state);
      }
    }
  }
  
  let buttonstate = false;
  
  const loop = () => {
    const gamepads = navigator.getGamepads();
    const gamepad = gamepads[0];
  
    if (gamepad) {
      const statenow = gamepad.buttons.some(btn => btn.pressed);
      if (buttonstate !== statenow) {
  
        buttonstate = statenow;
        anyButtonPressedChangeListener.signal(statenow);
      }
    } else {
      console.log("Not connected");
    }
  
    setTimeout(loop, 500);
  }
  
  anyButtonPressedChangeListener.addListener((buttonState) => {
    console.log(`Any button pressed changed to ${buttonState}`);
  });
  
  loop();
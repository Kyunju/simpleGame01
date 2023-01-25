const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const stageWidth = document.body.clientWidth - 100;
const stageHeight = document.body.clientHeight - 100;

canvas.width = stageWidth;
canvas.height = stageHeight;

console.log('가로 : ' + stageWidth);
console.log(stageHeight);

const character = {
  x: 20,
  y: stageHeight / 2,
  width: 100,
  height: 100,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

character.draw();

class Wall {
  constructor() {
    this.x = 700;
    this.y = stageHeight / 2;
    this.width = 100;
    this.height = 100;
    this.speed = 3;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
const walls = [];

function anime() {
  requestAnimationFrame(anime);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 144 === 0) {
    let wall = new Wall();
    walls.push(wall);
    console.log(walls);
  }
  walls.forEach((item) => {
    item.x = item.x - item.speed;
    item.draw();
  });
  character.draw();
}

anime();

// window.addEventListener('resize', () => {
//   canvas.width = document.body.clientWidth - 100;
//   canvas.height = document.body.clientHeight - 100;
//   character.y = canvas.height / 2;
//   console.log(canvas.width);
//   console.log(canvas.height);
//   character.draw();
// });

import { Character } from './character01.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
    this.character = new Character();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 레티나 디스플레이를 위한 사이즈 2배
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.character.draw(this.ctx);
  }
}

window.onload = () => {
  new App();
};

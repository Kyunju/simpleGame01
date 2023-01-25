export class Character {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.width = 200;
    this.height = 200;
  }

  draw(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

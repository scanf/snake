import Phaser from 'phaser-ce';

export class Snake extends Phaser.Graphics {
  readonly id: string;
  // TODO rename movementUnits to cellSize
  private movementUnits: number;
  private color: number;

  constructor(id: string, game: Phaser.Game, x: number, y: number, cellSize: number) {
    super(game, x, y);
    this.id = id;
    this.movementUnits = cellSize;
    this.color = 0xFF0000;
  }

  update() {
    this.clear();
    this.beginFill(this.color, 1);
    this.drawRect(this.position.x, this.position.y, this.movementUnits, this.movementUnits);
  }

  move(direction) {
    switch (direction) {
      case 'right': {
        this.position.x += this.movementUnits;
        break;
      }
      case 'left': {
        this.position.x -= this.movementUnits;
        break;
      }
      case 'up': {
        this.position.y += this.movementUnits;
        break;
      }
      case 'down': {
        this.position.y -= this.movementUnits;
        break;
      }
    }
  }

  run(action) {
    switch (action) {
      case 'attack': {
        // TODO: Attack
        break;
      }
      case 'collect': {
        // TODO: Collect
        break;
      }
      // Move
      default: {
      this.move(action);
      break;
    }
  }
}
}
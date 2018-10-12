import Phaser from 'phaser-ce';

export class Snake extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'snake');

        this.anchor.setTo(0.5);
        this.game.physics.arcade.enableBody(this);
        this.checkWorldBounds = true;
        this.body.collideWorldBounds = true;
    }

    update() {
        this.angle += 1;
    }
}
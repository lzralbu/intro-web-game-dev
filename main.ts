import Phaser from "phaser";

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;

class Example extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.spritesheet("characters", "assets/characters.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
  }

  create() {
    this.anims.create({
      key: "greenHero",
      frames: this.anims.generateFrameNumbers("characters", {
        start: 0,
        end: 1,
      }),
      frameRate: 8,
    });

    this.anims.create({
      key: "blueHero",
      frames: this.anims.generateFrameNumbers("characters", {
        start: 2,
        end: 3,
      }),
      frameRate: 8,
    });

    this.anims.create({
      key: "redHero",
      frames: this.anims.generateFrameNumbers("characters", {
        start: 4,
        end: 5,
      }),
      frameRate: 8,
    });

    this.anims.create({
      key: "flappyEnemy",
      frames: this.anims.generateFrameNumbers("characters", {
        start: 24,
        end: 27,
      }),
      frameRate: 6,
    });

    this.add.sprite(300, 100, "characters").setScale(5).play({
      key: "greenHero",
      repeat: -1,
    });

    this.add.sprite(100, 200, "characters").setScale(-5, 5).play({
      key: "blueHero",
      repeat: -1,
    });

    this.add.sprite(500, 300, "characters").setScale(5).play({
      key: "redHero",
      repeat: -1,
    });

    this.add.sprite(550, 50, "characters").setScale(5).play({
      key: "flappyEnemy",
      repeat: -1,
    });
  }
}

const config = {
  type: Phaser.CANVAS,
  canvas,
  width: canvas.width,
  height: canvas.height,
  pixelArt: true,
  backgroundColor: 0xffffff,
  scene: Example,
};

const game = new Phaser.Game(config);

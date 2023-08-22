import {
  init,
  Sprite,
  GameLoop,
  SpriteSheet,
  setImagePath,
  load,
  imageAssets,
} from "kontra";

init("game-canvas");

setImagePath("assets");
load("characters.png")
  .then(() => {
    let charactersSpriteSheet = SpriteSheet({
      image: imageAssets["characters"],
      frameWidth: 24,
      frameHeight: 24,
      animations: {
        greenHero: {
          frames: "0..1",
          frameRate: 8,
        },
        blueHero: {
          frames: "2..3",
          frameRate: 8,
        },
        redHero: {
          frames: "4..5",
          frameRate: 8,
        },
        flappyEnemy: {
          frames: "24..26",
          frameRate: 6,
        },
      },
    });

    const defaulSpriteProperties = {
      anchor: { x: 0.5, y: 0.5 },
      scaleX: 5,
      scaleY: 5,
      animations: charactersSpriteSheet.animations,
    };

    const characters = [
      Sprite({
        x: 300,
        y: 100,
        ...defaulSpriteProperties,
      }),
      Sprite({
        x: 100,
        y: 200,
        ...defaulSpriteProperties,
        scaleX: -5,
      }),
      Sprite({
        x: 500,
        y: 300,
        ...defaulSpriteProperties,
      }),
      Sprite({
        x: 550,
        y: 50,
        ...defaulSpriteProperties,
      }),
    ];

    characters[0].playAnimation("greenHero");
    characters[1].playAnimation("blueHero");
    characters[2].playAnimation("redHero");
    characters[3].playAnimation("flappyEnemy");

    let loop = GameLoop({
      update: function (dt) {
        characters.forEach((hero) => hero.update());
      },
      render: function () {
        characters.forEach((hero) => hero.render());
      },
    });

    loop.start();
  })
  .catch((error) => {
    console.error(error);
  });

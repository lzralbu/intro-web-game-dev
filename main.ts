import kaboom from "kaboom";

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const k = kaboom({
  width: canvas.width,
  height: canvas.height,
  canvas,
  background: [255, 255, 255],
});

k.loadSpriteAtlas("assets/characters.png", {
  greenHero: {
    x: 0,
    y: 0,
    width: 48,
    height: 24,
    sliceX: 2,
    anims: {
      run: { from: 0, to: 1, loop: true, speed: 8 },
    },
  },
  blueHero: {
    x: 48,
    y: 0,
    width: 48,
    height: 24,
    sliceX: 2,
    anims: {
      run: { from: 0, to: 1, loop: true, speed: 8 },
    },
  },
  redHero: {
    x: 96,
    y: 0,
    width: 48,
    height: 24,
    sliceX: 2,
    anims: {
      run: { from: 0, to: 1, loop: true, speed: 8 },
    },
  },
  flappyEnemy: {
    x: 96 + 48,
    y: 48,
    width: 24 * 3,
    height: 24,
    sliceX: 3,
    anims: {
      run: { from: 0, to: 2, loop: true, speed: 6 },
    },
  },
});

k.add([
  k.sprite("greenHero", {
    anim: "run",
  }),
  k.pos(300, 100),
  k.scale(5),
  k.anchor("center"),
]);
k.add([
  k.sprite("blueHero", {
    anim: "run",
  }),
  k.pos(100, 200),
  k.scale(-5, 5),
  k.anchor("center"),
]);
k.add([
  k.sprite("redHero", {
    anim: "run",
  }),
  k.pos(500, 300),
  k.scale(5),
  k.anchor("center"),
]);
k.add([
  k.sprite("flappyEnemy", {
    anim: "run",
  }),
  k.pos(550, 50),
  k.scale(5),
  k.anchor("center"),
]);

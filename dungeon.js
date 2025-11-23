default function setUp() {
  let map = createDungeon();

}

function shop(money) {

}

function mainLoop(health, map[]) {
  while (health > 0) {
    
  }
  return;
}

 function createDungeon() {
    let rx = [];
    let ry = [];
    let screen = [];
    let tscreen = [];
   
    for (let i = 0; i < (200 * 200) / 2500; i++) {
      rx.push(Math.floor(Math.random() * 200));
      ry.push(Math.floor(Math.random() * 200));
    }
    for (var y = 0; y < 200; y++) {
      for (var x = 0; x < 200; x++) {
        screen[y * 200 + x] = Math.round(
          (Math.floor(Math.random() * 3) + Math.sin(x) - Math.sin(y) + 2) / 6
        );
        for (let i = 0; i < rx.length; i++) {
          let randx = Math.floor(Math.random() * 10 + 10);
          let randy = Math.floor(Math.random() * 10 + 10);
          if (
            Math.round(x / randx) == Math.round(rx[i] / randx) &&
            Math.round(y / randy) == Math.round(ry[i] / randy)
          ) {
            screen[y * 200 + x] = 0;
          }
        }
        tscreen[y * 200 + x] = screen[y * 200 + x];
      }
    }
    for (let i = 0; i < 8; i++) {
      for (var y = 0; y < 200; y++) {
        for (var x = 0; x < 200; x++) {
          if (i < 7) {
            tscreen[y * 200 + x] = Math.round(
              (screen[((y - 1 + 200) % 200) * 200 + x] +
                screen[((y + 1) % 200) * 200 + x] +
                screen[y * 200 + ((x - 1 + 200) % 200)] +
                screen[y * 200 + ((x + 1) % 200)] +
                screen[y * 200 + x]) /
                5
            );
          } else if (
            Math.round(
              (screen[((y + 199) % 200) * 200 + x] +
                screen[((y + 1) % 200) * 200 + x] +
                screen[y * 200 + ((x + 199) % 200)] +
                screen[y * 200 + ((x + 1) % 200)] +
                screen[y * 200 + x]) /
                5
            ) != screen[y * 200 + x]
          ) {
            tscreen[y * 200 + x] = 0;
          }
        }
      }
      for (var y = 0; y < 200; y++) {
        for (var x = 0; x < 200; x++) {
          screen[y * 200 + x] = tscreen[y * 200 + x];
        }
      }
    }
    for (var y = 0; y < 200; y++) {
      for (var x = 0; x < 200; x++) {
        if (Math.random() < 1 / 200 && !screen[y * 200 + x]) {
          screen[y * 200 + x] = 2;
        }
      }
    }
   return screen[];
  }

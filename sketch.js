/* Alastair Deng's personal project creating the Mandlebrot Set using p5.js
 * For information on p5.js: https://p5js.org/
 * For information on the Mandlebrot Set: https://en.wikipedia.org/wiki/Mandelbrot_set
 */

// specific params for a julia set
let ca = 0;
let cb = 0.8;

function setup() {
  createCanvas(640, 640);
  pixelDensity(1);
  loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {

      let a = map(i, 0, width, -2.5, 2.5);
      let b = map(j, 0, height, -2.5, 2.5);

      //comment out these two lines for specific julia set
      ca = a;
      cb = b;

      var count = 0;
      var z = 0;
      while (count < 100) {
        let aa = (a * a) - (b * b);
        var twoAB = 2 * a * b;

        a = aa + ca;
        b = twoAB + cb;

        if (a * a + b * b > 16) {
          break;
        }
        
        count++;
      }

      var bright = map(count, 0, 100, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      if (count === 100) {
        bright = 0;
      }

      let pix = (i + j * width) * 4;
      pixels[pix] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255
    }
  }
  updatePixels();
}

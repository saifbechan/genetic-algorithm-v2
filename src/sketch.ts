import Lemon from './Entities/Lemon';
import P5, { Image } from 'p5';

const sketch = (p5: P5): void => {
  // map that holds the images
  const images: Map<string, Image> = new Map();

  // the lemon where ants are attracted to
  let lemon: Lemon;

  // the draw function gets called every frame forever
  p5.draw = (): void => {
    // clear the canvas
    p5.clear(0, 0, 0, 0);

    // make sure our objects are created before drawing
    if (!lemon) return;

    // draw the lemon
    lemon.draw();
  };

  p5.setup = (): void => {
    // create the canvas
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.style('margin', '0 auto');
    canvas.attribute('role', 'sketch');

    // create the lemon
    lemon = new Lemon(p5, images.get('lemon') as Image);
  };

  p5.preload = (): void => {
    // load the background image
    images.set('back', p5.loadImage('images/back.png'));

    // load the lemon image
    images.set('lemon', p5.loadImage('images/lemon.png'));
  };

  p5.windowResized = (): void => {
    window.location.reload();
  };
};

export default sketch;

import Ant from './Entities/Ant';
import Lemon from './Entities/Lemon';
import P5, { Image } from 'p5';
import Virus from './Entities/Virus';
import evaluate from './Functions/evaluate';
import populate from './Functions/populate';

enum Population {
  // the number of ants per generation
  Size = 50,

  // how long does a generation last
  Lifespan = 500,
}

const sketch = (p5: P5): void => {
  // map that holds the images
  const images: Map<string, Image> = new Map();
  const sprites: Map<string, Image[]> = new Map();

  // the lemon where ants are attracted to
  let lemon: Lemon;

  // our population of ants
  let ants: Ant[];

  // viruses to avoid
  let viruses: Virus[];

  // the current step (frame) we are in
  let step = 0;

  // the draw function gets called every frame forever
  p5.draw = (): void => {
    // clear the canvas
    p5.clear(0, 0, 0, 0);

    // make sure our objects are created before drawing
    if (!lemon || !ants) return;

    // we draw when the step is smaller than the lifespan
    if (step < Population.Lifespan) {
      // draw the ants
      ants.forEach((ant) => {
        // update the position of the ant
        ant.update(lemon, viruses);
        // draw the ant
        ant.draw();
      });

      // draw the lemon
      lemon.draw();

      // draw the viruses
      viruses.forEach((virus) => {
        // draw the virus
        virus.draw();
      });

      // increase the steps
      step += 1;
    } else {
      // create a pool of evaluated ants
      const pool: Ant[] = evaluate(p5, ants);

      // create a new population based on the old one
      ants = populate(
        p5,
        Population.Size,
        Population.Lifespan,
        sprites.get('ants') as Image[],
        pool
      );

      // reset the steps
      step = 0;
    }
  };

  p5.setup = (): void => {
    // create the canvas
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.style('margin', '0 auto');
    canvas.attribute('role', 'sketch');

    const image: Image = images.get('ant') as Image;
    image.loadPixels();

    const sprite: Image[] = [];
    sprite.push(image.get(1, 0, 96, 101));
    sprite.push(image.get(97, 0, 96, 101));
    sprite.push(image.get(193, 0, 96, 101));
    sprite.push(image.get(289, 0, 97, 101));
    sprites.set('ants', sprite);

    // create the lemon
    lemon = new Lemon(p5, images.get('lemon') as Image);

    // create the ants
    ants = populate(p5, Population.Size, Population.Lifespan, sprite, []);

    // create the virus
    viruses = [new Virus(p5, 1), new Virus(p5, 3), new Virus(p5, 5)];
  };

  p5.preload = (): void => {
    // load the background image
    images.set('back', p5.loadImage('images/back.png'));

    // load the lemon image
    images.set('lemon', p5.loadImage('images/lemon.png'));

    // load the ant sprite
    images.set('ant', p5.loadImage('images/ant.png'));
  };

  p5.windowResized = (): void => {
    window.location.reload();
  };
};

export default sketch;

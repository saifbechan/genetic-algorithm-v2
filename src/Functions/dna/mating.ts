import { Vector } from 'p5';
import Ant from '../../Entities/Ant';

const mating = (lifespan: number, [x, y]: Ant[]): Vector[] => {
  const dna: Vector[] = [];

  // get a random midpoint
  const middle = Math.floor(Math.random() * lifespan);

  // create dna based on parent x and parent y
  while (dna.length < lifespan) {
    const index = dna.length;
    if (index < middle) {
      dna.push(x.getDNA(index));
    } else {
      dna.push(y.getDNA(index));
    }
  }

  return dna;
};

export default mating;

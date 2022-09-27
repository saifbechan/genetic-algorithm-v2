import { sampleSize } from 'lodash';
import Ant from '../Entities/Ant';
import P5, { Image } from 'p5';
import mating from './dna/mating';
import random from './dna/random';

const populate = (
  p5: P5,
  population: number,
  lifespan: number,
  sprites: Image[],
  pool: Ant[]
): Ant[] => {
  const ants = [];

  while (ants.length < population) {
    // get two random parents from the pool
    const parents = sampleSize(pool, 2);

    // generate either:
    //   - dna from two parents
    //   - dna created randomly
    const dna =
      parents.length === 2 ? mating(lifespan, parents) : random(p5, lifespan);

    // create a new ant
    const ant = new Ant(p5, dna, sprites);

    // add our ant to the population
    ants.push(ant);
  }

  return ants;
};

export default populate;

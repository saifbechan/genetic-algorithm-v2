import Ant from '../Entities/Ant';
import P5, { Image } from 'p5';
import random from './dna/random';

const populate = (
  p5: P5,
  population: number,
  lifespan: number,
  sprites: Image[]
): Ant[] => {
  const ants = [];

  while (ants.length < population) {
    // dna created randomly
    const dna = random(p5, lifespan);

    // create a new ant
    const ant = new Ant(p5, dna, sprites);

    // add our ant to the population
    ants.push(ant);
  }

  return ants;
};

export default populate;

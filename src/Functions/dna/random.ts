import P5, { Vector } from 'p5';

const random = (p5: P5, lifespan: number): Vector[] => {
  const dna: Vector[] = [];

  // create a random step
  while (dna.length < lifespan) {
    dna.push(p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).setMag(0.1));
  }

  return dna;
};

export default random;

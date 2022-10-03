import Ant from '../Entities/Ant';
import P5 from 'p5';
import calculate from './fitness';

const evaluate = (p5: P5, population: Ant[]): Ant[] => {
  // will hold the fitness score per ant
  const fitnessScores: number[] = [];

  let reachedTargetCount = 0;

  // store the fitness per ant
  population.forEach((ant: Ant, index: number) => {
    fitnessScores[index] = calculate(p5, ant);

    if (ant.hasReachedTarget()) reachedTargetCount += 1;
  });

  // calculate the maximum fitness scores
  const maxFitness: number = Math.max(...fitnessScores);

  // calculate the total fitness score
  const totalFitness: number = fitnessScores.reduce(
    (total: number, score: number) => (total += score)
  );

  // normalize the fitness to an integer between 0 and 100
  const normalizedFitnessScores: number[] = fitnessScores.map((score: number) =>
    Math.floor((score / maxFitness) * 100)
  );

  const pool: Ant[] = [];
  // create a pool with 'parent' ants
  population.forEach((ant: Ant, index: number) => {
    for (let i = 0; i < normalizedFitnessScores[index]; i += 1) {
      pool.push(ant);
    }
  });

  console.table({
    'max-fitness': Math.floor(maxFitness),
    'total-fitness': Math.floor(totalFitness),
    'pool-size': pool.length,
    'reached-target': reachedTargetCount,
  });

  return pool;
};

export default evaluate;

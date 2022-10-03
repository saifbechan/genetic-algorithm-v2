import Ant from '../Entities/Ant';
import P5 from 'p5';

const calculate = (p5: P5, ant: Ant): number => {
  // get the distance to the target
  const distance = ant.getClosestDistance();

  // map -> make a high value low and low value high
  let fitness = p5.map(distance, 0, p5.windowHeight, p5.windowHeight, 0);

  // give a bonus if we reached the target
  if (ant.hasReachedTarget()) {
    fitness *= 10;
  }

  // give a penalty if we crashed
  if (ant.hasCrashed()) {
    fitness /= 100;
  }

  return fitness;
};

export default calculate;

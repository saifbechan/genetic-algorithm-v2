import Lemon from './Lemon';
import P5, { Image, Vector } from 'p5';
import Virus from './Virus';

class Ant {
  private readonly p5: P5;

  private readonly dna: Vector[] = [];

  private readonly sprites: Image[] = [];

  private readonly animation_peed = 0.25;
  private index = 0.0;

  protected readonly position: Vector;
  private readonly acceleration: Vector;
  private readonly velocity: Vector;

  private step = 0;

  private crashed = 0;
  private reached = 0;

  private closestDistance = Infinity;

  constructor(p5: P5, dna: Vector[], sprites: Image[]) {
    this.p5 = p5;

    this.position = this.p5.createVector(
      this.p5.windowWidth / 2,
      this.p5.windowHeight - 20
    );
    this.acceleration = this.p5.createVector();
    this.velocity = this.p5.createVector();

    this.dna = dna;

    this.sprites = sprites;
  }

  draw = () => {
    // we do not draw if we crashed or reached the target
    if (this.crashed || this.reached) return;

    this.p5.push();

    this.p5.translate(this.position.x, this.position.y);
    this.p5.rotate((this.p5.PI / 180) * (180 + this.velocity.heading()));
    this.p5.rotate(this.velocity.heading());
    this.p5.imageMode(this.p5.CENTER);
    this.p5.tint(255, 96);
    this.p5.image(
      this.sprites[Math.floor(this.index) % this.sprites.length],
      0,
      0,
      50,
      50
    );

    this.p5.pop();
  };

  update(target: Lemon, viruses?: Virus[]): void {
    // we do not update if we crashed or reached the target
    if (this.crashed || this.reached) return;

    // get the next move of the ant
    const next = this.dna[this.step];

    // return if there is no next move
    if (!next) return;

    this.acceleration.add(next);
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.limit(3);

    this.index =
      this.index < this.sprites.length ? this.index + this.animation_peed : 0;

    this.step += 1;

    // check if we crashed or touched a virus
    this.setCrashedIfCrashed(viruses);

    // check if we reached the target
    this.setReachedIfReached(target);
  }

  private setReachedIfReached(target: Lemon): void {
    // get the current distance to the target
    const distanceToTarget = this.p5.dist(
      this.position.x,
      this.position.y,
      target.getPosition().x / 2,
      target.getPosition().y
    );

    // register if this is the closest we came to the target
    this.closestDistance = Math.min(distanceToTarget, this.closestDistance);

    // register if we reached the target
    if (distanceToTarget < target.getRadius()) {
      this.reached = this.step;
    }
  }

  private setCrashedIfCrashed(viruses?: Virus[]): void {
    // check left & right of the bounding box
    if (this.position.x < 0 || this.position.x > this.p5.windowWidth) {
      this.crashed = this.step;
      return;
    }

    // check top & bottom of the bounding box
    if (this.position.y < 0 || this.position.y > this.p5.windowHeight) {
      this.crashed = this.step;
      return;
    }

    // if there is no virus we are done
    if (!viruses) return;

    viruses.forEach((virus: Virus) => {
      // get the current distance to the virus
      const distanceToVirus = this.p5.dist(
        this.position.x,
        this.position.y,
        virus.getPosition().x,
        virus.getPosition().y
      );

      // register if we touched the virus
      if (distanceToVirus < virus.getRadius() - 20) {
        this.crashed = this.step;
        return;
      }
    });
  }

  hasCrashed(): boolean {
    return this.crashed > 0;
  }

  hasReachedTarget(): boolean {
    return this.reached > 0;
  }

  getClosestDistance(): number {
    return this.closestDistance;
  }

  getDNA(index: number): Vector {
    return this.dna[index];
  }
}

export default Ant;

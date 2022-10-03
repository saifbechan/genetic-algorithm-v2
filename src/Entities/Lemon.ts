import P5, { Image, Vector } from 'p5';

class Lemon {
  private readonly p5: P5;

  private image: Image;

  private readonly position: Vector;

  private readonly radius: number;

  constructor(p5: P5, image: Image) {
    this.p5 = p5;
    this.position = this.p5.createVector(this.p5.windowWidth, 50);
    this.radius = 50;
    this.image = image;
  }

  getPosition(): Vector {
    return this.position;
  }

  getRadius(): number {
    return this.radius;
  }

  draw = () => {
    this.p5.imageMode(this.p5.CENTER);
    this.p5.image(this.image, this.p5.windowWidth / 2, 50, 105, 91);
    this.p5.tint(255, 175);
  };
}

export default Lemon;

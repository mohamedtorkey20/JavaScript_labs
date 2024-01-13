class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
        let perimeter = 0;
		for (let i = 0; i < this.sides; i++) {
			perimeter += this.sideLength;
		}
      console.log(`The perimeter of ${this.name} is: ${perimeter}`);
    }
  }

  class Square extends Shape {
    constructor(sideLength) {

      super('square', 4, sideLength);
    }
  
    calcArea() {
      const area = this.sideLength * 4;
      console.log(`The area of ${this.name} is: ${area}`);
    }
  }
  
  class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';
  
    static calculate(n = 1) {
      return n * 3;
    }
  }
  
  class SquaredTriple extends Triple {
    static longDescription = 'I square the triple of any number you provide';
  
    static calculate(n) {
      return super.calculate(n) * super.calculate(n);
    }
  }
  
const squareShape = new Shape('Square From Shape', 4, 12);
const squareSquare = new Square(5);
const triangle = new Shape('Triangle', 3, 12);

console.log(squareShape.calcPerimeter());
console.log(squareSquare.calcPerimeter());
console.log(triangle.calcPerimeter());

  console.log(Triple.description); // 'I triple any number you provide'
  console.log(Triple.calculate()); // 3
  console.log(Triple.calculate(6)); // 18
  
  console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
  console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
  console.log(SquaredTriple.longDescription); // undefined
  console.log(SquaredTriple.customName);
  
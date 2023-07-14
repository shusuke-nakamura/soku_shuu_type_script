{
    abstract class Figure {
        constructor(protected width: number, protected heihgt: number) {
        }

        getArea(): number {
            return 0;
        }
    }

    class Triangle extends Figure {
        getArea(): number {
            return this.width * this.heihgt / 2;
        }
    }

    let t = new Triangle(10, 5);
    console.log(t.getArea());
}
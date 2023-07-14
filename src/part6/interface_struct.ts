{
    interface Figure {
        getArea(): number;
    }

    class Triagle {
        constructor(private witdh: number, protected height: number) { }
        getArea(): number {
            return this.witdh * this.height / 2;
        }
    }

    let t: Figure = new Triagle(10, 5);
    console.log(t.getArea());
}
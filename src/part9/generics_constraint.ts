class Hoge { }
class FooBar extends Hoge { }

class MyGenerics1<T extends Hoge> {
    value!: T;
    getValue(): T {
        return this.value;
    }
}

let g1 = new MyGenerics1<FooBar>();
g1.value = new FooBar();
console.log(g1.getValue());
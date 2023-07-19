class MyCollection {
    static addAll<T>(data: T[], ...values: T[]): T[] {
        return data.concat(values);
    }
}

let x = [10, 20, 30];
console.log(MyCollection.addAll(x, 30, 50));

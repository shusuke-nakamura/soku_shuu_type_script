{
    interface Person {
        name: string;
        age: number;
    }

    function greet(p: Person): void {
        console.log(`こんにちは、${p.name}さん!`);
    }

    let p1 = {
        name: 'サクラ',
        age: 2,
        gender: 'female',
    }

    greet(p1);
}
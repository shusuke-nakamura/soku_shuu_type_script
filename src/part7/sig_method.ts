{
    interface Calculate {
        add(x: number, y: number): number;
    }

    let obj: Calculate = {
        add(a: number, b: number): number {
            return a + b
        },
    };
}
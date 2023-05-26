class Monad<T> {
    private value: T | undefined;

    public constructor(value?: T) {
        this.value = value;
    }

    public map<U>(fn: (n: T) => U): Monad<U> {
        if(this.value === undefined) return new Monad<U>(undefined);
        else return new Monad<U>(fn(this.value));
    }

    public flatMap<U>(fn: (n: T) => Monad<U>): Monad<U> {
        if(this.value === undefined) return new Monad<U>(undefined);
        else return new Monad<U>(fn(this.value).value);
    }

    public get(): T|undefined {
        return this.value;
    }
}

function getFirst(array: Array<number>): Monad<number> {
    return new Monad<number>(array[0]);
}

function toString(n: number): string {
    return n.toString();
}

export { Monad, getFirst, toString };
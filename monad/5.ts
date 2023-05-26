class Functor<T> {
    private value: T | undefined;

    public constructor(value?: T) {
        this.value = value;
    }

    public map<U>(fn: (n: T) => U): Functor<U> {
        if(this.value === undefined) return new Functor<U>(undefined);
        else return new Functor<U>(fn(this.value));
    }

    public get(): T|undefined {
        return this.value;
    }
}

function getFirst(array: Array<number>): Functor<number> {
    return new Functor<number>(array[0]);
}

function toString(n: number): string {
    return n.toString();
}

export { Functor, getFirst, toString };
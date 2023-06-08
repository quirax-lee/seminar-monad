class Functor<T> {
    protected value: T | undefined;

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

class Monad<T> extends Functor<T> {
    public flatMap<U>(fn: (n: T) => Monad<U>): Monad<U> {
        if(this.value === undefined) return new Monad<U>(undefined);
        else return new Monad<U>(fn(this.value).value);
    }
}

function getFirst(array: Array<number>): Monad<number> {
    return new Monad<number>(array[0]);
}

function toString(n: number): string {
    return n.toString();
}

export { Monad, getFirst, toString };
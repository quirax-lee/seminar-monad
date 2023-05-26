class WrapperMapper<T> {
    private value: T | undefined;

    public constructor(value?: T) {
        this.value = value;
    }

    public map<U>(fn: (n: T) => U): WrapperMapper<U> {
        if(this.value === undefined) return new WrapperMapper<U>(undefined);
        else return new WrapperMapper<U>(fn(this.value));
    }

    public get(): T|undefined {
        return this.value;
    }
}

function getFirst(array: Array<number>): WrapperMapper<number> {
    return new WrapperMapper<number>(array[0]);
}

function toString(n: number): string {
    return n.toString();
}

export { WrapperMapper, getFirst, toString };
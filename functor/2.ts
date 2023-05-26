function map(value: number|undefined, fn: (n: number) => string): string|undefined {
    if (value === undefined) return value;
    else return fn(value);
}

function getFirst(array: Array<number>): number|undefined {
    return array[0];
}

function toString(n: number): string {
    return n.toString();
}

export { map, getFirst, toString };
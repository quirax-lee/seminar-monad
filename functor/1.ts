function getFirst(array: Array<number>): number|undefined {
    return array[0];
}

function toString(n: number|undefined): string|undefined {
    if (n === undefined) return n;
    else return n.toString();
}

export { getFirst, toString };
let arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let arr2 = new Array<number>();

function getDivisors(n: number): Array<number> {
    console.log('run getDivisors');

    let div = new Array<number>();

    for(let i = 1; i <= n; i++) {
        if(n % i === 0) div.push(i);
    }

    return div;
}

function inflate(n: number): number {
    console.log('run inflate');
    
    return n * 10;
}

console.log('for arr1');
console.log(arr1.flatMap(getDivisors).map(inflate));

console.log('for arr2');
console.log(arr2.flatMap(getDivisors).map(inflate));
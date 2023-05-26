import { map, getFirst, toString } from "./2";

function randInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function run(arr: Array<number>): string|undefined {
    return map(getFirst(arr), toString)
}

describe('For any random array', function() {
    for(let i = 0; i < 5; i++) {
        let arr = new Array<number>();
        let length = randInt(1, 10);
        for(; length > 0; length--) arr.push(randInt(-100, 100));
        it(`${arr[0].toString()}\t <= [${arr.join(',\t')}]`, function() {
            expect(run(arr)).toBe(arr[0].toString());
        });
    }
});

describe('For empty array', function() {
    it('undefined\t <= []', function() {
        expect(run([])).toBe(undefined);
    })
})
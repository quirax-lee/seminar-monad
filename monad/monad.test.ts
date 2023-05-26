import { Monad, getFirst, toString } from "./6";

function randInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toStringMonad(n: number): Monad<string> {
    return new Monad<string>(n.toString());
}

function run(arr: Array<number>): string|undefined {
    return (new Monad(arr)).flatMap(getFirst).map(toString).get()
}

function monadTest(unit, x, m, f, g) {
    describe('isMonad?', function() {
        it('1. unit(x).flatMap(f) = f(x)', function() {
            expect(unit(x).flatMap(f)).toStrictEqual(f(x));
        });
        it('2. m.flatMap(Monad) = m', function() {
            expect(m.flatMap(unit)).toStrictEqual(m);
        });
        it('3. m.flatMap(f).flatMap(g) = m.flatMap(x => f(x).flatMap(g))', function() {
            expect(m.flatMap(f).flatMap(g))
                .toStrictEqual(m.flatMap(function(x) {
                    return f(x).flatMap(g)
                }));
        });
    });
}

describe('For any random array', function() {
    function unit(x) {
        return new Monad(x);
    }

    for(let i = 0; i < 5; i++) {
        let arr = new Array<number>();
        let length = randInt(0, 5);
        for(; length > 0; length--) arr.push(randInt(-100, 100));
        describe(`For array [${arr.join(',\t')}]`, function() {
            it(`run() = ${arr[0]?.toString() || 'undefined'}`, function() {
                expect(run(arr)).toBe(arr[0]?.toString());
            });
            monadTest(unit, arr, unit(arr), getFirst, toStringMonad);
        });
    }
});
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

describe('For native array', function() {
    function unit(x) {
        return [ x ];
    }

    monadTest(unit, 5, [1, 3, 5], (x) => [x + 1], (x) => [ x.toString() ]);
});
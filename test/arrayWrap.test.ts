import { arrayWrap } from '../';

describe('arrayWrap', () => {
    describe('arrayWrap', () => {
        it('wraps an empty array (as a copy)', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const value  = [] as any[];
            const actual = arrayWrap(value);
            expect(actual).toEqual([]);
            expect(actual).not.toBe(value);
        });

        it('wraps a non-empty array (as a copy)', () => {
            const value  = ['a', 'b'];
            const actual = arrayWrap(value);
            expect(actual).toEqual(value);
            expect(actual).not.toBe(value);
        });

        it('wraps multiple arguments', () => {
            const actual = arrayWrap('a', 'b', 'c', 'd');
            expect(actual).toEqual(['a', 'b', 'c', 'd']);
        });

        it('wraps multiple arrays (without copying)', () => {
            const value0 = ['a', 'b'];
            const value1 = ['c', 'd'];
            const actual = arrayWrap(value0, value1);
            expect(actual).toEqual([value0, value1]);
            expect(actual[0]).toBe(value0);
            expect(actual[1]).toBe(value1);
        });

        it('wraps mixed array and non-array arguments', () => {
            const actual = arrayWrap('a', 'b', ['c', 'd']);
            expect(actual).toEqual(['a', 'b', ['c', 'd']]);
        });

        it('wraps null', () => {
            const actual = arrayWrap(null);
            expect(actual).toEqual([]);
        });

        it('wraps undefined', () => {
            const actual = arrayWrap(undefined);
            expect(actual).toEqual([]);
        });
    });
});

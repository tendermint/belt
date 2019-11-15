import './setup';
import { isObject } from '../';

describe('isObject', () => {
    describe('isObject', () => {
        for (const [type, value, expected] of [
            ['object literal', {}, true],
            ['object without prototype', Object.create(null), true],
            ['date', new Date, false],
            ['array', [], false],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            ['function', function () {}, false],
            ['string', '', false],
            ['number', 0, false],
            ['boolean', true, false],
            ['null', null, false],
            ['undefined', undefined, false]
        ]) {
            it(`${ type } ${ expected ? 'is' : "isn't" } an object`, () => {
                const actual = isObject(value);
                expect(actual).toBe(expected);
            });
        }
    });
});

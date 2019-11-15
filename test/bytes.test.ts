import './setup';
import { bytesToString, stringToBytes } from '../';

const knownBytes  = [0];
const knownString = '\u0000';

describe('bytes', () => {
    describe('bytesToString', () => {
        it('converts bytes to string', () => {
            const string = bytesToString(new Uint8Array(knownBytes));
            expect(string).toBe(knownString);
        });
    });

    describe('stringToBytes', () => {
        it('converts string to bytes', () => {
            const bytes = stringToBytes(knownString);
            expect(bytes).toBeBytes(knownBytes);
        });
    });
});

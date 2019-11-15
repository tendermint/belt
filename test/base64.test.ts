import './setup';
import { base64ToBytes, bytesToBase64 } from '../';

const knownBase64 = 'AA==';
const knownBytes  = [0];

describe('base64', () => {
    describe('base64ToBytes', () => {
        it('converts base64 to bytes', () => {
            const bytes = base64ToBytes(knownBase64);
            expect(bytes).toBeBytes(knownBytes);
        });
    });

    describe('bytesToBase64', () => {
        it('converts bytes to base64', () => {
            const base64 = bytesToBase64(new Uint8Array(knownBytes));
            expect(base64).toBe(knownBase64);
        });
    });
});

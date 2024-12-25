import isHex from '../../src/utils/isHex.js';

describe('isHex Function', () => {
    test('Valid HEX color with "#" prefix', () => {
        expect(isHex('#FF5733')).toBe(true);
    });

    test('Valid HEX color without "#" prefix', () => {
        expect(isHex('FF5733')).toBe(true);
    });

    test('Invalid HEX color (too short)', () => {
        expect(isHex('#FF573')).toBe(false);
    });

    test('Invalid HEX color (non-hex characters)', () => {
        expect(isHex('#GG5733')).toBe(false);
    });

    test('Valid short HEX color', () => {
        expect(isHex('#F53')).toBe(true);
    });

    test('Invalid HEX color (empty string)', () => {
        expect(isHex('')).toBe(false);
    });
});

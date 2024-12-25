import getRelativeLuminance from '../../src/utils/getRelativeLuminance.js';

describe('getRelativeLuminance Function', () => {
    test('Calculates relative luminance for RGB values', () => {
        expect(getRelativeLuminance([255, 0, 0])).toBe(0.2126);
        expect(getRelativeLuminance([0, 255, 0])).toBe(0.7152);
        expect(getRelativeLuminance([0, 0, 255])).toBe(0.0722);
        expect(getRelativeLuminance([255, 255, 255])).toBe(1);
        expect(getRelativeLuminance([0, 0, 0])).toBe(0);
    });
});

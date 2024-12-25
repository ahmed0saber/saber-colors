import getContrastRatio from '../../src/utils/getContrastRatio.js';

describe('getContrastRatio Function', () => {
    test('Calculates contrast ratio between two hex colors', () => {
        expect(getContrastRatio('#ff0000', '#00ff00')).toBe(2.91);
        expect(getContrastRatio('#ffffff', '#000000')).toBe(21);
        expect(getContrastRatio('#000000', '#000000')).toBe(1);
        expect(getContrastRatio('#ffffff', '#ffffff')).toBe(1);
        expect(getContrastRatio('#ff0000', '#0000ff')).toBe(2.14);
    });
});

import getRandomRgbColorArray from '../../src/utils/getRandomRgbColorArray.js';
import isRgb from '../../src/utils/isRgb.js';

describe('getRandomRgbColorArray Function', () => {
    test('Validates randomly generated rgb color to be valid', () => {
        const randomColor = getRandomRgbColorArray();
        expect(isRgb(randomColor)).toBe(true);
    });
});

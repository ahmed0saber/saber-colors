import getRandomHexColor from '../../src/utils/getRandomHexColor.js';
import isHex from '../../src/utils/isHex.js';

describe('getRandomHexColor Function', () => {
    test('Validates randomly generated hex color to be valid', () => {
        const randomColor = getRandomHexColor();
        expect(isHex(randomColor)).toBe(true);
    });
});

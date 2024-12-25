import convertRgbArrayToHex from '../../src/utils/convertRgbArrayToHex.js';

describe('convertRgbArrayToHex Function', () => {
    test('Converts RGB array to HEX color', () => {
        expect(convertRgbArrayToHex([255, 87, 51])).toBe('#FF5733');
        expect(convertRgbArrayToHex([0, 0, 0])).toBe('#000000');
        expect(convertRgbArrayToHex([255, 255, 255])).toBe('#FFFFFF');
        expect(convertRgbArrayToHex([200, 200, 200])).toBe('#C8C8C8');
    });
});

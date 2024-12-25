import convertHexToRgbArray from '../../src/utils/convertHexToRgbArray.js';

describe('convertHexToRgbArray Function', () => {
    test('Converts hex color to RGB array', () => {
        expect(convertHexToRgbArray('#ff0000')).toStrictEqual([255, 0, 0]);
        expect(convertHexToRgbArray('#00ff00')).toStrictEqual([0, 255, 0]);
        expect(convertHexToRgbArray('#0000ff')).toStrictEqual([0, 0, 255]);
        expect(convertHexToRgbArray('#ffffff')).toStrictEqual([255, 255, 255]);
        expect(convertHexToRgbArray('#000000')).toStrictEqual([0, 0, 0]);
    });
});

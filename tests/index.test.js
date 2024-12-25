import * as Utils from '../src/index.js';

describe('Functions are correctly imported', () => {
    test('isHex Function', () => {
        expect(Utils.isHex('#FF5733')).toBe(true);
    });

    test('parseColor Function', () => {
        expect(Utils.parseColor('#FF5733')).toEqual([255, 87, 51]);
    });

    test('convertRgbArrayToHex Function', () => {
        expect(Utils.convertRgbArrayToHex([255, 87, 51])).toBe('#FF5733');
    });

    test('convertHexToRgbArray Function', () => {
        expect(Utils.convertHexToRgbArray('#ff0000')).toStrictEqual([255, 0, 0]);
    });

    test('getRelativeLuminance Function', () => {
        expect(Utils.getRelativeLuminance([255, 0, 0])).toBe(0.2126);
    });

    test('getContrastRatio Function', () => {
        expect(Utils.getContrastRatio('#ff0000', '#00ff00')).toBe(2.91);
    });

    test('isAccessibleByColors Function', () => {
        const accessibilityForTwoColors = Utils.isAccessibleByColors('#ff0000', '#00ff00');
        expect(accessibilityForTwoColors.graphicalUserInterface).toBe(false);
    });

    test('isAccessibleByContrastRatio Function', () => {
        const accessibilityForLowContrastRatio = Utils.isAccessibleByContrastRatio(1.5);
        expect(accessibilityForLowContrastRatio.graphicalUserInterface).toBe(false);
    });
});

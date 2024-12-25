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

    test('getAccessibilityStatusByColors Function', () => {
        const accessibilityStatus = Utils.getAccessibilityStatusByColors('#ff0000', '#00ff00');
        expect(accessibilityStatus.graphicalUserInterface).toBe(false);
    });

    test('getAccessibilityStatusByContrastRatio Function', () => {
        const accessibilityStatus = Utils.getAccessibilityStatusByContrastRatio(1.5);
        expect(accessibilityStatus.graphicalUserInterface).toBe(false);
    });

    test('getRandomHexColor Function', () => {
        expect(typeof Utils.getRandomHexColor()).toBe("string");
    });

    test('getRandomRgbColorArray Function', () => {
        expect(typeof Utils.getRandomRgbColorArray()).toBe("object");
    });

    test('isRgb Function', () => {
        expect(Utils.isRgb([200, 100, 200])).toBe(true);
    });
});

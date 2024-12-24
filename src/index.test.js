import {
    isHex,
    parseColor,
    convertRgbArrayToHex,
    convertHexToRgbArray,
    getRelativeLuminance,
    getContrastRatio,
    isAccessibleByColors,
    isAccessibleByContrastRatio
} from './index.js';

describe('Color Utilities Tests', () => {

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

        test('Invalid HEX color (with other characters)', () => {
            expect(isHex('#ZZ5733')).toBe(false);
        });

        test('Valid short HEX color', () => {
            expect(isHex('#F53')).toBe(true);
        });

        test('Invalid HEX color (empty string)', () => {
            expect(isHex('')).toBe(false);
        });
    });

    describe('parseColor Function', () => {
        test('HEX color is converted to RGB array', () => {
            expect(parseColor('#FF5733')).toEqual([255, 87, 51]);
        });

        test('RGB array is returned unchanged', () => {
            expect(parseColor([255, 87, 51])).toEqual([255, 87, 51]);
        });

        test('No conversion for non-HEX input', () => {
            expect(parseColor([0, 0, 0])).toEqual([0, 0, 0]);
        });
    });

    describe('convertRgbArrayToHex Function', () => {
        test('Converts RGB array to HEX', () => {
            expect(convertRgbArrayToHex([255, 87, 51])).toBe('#FF5733');
        });

        test('Handles RGB values as numbers between 0 and 255', () => {
            expect(convertRgbArrayToHex([0, 0, 0])).toBe('#000000');
            expect(convertRgbArrayToHex([255, 255, 255])).toBe('#FFFFFF');
        });

        test('Converts RGB array with lower case letters in HEX', () => {
            expect(convertRgbArrayToHex([200, 200, 200])).toBe('#C8C8C8');
        });

        test('Ensures HEX is uppercase', () => {
            expect(convertRgbArrayToHex([255, 255, 255])).toBe('#FFFFFF');
        });
    });

    test('Converts hex color to RGB', () => {
        expect(convertHexToRgbArray('#ff0000')).toStrictEqual([255, 0, 0]);
        expect(convertHexToRgbArray('#00ff00')).toStrictEqual([0, 255, 0]);
        expect(convertHexToRgbArray('#0000ff')).toStrictEqual([0, 0, 255]);
        expect(convertHexToRgbArray('#ffffff')).toStrictEqual([255, 255, 255]);
        expect(convertHexToRgbArray('#000000')).toStrictEqual([0, 0, 0]);
    });

    test('Calculates relative luminance for RGB values', () => {
        expect(getRelativeLuminance([255, 0, 0])).toBe(0.2126);
        expect(getRelativeLuminance([0, 255, 0])).toBe(0.7152);
        expect(getRelativeLuminance([0, 0, 255])).toBe(0.0722);
        expect(getRelativeLuminance([255, 255, 255])).toBe(1);
        expect(getRelativeLuminance([0, 0, 0])).toBe(0);
    });

    test('Calculates contrast ratio between two hex colors', () => {
        expect(getContrastRatio('#ff0000', '#00ff00')).toBe(2.91);
        expect(getContrastRatio('#ffffff', '#000000')).toBe(21);
        expect(getContrastRatio('#000000', '#000000')).toBe(1);
        expect(getContrastRatio('#ffffff', '#ffffff')).toBe(1);
        expect(getContrastRatio('#ff0000', '#0000ff')).toBe(2.14);
    });

});

describe('Accessibility Tests by Colors', () => {

    test('Checks accessibility by contrast ratio between two colors', () => {
        const accessibility = isAccessibleByColors('#ff0000', '#00ff00');

        expect(accessibility.graphicalUserInterface).toBe(false);
        expect(accessibility.largeText.AA).toBe(false);
        expect(accessibility.largeText.AAA).toBe(false);
        expect(accessibility.normalText.AA).toBe(false);
        expect(accessibility.normalText.AAA).toBe(false);
    });

    test('Checks accessibility for black and white', () => {
        const accessibility = isAccessibleByColors('#000000', '#ffffff');

        expect(accessibility.graphicalUserInterface).toBe(true);
        expect(accessibility.largeText.AA).toBe(true);
        expect(accessibility.largeText.AAA).toBe(true);
        expect(accessibility.normalText.AA).toBe(true);
        expect(accessibility.normalText.AAA).toBe(true);
    });

    test('Checks accessibility for low contrast colors', () => {
        const accessibility = isAccessibleByColors('#808080', '#808080');

        expect(accessibility.graphicalUserInterface).toBe(false);
        expect(accessibility.largeText.AA).toBe(false);
        expect(accessibility.largeText.AAA).toBe(false);
        expect(accessibility.normalText.AA).toBe(false);
        expect(accessibility.normalText.AAA).toBe(false);
    });

    test('Checks accessibility for high contrast colors', () => {
        const accessibility = isAccessibleByColors('#ff0000', '#000000');

        expect(accessibility.graphicalUserInterface).toBe(true);
        expect(accessibility.largeText.AA).toBe(true);
        expect(accessibility.largeText.AAA).toBe(true);
        expect(accessibility.normalText.AA).toBe(true);
        expect(accessibility.normalText.AAA).toBe(false);
    });
});

describe('Accessibility Tests by Contrast Ratio', () => {

    test('Checks accessibility at low contrast ratio', () => {
        const lowContrast = isAccessibleByContrastRatio(1.5);

        expect(lowContrast.graphicalUserInterface).toBe(false);
        expect(lowContrast.largeText.AA).toBe(false);
        expect(lowContrast.largeText.AAA).toBe(false);
        expect(lowContrast.normalText.AA).toBe(false);
        expect(lowContrast.normalText.AAA).toBe(false);
    });

    test('Checks accessibility at medium contrast ratio', () => {
        const mediumContrast = isAccessibleByContrastRatio(3.2);

        expect(mediumContrast.graphicalUserInterface).toBe(true);
        expect(mediumContrast.largeText.AA).toBe(true);
        expect(mediumContrast.largeText.AAA).toBe(false);
        expect(mediumContrast.normalText.AA).toBe(false);
        expect(mediumContrast.normalText.AAA).toBe(false);
    });

    test('Checks accessibility at high contrast ratio', () => {
        const highContrast = isAccessibleByContrastRatio(7.1);

        expect(highContrast.graphicalUserInterface).toBe(true);
        expect(highContrast.largeText.AA).toBe(true);
        expect(highContrast.largeText.AAA).toBe(true);
        expect(highContrast.normalText.AA).toBe(true);
        expect(highContrast.normalText.AAA).toBe(true);
    });
});

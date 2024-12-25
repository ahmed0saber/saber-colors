import isAccessibleByColors from '../../src/utils/isAccessibleByColors.js';

describe('isAccessibleByColors Function', () => {
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

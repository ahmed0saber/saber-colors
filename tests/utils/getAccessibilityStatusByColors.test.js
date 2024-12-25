import getAccessibilityStatusByColors from '../../src/utils/getAccessibilityStatusByColors.js';

describe('getAccessibilityStatusByColors Function', () => {
    test('Checks accessibility by contrast ratio between two colors', () => {
        const accessibilityStatus = getAccessibilityStatusByColors('#ff0000', '#00ff00');

        expect(accessibilityStatus.graphicalUserInterface).toBe(false);
        expect(accessibilityStatus.largeText.AA).toBe(false);
        expect(accessibilityStatus.largeText.AAA).toBe(false);
        expect(accessibilityStatus.normalText.AA).toBe(false);
        expect(accessibilityStatus.normalText.AAA).toBe(false);
    });

    test('Checks accessibility for black and white', () => {
        const accessibilityStatus = getAccessibilityStatusByColors('#000000', '#ffffff');

        expect(accessibilityStatus.graphicalUserInterface).toBe(true);
        expect(accessibilityStatus.largeText.AA).toBe(true);
        expect(accessibilityStatus.largeText.AAA).toBe(true);
        expect(accessibilityStatus.normalText.AA).toBe(true);
        expect(accessibilityStatus.normalText.AAA).toBe(true);
    });

    test('Checks accessibility for low contrast colors', () => {
        const accessibilityStatus = getAccessibilityStatusByColors('#808080', '#808080');

        expect(accessibilityStatus.graphicalUserInterface).toBe(false);
        expect(accessibilityStatus.largeText.AA).toBe(false);
        expect(accessibilityStatus.largeText.AAA).toBe(false);
        expect(accessibilityStatus.normalText.AA).toBe(false);
        expect(accessibilityStatus.normalText.AAA).toBe(false);
    });

    test('Checks accessibility for high contrast colors', () => {
        const accessibilityStatus = getAccessibilityStatusByColors('#ff0000', '#000000');

        expect(accessibilityStatus.graphicalUserInterface).toBe(true);
        expect(accessibilityStatus.largeText.AA).toBe(true);
        expect(accessibilityStatus.largeText.AAA).toBe(true);
        expect(accessibilityStatus.normalText.AA).toBe(true);
        expect(accessibilityStatus.normalText.AAA).toBe(false);
    });
});

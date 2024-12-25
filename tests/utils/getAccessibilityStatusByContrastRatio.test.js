import getAccessibilityStatusByContrastRatio from '../../src/utils/getAccessibilityStatusByContrastRatio.js';

describe('getAccessibilityStatusByContrastRatio Function', () => {
    test('Checks accessibility at low contrast ratio', () => {
        const accessibilityStatus = getAccessibilityStatusByContrastRatio(1.5);

        expect(accessibilityStatus.graphicalUserInterface).toBe(false);
        expect(accessibilityStatus.largeText.AA).toBe(false);
        expect(accessibilityStatus.largeText.AAA).toBe(false);
        expect(accessibilityStatus.normalText.AA).toBe(false);
        expect(accessibilityStatus.normalText.AAA).toBe(false);
    });

    test('Checks accessibility at medium contrast ratio', () => {
        const accessibilityStatus = getAccessibilityStatusByContrastRatio(3.2);

        expect(accessibilityStatus.graphicalUserInterface).toBe(true);
        expect(accessibilityStatus.largeText.AA).toBe(true);
        expect(accessibilityStatus.largeText.AAA).toBe(false);
        expect(accessibilityStatus.normalText.AA).toBe(false);
        expect(accessibilityStatus.normalText.AAA).toBe(false);
    });

    test('Checks accessibility at high contrast ratio', () => {
        const accessibilityStatus = getAccessibilityStatusByContrastRatio(7.1);

        expect(accessibilityStatus.graphicalUserInterface).toBe(true);
        expect(accessibilityStatus.largeText.AA).toBe(true);
        expect(accessibilityStatus.largeText.AAA).toBe(true);
        expect(accessibilityStatus.normalText.AA).toBe(true);
        expect(accessibilityStatus.normalText.AAA).toBe(true);
    });
});

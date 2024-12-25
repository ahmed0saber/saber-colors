import isAccessibleByContrastRatio from '../../src/utils/isAccessibleByContrastRatio.js';

describe('isAccessibleByContrastRatio Function', () => {
    test('Checks accessibility at low contrast ratio', () => {
        const accessibility = isAccessibleByContrastRatio(1.5);

        expect(accessibility.graphicalUserInterface).toBe(false);
        expect(accessibility.largeText.AA).toBe(false);
        expect(accessibility.largeText.AAA).toBe(false);
        expect(accessibility.normalText.AA).toBe(false);
        expect(accessibility.normalText.AAA).toBe(false);
    });

    test('Checks accessibility at medium contrast ratio', () => {
        const accessibility = isAccessibleByContrastRatio(3.2);

        expect(accessibility.graphicalUserInterface).toBe(true);
        expect(accessibility.largeText.AA).toBe(true);
        expect(accessibility.largeText.AAA).toBe(false);
        expect(accessibility.normalText.AA).toBe(false);
        expect(accessibility.normalText.AAA).toBe(false);
    });

    test('Checks accessibility at high contrast ratio', () => {
        const accessibility = isAccessibleByContrastRatio(7.1);

        expect(accessibility.graphicalUserInterface).toBe(true);
        expect(accessibility.largeText.AA).toBe(true);
        expect(accessibility.largeText.AAA).toBe(true);
        expect(accessibility.normalText.AA).toBe(true);
        expect(accessibility.normalText.AAA).toBe(true);
    });
});

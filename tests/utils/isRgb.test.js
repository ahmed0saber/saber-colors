import isRgb from '../../src/utils/isRgb.js';

describe('isRgb Function', () => {
    test('Valid black color with all RGB values equal zero', () => {
        expect(isRgb([0, 0, 0])).toBe(true);
    });

    test('Valid white color with all RGB values equal 255', () => {
        expect(isRgb([255, 255, 255])).toBe(true);
    });

    test('Invalid RGB color (length is not 3)', () => {
        expect(isRgb([255, 255])).toBe(false);
        expect(isRgb([255, 255, 255, 255])).toBe(false);
    });

    test('Invalid RGB color (values are not between 0 and 255)', () => {
        expect(isRgb([255, 255, 256])).toBe(false);
        expect(isRgb([-1, 255, 255])).toBe(false);
    });
});

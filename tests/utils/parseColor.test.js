import parseColor from '../../src/utils/parseColor.js';

describe('parseColor Function', () => {
    test('HEX color is converted to RGB array', () => {
        expect(parseColor('#FF5733')).toEqual([255, 87, 51]);
    });

    test('RGB array is returned unchanged', () => {
        expect(parseColor([255, 87, 51])).toEqual([255, 87, 51]);
        expect(parseColor([0, 0, 0])).toEqual([0, 0, 0]);
    });
});

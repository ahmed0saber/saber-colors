import parseColor from './parseColor.js';

const getRelativeLuminance = (color) => {
    const rgb = parseColor(color);
    const [R, G, B] = rgb.map(c => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });

    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

export default getRelativeLuminance;

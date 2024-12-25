import parseColor from './parseColor.js';
import getRelativeLuminance from './getRelativeLuminance.js';

const getContrastRatio = (color1, color2) => {
    const color1Rgb = parseColor(color1);
    const color2Rgb = parseColor(color2);

    const lum1 = getRelativeLuminance(color1Rgb);
    const lum2 = getRelativeLuminance(color2Rgb);

    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    const contrastRatio = (lighter + 0.05) / (darker + 0.05);

    return Math.floor(contrastRatio * 100) / 100;
};

export default getContrastRatio;

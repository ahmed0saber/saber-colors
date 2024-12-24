const isHex = (color) => /^#?([0-9A-F]{3}){1,2}$/i.test(color);

const parseColor = (color) => {
    return isHex(color) ? convertHexToRgbArray(color) : color;
};

const convertRgbArrayToHex = (rgb) => {
    const [r, g, b] = rgb;
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
};

const convertHexToRgbArray = (hex) => {
    hex = hex.replace(/^#/, '');

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
};

const getRelativeLuminance = (color) => {
    const rgb = parseColor(color);
    const [R, G, B] = rgb.map(c => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });

    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

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

const isAccessibleByColors = (color1, color2) => {
    const contrastRatio = getContrastRatio(color1, color2);
    return isAccessibleByContrastRatio(contrastRatio);
};

const isAccessibleByContrastRatio = (contrastRatio) => ({
    graphicalUserInterface: contrastRatio >= 3,
    largeText: {
        AA: contrastRatio >= 3,
        AAA: contrastRatio >= 4.5,
    },
    normalText: {
        AA: contrastRatio >= 4.5,
        AAA: contrastRatio >= 7,
    }
});

export {
    isHex,
    parseColor,
    convertRgbArrayToHex,
    convertHexToRgbArray,
    getRelativeLuminance,
    getContrastRatio,
    isAccessibleByColors,
    isAccessibleByContrastRatio
}

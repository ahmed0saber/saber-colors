const convertRgbArrayToHex = (rgb) => {
    const [r, g, b] = rgb;
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
};

export default convertRgbArrayToHex;

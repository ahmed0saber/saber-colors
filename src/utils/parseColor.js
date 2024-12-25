import isHex from './isHex.js';
import convertHexToRgbArray from './convertHexToRgbArray.js';

const parseColor = (color) => {
    return isHex(color) ? convertHexToRgbArray(color) : color;
};

export default parseColor;

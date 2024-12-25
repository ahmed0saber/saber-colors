
import getContrastRatio from './getContrastRatio.js';
import isAccessibleByContrastRatio from './isAccessibleByContrastRatio.js';

const isAccessibleByColors = (color1, color2) => {
    const contrastRatio = getContrastRatio(color1, color2);
    return isAccessibleByContrastRatio(contrastRatio);
};

export default isAccessibleByColors;

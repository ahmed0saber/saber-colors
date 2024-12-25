
import getContrastRatio from './getContrastRatio.js';
import getAccessibilityStatusByContrastRatio from './getAccessibilityStatusByContrastRatio.js';

const getAccessibilityStatusByColors = (color1, color2) => {
    const contrastRatio = getContrastRatio(color1, color2);
    return getAccessibilityStatusByContrastRatio(contrastRatio);
};

export default getAccessibilityStatusByColors;

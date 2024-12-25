const getAccessibilityStatusByContrastRatio = (contrastRatio) => ({
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

export default getAccessibilityStatusByContrastRatio;

const isRgb = (rgbArray) => {
    if (rgbArray.length !== 3) {
        return false;
    }

    for (let i = 0; i < rgbArray.length; i++) {
        if (rgbArray[i] < 0 || rgbArray[i] > 255) {
            return false;
        }
    }

    return true;
}

export default isRgb;

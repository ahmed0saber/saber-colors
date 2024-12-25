const getRandomRgbColorArray = () => {
    const randomInt = () => Math.floor(Math.random() * 256);
    const r = randomInt();
    const g = randomInt();
    const b = randomInt();

    return [r, g, b];
};

export default getRandomRgbColorArray;

const getRandomHexColor = () => {
    const randomInt = () => Math.floor(Math.random() * 256);
    const r = randomInt().toString(16).padStart(2, '0');
    const g = randomInt().toString(16).padStart(2, '0');
    const b = randomInt().toString(16).padStart(2, '0');

    return `#${r}${g}${b}`.toUpperCase();
}

export default getRandomHexColor;

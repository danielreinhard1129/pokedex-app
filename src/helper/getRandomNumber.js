export const getRandomNumber = () => {
    const min = 1;
    const max = 1281;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
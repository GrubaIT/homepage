export default (array, property) => {
    return array.reduce((accumulated, current) => [
        ...accumulated,
        current[property],
    ]);
};

export default (array, property) => {
    return array.reduce(
        (accumulated, current) =>
            accumulated.includes(current)
                ? accumulated
                : [...accumulated, current[property]],
        []
    );
};

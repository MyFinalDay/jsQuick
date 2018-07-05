const flatten1 = arr => {
    const flattened = [].concat(...arr);
    return flattened.some(v => Array.isArray(v)) ?
        flatten1(flattened) : flattened;
};

export const flatten1 = arr => {
    const flattened = [].concat(...arr);
    return flattened.some(v => Array.isArray(v)) ?
        flatten1(flattened) : flattened;
};

export const unique = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};

const baseUnique = function (arr, newArr) {
    let num;

    if (-1 === arr.indexOf(num = arr.shift())) newArr.push(num);

    arr.length && baseUnique(arr, newArr);
};

export const unique = arr => {
    let newArr = [];
    baseUnique(arr, newArr);
    return newArr;
};

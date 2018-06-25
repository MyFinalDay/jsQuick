export const isInteger = o => {
    return o === Math.floor(o);
};

export const isNumber = o => {
    return typeof o === "number";
};

/**
 * addNum
 * 小数
 * @param a float
 * @param b float
 * @returns {number}
 */
export const addNum = (a, b) => {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("arguments is not a number!");
    }
    if (isInteger(a) && isInteger(b)) {
        return a + b;
    }
    let base;
    const {
        pow,
        max,
        abs
    } = Math;

    if (isInteger(a) && !isInteger(b)) {
        if (b.toString().includes("e")) {
            base = b.toString().split("-")[1].length;
        }
        base = b.toString().split(".")[1].length;
    } else if (!isInteger(a) && isInteger(b)) {
        if (a.toString().includes("e")) {
            base = a.toString().split("-")[1].length;
        }
        base = a.toString().split(".")[1].length;
    } else {
        let baseA, baseB;
        if (a.toString().includes("e")) {
            baseA = abs(a.toString().split("e")[1]);
        }
        if (b.toString().includes("e")) {
            baseB = abs(b.toString().split("e")[1]);
        }
        if (baseA && !baseB) {
            base = max(baseA, b.toString().split(".")[1].length);
        } else if (!baseA && baseB) {
            base = max(a.toString().split(".")[1].length, baseB);
        } else if (baseA && baseB) {
            base = max(baseA, baseB);
        } else {
            base = max(a.toString().split(".")[1].length, b.toString().split(".")[1].length);
        }
    }

    return (a * pow(10, base) + b * pow(10, base)) / pow(10, base);
};

export const random = (start, end, count = 1) => {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if (count === 1) {
        return Math.floor(Math.random() * (end - start) + start);
    }
    let res = [];

    while (count) {
        res.push(Math.floor(Math.random() * (end - start) + start));
        count--;
    }

    return res;
};

export const inc = n => n + 1;

export const isPositiveInt = n => isInteger(n) && n > 0;

export const isNegativeInt = n => isInteger(n) && n < 0;

export const isEven = num => num % 2 === 0;

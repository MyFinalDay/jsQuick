export const isEmpty = o => {
    for (let k in o) {
        return false;
    }

    return true;
};

export const toArray = (arrLikeObj, start = 0) => {
    let len = arrLikeObj.length - start;
    let ret = [];

    while (len--) {
        ret[len] = arrLikeObj[len + start];
    }

    return ret;
};

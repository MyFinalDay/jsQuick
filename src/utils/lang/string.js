export const isString = o => typeof o === "string";

export const isNumeric = str => isString(str) && !/[^0-9]/g.test(str);

export const isBlank = str => isString(str) && !/[^\s]/g.test(str);

export const isAlpha = str => isString(str) && !/[^a-zA-Z]/g.test(str);

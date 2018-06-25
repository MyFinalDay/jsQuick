export const identity = _ => _;

export const compose = (...args) => {
  switch (args.length) {
    case 0:
      return identity;
    case 1:
      return args[0];
    default:
      return args.reduce((p, n) => (...args) => p(n(...args)));
  }
};

export const add = (m, n) => m + n;

export const fn_call = Function.prototype.call;

export const getZero = fn_call.bind(Number);

export const getSpace = fn_call.bind(String);

export const getEmptyArr = fn_call.bind(Array);

export const getEmptyObj = fn_call.bind(Object);

export const getFalse = fn_call.bind(Boolean);

export const type = fn_call.bind(Object.prototype.toString);

export function* incrementCounter() {
    for (let i = 0; true; i++) {
        let reset = yield i;
        if (reset) {
            i = -1;
        }
    }
}

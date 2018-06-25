import * as string from "./utils/lang/string.js";
import * as fn from "./utils/lang/function.js";
import * as object from "./utils/lang/object.js";
import * as number from "./utils/lang/number.js";

function component() {
  var element = document.createElement("div");

  element.innerHTML = "hello yes!" + (2 + 180);

  console.log(fn.type(component));
  console.log(string.isNumeric("8"));

  return element;
}

const logTest = () => {
  const c = console.log;

  c(string.isNumeric("88"));
  let incCounter = fn.incrementCounter();
  c(incCounter.next());
  c(incCounter.next());
  c(incCounter.next());
  c(incCounter.next(true));
  c(incCounter.next());

  c(object.isEmpty({}));
  c(number.isNegativeInt(-5));
};

logTest();

document.body.appendChild(component());

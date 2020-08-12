const callFunctionsInSequence = (...fns) => (...args) =>
  fns.forEach((fn) => fn && fn(...args));

export default callFunctionsInSequence;

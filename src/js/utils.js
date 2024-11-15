const markActiveElement = (elems, elem) => {
  elems.forEach((l) => l.classList.remove("active"));
  elem.parentElement.classList.add("active");
};

const getCurrProgress = (state) =>
  (Object.keys(state.answers).length / state.questions.length) * 100;

const fillInScale = (scale, ans, num) => scale[ans].push(num);

const toggler = (el, cls) => el.classList.toggle(cls);

const convertToTPoints = (X, S, M) => (50 + (10 * (X - M)) / S).toFixed(2);

export {
  markActiveElement,
  getCurrProgress,
  fillInScale,
  toggler,
  convertToTPoints,
};

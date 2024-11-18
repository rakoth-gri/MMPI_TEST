// типы
import { T_State } from "./state";
import { T_SCALES_VAL } from "../types/types";

const markActiveElement = (elems: HTMLElement[], elem: HTMLElement) => {
  elems.forEach((l) => l.classList.remove("active"));
  (elem.parentElement as HTMLElement).classList.add("active");
};

const getCurrProgress = (state: T_State) =>
  (Object.keys(state.answers).length / state.questions.length) * 100;

const fillInScale = (scale: T_SCALES_VAL, ans: "yes" | "no", num: number) =>
  scale[ans].push(num);

const toggler = (el: HTMLElement, cls: string) => el.classList.toggle(cls);

const convertToTPoints = (X: number, S: number, M: number) =>
  +(50 + (10 * (X - M)) / S).toFixed(2);

const getInitialFormData = <T extends { name: string }>(l: T[]) =>
  l.slice(0, -1).reduce((acc, { name }) => ({ ...acc, [name]: "" }), {});

export {
  markActiveElement,
  getCurrProgress,
  fillInScale,
  toggler,
  convertToTPoints,
  getInitialFormData,
};
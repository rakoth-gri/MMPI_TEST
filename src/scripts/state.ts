import { questions, clientFormElems } from "./data";
import { addRawPointsToScales } from "./addRawPointsToScales";
import { drawResultTable } from "./drawResultTable";
import { drawResultChart } from "./drawResultChart";
import { drawAlertWindow } from "./drawAlertWindow";
import { toggler, convertToTPoints } from "./utils";
import { MMPI_INDEXIS } from "./mmpi_indexes";
// класс
import ClientForm from "./ClientForm";
// типы
import { T_SCALES_NAMES, T_SCALES_OBJ } from "../types/types";

const state = {
  // ! DOM_ELEMENTS -------------------------------------------
  $progress: document.querySelector(`.progress-bar`) as HTMLProgressElement,
  $progressValue: document.querySelector(
    `.progress-value`
  ) as HTMLOutputElement,
  $spinner: document.querySelector(`.spinner`),
  // кнопки действий -------
  $prevBtn: document.querySelector(`#prev`) as HTMLButtonElement,
  $nextBtn: document.querySelector(`#next`) as HTMLButtonElement,
  $resetBtn: document.querySelector(".resetBtn") as HTMLButtonElement,
  $tableBtn: document.querySelector(".tableBtn") as HTMLButtonElement,
  $chartBtn: document.querySelector(".chartBtn") as HTMLButtonElement,
  $finishBtn: document.querySelector(`.finishBtn`) as HTMLButtonElement,
  $clientBtn: document.querySelector(`.clientBtn`) as HTMLButtonElement,
  // селекты ---------------
  $sex: document.querySelector(`.form-select.sex`) as HTMLSelectElement,
  $chartType: document.querySelector(
    `.form-select.chartType`
  ) as HTMLSelectElement,
  // модальные окна
  $alert: document.querySelector(`.alert`) as HTMLDivElement,
  $modal: document.querySelector(`.modal`) as HTMLDivElement,
  // ! PROPERTIES -------------------------------------------------
  questions,
  sex: "",
  chartType: "",
  limit: 1,
  page: 1,
  subscribers: [] as Array<Function>,
  client: {},
  answers: {} as Record<string, string>,
  scales: [
    "L",
    "F",
    "K",
    "S0",
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
  ].reduce(
    (a, s) => ({ ...a, [s]: { yes: [], no: [], X: 0, T: 0 } }),
    {}
  ) as T_SCALES_OBJ,
  scaleWithRawPoints: {},
  // ! METHODS ---------------------------------------------------------
  addAnswers({ value, name }: { value: string; name: string }) {
    if (!this.sex) {
      alert("Выберите свой пол");
      document
        .querySelectorAll(".form-check-input")
        .forEach((i) => ((i as HTMLInputElement).checked = false));
      return false;
    }
    this.answers[name] = value;
    console.log(this.answers);
    return true;
  },
  changeCurrPage(target: HTMLElement) {
    switch (true) {
      case !!target.closest("#next"):
        if (this.answers[this.page]) this.page++;
        else {
          drawAlertWindow(this.$modal);
          return toggler(this.$modal, "visible");
        }
        break;
      case !!target.closest("#prev"):
        this.page--;
        break;
      default:
        return false;
    }
    this.subscribers.forEach((cb) =>
      cb(this.getPaginatedData(this.questions, this.limit, this.page))
    );
    this.$progressValue.textContent = `${this.page} / ${this.questions.length}`;
    // проверка граничных условий ------
    this.$prevBtn.disabled = this.page > 1 ? false : true;
    this.$nextBtn.disabled = this.page >= this.questions.length ? true : false;
  },
  getPaginatedData: <T>(data: T[], limit: number, page: number): T[] => {
    const sliced = limit * (page - 1);
    return data.slice(sliced, sliced + limit);
  },
  getTotalPagesCount() {
    return Math.ceil(this.questions.length / this.limit);
  },
  reset() {
    this.$progress.value = 0;
    this.page = 1;
    this.$prevBtn.disabled = true;
    this.$nextBtn.disabled = false;
    for (const key in this.scales) {
      this.scales[key as T_SCALES_NAMES] = {
        yes: [],
        no: [],
        X: 0,
        T: 0,
      };
    }
    this.answers = {};
    this.sex = "";
    this.client = {};
    this.$finishBtn.classList.remove("visible");
    [this.$finishBtn, this.$clientBtn].forEach((btn) => (btn.disabled = false));
    [this.$tableBtn, this.$chartBtn].forEach((btn) => (btn.disabled = true));
    [this.$sex, this.$chartType].forEach((select) => (select.value = ""));
    this.showStartProgress();
    this.subscribers.forEach((cb: Function) =>
      cb(this.getPaginatedData(this.questions, this.limit, this.page))
    );
    new ClientForm({
      container: this.$modal,
      list: clientFormElems,
      state: this,
    });
    console.log(this);
  },
  calcRawPoints() {
    addRawPointsToScales(this.answers, this.scales, this.sex);
    this.correctRawPoints();
  },
  correctRawPoints() {
    (Object.keys(this.scales) as T_SCALES_NAMES[]).map((scale) => {
      const { yes, no } = this.scales[scale];
      this.scales[scale].X = yes.length + no.length;
    });

    const X_K = this.scales.K.X;

    this.scales.S1.X += X_K * 0.5;
    this.scales.S4.X += X_K * 0.4;
    this.scales.S7.X += X_K;
    this.scales.S8.X += X_K;
    this.scales.S9.X += X_K * 0.2;

    this.calcTPoints();
  },
  calcTPoints() {
    (Object.keys(this.scales) as T_SCALES_NAMES[]).forEach((scale) => {
      const X = this.scales[scale].X;
      const S = MMPI_INDEXIS[scale][this.sex as "woman" | "man"].S;
      const M = MMPI_INDEXIS[scale][this.sex as "woman" | "man"].M;
      this.scales[scale].T = convertToTPoints(X, S, M);
    });

    console.log(this.scales);
  },
  showStartProgress() {
    this.$progressValue.textContent = `${this.page} / ${this.questions.length}`;
  },
  // ! LISTENERS -------------------------------------------
  addListenerToResetBtn() {
    this.$resetBtn.onclick = () => this.reset();
    return this;
  },
  addListenerToSexSelect() {
    this.$sex.onchange = () => {
      this.sex = this.$sex.value;
    };
    return this;
  },
  addListenerToChartTypeSelect() {
    this.$chartType.onchange = () => {
      this.chartType = this.$chartType.value;
    };
    return this;
  },
  addListenerToTableBtn() {
    this.$tableBtn.onclick = () => {
      drawResultTable(this.$modal, this.scales, this.sex, this.client);
      toggler(this.$modal, "visible");
    };
    return this;
  },
  addListenerToChartBtn() {
    this.$chartBtn.onclick = () => {
      drawResultChart(this.$modal, this.scales, this.chartType);
      toggler(this.$modal, "visible");
    };
    return this;
  },
  addListenerToclientBtn() {
    this.$clientBtn.onclick = () => {
      new ClientForm({
        container: this.$modal,
        list: clientFormElems,
        state: this,
      });
      toggler(this.$modal, "visible");
    };
    return this;
  },
  addListenerToModal() {
    (this.$modal as HTMLElement).onclick = () => {
      toggler(this.$modal, "visible");
    };
  },
  // !SUBSCRIBER --------------------------------------------------------------
  observer(cb: (i: any[]) => void) {
    this.subscribers.push(cb);
  },
};

// Показываем начальный прогресс
state.showStartProgress();

// ! Обработчики событий на функциональных DOM-элементах -----
state
  .addListenerToResetBtn()
  .addListenerToTableBtn()
  .addListenerToChartBtn()
  .addListenerToclientBtn()
  .addListenerToSexSelect()
  .addListenerToChartTypeSelect()
  .addListenerToModal();

// рендерим форму в модальное окно с динамическим контентом при первом запуске:
new ClientForm({ container: state.$modal, list: clientFormElems, state });

export type T_STATE = typeof state;

export { state };

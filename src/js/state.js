import { questions, clientFormElems } from "./data.js";
import { addRawPointsToScales } from "./addRawPointsToScales.js";
import { drawResultTable } from "./drawResultTable.js";
import { drawResultChart } from "./drawResultChart.js";
import { drawAlertWindow } from "./drawAlertWindow.js";
import { toggler, convertToTPoints } from "./utils.js";
import { MMPI_INDEXIS } from "./mmpi_indexes.js";
// класс
import ClientForm from "./ClientForm.js";

const state = {
  // ! DOM_ELEMENTS -------------------------------------------
  $progress: document.querySelector(`.progress-bar`),
  $progressValue: document.querySelector(`.progress-value`),
  $spinner: document.querySelector(`.spinner`),
  // кнопки действий -------
  $prevBtn: document.querySelector(`#prev`),
  $nextBtn: document.querySelector(`#next`),
  $resetBtn: document.querySelector(".resetBtn"),
  $tableBtn: document.querySelector(".tableBtn"),
  $chartBtn: document.querySelector(".chartBtn"),
  $finishBtn: document.querySelector(`.finishBtn`),
  $clientBtn: document.querySelector(`.clientBtn`),
  // селекты ---------------
  $sex: document.querySelector(`.form-select.sex`),
  $chartType: document.querySelector(`.form-select.chartType`),
  // модальные окна
  $alert: document.querySelector(`.alert`),
  $modal: document.querySelector(`.modal`),
  // ! PROPERTIES -------------------------------------------------
  questions,
  sex: null,
  chartType: "",
  limit: 1,
  page: 1,
  subscribers: [],
  client: null,
  answers: {},
  scales: {
    L: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    F: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    K: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S0: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S1: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S2: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S3: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S4: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S5: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S6: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S7: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S8: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
    S9: {
      yes: [],
      no: [],
      X: null,
      T: null,
    },
  },
  scaleWithRawPoints: {},
  // ! METHODS ---------------------------------------------------------
  addAnswers({ value, name }) {
    if (!this.sex) {
      alert("Выберите свой пол");
      document
        .querySelectorAll(".form-check-input")
        .forEach((i) => (i.checked = false));
      return false;
    }
    Object.assign(this.answers, { [name]: value });
    console.log(this.answers);
    return true;
  },
  changeCurrPage(target) {
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
  getPaginatedData: (data, limit, page) => {
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
      this.scales[key] = {
        yes: [],
        no: [],
        X: null,
        T: null,
      };
    }
    this.answers = {};
    this.sex = null;
    this.client = null;
    this.$finishBtn.classList.remove("visible");
    [this.$finishBtn, this.$clientBtn].forEach((btn) => (btn.disabled = false));
    [this.$tableBtn, this.$chartBtn].forEach((btn) => (btn.disabled = true));
    [this.$sex, this.$chartType].forEach((select) => (select.value = ""));
    this.showStartProgress();
    this.subscribers.forEach((cb) =>
      cb(this.getPaginatedData(this.questions, this.limit, this.page))
    );
    new ClientForm({ el: this.$modal, list: clientFormElems, state: this });
    console.log(this);
  },
  calcRawPoints() {
    addRawPointsToScales(this.answers, this.scales, this.sex);
    this.correctRawPoints();
  },
  correctRawPoints() {
    Object.keys(this.scales).map((scale) => {
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
    for (const scale in this.scales) {
      const X = this.scales[scale].X;
      const S = MMPI_INDEXIS[scale][this.sex].S;
      const M = MMPI_INDEXIS[scale][this.sex].M;
      this.scales[scale].T = convertToTPoints(X, S, M);
    }
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
      new ClientForm({ el: this.$modal, list: clientFormElems, state: this });
      toggler(this.$modal, "visible");
    };
    return this;
  },
  addListenerToModal() {
    this.$modal.onclick = () => {
      toggler(this.$modal, "visible");
    };
  },
  // !SUBSCRIBER --------------------------------------------------------------
  observer(cb) {
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
new ClientForm({ el: state.$modal, list: clientFormElems, state });

export { state };

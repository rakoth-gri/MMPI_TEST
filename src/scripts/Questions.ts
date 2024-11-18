import { markActiveElement, getCurrProgress, toggler } from "./utils.js";
// types
import { T_State } from "./state.js";

class Questions {
  $container: HTMLDivElement;
  state: T_State;
  $labels: null | NodeListOf<HTMLLabelElement>;

  constructor({ sel, state }: { sel: string; state: T_State }) {
    this.$container = document.querySelector(`.${sel}`) as HTMLDivElement;
    this.$labels = null;
    this.state = state;
    this.builder(this.state);
  }

  builder(state: T_State) {
    state.observer(this.render.bind(this));
    this.render(
      state.getPaginatedData(state.questions, state.limit, state.page)
    );
    this.addEventListenerToContainer();
    this.addEventListenerToFinish();
  }

  render<T extends { id: string; q: string }>(data: T[]) {
    const html = data
      .map(
        ({ q, id }) => `
        <article class="question p-3">
            <p class="h4 mb-4"> <span class='header-4'> ${id}. </span> ${q} </p>
            <div class="form-check d-flex justify-content-start mb-2 rounded-end">                
                <label class="form-check-label ${
                  this.state.answers[id] === "yes" ? "active" : ""
                }">
                    <input
                    class="form-check-input"
                    type="radio"
                    name="${id}"
                    id="${id}"
                    ${this.state.answers[id] === "yes" ? "checked" : ""}
                    value="yes"              
                    />
                  ДА
                </label>
            </div>
            <hr/>
            <div class="form-check d-flex justify-content-start mb-2 rounded-end">                
                <label class="form-check-label ${
                  this.state.answers[id] === "no" ? "active" : ""
                }">
                
                  <input
                    class="form-check-input"
                    type="radio"
                    name="${id}"
                    id="${id}"
                    ${this.state.answers[id] === "no" ? "checked" : ""}
                    value="no"
                  />
                  НЕТ
                </label>
            </div>
        </article>
        `
      )
      .join("");

    this.$container.innerHTML = html;
    this.$labels = document.querySelectorAll(".form-check-label");

    if (this.state.page === this.state.questions.length) {
      this.state.$finishBtn.classList.add("visible");
    }
  }

  changeHandler = (e: Event) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!e.target.classList.contains("form-check-input")) return;

    const { name, value } = e.target;

    if (this.state.addAnswers({ name, value })) {
      markActiveElement(this.$labels as NodeListOf<HTMLLabelElement>, e.target);
      this.state.$progress.value = getCurrProgress(this.state);
    }
  };

  addEventListenerToContainer() {
    this.$container.addEventListener("change", this.changeHandler);
  }

  finishHandler = (e: MouseEvent) => {
    if (!this.state.questions.every(({ id }) => this.state.answers[id])) {
      alert("Вы ответили не на все вопросы!!");
      return;
    }
    this.state.calcRawPoints();
    [this.state.$finishBtn, this.state.$clientBtn].forEach(
      (btn) => (btn.disabled = true)
    );
    [this.state.$alert, this.state.$spinner].forEach((el) =>
      toggler(el as HTMLElement, "visible")
    );

    setTimeout(() => {
      [this.state.$alert, this.state.$spinner].forEach((el) =>
        toggler(el as HTMLElement, "visible")
      );
      [this.state.$tableBtn, this.state.$chartBtn].forEach(
        (btn) => (btn.disabled = false)
      );
    }, 1400);
  };

  addEventListenerToFinish() {
    this.state.$finishBtn.addEventListener("click", this.finishHandler);
  }
}

export default Questions;
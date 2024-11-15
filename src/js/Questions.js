import { markActiveElement, getCurrProgress, toggler } from "./utils.js";

class Questions {
  constructor({ sel, state }) {
    this.$container = document.querySelector(`.${sel}`);
    this.$labels = null;
    this.state = state;
    this.builder(this.state);
  }

  builder(state) {
    state.observer(this.render.bind(this));
    this.render(
      state.getPaginatedData(state.questions, state.limit, state.page)
    );
    this.addEventListenerToContainer();
    this.addEventListenerToFinish();
  }

  render(data) {
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

  changeHandler = (e) => {
    if (!e.target.classList.contains("form-check-input")) return;

    const { name, value } = e.target;

    if (this.state.addAnswers({ name, value })) {
      markActiveElement(this.$labels, e.target);
      this.state.$progress.value = getCurrProgress(this.state);
    }
  };

  addEventListenerToContainer() {
    this.$container.addEventListener("change", this.changeHandler);
  }

  finishHandler = (e) => {
    if (!this.state.questions.every(({ id }) => this.state.answers[id])) {
      alert("Вы ответили не на все вопросы!!");
      return;
    }
    this.state.calcRawPoints();
    this.state.$finishBtn.disabled = true;
    [this.state.$alert, this.state.$spinner].forEach((el) =>
      toggler(el, "visible")
    );

    setTimeout(() => {
      [this.state.$alert, this.state.$spinner].forEach((el) =>
        toggler(el, "visible")
      );
      [this.state.$tableBtn, this.state.$chartBtn].forEach(
        (el) => (el.disabled = false)
      );
    }, 1400);
  };

  addEventListenerToFinish() {
    this.state.$finishBtn.addEventListener("click", this.finishHandler);
  }
}

export default Questions;

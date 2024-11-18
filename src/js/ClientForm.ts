import { toggler, getInitialFormData } from "./utils.js";

class ClientForm {  

  constructor({ state, el, list }) {
    if (ClientForm.invokesCount) {
      return false;
    }
    this.$container = el;
    this.$form = null;
    this.$formBody = null;
    this.formData = getInitialFormData(list);
    this.list = list;
    this.state = state;    
    this.builder(this.$container, this.list);
  }

  builder(container, list) {   
    this.render(container, list);
    this.$form.onclick = (e) => e.stopPropagation();
    this.addChangeListenerToFormBody();
    this.addSubmitListenerToForm();
  }

  render(container, list) {
    container.innerHTML = `
        <form action="" class="clientForm">
            <div class="clientForm-body">
                ${list
                  .map(
                    ({ type, placeholder, name, ariaLabel, label }) => `
                    <div class="input-group mb-3 position-relative">
                    <span class="input-group-text bg-success" id="basic-addon1" style='${
                      type === "submit" ? "display:none;" : "display:flex;"
                    }'>${label}</span>
                    <input
                          type="${type}"
                          class="clientForm-input"
                          placeholder="${placeholder}"
                          aria-label="${ariaLabel}"
                          aria-describedby="basic-addon1"
                          name="${name}"
                        />                   
                    </div>
                       
                    `
                  )
                  .join("")}                  
            </div>
    </form>
        `;

    this.$form = this.$container.querySelector(".clientForm");
    this.$formBody = this.$container.querySelector(".clientForm-body");
  }

  changeHandler = (e) => {
    if (!e.target.matches(".clientForm-input")) return;
    this.formData[e.target.name] = e.target.value;
  };

  addChangeListenerToFormBody() {
    this.$formBody.addEventListener("change", this.changeHandler);
  }

  submitHandler = (e) => {
    e.preventDefault();

    if (!Object.values(this.formData).every((v) => v)) {
      alert("Заполните поля формы!");
      return;
    }
    this.state.client = this.formData;
    [this.state.$alert].forEach((el) => toggler(el, "visible"));
    setTimeout(() => {
      [this.state.$alert].forEach((el) => toggler(el, "visible"));
      this.$form.reset();
      this.formData = getInitialFormData(this.list);
      console.log(this.state.client);
    }, 1400);
  };

  addSubmitListenerToForm() {
    this.$form.addEventListener("submit", this.submitHandler);
  }
}

export default ClientForm;

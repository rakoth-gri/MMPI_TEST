import { toggler, getInitialFormData } from "./utils.js";
// типы
import { T_State } from "./state";
import { T_CLIENT_FORM_ELEM, I_Client } from "../types/types";

class ClientForm {
  $container: HTMLDivElement;
  $form: null | HTMLFormElement;
  list: T_CLIENT_FORM_ELEM[];
  state: T_State;
  formData: Partial<I_Client>;
  $formBody: null | HTMLDivElement;

  constructor({
    state,
    container,
    list,
  }: {
    state: T_State;
    container: HTMLDivElement;
    list: T_CLIENT_FORM_ELEM[];
  }) {
    this.$container = container;
    this.$form = null;
    this.$formBody = null;
    this.formData = getInitialFormData<T_CLIENT_FORM_ELEM>(list);
    this.list = list;
    this.state = state;
    this.builder(this.$container, this.list);
  }

  builder(container: HTMLDivElement, list: T_CLIENT_FORM_ELEM[]) {
    this.render(container, list);
    (this.$form as HTMLFormElement).onclick = (e) => e.stopPropagation();
    this.addChangeListenerToFormBody();
    this.addSubmitListenerToForm();
  }

  render(container: HTMLDivElement, list: T_CLIENT_FORM_ELEM[]) {
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

  changeHandler = (e: Event) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!e.target.matches(".clientForm-input")) return;
    this.formData[e.target.name as keyof I_Client] = e.target.value;
  };

  addChangeListenerToFormBody() {
    (this.$formBody as HTMLDivElement).addEventListener(
      "change",
      this.changeHandler
    );
  }

  submitHandler = (e: SubmitEvent) => {
    e.preventDefault();

    // @ts-ignore
    if (!Object.values(this.formData).every((v) => v)) {
      alert("Заполните поля формы!");
      return;
    }
    this.state.client = this.formData;
    [this.state.$alert].forEach((el) => toggler(el, "visible"));
    setTimeout(() => {
      [this.state.$alert].forEach((el) => toggler(el, "visible"));
      (this.$form as HTMLFormElement).reset();
      this.formData = getInitialFormData<T_CLIENT_FORM_ELEM>(this.list);
      console.log(this.state.client);
    }, 1400);
  };

  addSubmitListenerToForm() {
    (this.$form as HTMLFormElement).addEventListener(
      "submit",
      this.submitHandler
    );
  }
}

export default ClientForm;

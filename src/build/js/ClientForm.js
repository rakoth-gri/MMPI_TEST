import { toggler, getInitialFormData } from "./utils.js";
var ClientForm = (function () {
    function ClientForm(_a) {
        var state = _a.state, container = _a.container, list = _a.list;
        var _this = this;
        this.changeHandler = function (e) {
            if (!(e.target instanceof HTMLInputElement))
                return;
            if (!e.target.matches(".clientForm-input"))
                return;
            _this.formData[e.target.name] = e.target.value;
        };
        this.submitHandler = function (e) {
            e.preventDefault();
            if (!Object.values(_this.formData).every(function (v) { return v; })) {
                alert("Заполните поля формы!");
                return;
            }
            _this.state.client = _this.formData;
            [_this.state.$alert].forEach(function (el) { return toggler(el, "visible"); });
            setTimeout(function () {
                [_this.state.$alert].forEach(function (el) { return toggler(el, "visible"); });
                _this.$form.reset();
                _this.formData = getInitialFormData(_this.list);
                console.log(_this.state.client);
            }, 1400);
        };
        this.$container = container;
        this.$form = null;
        this.$formBody = null;
        this.formData = getInitialFormData(list);
        this.list = list;
        this.state = state;
        this.builder(this.$container, this.list);
    }
    ClientForm.prototype.builder = function (container, list) {
        this.render(container, list);
        this.$form.onclick = function (e) { return e.stopPropagation(); };
        this.addChangeListenerToFormBody();
        this.addSubmitListenerToForm();
    };
    ClientForm.prototype.render = function (container, list) {
        container.innerHTML = "\n        <form action=\"\" class=\"clientForm\">\n            <div class=\"clientForm-body\">\n                ".concat(list
            .map(function (_a) {
            var type = _a.type, placeholder = _a.placeholder, name = _a.name, ariaLabel = _a.ariaLabel, label = _a.label;
            return "\n                    <div class=\"input-group mb-3 position-relative\">\n                    <span class=\"input-group-text bg-success\" id=\"basic-addon1\" style='".concat(type === "submit" ? "display:none;" : "display:flex;", "'>").concat(label, "</span>\n                    <input\n                          type=\"").concat(type, "\"\n                          class=\"clientForm-input\"\n                          placeholder=\"").concat(placeholder, "\"\n                          aria-label=\"").concat(ariaLabel, "\"\n                          aria-describedby=\"basic-addon1\"\n                          name=\"").concat(name, "\"\n                        />                   \n                    </div>\n                       \n                    ");
        })
            .join(""), "                  \n            </div>\n    </form>\n        ");
        this.$form = this.$container.querySelector(".clientForm");
        this.$formBody = this.$container.querySelector(".clientForm-body");
    };
    ClientForm.prototype.addChangeListenerToFormBody = function () {
        this.$formBody.addEventListener("change", this.changeHandler);
    };
    ClientForm.prototype.addSubmitListenerToForm = function () {
        this.$form.addEventListener("submit", this.submitHandler);
    };
    return ClientForm;
}());
export default ClientForm;

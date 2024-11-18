import { markActiveElement, getCurrProgress, toggler } from "./utils.js";
var Questions = (function () {
    function Questions(_a) {
        var sel = _a.sel, state = _a.state;
        var _this = this;
        this.changeHandler = function (e) {
            if (!(e.target instanceof HTMLInputElement))
                return;
            if (!e.target.classList.contains("form-check-input"))
                return;
            var _a = e.target, name = _a.name, value = _a.value;
            if (_this.state.addAnswers({ name: name, value: value })) {
                markActiveElement(_this.$labels, e.target);
                _this.state.$progress.value = getCurrProgress(_this.state);
            }
        };
        this.finishHandler = function (e) {
            if (!_this.state.questions.every(function (_a) {
                var id = _a.id;
                return _this.state.answers[id];
            })) {
                alert("Вы ответили не на все вопросы!!");
                return;
            }
            _this.state.calcRawPoints();
            [_this.state.$finishBtn, _this.state.$clientBtn].forEach(function (btn) { return (btn.disabled = true); });
            [_this.state.$alert, _this.state.$spinner].forEach(function (el) {
                return toggler(el, "visible");
            });
            setTimeout(function () {
                [_this.state.$alert, _this.state.$spinner].forEach(function (el) {
                    return toggler(el, "visible");
                });
                [_this.state.$tableBtn, _this.state.$chartBtn].forEach(function (btn) { return (btn.disabled = false); });
            }, 1400);
        };
        this.$container = document.querySelector(".".concat(sel));
        this.$labels = null;
        this.state = state;
        this.builder(this.state);
    }
    Questions.prototype.builder = function (state) {
        state.observer(this.render.bind(this));
        this.render(state.getPaginatedData(state.questions, state.limit, state.page));
        this.addEventListenerToContainer();
        this.addEventListenerToFinish();
    };
    Questions.prototype.render = function (data) {
        var _this = this;
        var html = data
            .map(function (_a) {
            var q = _a.q, id = _a.id;
            return "\n        <article class=\"question p-3\">\n            <p class=\"h4 mb-4\"> <span class='header-4'> ".concat(id, ". </span> ").concat(q, " </p>\n            <div class=\"form-check d-flex justify-content-start mb-2 rounded-end\">                \n                <label class=\"form-check-label ").concat(_this.state.answers[id] === "yes" ? "active" : "", "\">\n                    <input\n                    class=\"form-check-input\"\n                    type=\"radio\"\n                    name=\"").concat(id, "\"\n                    id=\"").concat(id, "\"\n                    ").concat(_this.state.answers[id] === "yes" ? "checked" : "", "\n                    value=\"yes\"              \n                    />\n                  \u0414\u0410\n                </label>\n            </div>\n            <hr/>\n            <div class=\"form-check d-flex justify-content-start mb-2 rounded-end\">                \n                <label class=\"form-check-label ").concat(_this.state.answers[id] === "no" ? "active" : "", "\">\n                \n                  <input\n                    class=\"form-check-input\"\n                    type=\"radio\"\n                    name=\"").concat(id, "\"\n                    id=\"").concat(id, "\"\n                    ").concat(_this.state.answers[id] === "no" ? "checked" : "", "\n                    value=\"no\"\n                  />\n                  \u041D\u0415\u0422\n                </label>\n            </div>\n        </article>\n        ");
        })
            .join("");
        this.$container.innerHTML = html;
        this.$labels = document.querySelectorAll(".form-check-label");
        if (this.state.page === this.state.questions.length) {
            this.state.$finishBtn.classList.add("visible");
        }
    };
    Questions.prototype.addEventListenerToContainer = function () {
        this.$container.addEventListener("change", this.changeHandler);
    };
    Questions.prototype.addEventListenerToFinish = function () {
        this.state.$finishBtn.addEventListener("click", this.finishHandler);
    };
    return Questions;
}());
export default Questions;

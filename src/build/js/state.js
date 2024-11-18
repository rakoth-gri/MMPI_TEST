import { questions, clientFormElems } from "./data.js";
import { addRawPointsToScales } from "./addRawPointsToScales.js";
import { drawResultTable } from "./drawResultTable.js";
import { drawResultChart } from "./drawResultChart.js";
import { drawAlertWindow } from "./drawAlertWindow.js";
import { toggler, convertToTPoints } from "./utils.js";
import { MMPI_INDEXIS } from "./mmpi_indexes.js";
import ClientForm from "./ClientForm.js";
var state = {
    $progress: document.querySelector(".progress-bar"),
    $progressValue: document.querySelector(".progress-value"),
    $spinner: document.querySelector(".spinner"),
    $prevBtn: document.querySelector("#prev"),
    $nextBtn: document.querySelector("#next"),
    $resetBtn: document.querySelector(".resetBtn"),
    $tableBtn: document.querySelector(".tableBtn"),
    $chartBtn: document.querySelector(".chartBtn"),
    $finishBtn: document.querySelector(".finishBtn"),
    $clientBtn: document.querySelector(".clientBtn"),
    $sex: document.querySelector(".form-select.sex"),
    $chartType: document.querySelector(".form-select.chartType"),
    $alert: document.querySelector(".alert"),
    $modal: document.querySelector(".modal"),
    questions: questions,
    sex: "",
    chartType: "",
    limit: 1,
    page: 1,
    subscribers: [],
    client: {},
    answers: {},
    scales: {
        L: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        F: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        K: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S0: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S1: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S2: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S3: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S4: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S5: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S6: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S7: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S8: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
        S9: {
            yes: [],
            no: [],
            X: 0,
            T: 0,
        },
    },
    scaleWithRawPoints: {},
    addAnswers: function (_a) {
        var value = _a.value, name = _a.name;
        if (!this.sex) {
            alert("Выберите свой пол");
            document
                .querySelectorAll(".form-check-input")
                .forEach(function (i) { return (i.checked = false); });
            return false;
        }
        this.answers[name] = value;
        console.log(this.answers);
        return true;
    },
    changeCurrPage: function (target) {
        var _this = this;
        switch (true) {
            case !!target.closest("#next"):
                if (this.answers[this.page])
                    this.page++;
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
        this.subscribers.forEach(function (cb) {
            return cb(_this.getPaginatedData(_this.questions, _this.limit, _this.page));
        });
        this.$progressValue.textContent = "".concat(this.page, " / ").concat(this.questions.length);
        this.$prevBtn.disabled = this.page > 1 ? false : true;
        this.$nextBtn.disabled = this.page >= this.questions.length ? true : false;
    },
    getPaginatedData: function (data, limit, page) {
        var sliced = limit * (page - 1);
        return data.slice(sliced, sliced + limit);
    },
    getTotalPagesCount: function () {
        return Math.ceil(this.questions.length / this.limit);
    },
    reset: function () {
        var _this = this;
        this.$progress.value = 0;
        this.page = 1;
        this.$prevBtn.disabled = true;
        this.$nextBtn.disabled = false;
        for (var key in this.scales) {
            this.scales[key] = {
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
        [this.$finishBtn, this.$clientBtn].forEach(function (btn) { return (btn.disabled = false); });
        [this.$tableBtn, this.$chartBtn].forEach(function (btn) { return (btn.disabled = true); });
        [this.$sex, this.$chartType].forEach(function (select) { return (select.value = ""); });
        this.showStartProgress();
        this.subscribers.forEach(function (cb) {
            return cb(_this.getPaginatedData(_this.questions, _this.limit, _this.page));
        });
        new ClientForm({
            container: this.$modal,
            list: clientFormElems,
            state: this,
        });
        console.log(this);
    },
    calcRawPoints: function () {
        addRawPointsToScales(this.answers, this.scales, this.sex);
        this.correctRawPoints();
    },
    correctRawPoints: function () {
        var _this = this;
        Object.keys(this.scales).map(function (scale) {
            var _a = _this.scales[scale], yes = _a.yes, no = _a.no;
            _this.scales[scale].X = yes.length + no.length;
        });
        var X_K = this.scales.K.X;
        this.scales.S1.X += X_K * 0.5;
        this.scales.S4.X += X_K * 0.4;
        this.scales.S7.X += X_K;
        this.scales.S8.X += X_K;
        this.scales.S9.X += X_K * 0.2;
        this.calcTPoints();
    },
    calcTPoints: function () {
        var _this = this;
        Object.keys(this.scales).forEach(function (scale) {
            var X = _this.scales[scale].X;
            var S = MMPI_INDEXIS[scale][_this.sex].S;
            var M = MMPI_INDEXIS[scale][_this.sex].M;
            _this.scales[scale].T = convertToTPoints(X, S, M);
        });
        console.log(this.scales);
    },
    showStartProgress: function () {
        this.$progressValue.textContent = "".concat(this.page, " / ").concat(this.questions.length);
    },
    addListenerToResetBtn: function () {
        var _this = this;
        this.$resetBtn.onclick = function () { return _this.reset(); };
        return this;
    },
    addListenerToSexSelect: function () {
        var _this = this;
        this.$sex.onchange = function () {
            _this.sex = _this.$sex.value;
        };
        return this;
    },
    addListenerToChartTypeSelect: function () {
        var _this = this;
        this.$chartType.onchange = function () {
            _this.chartType = _this.$chartType.value;
        };
        return this;
    },
    addListenerToTableBtn: function () {
        var _this = this;
        this.$tableBtn.onclick = function () {
            drawResultTable(_this.$modal, _this.scales, _this.sex, _this.client);
            toggler(_this.$modal, "visible");
        };
        return this;
    },
    addListenerToChartBtn: function () {
        var _this = this;
        this.$chartBtn.onclick = function () {
            drawResultChart(_this.$modal, _this.scales, _this.chartType);
            toggler(_this.$modal, "visible");
        };
        return this;
    },
    addListenerToclientBtn: function () {
        var _this = this;
        this.$clientBtn.onclick = function () {
            new ClientForm({
                container: _this.$modal,
                list: clientFormElems,
                state: _this,
            });
            toggler(_this.$modal, "visible");
        };
        return this;
    },
    addListenerToModal: function () {
        var _this = this;
        this.$modal.onclick = function () {
            toggler(_this.$modal, "visible");
        };
    },
    observer: function (cb) {
        this.subscribers.push(cb);
    },
};
state.showStartProgress();
state
    .addListenerToResetBtn()
    .addListenerToTableBtn()
    .addListenerToChartBtn()
    .addListenerToclientBtn()
    .addListenerToSexSelect()
    .addListenerToChartTypeSelect()
    .addListenerToModal();
new ClientForm({ container: state.$modal, list: clientFormElems, state: state });
export { state };

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var markActiveElement = function (elems, elem) {
    elems.forEach(function (l) { return l.classList.remove("active"); });
    elem.parentElement.classList.add("active");
};
var getCurrProgress = function (state) {
    return (Object.keys(state.answers).length / state.questions.length) * 100;
};
var fillInScale = function (scale, ans, num) {
    return scale[ans].push(num);
};
var toggler = function (el, cls) { return el.classList.toggle(cls); };
var convertToTPoints = function (X, S, M) {
    return +(50 + (10 * (X - M)) / S).toFixed(2);
};
var getInitialFormData = function (l) {
    return l.slice(0, -1).reduce(function (acc, _a) {
        var _b;
        var name = _a.name;
        return (__assign(__assign({}, acc), (_b = {}, _b[name] = "", _b)));
    }, {});
};
export { markActiveElement, getCurrProgress, fillInScale, toggler, convertToTPoints, getInitialFormData, };

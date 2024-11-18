var Pagination = (function () {
    function Pagination(_a) {
        var sel = _a.sel, state = _a.state;
        var _this = this;
        this.clickHandler = function (e) {
            if (e.target instanceof HTMLElement)
                _this.state.changeCurrPage(e.target);
        };
        this.$container = document.querySelector(sel);
        this.state = state;
        this.builder();
    }
    Pagination.prototype.builder = function () {
        this.addEventListenerToContainer();
    };
    Pagination.prototype.addEventListenerToContainer = function () {
        this.$container.addEventListener("click", this.clickHandler);
    };
    return Pagination;
}());
export default Pagination;

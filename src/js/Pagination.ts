class Pagination {
  constructor({ sel, state }) {
    this.$container = document.querySelector(sel);    
    this.state = state;
    this.builder();
  }

  builder() {    
    this.addEventListenerToContainer();
  } 

  //  ! LISTENERS ---------------------------------------------
  clickHandler = (e) => {
    this.state.changeCurrPage(e.target);    
  };

  addEventListenerToContainer() {
    this.$container.addEventListener("click", this.clickHandler);
  }
}

export default Pagination;



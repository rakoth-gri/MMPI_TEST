import { T_STATE } from "./state";

class Pagination {

  $container: HTMLDivElement;
  state: T_STATE

  constructor({ sel, state }: {sel: string, state: T_STATE}) {
    this.$container = document.querySelector(sel) as HTMLDivElement;    
    this.state = state;
    this.builder();
  }

  builder() {    
    this.addEventListenerToContainer();
  } 

  //  ! LISTENERS ---------------------------------------------
  clickHandler = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) this.state.changeCurrPage(e.target);    
  };

  addEventListenerToContainer() {
    this.$container.addEventListener("click", this.clickHandler);
  }
}

export default Pagination;



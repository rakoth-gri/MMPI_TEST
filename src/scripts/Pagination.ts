import { T_State } from "./state";

class Pagination {

  $container: HTMLDivElement;
  state: T_State

  constructor({ sel, state }: {sel: string, state: T_State}) {
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



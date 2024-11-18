import { state } from "./state.js";
// классы ------
import Questions from "./Questions.js";
import Pagination from "./Pagination.js";

new Questions({ sel: "questions-body", state });
new Pagination({ sel: ".questions", state });







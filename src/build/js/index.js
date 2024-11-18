import { state } from "./state.js";
import Questions from "./Questions.js";
import Pagination from "./Pagination.js";
new Questions({ sel: "questions-body", state: state });
new Pagination({ sel: ".questions", state: state });

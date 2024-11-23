import { state } from "./state";
// классы ------
import Questions from "./Questions";
import Pagination from "./Pagination";

import "../sass/style.sass";

new Questions({ sel: "questions-body", state });
new Pagination({ sel: ".questions", state });







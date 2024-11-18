import { fillInScale } from "./utils.js";
// типы
import { T_SCALES_OBJ } from "../types/types";

const yes = "yes";
const no = "no";

const addRawPointsToScales = (
  answers: Record<string, "yes" | "no">,
  scales: T_SCALES_OBJ,
  sex: string
) => {
  const { L, F, K, S1, S2, S3, S4, S5, S6, S7, S8, S9, S0 } = scales;

  for (const id in answers) {
    switch (id) {
      case "1":
        if (answers[id] === yes) {
        } else {
          fillInScale(S5, no, +id);
        }
        break;
      case "2":
        if (answers[id] === yes) {
        } else {
          [S1, S2, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "3":
        if (answers[id] === yes) {
        } else {
          [S1, S3, S7].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "4":
        if (answers[id] === yes) {
          fillInScale(S5, yes, +id);
        } else {
        }
        break;
      case "5":
        if (answers[id] === yes) {
          fillInScale(S2, yes, +id);
        } else {
        }
        break;
      case "6":
        if (answers[id] === yes) {
        } else {
          fillInScale(S3, no, +id);
        }
        break;
      case "7":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "8":
        if (answers[id] === yes) {
        } else {
          [S2, S3, S4, S7, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "9":
        if (answers[id] === yes) {
        } else {
          [S1, S2, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "10":
        if (answers[id] === yes) {
          [S3, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "11":
        if (answers[id] === yes) {
          fillInScale(S9, yes, +id);
        } else {
        }
        break;
      case "12":
        if (answers[id] === yes) {
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "13":
        if (answers[id] === yes) {
          [S2, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "15":
        if (answers[id] === yes) {
          [S6, S7, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "16":
        if (answers[id] === yes) {
          [S4, S6, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "17":
        if (answers[id] === yes) {
        } else {
          [F, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "18":
        if (answers[id] === yes) {
        } else {
          [S1, S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "19":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "20":
        if (answers[id] === yes) {
        } else {
          [F, S4, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "21":
        if (answers[id] === yes) {
          [S4, S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "22":
        if (answers[id] === yes) {
          [S6, S7, S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "23":
        if (answers[id] === yes) {
          [F, S1, S2, S3].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "24":
        if (answers[id] === yes) {
          [S4, S6, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "25":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "26":
        if (answers[id] === yes) {
          if (sex === "man") {
            [S5].forEach((s) => fillInScale(s, yes, +id));
          }
        } else {
          if (sex === "woman") {
            [S5].forEach((s) => fillInScale(s, no, +id));
          }
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "27":
        if (answers[id] === yes) {
          [F, S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "28":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "29":
        if (answers[id] === yes) {
          [S1].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "30":
        if (answers[id] === yes) {
        } else {
          [L, K, S2, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "31":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "32":
        if (answers[id] === yes) {
          [S2, S3, S4, S7, S8, S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "33":
        if (answers[id] === yes) {
          [S4, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "34":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "35":
        if (answers[id] === yes) {
          [F, S4, S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "36":
        if (answers[id] === yes) {
        } else {
          [S2, S7].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "37":
        if (answers[id] === yes) {
        } else {
          [S4, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "38":
        if (answers[id] === yes) {
          [S4, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "39":
        if (answers[id] === yes) {
        } else {
          [K, S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "40":
        if (answers[id] === yes) {
          [F, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "41":
        if (answers[id] === yes) {
          [S2, S7, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "42":
        if (answers[id] === yes) {
          [F, S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "43":
        if (answers[id] === yes) {
          [S1, S2, S3].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "44":
        if (answers[id] === yes) {
          [S3].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "45":
        if (answers[id] === yes) {
        } else {
          [L, S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "46":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "47":
        if (answers[id] === yes) {
          [S3, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "48":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "49":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "50":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "51":
        if (answers[id] === yes) {
        } else {
          [S1, S2, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "52":
        if (answers[id] === yes) {
          [S2, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "53":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "54":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "55":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "56":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "57":
        if (answers[id] === yes) {
        } else {
          [S2, S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "58":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "59":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "60":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "61":
        if (answers[id] === yes) {
          [S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "62":
        if (answers[id] === yes) {
          [S1].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "63":
        if (answers[id] === yes) {
        } else {
          [S1].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "64":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "65":
        if (answers[id] === yes) {
        } else {
          [F, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "67":
        if (answers[id] === yes) {
          [S2, S4, S7, S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "68":
        if (answers[id] === yes) {
        } else {
          [S1].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "69":
        if (answers[id] === yes) {
          if (sex === "man") [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
          if (sex === "woman") [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "70":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "71":
        if (answers[id] === yes) {
        } else {
          [K, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "72":
        if (answers[id] === yes) {
          [S1].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "73":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "74":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "75":
        if (answers[id] === yes) {
        } else {
          [L, F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "76":
        if (answers[id] === yes) {
          [S3, S7, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "77":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "78":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "79":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "80":
        if (answers[id] === yes) {
        } else {
          [S2, S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "81":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "82":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "83":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "84":
        if (answers[id] === yes) {
          [S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "85":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "86":
        if (answers[id] === yes) {
          [S2, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "87":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "88":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "89":
        if (answers[id] === yes) {
        } else {
          [K, S2, S3, S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "90":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "91":
        if (answers[id] === yes) {
        } else {
          [S0, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "92":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "93":
        if (answers[id] === yes) {
        } else {
          [S3, S6].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "94":
        if (answers[id] === yes) {
          [S4, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "95":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "96":
        if (answers[id] === yes) {
          [K].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "97":
        if (answers[id] === yes) {
          [S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "98":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "99":
        if (answers[id] === yes) {
        } else {
          [S0, S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "100":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "101":
        if (answers[id] === yes) {
        } else {
          [S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "102":
        if (answers[id] === yes) {
          [S4, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "103":
        if (answers[id] === yes) {
        } else {
          [S1, S3, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "104":
        if (answers[id] === yes) {
          [S2, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "105":
        if (answers[id] === yes) {
        } else {
          [L, S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "106":
        if (answers[id] === yes) {
          [S7, S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "107":
        if (answers[id] === yes) {
        } else {
          [S2, S3, S4, S6].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "108":
        if (answers[id] === yes) {
          [S1].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "109":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S3, S6].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "110":
        if (answers[id] === yes) {
          [S4, S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "111":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S6, S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "112":
        if (answers[id] === yes) {
        } else {
          [F, S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "113":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "114":
        if (answers[id] === yes) {
          [S1, S3].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "115":
        if (answers[id] === yes) {
        } else {
          [F, S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "116":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "117":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S5, S6].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "118":
        if (answers[id] === yes) {
          [S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "119":
        if (answers[id] === yes) {
        } else {
          [S8, S9, S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "120":
        if (answers[id] === yes) {
        } else {
          [L, S5, S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "121":
        if (answers[id] === yes) {
          [S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "122":
        if (answers[id] === yes) {
        } else {
          [S2, S7].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "123":
        if (answers[id] === yes) {
          [S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "124":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [K, S3, S6].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "125":
        if (answers[id] === yes) {
          [S1].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "126":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "127":
        if (answers[id] === yes) {
          [S4, S6, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "128":
        if (answers[id] === yes) {
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "129":
        if (answers[id] === yes) {
        } else {
          [K, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "130":
        if (answers[id] === yes) {
          [S2].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S1].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "131":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "132":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "133":
        if (answers[id] === yes) {
          if (sex === "woman") [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
          if (sex === "man") [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "134":
        if (answers[id] === yes) {
          [S5, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [K, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "135":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "136":
        if (answers[id] === yes) {
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "137":
        if (answers[id] === yes) {
        } else {
          [S3, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "138":
        if (answers[id] === yes) {
          [S0, S2].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [K].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "139":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "140":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "141":
        if (answers[id] === yes) {
        } else {
          [S3, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "142":
        if (answers[id] === yes) {
          [S2, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [K].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "143":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "144":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "146":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "147":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "148":
        if (answers[id] === yes) {
        } else {
          [K, S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "149":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "150":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "151":
        if (answers[id] === yes) {
          [S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "152":
        if (answers[id] === yes) {
        } else {
          [S2, S7].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "153":
        if (answers[id] === yes) {
        } else {
          [S1, S2, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "154":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "155":
        if (answers[id] === yes) {
        } else {
          [S1, S2, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "156":
        if (answers[id] === yes) {
          [F, S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "157":
        if (answers[id] === yes) {
          [S6, S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "158":
        if (answers[id] === yes) {
          [S2, S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "159":
        if (answers[id] === yes) {
          [S2, S7, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "160":
        if (answers[id] === yes) {
        } else {
          [K, S2, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "161":
        if (answers[id] === yes) {
          [S1].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "162":
        if (answers[id] === yes) {
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "163":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "164":
        if (answers[id] === yes) {
        } else {
          [F, S7].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "165":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "166":
        if (answers[id] === yes) {
        } else {
          [S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "167":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "169":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "170":
        if (answers[id] === yes) {
        } else {
          [K, S3, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "171":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [K, S4, S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "172":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "173":
        if (answers[id] === yes) {
        } else {
          [S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "174":
        if (answers[id] === yes) {
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "175":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "176":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "177":
        if (answers[id] === yes) {
        } else {
          [F, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "178":
        if (answers[id] === yes) {
        } else {
          [S2, S7, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "179":
        if (answers[id] === yes) {
          if (sex === "man") {
            [S5].forEach((s) => fillInScale(s, yes, +id));
          }
          [S3, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
          if (sex === "woman") [S5].forEach((s) => fillInScale(s, yes, +id));
        }
        break;
      case "180":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [K, S3, S4, S9].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "181":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "182":
        if (answers[id] === yes) {
          [S2, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "183":
        if (answers[id] === yes) {
        } else {
          [K, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "185":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "186":
        if (answers[id] === yes) {
          [S3].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "187":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "188":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "189":
        if (answers[id] === yes) {
          [S1, S2, S3, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "190":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "191":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "192":
        if (answers[id] === yes) {
        } else {
          [S1, S3, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "193":
        if (answers[id] === yes) {
          [S2].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "194":
        if (answers[id] === yes) {
          [S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "195":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "196":
        if (answers[id] === yes) {
        } else {
          [F, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "198":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "199":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "201":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S3, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "202":
        if (answers[id] === yes) {
          [F, S6, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "203":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "204":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "206":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "207":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "208":
        if (answers[id] === yes) {
        } else {
          [S2, S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "209":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "210":
        if (answers[id] === yes) {
          [F, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "211":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "212":
        if (answers[id] === yes) {
          [S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "213":
        if (answers[id] === yes) {
        } else {
          [S3, S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "214":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "215":
        if (answers[id] === yes) {
          [S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "216":
        if (answers[id] === yes) {
          [S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "217":
        if (answers[id] === yes) {
          [S5, S7].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [K].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "218":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "219":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "220":
        if (answers[id] === yes) {
        } else {
          [F, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "221":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "222":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "223":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "224":
        if (answers[id] === yes) {
          [S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "225":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "226":
        if (answers[id] === yes) {
          [S5, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "227":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "228":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "229":
        if (answers[id] === yes) {
        } else {
          [S5, S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "230":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "231":
        if (answers[id] === yes) {
          if (sex === "man") [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S0, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "232":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "233":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "234":
        if (answers[id] === yes) {
        } else {
          [K, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "235":
        if (answers[id] === yes) {
        } else {
          [S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "236":
        if (answers[id] === yes) {
          [S0, S2].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "237":
        if (answers[id] === yes) {
        } else {
          [S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "238":
        if (answers[id] === yes) {
          [S3, S7, S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "239":
        if (answers[id] === yes) {
          [S5, S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "240":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "241":
        if (answers[id] === yes) {
          [S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "242":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "243":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "244":
        if (answers[id] === yes) {
          [S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "245":
        if (answers[id] === yes) {
          [F, S4].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "246":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "247":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "248":
        if (answers[id] === yes) {
        } else {
          [S2, S4].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "249":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "250":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "251":
        if (answers[id] === yes) {
          [S8, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "252":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "254":
        if (answers[id] === yes) {
        } else {
          [S0, S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "255":
        if (answers[id] === yes) {
        } else {
          [L].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "256":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "257":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "258":
        if (answers[id] === yes) {
        } else {
          [F].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "259":
        if (answers[id] === yes) {
          [S2, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "260":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "261":
        if (answers[id] === yes) {
          [S5].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "262":
        if (answers[id] === yes) {
        } else {
          [S5, S0].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "263":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "264":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "265":
        if (answers[id] === yes) {
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "266":
        if (answers[id] === yes) {
          [S7, S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "267":
        if (answers[id] === yes) {
          [S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S9, S4, S3, K].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "268":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S6].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "269":
        if (answers[id] === yes) {
          [F].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "270":
        if (answers[id] === yes) {
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "271":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S2].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "272":
        if (answers[id] === yes) {
        } else {
          [F, S2, K].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "273":
        if (answers[id] === yes) {
          [S1, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "274":
        if (answers[id] === yes) {
        } else {
          [S1, S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "275":
        if (answers[id] === yes) {
          [S6].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "276":
        if (answers[id] === yes) {
        } else {
          [F, S8].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "277":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "278":
        if (answers[id] === yes) {
          [S5, S0].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      case "279":
        if (answers[id] === yes) {
          [S9].forEach((s) => fillInScale(s, yes, +id));
        } else {
          [S3].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "280":
        if (answers[id] === yes) {
        } else {
          [S5].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "281":
        if (answers[id] === yes) {
        } else {
          [S0, S8, S6, S1].forEach((s) => fillInScale(s, no, +id));
        }
        break;
      case "282":
        if (answers[id] === yes) {
          [S5, S8].forEach((s) => fillInScale(s, yes, +id));
        } else {
        }
        break;
      default:
        console.warn(
          `The question with ${id} is not included in the algorythm!`
        );
    }
  }
};

export { addRawPointsToScales };

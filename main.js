import { keyInSelect } from "readline-sync";
// import { funktion1, funktion2, funktion3, funktion4 } from "./functions";
import { detect } from "langdetect";

const abfrage = 

//gibt die benutzte Sprache wieder
const result = detect("This is a test.");
console.log(result[0]["lang"]);

// const obj = {
//   key: 'value',
//   foo: 'bar',
// };

// console.log(obj.key); // Gibt den Wert 'value' aus
// console.log(obj['foo']); // Gibt den Wert 'bar' aus

// const method = keyInSelect(
//   ["Spracherkennung", "Option2", "Option3", "Option4"],
//   "Was möchtest du mit deinem Text machen? # "
// );

// switch (method) {
//   case 0:
//     sprachErkennung();
//     break;

//   case 1:
//     funktion2();
//     break;

//   case 2:
//     funktion3();
//     break;

//   case 3:
//     funktion4();
//     break;

//   case -1:
//     break;

//   default:
//     console.log("Err");
//     break;
// }

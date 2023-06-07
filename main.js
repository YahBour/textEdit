import { keyInSelect } from "readline-sync";
import { sprachErkennung, farbeAendern } from "./functions.js";

console.log("TEXTEDITOR ");

const auswahl = keyInSelect(
  ["Spracherkennung", "Text Farbe aendern", "Option3", "Option4"],
  "Was moechtest du mit deinem Text machen? "
);

switch (auswahl) {
  case 0:
    sprachErkennung();
    break;
  case 1:
    farbeAendern();
    break;

  // case 2:
  //   // funktion3();
  //   break;

  // case 3:
  //   // funktion4();
  //   break;

  case -1:
    break;

  default:
    console.log("Err");
    break;
}

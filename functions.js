import { keyInSelect, question } from "readline-sync";
import { detect } from "langdetect";
import chalk from "chalk";

//gibt die benutzte Sprache aus z.B. en usw.
export const sprachErkennung = () => {
  const sprache = question("Gib einen Text ein: ");
  const result = detect(sprache);
  console.log(result[0].lang);
};

// Auswahl um die Farbe vom Text zu ändern

export const farbeAendern = () => {
  const text = question("Gib einen Text ein: ");

  const colors = ["Rot", "Gruen", "Blau", "Gelb"];
  const index = keyInSelect(colors, "Waehle eine Farbe aus: ");

  const result = detect(text);

  if (index !== -1) {
    let coloredText = "";
    switch (index) {
      case 0:
        coloredText = chalk.red(text);
        break;
      case 1:
        coloredText = chalk.green(text);
        break;
      case 2:
        coloredText = chalk.blue(text);
        break;
      case 3:
        coloredText = chalk.yellow(text);
        break;
      default:
        coloredText = text;
    }

    console.log("Farbiger Text:", coloredText);
  } else {
    console.log("Keine Farbe ausgewählt.");
  }
  console.log(
    "der Text wurde in der Sprache: " + result[0].lang + " geschrieben"
  );
};

// export const funktion3 = () =>{

// };

// export const funktion4 = () =>{

// };

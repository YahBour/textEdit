import { keyInSelect, keyInYN, question, questionInt } from "readline-sync";
import { detect } from "languagedetect";

// Funktio läss nur deutch zu
export const sprachErkennung = () => {
  const sprache = question("Option. Erkennen der Sprache. > ");
  xxxx(() => {}).catch((err) => {
    console.log(err);
  });
};

export const funktion2 = () => {};
export const funktion3 = () => {};
export const funktion4 = () => {};

________________________________________________________________________________________________________;
export const imgMirror = () => {
  const path = question("Wähle dein Bild (Pfad: './test.png') # ");
  const hr = keyInYN("Möchtest du Horizontal spiegeln? # ");
  const vr = keyInYN("Möchtest du Vertical spiegeln? # ");
  const savePath = question("Wo möchtest du dein Bild gespeichert haben? # ");

  read(path)
    .then((imageObject) => {
      return imageObject.mirror(hr, vr).write(savePath);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const imgGreyscale = () => {
  const path = question("Wähle dein Bild (Pfad: './test.png') # ");
  const savePath = question("Wo möchtest du dein Bild gespeichert haben? # ");
  read(path)
    .then((imageObject) => {
      return imageObject.greyscale().write(savePath);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const imgSephia = () => {
  const path = question("Wähle dein Bild (Pfad: './test.png') # ");
  const savePath = question("Wo möchtest du dein Bild gespeichert haben? # ");
  read(path)
    .then((imageObject) => {
      return imageObject.sepia().write(savePath);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const imgPixelate = () => {
  let y = 0;
  let x = 0;
  const path = question("Wähle dein Bild (Pfad: './test.png') # ");
  const size = questionInt("Wie groß sollen die Pixel sein? # ");
  const fullPicture = keyInYN("Möchtest du das ganze Bild pixeln? # ");

  if (!fullPicture) {
    y = questionInt("Wie ist deine Y Coordinate? # ");
    x = questionInt("Wie ist deine X Coordinate? # ");
  }
  const savePath = question("Wo möchtest du dein Bild gespeichert haben? # ");
  read(path)
    .then((imageObject) => {
      return imageObject.pixelate(size, y, x, 300, 300).write(savePath);
    })
    .catch((err) => {
      console.log(err);
    });
};

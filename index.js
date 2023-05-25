const textColor = document.querySelector(".textColor");
const textColorInput = document.querySelector(".cpText");
const textColorCode = document.querySelector(".labelText");

textColorInput.addEventListener("input", () => {
  textColor.style.color = textColorInput.value;
  textColorCode.innerHTML = textColorInput.value;
});

const colorBgInput = document.querySelector(".cpBg");
const colorBg = document.querySelector(".body-container");
const bgColorCode = document.querySelector(".bgColorCode");

colorBgInput.addEventListener("input", () => {
  colorBg.style.backgroundColor = colorBgInput.value;
  bgColorCode.innerHTML = colorBgInput.value;
});

const colorPrimaryInput = document.querySelector(".cpPrimaryPicker");
const colorPrimary = document.querySelector(".buttonColor");
const colorPrimary2 = document.querySelector(".buttonColor2");
const colorPrimary3 = document.querySelector(".buttonColor3");

const primaryColorCode = document.querySelector(".labelPrimary");

colorPrimaryInput.addEventListener("input", () => {
  colorPrimary.style.backgroundColor = colorPrimaryInput.value;
  colorPrimary2.style.backgroundColor = colorPrimaryInput.value;
  colorPrimary3.style.backgroundColor = colorPrimaryInput.value;
  primaryColorCode.innerHTML = colorPrimaryInput.value;
});

const colorSecondary = document.querySelector(".secondary-color");
const colorSecondary2 = document.querySelector(".secondary-color2");
const colorSecondary3 = document.querySelector(".secondary-color3");
const colorSecondaryInput = document.querySelector(".cpSecondary");
const secondaryInputCode = document.querySelector(".secondaryInputCode");
colorSecondaryInput.addEventListener("input", () => {
  colorSecondary.style.backgroundColor = colorSecondaryInput.value;
  colorSecondary2.style.backgroundColor = colorSecondaryInput.value;
  colorSecondary3.style.backgroundColor = colorSecondaryInput.value;
  secondaryInputCode.innerHTML = colorSecondaryInput.value;
});

const colorAccentInput = document.querySelector(".cpAccent");
const accentCode = document.querySelector(".accentCode");
const accentColor = document.querySelector(".accentColor");
const accentColor2 = document.querySelector(".accentColor2");
const accentColor3 = document.querySelector(".accentColor3");

colorAccentInput.addEventListener("input", () => {
  accentColor.style.backgroundColor = colorAccentInput.value;
  accentColor2.style.backgroundColor = colorAccentInput.value;
  accentColor3.style.backgroundColor = colorAccentInput.value;
  accentCode.innerHTML = colorAccentInput.value;
});


const inpEl = document.querySelector("#font-size-control");
const outputSize = document.querySelector("#text");


inpEl.addEventListener("input", (element) => {
  const valInput = element.target.value;
  outputSize.style.fontSize =`${valInput}px`;
  return outputSize.style.fontSize;
});
const rangeField = document.querySelector("#range-field"),
  rangeInput = document.querySelector(".range-input"),
  resultField = document.querySelector("#result-field"),
  numberInput = document.querySelector(".number-input"),
  gameResult = document.querySelector(".result");

function handleRangeInput() {
  const rangeNum = rangeInput.value;
  numberInput.setAttribute("max", rangeNum);
}

rangeField.addEventListener("input", handleRangeInput);

function preventSubmit(event) {
  event.preventDefault();
  const rangeNum = rangeInput.value;
  const chooseNum = numberInput.value;
  const randomNum = Math.floor(Math.random() * rangeNum + 1);
  Result(chooseNum, randomNum);
}

resultField.addEventListener("submit", preventSubmit);

function Result(chooseNum, randomNum) {
  if (parseInt(chooseNum) === randomNum) {
    gameResult.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nCongratulations!🎉 You Win!😎`;
  } else {
    gameResult.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nOMG..😥 You lost...`;
  }
}

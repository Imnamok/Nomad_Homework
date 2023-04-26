// js에서 html과 연결할 요소들 정리
const rangeField = document.querySelector("#range-field"),
  rangeInput = document.querySelector(".range-input"),
  resultField = document.querySelector("#result-field"),
  numberInput = document.querySelector(".number-input"),
  gameResult = document.querySelector(".result");

// 최대 범위 지정
function handleRangeInput() {
  const rangeNum = rangeInput.value;
  numberInput.setAttribute("max", rangeNum);
}

rangeField.addEventListener("input", handleRangeInput);

// submit의 기본 기능 억제 + 플레이어가 선택한 숫자 지정 + 기계의 난수 생성
function preventSubmit(event) {
  event.preventDefault();
  const rangeNum = rangeInput.value;
  const chooseNum = numberInput.value;
  const randomNum = Math.floor(Math.random() * rangeNum + 1);
  Result(chooseNum, randomNum);
}

resultField.addEventListener("submit", preventSubmit);

// 승패 결과 텍스트로 출력
function Result(chooseNum, randomNum) {
  if (parseInt(chooseNum) === randomNum) {
    gameResult.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nCongratulations!🎉 You Win!😎`;
  } else {
    gameResult.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nOMG..😥 You lost...`;
  }
}

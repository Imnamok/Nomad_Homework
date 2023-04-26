const clockTitle = document.querySelector(".js-clock"); // html 요소와 연결

function getDday() {
  const dday = new Date("2023-12-25T00:00:00"); // D-day 설정
  const today = new Date(); // 오늘 날짜
  const gap = dday - today; // 이렇게만 하면 차이가 밀리세컨드로만 나오기 때문에 아래의 작업이 필요하다. Ex) 23242421324

  const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0"); // 차이에서 일을 나눈 것 + Math.floor를 통해 소수점을 없애고 버림을 함.

  const hour = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(2, "0"); // 위와 동일 24시간이기 때문에 모듈러(나머지) 계산

  const minute = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0"); // 위와 동일 60분이기 때문에 모듈러(나머지) 계산

  const second = String(Math.floor((gap / 1000) % 60)).padStart(2, "0"); // 위와 동일

  clockTitle.innerText = `${day}일 ${hour}시 ${minute}분 ${second}초`; // 남은 디데이 출력
}

getDday(); // 딜레이를 없애기 위해 바로 실행해주는 기능
setInterval(getDday, 1000); // 초단위로 D-day 적용

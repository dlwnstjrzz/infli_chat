function getCurrentDateTime() {
  const now = new Date();

  // 월과 일이 한 자리 수일 경우 앞에 0을 붙여줍니다.
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  // 시와 분이 한 자리 수일 경우 앞에 0을 붙여줍니다.
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // 포맷에 맞춰 문자열을 생성합니다.
  const formattedDateTime = `${month}/${day} ${hours}:${minutes}`;

  return formattedDateTime;
}

// 예시: 현재 날짜와 시간을 콘솔에 출력
console.log(getCurrentDateTime());

export default getCurrentDateTime;

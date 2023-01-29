const clock = document.querySelector("h2#clock");                   //HTML에서 h2태그 안에 clock이라는 id의 태그를 가져와 clock 변수에 대입

function getClock() {                                               //시간을 가져오는 함수
    const date = new Date();                                        //현재 일자를 가져와 date에 대입
    const hours = String(date.getHours()).padStart(2, "0");         //현재 '시'를 가져와 한글자이면 앞에 0을 삽입해 두글자 형태로 만들어 hours 변수에 대입
    const minutes = String(date.getMinutes()).padStart(2, "0");     //현재 '분'을 가져와 한글자이면 앞에 0을 삽입해 두글자 형태로 만들어 minutes 변수에 대입
    const seconds = String(date.getSeconds()).padStart(2, "0");     //현재 '초'를 가져와 한글자이면 앞에 0을 삽입해 두글자 형태로 만들어 seconds 변수에 대입
    clock.innerText = `${hours}:${minutes}:${seconds}`;             //clock에 현재 시간을 텍스트 형태로 입력
}

getClock();                     //시간을 가져오는 함수를 바로 호출
setInterval(getClock, 1000);    //1초마다 업데이트
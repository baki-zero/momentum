const loginForm = document.querySelector("#login-form");            //HTML에서 id가 login-form인 태그를 가져와 loginForm에 대입
const loginInput = document.querySelector("#login-form input");     //HTML에서 id가 login-form 안에 input인 태그를 가져와 loginInput에 대입
const greeting = document.querySelector("#greeting");               //HTML에서 id가 greeting인 태그를 가져와 greeting에 대입

const HIDDEN_CLASSNAME = "hidden";                                  //hidden이라는 문자열을 HIDDEN_CLASSNAME라는 전역변수로 선언
const USERNAME_KEY = "username";                                    //username이라는 문자열을 USERNAME_KEY라는 전역변수로 선언

function onLoginSubmit(event) {                                     //로그인을 할 때 submit 하는 이벤트에 관한 함수
    event.preventDefault();                                         //이벤트가 일어날 때 새로고침 되는 것을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);                      //loginForm의 클래스 'hidden'을 추가
    const username = loginInput.value;                              //username 변수에 사용자가 입력한 값을 대입
    localStorage.setItem(USERNAME_KEY, username);                   //localstorage에 username이라는 키에 사용자가 입력한 값을 저장
    paintGreetings(username);                                       //사용자에게 입력받은 값을 매개변수로 하여 paintGreetings 함수 호출
    
}

function paintGreetings(username) {                                 //인사말을 호출하는 함수
    greeting.innerText = `Hello ${username}`;                       //greeting 안에 텍스트로 Hello + (사용자에게 입력받은 값) 대입
    greeting.classList.remove(HIDDEN_CLASSNAME);                    //greeting 클래스 중에 'hidden'이라는 클래스 삭제 (사용자에게 이제 보임)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);           //savedUsername 변수에 localStorage에 저장되어 있는 키 값을 가져옴

if(savedUsername === null) {                                        //만약 savedUsername가 비어있다면 (로그인 되어 있지 않은 상태)
    loginForm.classList.remove(HIDDEN_CLASSNAME);                   //lgoinForm에 'hidden' 클래스를 지운다. (로그인 input 태그가 사용자에게 보임)
    loginForm.addEventListener("submit", onLoginSubmit);            //loginForm에 'submit' 이벤트가 발생하면 onLoginSubmit 험수 호출
} else {                                                            //savedUsername에 값이 존재한다면 (로그인이 되어 있는 상태)
    paintGreetings(savedUsername);                                  //paintGreetings 함수를 호출 (로그인된 username을 매개변수로 ) - savedUsername
}
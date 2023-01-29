const toDoForm = document.getElementById("todo-form");  //html에서 id가 todo-form인 태그를 가져온다.
const toDoInput = toDoForm.querySelector("input");      //html에서 todo-form의 input 태그를 가져온다.
const toDoList = document.getElementById("todo-list");  //html에서 id가 todo-list인 태그를 가져온다.

const toDos = [];

function saveToDos() {                                      //toDos 배열의 내용을 localStorage에 넣는 함수
    localStorage.setItem("todos", JSON.stringify(toDos));   //todos 라는 키에다 toDos의 값을 배열의 형태로 localStorage에 저장
}

function deleteToDo(event) {                            //event를 매개변수로 받아 todo를 삭제하는 함수
    const li = event.target.parentElement;              //event의 목표물의 부모 태그를 li 변수에 저장(button 클릭 시 부모 태그인 li 가져옴)
    li.remove();                                        //부모 태그 삭제(button을 누르면 해당 todo만 삭제됨)
}

function paintToDo(newTodo) {                           //todo를 출력하는 함수
    const li = document.createElement("li");            //html에 li 태그 생성
    const span = document.createElement("span");        //html에 span 태그 생성
    span.innerText = newTodo;                           //사용자가 입력한 todo를 저장한 newTodo를 span 태그 안 text에 입력
    const button = document.createElement("button");    //html에 button 태그 생성
    button.innerText = "?";                            //button에 x 이모지 입력
    button.addEventListener("click", deleteToDo);       //버튼에 click 이벤트 생성 후, click 이벤트 발생시 deleteToDo 함수 실행
    li.appendChild(span);                               //li 태그 하위에 span 태그 추가
    li.appendChild(button);                             //li 태그 하위에 button 태그 추가
    toDoList.appendChild(li);                           //toDoList 태그 하위에 li 태그 추가
}

function handleToDoSubmit(event) {                      //todo를 submit할 때 다루는 함수
    event.preventDefault();                             //submit 할 때 새로고침되는 행동을 막는다.
    const newTodo = toDoInput.value;                    //사용자가 입력한 todo를 저장
    toDoInput.value = "";                               //toDoInput 값을 초기화
    toDos.push(newTodo);                                //toDos 배열에 사용자가 입력한 todo(newTodo) 추가
    paintToDo(newTodo);                                 //newTodo 출력하는 함수 호출
    saveToDos();                                        //toDo들 (배열) 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);  //toDoForm에 submit 이벤트 리스너 추가 후, 이벤트 발생시 handleToDoSubmit 함수 실행

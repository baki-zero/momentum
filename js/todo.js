const toDoForm = document.getElementById("todo-form");  //html���� id�� todo-form�� �±׸� �����´�.
const toDoInput = toDoForm.querySelector("input");      //html���� todo-form�� input �±׸� �����´�.
const toDoList = document.getElementById("todo-list");  //html���� id�� todo-list�� �±׸� �����´�.

const toDos = [];

function saveToDos() {                                      //toDos �迭�� ������ localStorage�� �ִ� �Լ�
    localStorage.setItem("todos", JSON.stringify(toDos));   //todos ��� Ű���� toDos�� ���� �迭�� ���·� localStorage�� ����
}

function deleteToDo(event) {                            //event�� �Ű������� �޾� todo�� �����ϴ� �Լ�
    const li = event.target.parentElement;              //event�� ��ǥ���� �θ� �±׸� li ������ ����(button Ŭ�� �� �θ� �±��� li ������)
    li.remove();                                        //�θ� �±� ����(button�� ������ �ش� todo�� ������)
}

function paintToDo(newTodo) {                           //todo�� ����ϴ� �Լ�
    const li = document.createElement("li");            //html�� li �±� ����
    const span = document.createElement("span");        //html�� span �±� ����
    span.innerText = newTodo;                           //����ڰ� �Է��� todo�� ������ newTodo�� span �±� �� text�� �Է�
    const button = document.createElement("button");    //html�� button �±� ����
    button.innerText = "?";                            //button�� x �̸��� �Է�
    button.addEventListener("click", deleteToDo);       //��ư�� click �̺�Ʈ ���� ��, click �̺�Ʈ �߻��� deleteToDo �Լ� ����
    li.appendChild(span);                               //li �±� ������ span �±� �߰�
    li.appendChild(button);                             //li �±� ������ button �±� �߰�
    toDoList.appendChild(li);                           //toDoList �±� ������ li �±� �߰�
}

function handleToDoSubmit(event) {                      //todo�� submit�� �� �ٷ�� �Լ�
    event.preventDefault();                             //submit �� �� ���ΰ�ħ�Ǵ� �ൿ�� ���´�.
    const newTodo = toDoInput.value;                    //����ڰ� �Է��� todo�� ����
    toDoInput.value = "";                               //toDoInput ���� �ʱ�ȭ
    toDos.push(newTodo);                                //toDos �迭�� ����ڰ� �Է��� todo(newTodo) �߰�
    paintToDo(newTodo);                                 //newTodo ����ϴ� �Լ� ȣ��
    saveToDos();                                        //toDo�� (�迭) ����
}

toDoForm.addEventListener("submit", handleToDoSubmit);  //toDoForm�� submit �̺�Ʈ ������ �߰� ��, �̺�Ʈ �߻��� handleToDoSubmit �Լ� ����

const toDoForm = document.getElementById("todo-form");              //html���� id�� todo-form�� �±׸� �����´�.
const toDoInput = toDoForm.querySelector("input");                  //html���� todo-form�� input �±׸� �����´�.
const toDoList = document.getElementById("todo-list");              //html���� id�� todo-list�� �±׸� �����´�.

const TODOS_KEY = "todos";

let toDos = [];                                                     //�Է¹��� toDo�� �迭�� ����

function saveToDos() {                                              //toDos �迭�� ������ localStorage�� �ִ� �Լ�
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));         //todos ��� Ű���� toDos�� ���� �迭�� ���·� localStorage�� ����
}

function deleteToDo(event) {                                        //event�� �Ű������� �޾� todo�� �����ϴ� �Լ�
    const li = event.target.parentElement;                          //event�� ��ǥ���� �θ� �±׸� li ������ ����(button Ŭ�� �� �θ� �±��� li ������)
    li.remove();                                                    //�θ� �±� ����(button�� ������ �ش� todo�� ������)
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));      //toDo.id�� li.id(����ڰ� ���� ��ư id)�� �ٸ� ������ �����. (toDo�� toDos DB�� �ִ� ��� �� �ϳ�)
    saveToDos();
}

function paintToDo(newTodo) {                                       //todo�� ����ϴ� �Լ�
    const li = document.createElement("li");                        //html�� li �±� ����
    li.id = newTodo.id;                                             //li �±��� id�� �Ű������� ���� newTodo�� id ���� ����
    const span = document.createElement("span");                    //html�� span �±� ����
    span.innerText = newTodo.text;                                  //����ڰ� �Է��� todo�� ������ newTodo�� span �±� �� text�� �Է�
    const button = document.createElement("button");                //html�� button �±� ����
    button.innerText = "?";                                         //button�� x �̸��� �Է�
    button.addEventListener("click", deleteToDo);                   //��ư�� click �̺�Ʈ ���� ��, click �̺�Ʈ �߻��� deleteToDo �Լ� ����
    li.appendChild(span);                                           //li �±� ������ span �±� �߰�
    li.appendChild(button);                                         //li �±� ������ button �±� �߰�
    toDoList.appendChild(li);                                       //toDoList �±� ������ li �±� �߰�
}

function handleToDoSubmit(event) {                                  //todo�� submit�� �� �ٷ�� �Լ�
    event.preventDefault();                                         //submit �� �� ���ΰ�ħ�Ǵ� �ൿ�� ���´�.
    const newTodo = toDoInput.value;                                //����ڰ� �Է��� todo�� ����
    toDoInput.value = "";                                           //toDoInput ���� �ʱ�ȭ
    const newTodoObj = {                                            //todo�� Date.now()�Լ��� �̿��� id �ο� �� object�� ����
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);                                         //toDos �迭�� object �߰�
    paintToDo(newTodoObj);                              
    saveToDos();                                                    //toDo�� (�迭) ����
}

toDoForm.addEventListener("submit", handleToDoSubmit);              //toDoForm�� submit �̺�Ʈ ������ �߰� ��, �̺�Ʈ �߻��� handleToDoSubmit �Լ� ����

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {                                           //���� savedToDos�� null�� �ƴ϶��
    const parsedToDos = JSON.parse(savedToDos);                     //parsedToDos�� savedToDos�� �迭�� ��ȯ���� ����
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
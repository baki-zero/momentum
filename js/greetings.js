const loginForm = document.querySelector("#login-form");            //HTML���� id�� login-form�� �±׸� ������ loginForm�� ����
const loginInput = document.querySelector("#login-form input");     //HTML���� id�� login-form �ȿ� input�� �±׸� ������ loginInput�� ����
const greeting = document.querySelector("#greeting");               //HTML���� id�� greeting�� �±׸� ������ greeting�� ����

const HIDDEN_CLASSNAME = "hidden";                                  //hidden�̶�� ���ڿ��� HIDDEN_CLASSNAME��� ���������� ����
const USERNAME_KEY = "username";                                    //username�̶�� ���ڿ��� USERNAME_KEY��� ���������� ����

function onLoginSubmit(event) {                                     //�α����� �� �� submit �ϴ� �̺�Ʈ�� ���� �Լ�
    event.preventDefault();                                         //�̺�Ʈ�� �Ͼ �� ���ΰ�ħ �Ǵ� ���� ����
    loginForm.classList.add(HIDDEN_CLASSNAME);                      //loginForm�� Ŭ���� 'hidden'�� �߰�
    const username = loginInput.value;                              //username ������ ����ڰ� �Է��� ���� ����
    localStorage.setItem(USERNAME_KEY, username);                   //localstorage�� username�̶�� Ű�� ����ڰ� �Է��� ���� ����
    paintGreetings(username);                                       //����ڿ��� �Է¹��� ���� �Ű������� �Ͽ� paintGreetings �Լ� ȣ��
    
}

function paintGreetings(username) {                                 //�λ縻�� ȣ���ϴ� �Լ�
    greeting.innerText = `Hello ${username}`;                       //greeting �ȿ� �ؽ�Ʈ�� Hello + (����ڿ��� �Է¹��� ��) ����
    greeting.classList.remove(HIDDEN_CLASSNAME);                    //greeting Ŭ���� �߿� 'hidden'�̶�� Ŭ���� ���� (����ڿ��� ���� ����)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);           //savedUsername ������ localStorage�� ����Ǿ� �ִ� Ű ���� ������

if(savedUsername === null) {                                        //���� savedUsername�� ����ִٸ� (�α��� �Ǿ� ���� ���� ����)
    loginForm.classList.remove(HIDDEN_CLASSNAME);                   //lgoinForm�� 'hidden' Ŭ������ �����. (�α��� input �±װ� ����ڿ��� ����)
    loginForm.addEventListener("submit", onLoginSubmit);            //loginForm�� 'submit' �̺�Ʈ�� �߻��ϸ� onLoginSubmit ��� ȣ��
} else {                                                            //savedUsername�� ���� �����Ѵٸ� (�α����� �Ǿ� �ִ� ����)
    paintGreetings(savedUsername);                                  //paintGreetings �Լ��� ȣ�� (�α��ε� username�� �Ű������� ) - savedUsername
}
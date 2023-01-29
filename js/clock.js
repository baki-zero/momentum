const clock = document.querySelector("h2#clock");                   //HTML���� h2�±� �ȿ� clock�̶�� id�� �±׸� ������ clock ������ ����

function getClock() {                                               //�ð��� �������� �Լ�
    const date = new Date();                                        //���� ���ڸ� ������ date�� ����
    const hours = String(date.getHours()).padStart(2, "0");         //���� '��'�� ������ �ѱ����̸� �տ� 0�� ������ �α��� ���·� ����� hours ������ ����
    const minutes = String(date.getMinutes()).padStart(2, "0");     //���� '��'�� ������ �ѱ����̸� �տ� 0�� ������ �α��� ���·� ����� minutes ������ ����
    const seconds = String(date.getSeconds()).padStart(2, "0");     //���� '��'�� ������ �ѱ����̸� �տ� 0�� ������ �α��� ���·� ����� seconds ������ ����
    clock.innerText = `${hours}:${minutes}:${seconds}`;             //clock�� ���� �ð��� �ؽ�Ʈ ���·� �Է�
}

getClock();                     //�ð��� �������� �Լ��� �ٷ� ȣ��
setInterval(getClock, 1000);    //1�ʸ��� ������Ʈ
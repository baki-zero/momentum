const images = ["0.jpg", "1.jpg", "2.jpg"];     //������� ������ �������� images��� �迭�� �Է�

const chosenImage = images[Math.floor(Math.random()*images.length)];    //���� ���� �ο��� �������� �������� �ٲ�� �ϴ� ���� ����

const bgImage = document.createElement("img");  //HTML�� img��� �±׸� ������ �� bgImage ������ �Է�

bgImage.src = `img/${chosenImage}`;             //bgImage�� src �±׿� �������� ���� ������ �迭�� �� ����

document.body.appendChild(bgImage);             //HTML�� body �±� ������ bgImage�±� ����
bgImage.classList.add("img");                   //bgImage �±��� Ŭ���� img(css)�� ����
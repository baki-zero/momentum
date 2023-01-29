const images = ["0.jpg", "1.jpg", "2.jpg"];     //배경으로 지정할 사진들을 images라는 배열에 입력

const chosenImage = images[Math.floor(Math.random()*images.length)];    //랜덤 값을 부여해 배경사진이 랜덤으로 바뀌도록 하는 변수 선언

const bgImage = document.createElement("img");  //HTML에 img라는 태그를 생성한 후 bgImage 변수에 입력

bgImage.src = `img/${chosenImage}`;             //bgImage의 src 태그에 랜덤으로 넣을 배경사진 배열의 값 지정

document.body.appendChild(bgImage);             //HTML의 body 태그 하위에 bgImage태그 넣음
bgImage.classList.add("img");                   //bgImage 태그의 클래스 img(css)를 넣음
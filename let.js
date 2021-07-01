var name = "global var";

function home() {
  var homevar = "homevar";
  for (var i = 0; i < 100; i++) {
    console.log(i);
  }
}

home();
// 100이 나옴 for문 안에 var란 값을 찾지 못하면
// 함수스코프 안에 있는 var를 찾아서 값이 나오기 때문에
// for문을 전부 거친 100이란 값이 나오게 됨

var name = "global var";

function home() {
  var homevar = "homevar";
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }

  if (true) {
    let myif = "myif";
  }

  console.log(myif);
}

home();
// 참조오류 발생함
// let이란 변수는 사용된 스코프 안에서만 적용되기 때문에
// for문 안에 let 변수가 정의되지 않으면 오류 발생함
// 반대로 해당 스코프를 벗어난 범위에서 let 변수를 불러오려고 해도 오류 발생함

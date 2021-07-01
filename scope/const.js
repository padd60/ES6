function home() {
  var homename = "my house";
  homename = "your house";
  console.log(homename);
}

home();
// your house가 잘 나옴

function home() {
  const homename = "my house";
  homename = "your house";
  console.log(homename);
}

home();
// 반면에 위를 실행시키면 오류가 발생한다.
// const 변수가 재정의, 재할당하지 못하게 하는 것이다.

//정리
//const를 기본으로 사용.
//변경 될 수 있는 변수를 let을 사용한다.
//var 사용은 지양한다.

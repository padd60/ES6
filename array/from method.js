// ES2015 from method = 진짜 배열화

function addMark() {
  let newData = [];

  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }

  console.log(newData);
}

addMark(1, 2, 3, 4, 5);

// arguments란 기본 탑재되어 있는 객체로
// 주어진 인자를 배열모양으로 만들어준다, 배열은 아님

//결과값
//["1!", "2!", "3!", "4!", "5!"]

function addMark() {
  let newArray = Array.from(arguments);
  let newData = arguments.map(function (value) {
    return value + "!";
  });

  console.log(newData);
}

addMark(1, 2, 3, 4, 5);

//결과값
//["1!", "2!", "3!", "4!", "5!"]
// let newArray = Array.from(arguments);
// 위 값이 없다면 arguments는 배열이 아니라 오류가 발생함
// Array.from으로 배열화시켜주면 위 결과가 나옴

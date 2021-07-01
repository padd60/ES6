//spread operator, 펼침연산자

let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);

//결과값
// ["apple", "orange", 100]
// ["apple", "orange", 100]

console.log(pre === newData);
// false
// 복사본으로 아예 다른 참조임
// ...이 뒤에 배열을 펼쳐서 복사해 보여준다라고 생각

let pre = [100, 200, "hello", null];

let newData = [0, 1, 2, 3, ...pre, 4];

console.log(newData);

//결과값
//0,1,2,3,100,200,"hello",null,4]
// 잘 합쳐져 나온다

function sum(a, b, c) {
  return a + b + c;
}

let pre = [100, 200, 300];
//배열 그대로 입력하기 위해서는

console.log(sum.apply(null, pre));
//결과값
// 600

console.log(sum(...arr));
//결과값
// 600

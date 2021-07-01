function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
  console.log(list);
}

home();
// 위 결과를 보면 배열에 값이 추가되는 것을 볼 수 있다.
// 결론 const를 사용하더라도 배열과 오브젝트 값을 변경하는 것이 가능하다.

//immutable array 만들기
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list === list2);
// 위 결과는 false로 나온다.
// 쉽게 말해 복사본의 변경된 배열값을 얻는 것을 말한다.

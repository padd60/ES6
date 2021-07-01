/*
filter, includes, from을 사용해서 문자열'e'가
노드로 구성된 배열을 만들어서 반환하기
*/

function print() {
  let list = document.querySelectorAll("li");
  let listArray = Array.from(list); // li노드로 구성된 배열
  let eArray = listArray.filter((value) => {
    return value.innerText.includes("e");
  });
  return eArray;
}

console.log(print());

// 노드리스트를 from을 사용해서 array로 바꾸고
// filter를 사용해 list에 해당 요소 innerText가
// includes를 통해 포함하고 있는지 확인하고 return을 통해 반환하여 함수를 만족시켜준다.
// 이후 다시 위 내용을 지정해준 변수를 반환하고
// print함수 밖에서 print함수를 출력하면 해당 값들이 잘 나오게 된다.
// 결과값
//(3) [li, li, li]
// 0: li
// 1: li
// 2: li
// length: 3
// __proto__: Array(0)

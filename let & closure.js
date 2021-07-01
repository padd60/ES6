//html 코드가
//<ul>
//<li>jsp</li>
//<li>java</li>
//<li>python</li>
//<li>django</li>
//</ul>
//이렇게 있다면..

var list = document.querySelectorAll("li");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다");
  });
}
// 위를 console에서 실행시켜보면
// 4번째 리스트입니다 만 나오게 된다.
// 이는 closer 특성 때문인데 i값이 참조될때
// for문 밖에 전역변수가 참조되면서 일어나는 현상이다.

var list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다");
  });
}

// 위처럼 let으로 for문 변수를 지정해주면
// 클릭에 따라 0번째, 1번째 등으로 바뀌며 올바르게 출력된다.

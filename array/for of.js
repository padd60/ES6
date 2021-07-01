// 값 순회하여 뽑기

var data = [1, 2, undefined, NaN, null, ""];
for (var i = 0; i < data.length; i++);
{
  console.log(data[i]);
}

//결과값
//1
//2
//undefined
//NaN
//null
//""

var data = [1, 2, undefined, NaN, null, ""];
data.forEach((value) => console.log(value));

//결과값
//1
//2
//undefined
//NaN
//null
//""

var data = [1, 2, undefined, NaN, null, ""];
for (let idx in data) {
  console.log(data[idx]);
}

//결과값
//1
//2
//undefined
//NaN
//null
//""

var data = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function () {};

for (let idx in data) {
  console.log(data[idx]);
}

//결과값
//1
//2
//undefined
//NaN
//null
//""
// function (){}
//그래서 for in은 배열에서 사용 X

var data = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function () {};

for (let value of data) {
  console.log(value);
}

//결과값
//1
//2
//undefined
//NaN
//null
//""
// 중간의 추가값이 나오지 않는다

var str = "hello world!!!!";
for (let value of str) {
  console.log(value);
}

//결과값
//"h"
//"e"
//"l"
//"l"
//"o"
//" "
//"w"
//"o"
//"r"
//"l"
//"d"
//"!"
//"!"
//"!"
//"!"

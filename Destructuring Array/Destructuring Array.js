let data = ["one", "two", "three", "four"];

let 하나 = data[0];
let 셋 = data[2];

console.log(하나, 셋);

// one three

let data = ["one", "two", "three", "four"];
let [하나, , 셋] = data;
console.log(하나, 셋);

// 위와 같은 결과를 가짐
// one three

let news = [
  {
    title: "sbs",
    imgurl: "http:sdascxzcxcz",
    newslist: ["어쩌구 저쩌구", "하하호호", "이러쿵 저러쿵"],
  },
  {
    title: "mbc",
    imgurl: "http:you are the best",
    newslist: ["잘될거야", "행복한 인생", "즐기며 일하는 자"],
  },
];

let [, mbc] = news;
console.log(mbc);

/*
{
  title: 'mbc',
  imgurl: 'http:you are the best',
  newslist: [ '잘될거야', '행복한 인생', '즐기며 일하는 자' ]
}
*/

let [, mbc] = news;
let { title, imgurl } = mbc;
console.log(title, imgurl);

// mbc http:you are the best

let [, { title, imgurl }] = news;
console.log(title, imgurl);

//mbc http:you are the best

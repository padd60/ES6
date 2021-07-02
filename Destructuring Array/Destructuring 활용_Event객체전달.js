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

function getNewsList([, { newslist }]) {
  console.log(newslist);
}

getNewsList(news);
//[ '잘될거야', '행복한 인생', '즐기며 일하는 자' ]

/*
document.querySelector("div").addEventListener("click", function(evt){
    console.log(evt.target);
});

위 내용을 아래와 같이 바꿀수 있다.

document.querySelector("div").addEventListener("click", function({target}){
    console.log(target.tagName);
});
*/

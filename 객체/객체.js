const name = "crong";
const age = 33;

const obj = {
  name: name,
  age: age,
};

console.log(obj);

// { name: 'crong', age: 33 }

function getObj() {
  const name = "crong";

  const getName = function () {
    return name;
  };

  const setName = function (newname) {
    name = newname;
  };

  const printName = function () {
    console.log(name);
  };

  return {
    getName: getName,
    setName: setName,
  };
}

const obj = getObj();

console.log(obj);

//{ getName: [Function: getName], setName: [Function: setName] }

console.log(obj.getName());

function getObj() {
  const name = "crong";

  const getName = function () {
    return name;
  };

  const setName = function (newname) {
    name = newname;
  };

  const printName = function () {
    console.log(name);
  };

  return { getName, setName };
}

const obj = getObj();

console.log(obj.getName());
// crong

function getObj() {
  const name = "crong";

  const getName = function () {
    return name;
  };

  const setName = function (newname) {
    name = newname;
  };

  const printName = function () {
    console.log(name);
  };

  return { getName, setName, name };
}

const obj = getObj();

console.log(obj);
/* 
{
  getName: [Function: getName],
  setName: [Function: setName],
  name: 'crong'
}
*/

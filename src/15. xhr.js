const xhr = new XMLHttpRequest();

xhr.onload = function (res) {};

xhr.onerror = function (err) {
  console.log(err);
};

xhr.open('get', 'http://www.baidu.com');

xhr.send(
  JSON.stringify({
    name: 'ss',
  })
);

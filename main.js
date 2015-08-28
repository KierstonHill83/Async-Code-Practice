var fs = require('fs');


console.log('a');
fs.readFile('file1.txt', function (err, data) {
  console.log('b');
  fs.readFile('file1.txt', function (err, data) {
    console.log('c');
  });
  console.log('d');
});
console.log('e');


fs.readFile('./start.txt', 'utf8', function (err, data) {
  var sentence = "";
  sentence += data;
  console.log(sentence);
    fs.readFile('./next.txt', 'utf8', function (err, data) {
      sentence += data;
      console.log(sentence);
        fs.readFile('./again.txt', 'utf8', function (err, data) {
          sentence += data;
          console.log(sentence);
        });
    });
});

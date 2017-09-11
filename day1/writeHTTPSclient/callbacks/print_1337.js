var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

 function printHTML1337 (html) {
    console.log(html.split("").reverse().join(""));
  }

  getHTML(requestOptions, printHTML1337);
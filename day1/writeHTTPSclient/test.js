var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

 function printHTMLUpperCase (html) {
    console.log(html);
  }

  getHTML(requestOptions, printHTMLUpperCase);
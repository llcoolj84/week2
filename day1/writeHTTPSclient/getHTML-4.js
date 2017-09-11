function getHTML (options, callback) {

  var https = require('https');


  https.get(options, function (response) {

    var buffer = '';
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length + '\n');
      buffer += (data.toString());
    });

    response.on('end', function() {
    console.log('Response stream complete.');
    return callback(buffer);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
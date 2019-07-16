var fs = require('fs');
var express = require('express');
var app = express();
app.get('/get/movie/data', function(req, res) {
    fs.readFile('movieJSN.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        return res.end();
      });
}).listen(8080, function(){
console.log("Application Started on PORT 8080");
});

var express = require("express");
const fs = require('fs');
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendfile("index.html");
});

app.post('/save', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
  var imgtext = req.body.contents; //getting name from ajax post
  var filename = req.body.fname;
  console.log("image contents:\n"+imgtext+"\nname:"+filename);
  outfile=filename+".txt";
  fs.writeFile(outfile, imgtext);


  res.end();
});
app.listen(3000, function() {
  console.log("Started on PORT 3000");
})

var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>Hello there</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats!");
  }
});

var photoLocation = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"

https.get(photoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/myphoto.jpg"));
});

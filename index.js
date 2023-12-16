const http = require("http");
const fs = require("fs");

// Create the server
const server = http.createServer((req, res) => {
  // Create the path variable
  let path = "./sites/";

  // Check what path the user is requesting
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Set header content type
  res.setHeader("Content-Type", "text/html");

  //Send an html file
  fs.readFile(path, (err, data) => {
    //If there is an error, show it into the console
    if (err) {
      console.log(err);
    }

    // Otherwise send the data into the browser requesting it
    else {
      res.write(data);
    }
    // End the response
    res.end();
  });
});

server.listen(8080, () => {
  console.log("listening for requests on port 8080");
});

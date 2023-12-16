const http = require("http");
const fs = require("fs");
const url = require("url");

// Create the server
const server = http.createServer((req, res) => {
  // Create the path variable
  let path = "./sites/";
  const q = url.parse(req.url, true);
  console.log(q);

  // Check what path the user is requesting
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
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

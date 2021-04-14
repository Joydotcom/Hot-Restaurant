const express = require("express"); 
const path = require("path");
const app = express();


var PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log("server is listening")
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });

 
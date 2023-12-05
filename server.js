const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Home.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/Contact.html");
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/Failure.html");
});

app.listen(5000, function () {
  console.log("Port has started on port 5000");
});

let express = require("express");
let path = require("path");

let app = express();
const port = 3000;


app.use(express.static('public'));


// server an index.html page
app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/index.html"));
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/about", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/about-us.html"));
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/contact", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/contact-us.html"));
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/services", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/services.html"));
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});

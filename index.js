const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


app.use("/public", express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static('files'))


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/lrsa", (req, res) => {
  res.render("lrsa.ejs");
});

app.get("/dps", (req, res) => {
  res.render("dps.ejs");
});

app.get("/regulasi", (req, res) => {
  res.render("regulasi.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

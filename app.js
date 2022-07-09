const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const signupRoutes = require("./routes/signup");
const path = require("path");
const app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, '/public')));

app.use(signupRoutes);

app.use((req, res, next) => {
    res.render("404");
})

http.createServer(app).listen(3000);
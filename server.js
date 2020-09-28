var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Parse application body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set Hanadlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(function(req,res,next){
    next();
});

app.use(routes);

//Start our server so it can begin listening to client requests
app.listen(PORT, function() {
    //log server-side when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
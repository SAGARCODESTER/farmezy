const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
let items =["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.get("/",function(req,res){
    let today = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
    let day = today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle : day,newListItems : items});

});

app.post("/",function(req,res){
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems});
});

app.post("/work",function(req,res){
    item = req.body.newItem;
    items.push(workItems);
    res.redirect("/work");
});

app.listen(3000,function(){
    console.log("The server is running on port 3000");
});
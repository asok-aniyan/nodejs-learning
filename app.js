var express = require("express");
var app=express();

var bodyParser=require('body-parser');
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb',extended: false}));


var loginallow=require("./routes/login_allow");
var userdetails=require("./routes/userdetails/userdetails");
//var dbconn=require("./routes/dbconnection/dbconnect");

app.use("/login_allow",loginallow);
app.use("/userdetails/userdetails",userdetails);
//app.use("/dbconnection/dbconnect",dbconn);


app.listen(8000,function(){
	console.log("SERVER STARTED")
});

app.get('/',function(req,res){
	console.log("dsfghjkl")
	res.render('login');
});
/*app.get('/',function(req,res){
  console.log("dirname",__dirname);
  res.sendFile(path.join(__dirname,'/public/dist/index.html'));
})*/

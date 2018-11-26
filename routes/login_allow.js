var express=require('express');
var router=express.Router();
var bodyParser=require('body-parser');
var dbconnect=require('../routes/dbconnection/dbconnect');

router.post('/loginallow',function(req,res){
	console.log("check1")
	var uname=req.body.user_name;
	var pwd=req.body.password;
	console.log("username entered",req.body)
	console.log("username entered",pwd)
	dbconnect.query('select * from user_details',function(err,loginres){
		if(err) throw err;
			console.log("login check",loginres.rows)
		console.log("RESULT SET",loginres);
		//res.render("login");
		res.render('dashboard/dashboard',{
				userlist:loginres.rows
		});


	});
});


module.exports = router; 
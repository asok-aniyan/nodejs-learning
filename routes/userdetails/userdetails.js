var express=require('express');
var router=express.Router();
var bodyParser=require('body-parser');
var dbconnect=require('../../routes/dbconnection/dbconnect');


router.post('/update_user',update_user);

router.post('/delete_user',delete_user);

function update_user(req,res){
	var up_uname=req.body.upuname;
	var slid=req.body.p1;
	console.log("id to be updated",slid)
dbconnect.query('update user_details set username=$1 where slno=$2',[up_uname,slid],function(err,updatedres){
	if(err) throw err;
	console.log("UPDATED RESULT",updatedres)
dbconnect.query('select * from user_details',function(err,loginres){
	res.render('dashboard/dashboard',{
		userlist:loginres.rows
	});

});
});
	
}

function delete_user(req,res){
	console.log("DELETINGGGG")

    var delid=req.body.dp1;
    console.log("user to be deleted",delid)
	dbconnect.query('delete from user_details where slno=$1',[delid],function(err,deletedres){
	if(err) throw err;
	console.log("deleted RESULT",deletedres)
dbconnect.query('select * from user_details',function(err,loginres){
	res.render('dashboard/dashboard',{
		userlist:loginres.rows
	});
});
});
	
}

module.exports=router;


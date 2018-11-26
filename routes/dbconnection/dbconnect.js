var pg=require('pg');




var config = {
user:'postgres',
database:'db_test',//first connection folder
password:'postgres',
host:'192.168.168.8',
port:5432,
max:10000,
idleTimeoutMillis: 30000,
};

var pool = new pg.Pool(config);

pool.connect(function(err, client, done) {
	if(err) {
	   console.log("error in connecting",err)
	}
	done();
});

 module.exports = pool;
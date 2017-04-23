var app = require('express')();

// set up view engine
app.set('view engine', 'ejs');

// root route
app.get('/', function(req,res){
	res.render('landing');
})

// set up server
app.listen(3000, function(){
	console.log("Listening to port 3000!")
})
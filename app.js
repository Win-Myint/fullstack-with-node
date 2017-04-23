var app = require('express')();

// set up view engine
app.set('view engine', 'ejs');

// root route
app.get('/', function(req,res){
	res.render('landing');
})

// campground route
app.get('/campground', function(req,res){
	// static campground data
	var campsdata = [
		{
			name: 'aungnan',
			img: 'https://unsplash.com/search/camp?photo=mzZVGFfMOkA'
		},
		{
			name: 'yangon',
			img: 'https://unsplash.com/search/camp?photo=sK1hW5knKkw'
		}
	];
	
	res.render('campground', {campsdata: campsdata});
})

// set up server
app.listen(3000, function(){
	console.log("Listening to port 3000!")
})
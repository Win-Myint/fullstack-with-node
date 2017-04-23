var app = require('express')();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

// parse incoming request's body into easier interface
// then exposed it to 'req.body'
app.use(bodyParser.urlencoded({extended: true}));

// static campground data
var campsData = [
	{
		name: 'aungnan',
		img: 'https://www.mindmeister.com/images/download/3047364'
	},
	{
		name: 'yangon',
		img: 'http://www.wildnatureimages.com/images%203/060731-346..jpg'
	}
];

// root route
app.get('/', function(req, res){
	res.render('landing');
})

// campgrounds route (get)
app.get('/campgrounds', function(req, res){
	res.render('campground', {campsData: campsData});
})

// campgrounds route (post)
app.post('/campgrounds', function(req, res){
	// get data from form 
	var name = req.body.name;
	var image = req.body.url;
	var newCamp = {name: name, img: image};

	// add to campsdata array
	campsData.push(newCamp);

	// rediret to campgrounds
	res.redirect('/campgrounds');
})

// add new campgrounds route
app.get('/campgrounds/new', function(req, res){
	res.render('new');
})

// set up server
app.listen(3000, function(){
	console.log("Listening to port 3000!")
})
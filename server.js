/* Express is a js module that makes webservers super easy */
var express = require('express');
var app = express();
var PORT = 3000;

// app.get('/', function(request, response) {
// 	response.send("Hello Express!");
// });

/* A variable that basically stores a bunch of function for our middleware. */
var middleware = {
	requireAuthentication: function(request, response, next) {
		console.log("Private route hit");
		next();
	},
	logger: function(request, response, next) {
		console.log("REQUEST:" + request.method + '' + request.originalUrl + " at " + new Date().toString());
		next();
	}
}
/* This is an application middleware. It is applied to all routes in our webapp */
//app.use(middleware.requireAuthentication);
//app.use(middleware.logger);

/* This is an example where middleware is route specific. */
app.get('/about', middleware.requireAuthentication, function(request, response){
	response.send("About us!");
});

/* /about is a route for our webpage. Basically tells us what to emit given a specific route */
// app.get('/about', function(request, response){
// 	response.send("About us!");
// });

/* Includes the public folder in our project */ 
app.use(express.static(__dirname + '/public'));

/* Which port will be emitting our express/node app */
/* app.listen is called when the server first starts */
app.listen(PORT, function() {
	console.log("We have started our express server");
});
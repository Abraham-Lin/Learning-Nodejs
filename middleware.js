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

/* Allows the middleware variable to be avaliable to everything that exports it */
module.exports = middleware;
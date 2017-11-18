var http = require('http');
var url = require('url');

var createRouter = function (port) {
	var api = {};
	var routes = {};
	var methods = ['GET', 'POST', 'OPTIONS'];
	var interceptors = [];

	methods.forEach(function (method) {
		routes[method] = {};
		api[method.toLowerCase()] = function (path, fn) {
			routes[method][path] = fn;
		};
	});

	api.interceptor = function (interceptor) {
		interceptors.push(interceptor);
	};

	var executeInterceptors = function (number, req, res) {
		var interceptor = interceptors[number];
		if (!interceptor) return;
		interceptor(req, res, function () {
			executeInterceptors(++number, req, res);
		});
	};

	var handleBody = function (req, res, next) {
		var body = [];
		req.on('data', function (chunk) {
			body.push(chunk);
		});
		req.on('end', function () {
			req.body = Buffer.concat(body).toString();
			next();
		});
	};

	http.createServer(function (req, res) {
		//console.log(req.url);
		var roatas = url.parse(req.url, true).pathname

		handleBody(req, res, function () {
			executeInterceptors(0, req, res);

			if (!routes[req.method][roatas]) {
				res.statusCode = 404;
				return res.end();
			}
			routes[req.method][roatas](req, res);
		});
	}).listen(port);

	return api;
};

module.exports = createRouter;
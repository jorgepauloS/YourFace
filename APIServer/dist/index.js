'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _rout = require('./rout');

var _rout2 = _interopRequireDefault(_rout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';

_rout2.default.listen(port, ip, function () {
	console.log('Server running on http://%s:%s', ip, port);
});

exports.default = _rout2.default;
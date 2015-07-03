var observable = require('data/observable');
var json = {
	properties: [
		{name: 'Kings Road, 23', thumbnailURL: 'http://lorempixel.com/120/120/city/5'},
		{name: 'Thule Street, 45', thumbnailURL: 'http://lorempixel.com/120/120/city/6'}
	]
};
var model = new observable.Observable(json);
exports.model = model;
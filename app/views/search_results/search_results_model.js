var observable = require('data/observable');
var json = {
	properties: [
		{name: 'Elm Street, 1', thumbnailURL: 'http://lorempixel.com/64/64/city/1'},
		{name: 'Oak Street, 14', thumbnailURL: 'http://lorempixel.com/64/64/city/2'},
		{name: 'Birch Ave, 16', thumbnailURL: 'http://lorempixel.com/64/64/city/3'}
	]
};
var model = new observable.Observable(json);
exports.model = model;
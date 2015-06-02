var observable = require('data/observable');
var json = {
	locations: [
		{name: 'Leeds'},
		{name: 'Southampton'},
		{name: 'Manchester'}
	],
	locationsType: 'Recent Locations'
};
var model = new observable.Observable(json);
exports.model = model;
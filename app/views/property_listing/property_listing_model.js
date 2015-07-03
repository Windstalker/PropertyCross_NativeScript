var observable = require('data/observable');
var json = {
	name: 'Kings Road, 23',
	price: '900.000$',
	fullImageURL: 'http://lorempixel.com/640/480/city/5',
	features: '1 bed 2 rooms',
	description: 'Lorem ipsum dolor sit amet, consectetur' +
		' adipiscing elit. Nam nec pharetra odio, vel posuere ipsum. ' +
		'Quisque ac ipsum sit amet neque auctor rutrum vel id ipsum. ' +
		'Nulla tristique, dolor at egestas elementum, dolor elit placerat massa, quis lacinia ipsum ipsum ut urna. ' +
		'In eros tellus, cursus nec iaculis in, fringilla sit amet metus.'
};
var model = new observable.Observable(json);
exports.model = model;
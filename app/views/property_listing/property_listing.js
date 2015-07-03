var vmModule = require("./property_listing_model");
var viewModule = require("ui/core/view");
var platform = require("platform");
var ImageModule = require("ui/image");

function pageLoaded(args) {
	var page = args.object;
	page.bindingContext = vmModule.model;

	console.log('loaded!');
}

function pageNavigatedTo(args) {
	var page = args.object;
//	page.bindingContext = page.navigationContext;
	console.log('navigated!');
}

exports.pageLoaded = pageLoaded;
exports.pageNavigatedTo = pageNavigatedTo;
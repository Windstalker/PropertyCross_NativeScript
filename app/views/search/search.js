var vmModule = require("./search_model");

function pageLoaded(args) {
	var page = args.object;
	page.bindingContext = vmModule.model;
}

function pageNavigatedTo(args) {
	var page = args.object;
//	page.bindingContext = page.navigationContext;
	console.log('navigated!');
}

exports.pageLoaded = pageLoaded;
exports.pageNavigatedTo = pageNavigatedTo;
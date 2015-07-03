var vmModule = require("./search_model");
var viewModule = require("ui/core/view");
var platform = require("platform");
var frameModule = require("ui/frame");

function pageLoaded(args) {
	var page = args.object;
	page.bindingContext = vmModule.model;

	if (platform.device.os === 'iOS') {
		var list = viewModule.getViewById(page, "locations");
//        list.ios.allowsSelection = false;
	}

	console.log('loaded!');
}

function pageNavigatedTo(args) {
	var page = args.object;
//	page.bindingContext = page.navigationContext;
	console.log('navigated!');
}

function navigateToResults() {
	var topmost = frameModule.topmost();
	var navigationEntry = {
		moduleName: "views/search_results/search_results",
		context: {location: "Selected Location"},
		animated: false
	};
	topmost.navigate(navigationEntry);
}


exports.pageLoaded = pageLoaded;
exports.pageNavigatedTo = pageNavigatedTo;
exports.locationsItemTap = navigateToResults;
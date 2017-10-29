(function(angular){
	'use strict';

	angular.module('iwApp').component('countryDisplay', {
		templateUrl: 'dist/country-display.html',
		bindings: {
			country: '<'
		}
	});
})(window.angular)
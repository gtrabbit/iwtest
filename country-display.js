(function(angular){
	'use strict';

	angular.module('iwApp').component('countryDisplay', {
		templateUrl: 'country-display.html',
		bindings: {
			country: '<'
		}
	});
})(window.angular)
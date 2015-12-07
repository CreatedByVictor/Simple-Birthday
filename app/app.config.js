(function() {
    'use strict';

    angular
        .module('app').config(configuration);
    
	configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$rootScopeProvider'];

	function configuration($stateProvider, $urlRouterProvider, $rootScopeProvider){
		$urlRouterProvider.otherwise('/to/');
		$stateProvider.state('to',{
			url:"/to/{name}",
			templateUrl:'app/templates/birthdayParty.html',
			controller:'birthdayWisherController',
			controllerAs:'vm',
		})
		
	};

})();
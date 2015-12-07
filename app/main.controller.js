(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['birthdayWisherService','$state'];

    /* @ngInject */
    function mainController(birthdayWisherService,$state) {
        var vm = this;
        vm.title = 'mainController';
        vm.state = $state;
        vm.personName = birthdayWisherService.personName;//$state.current.data.name;
        activate();

        ////////////////

        function activate() {
        }
    }
})();
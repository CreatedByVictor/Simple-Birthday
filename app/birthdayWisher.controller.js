(function() {
    'use strict';

    angular
        .module('birthdayWisher')
        .controller('birthdayWisherController', birthdayWisherController);

    birthdayWisherController.$inject = ['birthdayWisherService', '$stateParams'];

    /* @ngInject */
    function birthdayWisherController(birthdayWisherService, $stateParams) {
        var vm = this;
        birthdayWisherService.personName = $stateParams.name;
        vm.personName = $stateParams.name;
        vm.message = birthdayWisherService.wishHappyBirthdayTo($stateParams.name);
        vm.speak = birthdayWisherService.speakBirthdayMessage;

        ////////////////


    }
})();
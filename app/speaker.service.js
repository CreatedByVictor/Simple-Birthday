(function() {
    'use strict';

    angular
        .module('speaker')
        .factory('speakerService', speakerService);

    speakerService.$inject = [];

    /* @ngInject */
    function speakerService() {
        var service = {
            speak: speak
        };
        return service;

        ////////////////

        function speak(message) {
        	console.log("message:",message);
        	responsiveVoice.speak(message);
        }
    }
})();
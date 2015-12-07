(function() {
    'use strict';

    var person = {
        name:"unknown"
    };

    angular
        .module('birthdayWisher')
        .factory('birthdayWisherService', birthdayWisherService);

    birthdayWisherService.$inject = ['speakerService'];

    /* @ngInject */
    function birthdayWisherService(speakerService) {
        var service = {
        	personName:personName(),
            wishHappyBirthdayTo: wishHappyBirthdayTo,
            speakBirthdayMessage:  speakBirthdayMessage
        };
        return service;

        ////////////////

        function personName(){
            return person.name;
        }

        function wishHappyBirthdayTo(_personName, logMessage) {

            person.name = _personName;
            var outputArray = [];

			for(var i = 0; i < 5; i++){
				var output;
				var line = "Happy Birthday";
				var name = person.name || "Someone";

				if (i < 2 || i == 3){
					output = line + " to you,";
				} 
				else if (i == 2){
					output = line + " dear " + name + ".";
				} 
				else {
					output = "(and many more.)";
				}
                outputArray.push(output);
				if (angular.isUndefined(logMessage) || logMessage == true){console.info(output);}
			}

            return outputArray;
        };

        function speakBirthdayMessage(_personName){
            var messageArray = wishHappyBirthdayTo(_personName,false);
            var spokenMessage = ""; 
            messageArray.map(function(line){
                spokenMessage = spokenMessage +" "+ line;
            });
            speakerService.speak(spokenMessage);
        }

    }
})();
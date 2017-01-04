(function(){

    'use strict';

    angular
        .module("app")
        .controller("GuessNumberController", GuessNumberController);

    function GuessNumberController() {
        var vm = this;

        vm.verifyGuess = function() {
            vm.deviation = vm.original - vm.guess;
            vm.noOfTries = vm.noOfTries + 1;
        }
        vm.initializeGame = function() {
            vm.noOfTries = 0;
            vm.original = Math.floor((Math.random() * 1000) + 1);
            vm.guess = null;
            vm.deviation = null;
        }
        vm.initializeGame();
    }

})();

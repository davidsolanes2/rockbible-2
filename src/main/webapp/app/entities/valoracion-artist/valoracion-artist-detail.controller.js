(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionArtistDetailController', ValoracionArtistDetailController);

    ValoracionArtistDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'ValoracionArtist', 'Artist', 'User'];

    function ValoracionArtistDetailController($scope, $rootScope, $stateParams, previousState, entity, ValoracionArtist, Artist, User) {
        var vm = this;

        vm.valoracionArtist = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:valoracionArtistUpdate', function(event, result) {
            vm.valoracionArtist = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

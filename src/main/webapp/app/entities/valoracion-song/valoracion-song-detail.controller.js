(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionSongDetailController', ValoracionSongDetailController);

    ValoracionSongDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'ValoracionSong', 'Song', 'User'];

    function ValoracionSongDetailController($scope, $rootScope, $stateParams, previousState, entity, ValoracionSong, Song, User) {
        var vm = this;

        vm.valoracionSong = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:valoracionSongUpdate', function(event, result) {
            vm.valoracionSong = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
